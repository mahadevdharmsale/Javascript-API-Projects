const jokecontainer=document.getElementById("joke");
const btn=document.getElementById("btn");

let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
let getJoke=()=>{
    fetch(url)
    .then(data=> data.json())
    .then(value =>{

  jokecontainer.textContent=`${value.joke}`;
    });
}
btn.addEventListener("click",getJoke);
getJoke();