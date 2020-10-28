const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

///////create callback function thats used when button clicked////////
const getData = () =>{
    var tops = "https://rawg-video-games-database.p.rapidapi.com/games";
    sendHttpRequest('GET', tops);
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
    xhr.open("GET", "https://rawg-video-games-database.p.rapidapi.com/games");
    xhr.setRequestHeader("x-rapidapi-host", "rawg-video-games-database.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "01dbdb2211msh3f1b2285a637d35p1c6eb0jsn6b85b375fd0d");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "https://rawg-video-games-database.p.rapidapi.com/games");
};


const sendHttpRequest = (method, url) => {
    console.log(url);
    xhr.addEventListener("readystatechange", function () {
    xhr.onload = () => {
        ///////////// When browser load parse http req to usable format//////////
        const data = JSON.parse(xhr.response);
        console.log(data)//JSON Data
//////// Assign diferent parts to pokedex using dom selection/////////
            document.getElementById('game1').innerHTML = data.results[0].name;
            document.getElementById('game2').value = data.results[1].name;
            document.getElementById('game3').value = data.results[2].name;
            document.getElementById('game4').value = data.results[3].name;
            document.getElementById('game5').value = data.results[4].name;
        }
        //or xhr.addeventlistener('load', function)
        xhr.send();
    })
}
/// add event listener to get button /
getBtn.addEventListener('click', getData);