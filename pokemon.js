////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

///////create callback function thats used when button clicked////////
const getData = () =>{
    var tops = "pokemon-go1.p.rapidapi.com";
    sendHttpRequest('GET', tops);
};


const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) =>{
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_names.json");
    xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "3180031b14mshd2c34497d5a9991p182be6jsnf5da9a27785b");
    xhr.onload = () => {
///////////// When browser load parse http req to usable format//////////
            const data = JSON.parse(xhr.response);//converts JSON data to RAW JS Objs & dataTypes
            console.log(data)//JSON Data
//////// Assign diferent parts to pokedex using dom selection/////////
            document.getElementById('info_name').value = data[6].name;
            document.getElementById('info_id').value = data[6].id;

        }
        //or xhr.addeventlistener('load', function)
        xhr.send();
    })
}
/// add event listener to get button /
getBtn.addEventListener('click', getData);