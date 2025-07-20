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
        const overlay = document.createElement('div');
        overlay.className = 'guess-flag-overlay';

        // Compare colors between guessed and target flags
        const guessedColors = GAME_FLAGS[guessedState].colors;
        const targetColors = GAME_FLAGS[targetState].colors;

        // Find matching colors
        const matchingColors = guessedColors.filter(color => targetColors.includes(color));

        // Create visual feedback based on color matches
        if (matchingColors.length > 0) {
            // Create green overlay pattern to indicate color matches
            // The pattern intensity could represent the percentage of matching colors
            const matchPercentage = matchingColors.length / Math.max(guessedColors.length, targetColors.length);

            // Create a pattern that shows green where colors match
            overlay.style.background = `repeating-linear-gradient(
                45deg,
                rgba(106, 170, 100, 0.8) 0px,
                rgba(106, 170, 100, 0.8) ${Math.max(5, matchPercentage * 20)}px,
                transparent ${Math.max(5, matchPercentage * 20)}px,
                transparent ${Math.max(10, matchPercentage * 40)}px
            )`;
        } else {
            // No matching colors - show subtle gray pattern
            overlay.style.background = `repeating-linear-gradient(
                45deg,
                rgba(120, 124, 126, 0.3) 0px,
                rgba(120, 124, 126, 0.3) 10px,
                transparent 10px,
                transparent 20px
            )`;
        }

        return overlay;
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
