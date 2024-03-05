const year = 2019; // Current season year (e.g., 2019 for the Corona season)
const playersEndpoint = `http://data.nba.net/data/10s/prod/v1/${year}/players.json`;

let players = []; // Initialize an empty array to store player data
const numberOfPlayersToShow = 5; // Set the number of players to show

function fetchRandomPlayers() {
    fetch(playersEndpoint)
        .then(response => response.json())
        .then(data => {
            // Extract player data from the API response
            const apiPlayers = data.league.standard;
            
            // Randomly select players from the API data
            players = apiPlayers.sort(() => Math.random() - 0.5).slice(0, numberOfPlayersToShow);
            
            displayPlayers();
        })
        .catch(error => console.error('Error fetching player data:', error));
}

function displayPlayers() {
    const container = document.getElementById('players-container');
    container.innerHTML = ''; // Clear previous players

    players.forEach(player => {
        const playerImageUrl = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;

        const playerElement = document.createElement('div');
        playerElement.classList.add('player');

        const imageElement = document.createElement('img');
        imageElement.src = playerImageUrl;
        imageElement.alt = player.firstName + ' ' + player.lastName;

        playerElement.appendChild(imageElement);
        container.appendChild(playerElement);
    });
}

// Fetch random players when the page loads
fetchRandomPlayers();
