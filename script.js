const players = [
    { name: "LeBron James", image: "lebron.jpg" },
    { name: "Stephen Curry", image: "curry.jpg" },
    // Add more player objects as needed
];

let currentPlayerIndex;

function startGame() {
    currentPlayerIndex = Math.floor(Math.random() * players.length);
    document.getElementById("player-image").src = players[currentPlayerIndex].image;
    document.getElementById("result").innerText = "";
}

function checkGuess() {
    const guess = document.getElementById("guess-input").value.trim().toLowerCase();
    const correctName = players[currentPlayerIndex].name.toLowerCase();
    if (guess === correctName) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Incorrect. Try again.";
    }
}

// Start the game when the page loads
window.onload = startGame;
