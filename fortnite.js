const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

///////create callback function thats used when button clicked////////
const getData = () =>{
    var tops = "https://rapidapi.p.rapidapi.com/graphql/";
	sendHttpRequest('GET', tops);
};


const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) =>{
    console.log(url);
	const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
	xhr.open("POST", "https://rapidapi.p.rapidapi.com/graphql/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-host", "gameforge-fortnite-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "01dbdb2211msh3f1b2285a637d35p1c6eb0jsn6b85b375fd0d");
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    xhr.onload = () => {
///////////// When browser load parse http req to usable format//////////
const data = JSON.stringify({
	"query": "query($gameMode: String!, $platform: String!) {leaderboard(mode: $gameMode, platform: $platform, page: 1) {mode entries {player {id stats( mode:  $gameMode, platform: $platform) {wins losses score }} rank}}}",
	"variables": {
		"gameMode": "solo",
		"platform": "xb1"
	}
});

//////// Assign diferent parts to pokedex using dom selection/////////
            document.getElementById('playerId').value = data[0].data.leaderboard.mode.entries[0].player.id;
			document.getElementById('rank_wins').value = data[0].data.leaderboard.mode.entries[0].player.stats.wins;
			document.getElementById('rank_losses').value = data[0].data.leaderboard.mode.entries[0].player.stats.losses;
			document.getElementById('rank_score').value = data[0].data.leaderboard.mode.entries[0].player.stats.scores;
        }
        //or xhr.addeventlistener('load', function)
        xhr.send();
    })
}

/// add event listener to get button /
getBtn.addEventListener('click', getData);