////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

///////create callback function thats used when button clicked////////
const getData = () =>{
    var answer = document.getElementById('oName').value;
    console.log(answer);
    var tops = "https://rapidapi.p.rapidapi.com/feed/global?page=1" + answer;
	sendHttpRequest('GET', tops);
};

const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) =>{
    console.log(url);
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://rapidapi.p.rapidapi.com/feed/global?page=1");
	xhr.setRequestHeader("x-rapidapi-host", "overtracker1.p.rapidapi.com");
	xhr.setRequestHeader("x-rapidapi-key", "01dbdb2211msh3f1b2285a637d35p1c6eb0jsn6b85b375fd0d");
    xhr.onload = () => {
///////////// When browser load parse http req to usable format//////////
        	const data = JSON.parse(xhr.response);//converts JSON data to RAW JS Objs & dataTypes
        	console.log(data)//JSON Data

//////// Assign diferent parts to pokedex using dom selection/////////
			document.getElementById('info_tag').value = data[1].player.tag;
			document.getElementById('info_platform').value = data[1].player.platform;
			document.getElementById('info_main').value = data[1].main.current;
			document.getElementById('info_role').value = data[1].main.role;
			document.getElementById('info_win').value = data[1].winrate.current;
        }
        //or xhr.addeventlistener('load', function)
        xhr.send();
    })
}

/// add event listener to get button /
getBtn.addEventListener('click', getData);