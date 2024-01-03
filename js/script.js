const apiUrl = 'https://api.quotable.io/random'; 

async function fetchQuote() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Произошла ошибка:', error);
  }
}

function displayQuote(quote) {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  quoteText.textContent = quote.content;
  quoteAuthor.textContent = quote.author;
}

document.getElementById('new-click-btn').addEventListener('click', async () => {
  const quote = await fetchQuote();
  displayQuote(quote);
});


fetchQuote().then(click => {
  displayQuote(click);
});
