////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
///////create callback function thats used when button clicked////////
const getData = () =>{
    var answer = document.getElementById('oName').value;
    var answer = document.getElementById('oPlatform').value;
    console.log(answer);
    var tops = "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/{gamertag}/{platform}" + answer;
    sendHttpRequest('GET', tops);
};
const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) =>{
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/{gamertag}/{platform}");
    xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "3180031b14mshd2c34497d5a9991p182be6jsnf5da9a27785b");
    xhr.onload = () => {
///////////// When browser load parse http req to usable format//////////
            const data = JSON.parse(xhr.response);//converts JSON data to RAW JS Objs & dataTypes
            console.log(data)//JSON Data
//////// Assign diferent parts to pokedex using dom selection/////////
            document.getElementById('info_wins').value = data[0].player.wins;
            document.getElementById('info_kd').value = data[0].player.kd;
            document.getElementById('info_time').value = data[0].player.time;
        }
        //or xhr.addeventlistener('load', function)
        xhr.send();
    })
}
/// add event listener to get button /
getBtn.addEventListener('click', getData);
