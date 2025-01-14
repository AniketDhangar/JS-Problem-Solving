
// Create a function called `highestRunScorer` that will
// Receive a `2d array` called `playersInfo`
// Based on highest score, return the name of the player

// > Things required

// - Variable
// - If-else
// - Loop
// - Function
// - Array 

function highestRunScorer(playersInfo) {
    let highestScore = 0;
    let highestScorer = '';

    for (let i = 0; i < playersInfo.length; i++) {
        let player = playersInfo[i];
        let playerName = player[0];
        let score = player[1];

        if (score > highestScore) {
            highestScore = score;
            highestScorer = playerName;
        }
    }

    return highestScorer;
}

// Example usage
let players = [
    ["Player1", 120],
    ["Player2", 150],
    ["Player3", 100]
];

console.log(highestRunScorer(players));