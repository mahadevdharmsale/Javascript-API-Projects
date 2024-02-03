const quotecontainer = document.getElementById("quote");
const btn = document.getElementById("btn");

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();
    quotecontainer.innerHTML = `${quote.content}<br>- ${quote.author}`; // Use <br> for line break
    // Output the quote and author name
    // console.log(quote.content);
    // console.log(`- ${quote.author}`);
}

btn.addEventListener("click", randomQuote);
randomQuote();
