const quotes = [
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
  "So many books, so little time. - Frank Zappa",
  "Be the change that you wish to see in the world. - Mahatma Gandhi",
  "If you tell the truth, you don't have to remember anything. - Mark Twain",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison"
];

function displayRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = randomQuote;
}
