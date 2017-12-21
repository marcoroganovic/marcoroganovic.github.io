App.module.define("quote", ["dom"], function(dom) {

  var DELIMITER = "— ";
  var QUOTES = [
    {
      quote: 'Writing is nature\'s way of telling us how lousy our thinking is.',
      author: "Leslie Lamport"
    },
    {
      quote: 'Writing is an exploration. You start from nothing and learn as you go.',
      author: "E. L. Doctorow"
    },
    {
      quote: 'Simplicity is prerequisite for reliability.',
      author: "Edsger Dijkstra"
    },
    {
      quote: 'Perfecting oneself is as much unlearning as it is learning.',
      author: "Edsger Dijkstra"
    },
  ];

  var $blogIntro = dom.$(".blog-intro");
  var $quote = dom.$(".blog-intro em");
  var $author = dom.$(".blog-intro p");

  var randomQuote = Math.round(Math.random() * QUOTES.length - 1);
  var quoteToDisplay = QUOTES[randomQuote];

  $quote.textContent = $quote.textContent.replace("quote", quoteToDisplay.quote);
  $author.textContent = $author.textContent.replace("author", quoteToDisplay.author);

  $blogIntro.style.opacity = "1";
});
