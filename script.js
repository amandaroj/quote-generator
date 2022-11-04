//DOM variables
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');

let apiQuotes = [];

//show new quote
function newQuote() {
  //pick a random quote from API quotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  quoteText.textContent = quote.text;
  if (quote.text.length > 100) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
}

//get quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //catch error here
  }
}

// //on load
getQuotes();
newQuote();
