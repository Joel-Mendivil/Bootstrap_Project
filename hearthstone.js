////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

///////create callback function thats used when button clicked////////
const getData = () =>{
    var tops = "omgvamp-hearthstone-v1.p.rapidapi.com";
    sendHttpRequest('GET', tops);
};


const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) =>{
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/");
    xhr.setRequestHeader("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "3180031b14mshd2c34497d5a9991p182be6jsnf5da9a27785b");
    xhr.onload = () => {
///////////// When browser load parse http req to usable format//////////
            const data = JSON.parse(xhr.response);//converts JSON data to RAW JS Objs & dataTypes
            console.log(data)//JSON Data
//////// Assign diferent parts to pokedex using dom selection/////////
            document.getElementById('info_name').value = data.Classic[200].name;
            document.getElementById('info_id').value = data.Classic[200].cardId;
            document.getElementById('info_type').value = data.Classic[200].type;
            document.getElementById('info_health').value = data.Classic[200].health;
        }
        //or xhr.addeventlistener('load', function)
        xhr.send();
    })
}
/// add event listener to get button /
getBtn.addEventListener('click', getData);
