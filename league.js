const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

///////create callback function thats used when button clicked////////
const getData = () =>{
    var tops = "https://rapidapi.p.rapidapi.com/graphql/";
	sendHttpRequest('GET', tops);
};


const sendHttpRequest = (method, url) => {
    var data = null
    const promise = new Promise((resolve, reject) =>{
    console.log(url);
	const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    Access-Control-Allow-Origin: 'https://philippwiddra-piltlib-compendium.p.rapidapi.com/champion/119/';
	xhr.open("GET", "https://philippwiddra-piltlib-compendium.p.rapidapi.com/champion/119/");
    xhr.setRequestHeader("x-rapidapi-host", "philippwiddra-piltlib-compendium.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "01dbdb2211msh3f1b2285a637d35p1c6eb0jsn6b85b375fd0d");
    xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});
    xhr.onload = () => {
//////// Assign diferent parts to pokedex using dom selection/////////
            document.getElementById('playerName').value = data[0]._status.name;
            document.getElementById('titleName').value = data[0]._status.title;
            document.getElementById('roleName').value = data[0]._status.role;
            document.getElementById('quote').value = data[0]._status.quote;
            document.getElementById('authorQuote').value = data[0]._status.quoteAuthor;
        }
        //or xhr.addeventlistener('load', function)
        xhr.send();
    })
}

/// add event listener to get button /
getBtn.addEventListener('click', getData);