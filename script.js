let playerGenPicture = document.querySelector('.player-gen-picture');
let guessInput = document.getElementById('guess-input');
let submitGuessButton = document.getElementById('submit-guess');
let correctPlayerFullName = "";

async function generatePlayer() {
    // Fetch player data (you may need to change the source URL)
    const response = await fetch("https://data.nba.net/data/10s/prod/v1/2020/players.json");
    const data = await response.json();

    // Filter out inactive players
    let activePlayers = data.league.standard.filter(player => player.isActive);

    // Select a random active player
    let randomPlayer = activePlayers[Math.floor(Math.random() * activePlayers.length)];

    // Set the correct player's full name
    correctPlayerFullName = `${randomPlayer.firstName} ${randomPlayer.lastName}`;

    // Display the player's image
    let playerId = randomPlayer.personId;
    const image = document.createElement('img');
    const url = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`;
    image.setAttribute('src', url);
    playerGenPicture.appendChild(image);
}

generatePlayer();

submitGuessButton.addEventListener('click', function() {
    let userGuess = guessInput.value.trim();
    if (userGuess.toLowerCase() === correctPlayerFullName.toLowerCase()) {
        alert("Congratulations! Your guess is correct.");
        guessInput.value = ""; // Clear the input field
        playerGenPicture.innerHTML = ""; // Clear the previous player's image
        generatePlayer(); // Generate a new player
    } else {
        alert("Sorry, your guess is incorrect. Try again!");
    }
});
