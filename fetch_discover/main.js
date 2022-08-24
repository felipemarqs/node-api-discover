const url = "http://localhost:5500/api";

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
};

function getUser(){
    fetch(`${url}/2`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        usarAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser){
    fetch(url,{
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))




}

const newUser = {
    name: "Felipe Marques",
    avatar: "https://avatars.githubusercontent.com/u/106127806?v=4",
    city: "Salvador"
}



getUsers();
getUser();

addUser(newUser);
