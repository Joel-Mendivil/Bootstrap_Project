const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () =>{
    var tops = "rawg-video-games-database.p.rapidapi.com";
    sendHttpRequest('GET', tops);
};


const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://rawg-video-games-database.p.rapidapi.com/games");
    xhr.setRequestHeader("x-rapidapi-host", "rawg-video-games-database.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "01dbdb2211msh3f1b2285a637d35p1c6eb0jsn6b85b375fd0d");
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data)
            document.getElementById('game1').value = data.results[0].name;
            document.getElementById('game2').value = data.results[1].name;
            document.getElementById('game3').value = data.results[2].name;
            document.getElementById('game4').value = data.results[3].name;
            document.getElementById('game5').value = data.results[4].name;
            document.getElementById('game6').value = data.results[5].name;
            document.getElementById('game7').value = data.results[6].name;
            document.getElementById('game8').value = data.results[7].name;
            document.getElementById('game9').value = data.results[8].name;
            document.getElementById('game0').value = data.results[9].name;
        }
        xhr.send();
    })
}
getBtn.addEventListener('click', getData);