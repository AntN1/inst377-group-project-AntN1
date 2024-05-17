function fetchquote() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => response.json())
    .then(data => {
        const quotetext = document.getelementbyid('quote-text');
        quotetext.textcontent = data[0];
    })
}
document.addeventlistener('domcontentloaded', fetchquote);