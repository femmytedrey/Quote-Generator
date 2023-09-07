const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const button = document.querySelector(".btn");

const url = "https://api.quotable.io/random";
let getQuote = () =>{
    fetch(url).then(data => data.json())
    .then((item) => {
        console.log(item);
    })
}