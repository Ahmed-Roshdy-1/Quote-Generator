const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQouteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
// to fetching the data
let data = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

function newQoute() {
  loading();
  const quote = data[Math.floor(Math.random() * data.length)]; // get rondem index of qoute
  // if Author is blank,add 'unknown'
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //Renduce font size for long quotes
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.add("quate");
  }
  quoteText.textContent = quote.text;
  complete();
}

// Get Quote From API
async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    data = await response.json();
    newQoute();
  } catch (error) {
    console.log("There is no quote Fetched", error);
  }
}

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}  __  "${author}"`;
  window.open(twitterUrl, "_blank");
}
// Event Listeners
newQouteBtn.addEventListener("click", newQoute);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuote();
