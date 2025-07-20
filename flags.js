// US States and Territories with their flag information
const US_FLAGS = {
    "Alabama": {
        name: "Alabama",
        colors: ["#FFFFFF", "#DC143C"],
        description: "Red cross on white background",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg"
    },
    "Alaska": {
        name: "Alaska",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with gold Big Dipper and North Star",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg"
    },
    "Arizona": {
        name: "Arizona",
        colors: ["#002868", "#DC143C", "#FFD700", "#FF8C00"],
        description: "Blue bottom, red and gold rays from center star",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg"
    },
    "Arkansas": {
        name: "Arkansas",
        colors: ["#DC143C", "#FFFFFF", "#002868"],
        description: "Red background with white diamond containing blue border and stars",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg"
    },
    "California": {
        name: "California",
        colors: ["#FFFFFF", "#DC143C", "#8B4513", "#228B22"],
        description: "White background with red stripe, brown bear, and green grass",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg"
    },
    "Colorado": {
        name: "Colorado",
        colors: ["#002868", "#FFFFFF", "#DC143C", "#FFD700"],
        description: "Blue and white stripes with red C containing gold circle",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg"
    },
    "Connecticut": {
        name: "Connecticut",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with white shield and banner",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Connecticut.svg"
    },
    "Delaware": {
        name: "Delaware",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with gold diamond containing coat of arms",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Flag_of_Delaware.svg"
    },
    "Florida": {
        name: "Florida",
        colors: ["#FFFFFF", "#DC143C"],
        description: "White background with red diagonal cross and state seal",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg"
    },
    "Georgia": {
        name: "Georgia",
        colors: ["#DC143C", "#FFFFFF", "#002868"],
        description: "Three horizontal stripes with Georgia coat of arms",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Georgia_%28U.S._state%29.svg"
    },
    "Hawaii": {
        name: "Hawaii",
        colors: ["#FFFFFF", "#002868", "#DC143C"],
        description: "Eight horizontal stripes with Union Jack in corner",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg"
    },
    "Idaho": {
        name: "Idaho",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with state seal and gold fringe",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_Idaho.svg"
    },
    "Illinois": {
        name: "Illinois",
        colors: ["#FFFFFF", "#002868"],
        description: "White background with eagle holding banner",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Illinois.svg"
    },
    "Indiana": {
        name: "Indiana",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with gold torch and stars",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg"
    },
    "Iowa": {
        name: "Iowa",
        colors: ["#002868", "#FFFFFF", "#DC143C"],
        description: "Three vertical stripes with eagle holding banner",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Iowa.svg"
    },
    "Kansas": {
        name: "Kansas",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with state seal and sunflower",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Kansas.svg"
    },
    "Kentucky": {
        name: "Kentucky",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with state seal and goldenrod",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Kentucky.svg"
    },
    "Louisiana": {
        name: "Louisiana",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with white pelican and banner",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_Louisiana.svg"
    },
    "Maine": {
        name: "Maine",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with state coat of arms",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Maine.svg"
    },
    "Maryland": {
        name: "Maryland",
        colors: ["#FFD700", "#000000", "#DC143C", "#FFFFFF"],
        description: "Quartered design with Calvert and Crossland arms",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg"
    },
    "Massachusetts": {
        name: "Massachusetts",
        colors: ["#FFFFFF", "#002868"],
        description: "White background with blue shield and Native American",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Massachusetts.svg"
    },
    "Michigan": {
        name: "Michigan",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with state coat of arms",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Michigan.svg"
    },
    "Minnesota": {
        name: "Minnesota",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with state seal",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Minnesota.svg"
    },
    "Mississippi": {
        name: "Mississippi",
        colors: ["#FFD700", "#FFFFFF", "#DC143C", "#002868"],
        description: "Gold magnolia with red, white, and blue canton",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_Mississippi.svg"
    },
    "Missouri": {
        name: "Missouri",
        colors: ["#DC143C", "#FFFFFF", "#002868"],
        description: "Three horizontal stripes with state coat of arms",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Missouri.svg"
    },
    "Montana": {
        name: "Montana",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with state seal and 'Montana'",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Montana.svg"
    },
    "Nebraska": {
        name: "Nebraska",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with state seal in gold and silver",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Nebraska.svg"
    },
    "Nevada": {
        name: "Nevada",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with state name and sagebrush",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Nevada.svg"
    },
    "New Hampshire": {
        name: "New Hampshire",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with state seal",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_New_Hampshire.svg"
    },
    "New Jersey": {
        name: "New Jersey",
        colors: ["#FFD700", "#002868"],
        description: "Buff background with blue shield and horse heads",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_New_Jersey.svg"
    },
    "New Mexico": {
        name: "New Mexico",
        colors: ["#FFD700", "#DC143C"],
        description: "Gold background with red Zia sun symbol",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_New_Mexico.svg"
    },
    "New York": {
        name: "New York",
        colors: ["#002868", "#FFFFFF", "#FFD700"],
        description: "Blue background with state coat of arms",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_New_York.svg"
    },
    "North Carolina": {
        name: "North Carolina",
        colors: ["#DC143C", "#FFFFFF", "#002868"],
        description: "Blue canton with star, red and white stripes",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_North_Carolina.svg"
    },
    "North Dakota": {
        name: "North Dakota",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with eagle holding banner",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_North_Dakota.svg"
    },
    "Ohio": {
        name: "Ohio",
        colors: ["#DC143C", "#FFFFFF", "#002868"],
        description: "Unique pennant shape with blue triangle and red/white stripes",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Ohio.svg"
    },
    "Oklahoma": {
        name: "Oklahoma",
        colors: ["#002868", "#FFD700", "#8B4513"],
        description: "Blue background with Native American shield and peace pipe",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Oklahoma.svg"
    },
    "Oregon": {
        name: "Oregon",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with state shield (different designs on each side)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Oregon.svg"
    },
    "Pennsylvania": {
        name: "Pennsylvania",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with state coat of arms",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Pennsylvania.svg"
    },
    "Rhode Island": {
        name: "Rhode Island",
        colors: ["#FFFFFF", "#FFD700", "#002868"],
        description: "White background with gold anchor and blue ribbon",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg"
    },
    "South Carolina": {
        name: "South Carolina",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with white palmetto tree and crescent",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_South_Carolina.svg"
    },
    "South Dakota": {
        name: "South Dakota",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with state seal",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_South_Dakota.svg"
    },
    "Tennessee": {
        name: "Tennessee",
        colors: ["#DC143C", "#FFFFFF", "#002868"],
        description: "Red background with blue circle containing three white stars",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Tennessee.svg"
    },
    "Texas": {
        name: "Texas",
        colors: ["#002868", "#FFFFFF", "#DC143C"],
        description: "Blue canton with white star, white and red horizontal stripes",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg"
    },
    "Utah": {
        name: "Utah",
        colors: ["#002868", "#FFD700"],
        description: "Blue background with state seal and beehive",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Utah.svg"
    },
    "Vermont": {
        name: "Vermont",
        colors: ["#002868", "#FFFFFF", "#228B22"],
        description: "Blue background with state coat of arms and pine tree",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Vermont.svg"
    },
    "Virginia": {
        name: "Virginia",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with white state seal",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Virginia.svg"
    },
    "Washington": {
        name: "Washington",
        colors: ["#228B22", "#FFD700"],
        description: "Green background with state seal",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Washington.svg"
    },
    "West Virginia": {
        name: "West Virginia",
        colors: ["#FFFFFF", "#002868"],
        description: "White background with blue border and state coat of arms",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_West_Virginia.svg"
    },
    "Wisconsin": {
        name: "Wisconsin",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with state coat of arms and 'Wisconsin'",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_Wisconsin.svg"
    },
    "Wyoming": {
        name: "Wyoming",
        colors: ["#002868", "#FFFFFF", "#DC143C"],
        description: "Blue background with white bison and red border",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Wyoming.svg"
    },
    "Puerto Rico": {
        name: "Puerto Rico",
        colors: ["#DC143C", "#FFFFFF", "#002868"],
        description: "Five horizontal stripes with blue triangle and white star",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg"
    },
    "US Virgin Islands": {
        name: "US Virgin Islands",
        colors: ["#FFFFFF", "#FFD700", "#002868"],
        description: "White background with eagle and shield between V and I",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg"
    },
    "American Samoa": {
        name: "American Samoa",
        colors: ["#DC143C", "#FFFFFF", "#002868"],
        description: "Blue triangle, red and white triangular sections with eagle",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg"
    },
    "Guam": {
        name: "Guam",
        colors: ["#002868", "#DC143C"],
        description: "Blue background with red border and central emblem",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg"
    },
    "Northern Mariana Islands": {
        name: "Northern Mariana Islands",
        colors: ["#002868", "#FFFFFF"],
        description: "Blue background with white star and latte stone",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg"
    },
    "District of Columbia": {
        name: "District of Columbia",
        colors: ["#FFFFFF", "#DC143C"],
        description: "White background with red stripes and three red stars",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_the_District_of_Columbia.svg"
    }
};

// Create a mapping of state names to simplified flag data for the game
const GAME_FLAGS = {};

// Initialize game flags with color patterns for comparison
Object.keys(US_FLAGS).forEach(state => {
    GAME_FLAGS[state] = {
        name: US_FLAGS[state].name,
        colors: US_FLAGS[state].colors,
        description: US_FLAGS[state].description,
        // For this demo, we'll use CSS-generated flags based on primary colors
        // In a full implementation, you'd want actual flag images
        flagElement: createFlagElement(US_FLAGS[state])
    };
});

function createFlagElement(flagData) {
    // Create an image element to display the actual flag
    const flagImg = document.createElement('img');
    flagImg.className = 'flag-image';
    flagImg.crossOrigin = 'anonymous'; // Enable CORS for canvas operations
    flagImg.src = flagData.imageUrl;
    flagImg.alt = `Flag of ${flagData.name}`;
    flagImg.style.width = '100%';
    flagImg.style.height = '100%';
    flagImg.style.objectFit = 'cover';
    flagImg.style.display = 'block';

    // Add error handling in case the image fails to load
    flagImg.onerror = function() {
        console.log('Failed to load image for', flagData.name, 'using fallback');
        // Fallback to CSS gradient if image fails to load
        const fallbackDiv = document.createElement('div');
        fallbackDiv.className = 'generated-flag';
        fallbackDiv.style.width = '100%';
        fallbackDiv.style.height = '100%';

        if (flagData.colors.length >= 2) {
            if (flagData.colors.length === 2) {
                fallbackDiv.style.background = `linear-gradient(45deg, ${flagData.colors[0]} 50%, ${flagData.colors[1]} 50%)`;
            } else if (flagData.colors.length === 3) {
                fallbackDiv.style.background = `linear-gradient(to right, ${flagData.colors[0]} 33%, ${flagData.colors[1]} 33%, ${flagData.colors[1]} 66%, ${flagData.colors[2]} 66%)`;
            } else {
                fallbackDiv.style.background = `linear-gradient(to bottom, ${flagData.colors[0]} 25%, ${flagData.colors[1]} 25%, ${flagData.colors[1]} 50%, ${flagData.colors[2]} 50%, ${flagData.colors[2]} 75%, ${flagData.colors[3]} 75%)`;
            }
        } else {
            fallbackDiv.style.backgroundColor = flagData.colors[0] || '#cccccc';
        }

        // Replace the failed image with the fallback
        this.parentNode.replaceChild(fallbackDiv, this);
    };

    // Add success handler for debugging
    flagImg.onload = function() {
        console.log('Successfully loaded image for', flagData.name);
    };

    return flagImg;
}// Export for use in game.js
window.GAME_FLAGS = GAME_FLAGS;
window.US_FLAGS = US_FLAGS;
