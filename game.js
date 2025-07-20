class StateFlagleGame {
    constructor() {
        this.currentTarget = null;
        this.guesses = [];
        this.maxGuesses = 6;
        this.gameWon = false;
        this.gameOver = false;

        this.initializeDOM();
        this.populateStateSelect();
        this.startNewGame();
    }

    initializeDOM() {
        this.stateSelect = document.getElementById('stateSelect');
        this.guessBtn = document.getElementById('guessBtn');
        this.guessList = document.getElementById('guessList');
        this.gameStatus = document.getElementById('gameStatus');
        this.newGameBtn = document.getElementById('newGameBtn');
        this.targetFlag = document.getElementById('targetFlag');

        this.guessBtn.addEventListener('click', () => this.makeGuess());
        this.newGameBtn.addEventListener('click', () => this.startNewGame());
        this.stateSelect.addEventListener('change', () => this.updateGuessButton());

        // Allow Enter key to submit guess
        this.stateSelect.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && this.stateSelect.value) {
                this.makeGuess();
            }
        });
    }

    populateStateSelect() {
        const states = Object.keys(GAME_FLAGS).sort();
        this.stateSelect.innerHTML = '<option value="">Select a state or territory...</option>';

        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            this.stateSelect.appendChild(option);
        });
    }

    startNewGame() {
        // Reset game state
        this.guesses = [];
        this.gameWon = false;
        this.gameOver = false;

        // Pick random target
        const states = Object.keys(GAME_FLAGS);
        this.currentTarget = states[Math.floor(Math.random() * states.length)];

        // Reset UI
        this.guessList.innerHTML = '';
        this.gameStatus.textContent = '';
        this.gameStatus.className = '';
        this.stateSelect.value = '';
        this.stateSelect.disabled = false;
        this.updateGuessButton();
        this.newGameBtn.style.display = 'none';

        // Hide target flag
        this.targetFlag.innerHTML = '<div class="flag-placeholder">Flag will be revealed when you win!</div>';

        console.log('New game started. Target:', this.currentTarget); // For debugging
    }

    updateGuessButton() {
        const hasSelection = this.stateSelect.value !== '';
        const alreadyGuessed = this.guesses.some(guess => guess.state === this.stateSelect.value);

        this.guessBtn.disabled = !hasSelection || alreadyGuessed || this.gameOver;

        if (alreadyGuessed && hasSelection) {
            this.guessBtn.textContent = 'Already Guessed';
        } else {
            this.guessBtn.textContent = 'Guess';
        }
    }

    makeGuess() {
        if (this.gameOver || !this.stateSelect.value) return;

        console.log('Making guess:', this.stateSelect.value); // Debug log

        const guessedState = this.stateSelect.value;
        const isCorrect = guessedState === this.currentTarget;

        // Add guess to history
        this.guesses.push({
            state: guessedState,
            correct: isCorrect,
            number: this.guesses.length + 1
        });

        // Create guess display
        this.displayGuess(guessedState, isCorrect, this.guesses.length);

        // Check win condition
        if (isCorrect) {
            this.handleWin();
        } else if (this.guesses.length >= this.maxGuesses) {
            this.handleLoss();
        }

        // Reset selection and update button
        this.stateSelect.value = '';
        this.updateGuessButton();
    }

    displayGuess(guessedState, isCorrect, guessNumber) {
        const guessItem = document.createElement('div');
        guessItem.className = 'guess-item';

        // Create guess number
        const guessNum = document.createElement('div');
        guessNum.className = 'guess-number';
        guessNum.textContent = `${guessNumber}.`;

        // Create flag display
        const flagContainer = document.createElement('div');
        flagContainer.className = 'guess-flag';

        // Clone the flag element for this guess
        const flagElement = GAME_FLAGS[guessedState].flagElement.cloneNode(true);
        flagContainer.appendChild(flagElement);

        // Add color matching overlay if incorrect
        if (!isCorrect) {
            // Create the overlay and add it to the container
            // The overlay will handle its own async loading and comparison
            const overlay = this.createColorMatchOverlay(guessedState, this.currentTarget);
            flagContainer.appendChild(overlay);
        }

        // Create state name
        const stateName = document.createElement('div');
        stateName.className = 'guess-name';
        stateName.textContent = guessedState;

        // Create result indicator
        const result = document.createElement('div');
        result.className = `guess-result ${isCorrect ? 'correct' : 'incorrect'}`;
        result.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';

        // Assemble guess item
        guessItem.appendChild(guessNum);
        guessItem.appendChild(flagContainer);
        guessItem.appendChild(stateName);
        guessItem.appendChild(result);

        // Add to guess list
        this.guessList.appendChild(guessItem);

        // Scroll to show latest guess
        guessItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    createColorMatchOverlay(guessedState, targetState) {
        console.log('Creating pixel-by-pixel overlay for:', guessedState, 'vs', targetState);
        
        // Create a canvas overlay for pixel-by-pixel comparison
        const overlay = document.createElement('canvas');
        overlay.className = 'guess-flag-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';

        // Set canvas size to match the flag container
        const canvasWidth = 80; // Match .guess-flag width
        const canvasHeight = 50; // Match .guess-flag height
        overlay.width = canvasWidth;
        overlay.height = canvasHeight;

        // Get the actual flag images
        const guessedFlagImg = GAME_FLAGS[guessedState].flagElement;
        const targetFlagImg = GAME_FLAGS[targetState].flagElement;

        // Wait for both images to load, then perform pixel comparison
        this.waitForImagesAndCompare(overlay, guessedFlagImg, targetFlagImg, canvasWidth, canvasHeight);

        return overlay;
    }

    waitForImagesAndCompare(canvas, guessedImg, targetImg, width, height) {
        const performComparison = () => {
            try {
                this.comparePixels(canvas, guessedImg, targetImg, width, height);
            } catch (error) {
                console.log('Pixel comparison failed, using fallback pattern:', error);
                // Fallback to simple pattern if pixel comparison fails
                this.createFallbackPattern(canvas);
            }
        };

        // Check if both images are loaded
        if (guessedImg.complete && guessedImg.naturalWidth > 0 && 
            targetImg.complete && targetImg.naturalWidth > 0) {
            performComparison();
        } else {
            // Wait for images to load
            let loadedCount = 0;
            const checkLoaded = () => {
                loadedCount++;
                if (loadedCount === 2) {
                    performComparison();
                }
            };

            if (!guessedImg.complete) {
                guessedImg.onload = checkLoaded;
            } else {
                checkLoaded();
            }

            if (!targetImg.complete) {
                targetImg.onload = checkLoaded;
            } else {
                checkLoaded();
            }

            // Timeout fallback
            setTimeout(() => {
                if (!guessedImg.complete || !targetImg.complete) {
                    console.log('Image loading timeout, using fallback');
                    this.createFallbackPattern(canvas);
                }
            }, 3000);
        }
    }

    comparePixels(canvas, guessedImg, targetImg, width, height) {
        const ctx = canvas.getContext('2d');
        
        // Create temporary canvases for each flag
        const guessedCanvas = document.createElement('canvas');
        const targetCanvas = document.createElement('canvas');
        guessedCanvas.width = targetCanvas.width = width;
        guessedCanvas.height = targetCanvas.height = height;
        
        const guessedCtx = guessedCanvas.getContext('2d');
        const targetCtx = targetCanvas.getContext('2d');
        
        // Draw both flag images to their respective canvases
        guessedCtx.drawImage(guessedImg, 0, 0, width, height);
        targetCtx.drawImage(targetImg, 0, 0, width, height);
        
        // Get pixel data from both canvases
        const guessedData = guessedCtx.getImageData(0, 0, width, height);
        const targetData = targetCtx.getImageData(0, 0, width, height);
        
        // Create overlay image data
        const overlayData = ctx.createImageData(width, height);
        
        // Compare each pixel
        for (let i = 0; i < guessedData.data.length; i += 4) {
            const guessedR = guessedData.data[i];
            const guessedG = guessedData.data[i + 1];
            const guessedB = guessedData.data[i + 2];
            
            const targetR = targetData.data[i];
            const targetG = targetData.data[i + 1];
            const targetB = targetData.data[i + 2];
            
            // Check if colors are similar (within tolerance)
            if (this.colorsAreSimilar(guessedR, guessedG, guessedB, targetR, targetG, targetB)) {
                // Set green color for matching pixels
                overlayData.data[i] = 106;     // Red component (green color)
                overlayData.data[i + 1] = 170; // Green component
                overlayData.data[i + 2] = 100; // Blue component
                overlayData.data[i + 3] = 200; // Alpha (semi-transparent)
            } else {
                // Set transparent for non-matching pixels
                overlayData.data[i] = 0;
                overlayData.data[i + 1] = 0;
                overlayData.data[i + 2] = 0;
                overlayData.data[i + 3] = 0;
            }
        }
        
        // Draw the overlay
        ctx.putImageData(overlayData, 0, 0);
        console.log('Pixel comparison completed successfully');
    }

    colorsAreSimilar(r1, g1, b1, r2, g2, b2) {
        // Convert RGB to HSL for better color comparison
        const hsl1 = this.rgbToHsl(r1, g1, b1);
        const hsl2 = this.rgbToHsl(r2, g2, b2);
        
        // Define tolerance for similarity
        const hueTolerance = 40; // degrees (out of 360) - slightly more lenient
        const satTolerance = 0.4; // percentage (out of 1)
        const lightTolerance = 0.4; // percentage (out of 1)
        
        // Calculate differences
        let hueDiff = Math.abs(hsl1[0] - hsl2[0]);
        // Handle hue wraparound (e.g., 350° and 10° are close)
        if (hueDiff > 180) hueDiff = 360 - hueDiff;
        
        const satDiff = Math.abs(hsl1[1] - hsl2[1]);
        const lightDiff = Math.abs(hsl1[2] - hsl2[2]);
        
        // Special case for very low saturation (near grayscale)
        if (hsl1[1] < 0.15 && hsl2[1] < 0.15) {
            // For grayscale colors, only compare lightness
            return lightDiff < lightTolerance;
        }
        
        // Colors are similar if all components are within tolerance
        return hueDiff < hueTolerance && satDiff < satTolerance && lightDiff < lightTolerance;
    }

    rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        
        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        
        return [h * 360, s, l];
    }

    createFallbackPattern(canvas) {
        // Create a simple pattern as fallback
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(106, 170, 100, 0.6)';
        
        // Create diagonal stripes pattern
        for (let i = 0; i < canvas.width + canvas.height; i += 20) {
            ctx.fillRect(i - canvas.height, 0, 10, canvas.height);
        }
        
        console.log('Using fallback pattern overlay');
    }

    handleWin() {
        this.gameWon = true;
        this.gameOver = true;

        // Show target flag
        this.targetFlag.innerHTML = '';
        const targetFlagElement = GAME_FLAGS[this.currentTarget].flagElement.cloneNode(true);
        this.targetFlag.appendChild(targetFlagElement);

        // Show congratulations based on number of guesses
        let message = '';
        switch (this.guesses.length) {
            case 1:
                message = '🎉 Incredible! You got it on the first try!';
                break;
            case 2:
                message = '🌟 Amazing! You got it in just 2 guesses!';
                break;
            case 3:
                message = '🎯 Great job! You got it in 3 guesses!';
                break;
            case 4:
                message = '👍 Well done! You got it in 4 guesses!';
                break;
            case 5:
                message = '✅ Nice work! You got it in 5 guesses!';
                break;
            case 6:
                message = '🎊 Phew! You got it on the last try!';
                break;
        }

        this.gameStatus.textContent = message;
        this.gameStatus.className = 'win';

        // Disable further guessing
        this.stateSelect.disabled = true;
        this.updateGuessButton();

        // Show play again button
        this.newGameBtn.style.display = 'inline-block';
    }

    handleLoss() {
        this.gameOver = true;

        // Show target flag
        this.targetFlag.innerHTML = '';
        const targetFlagElement = GAME_FLAGS[this.currentTarget].flagElement.cloneNode(true);
        this.targetFlag.appendChild(targetFlagElement);

        // Show loss message
        this.gameStatus.textContent = `😔 Game Over! The correct answer was ${this.currentTarget}.`;
        this.gameStatus.className = 'lose';

        // Disable further guessing
        this.stateSelect.disabled = true;
        this.updateGuessButton();

        // Show play again button
        this.newGameBtn.style.display = 'inline-block';
    }
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new StateFlagleGame();
});
