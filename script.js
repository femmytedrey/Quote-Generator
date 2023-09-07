const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const button = document.querySelector(".btn");
const shareQuoteButton = document.getElementById("share-quote");

const url = "https://api.quotable.io/random";
let getQuote = () =>{
    fetch(url).then(data => data.json())
    .then((item) => {
        console.log(item.content);
        console.log(item.author);
        quote.innerHTML = item.content;
        author.innerHTML = item.author;
    })
};

const shareQuote = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Random Quote',
            text: quote.textContent + ' - ' + author.textContent,
            url: document.URL
        })
        .then(() => console.log('Shared successfully'))
        .catch(error => console.error('Error sharing:', error));
    } else {
        console.log('Web Share API not supported on this device.');
    }
};


button.addEventListener('click', getQuote);
shareQuoteButton.addEventListener('click', shareQuote);

window.addEventListener("load", getQuote());
