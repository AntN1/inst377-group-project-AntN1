async function fetchQuote() {
  const api_url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  const res = await fetch(api_url);
  var data = await res.json();
  return data;
}

async function displayQuote() {
  if (window.location.pathname === "/project.html") {
    const data = await fetchQuote();
    const quotetext = document.getElementById("quote-text");
    quotetext.textContent = data[0];
  } else {
    return;
  }
}

displayQuote();
