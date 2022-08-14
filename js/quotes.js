const quotes = [
  {
    quote:
      "The most basic question is not what is best, but who shall decide what is best.",
    author: "Thomas Sowell",
  },
  {
    quote:
      "It takes considerable knowledge just to realize the exetent of your own ignorance.",
    author: "Thomas Sowell",
  },
  {
    quote:
      "If you are not prepared to use force to defend civilization, then be prepared to accept barbarism.",
    author: "Thomas Sowell",
  },
  {
    quote:
      "Each new generation born is in effect an invasion of civilization by little barbarians, who must be civilized before it is too late.",
    author: "Thomas Sowell",
  },
  {
    quote:
      "Do countries with strong gun control laws have lower murder rates? Only if you cherry-pick the data.",
    author: "Thomas Sowell",
  },
  {
    quote:
      "The least productive people are usually the ones who are most in favor of holding meetings.",
    author: "Thomas Sowell",
  },
  {
    quote:
      "The welfare state is not really about the welfare of the masses. It is about the go of the elites.",
    author: "Thomas Sowell",
  },
  {
    quote: "The real minimum wage is zero, always.",
    author: "Thomas Sowell",
  },
  {
    quote:
      "There are two ways of telling the complete truth - anonymously and posthumously.",
    author: "Thomas Sowell",
  },
  {
    quote:
      "Immigration laws are the only laws that are discussed in terms of how to help people who break them.",
    author: "Thomas Sowell",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
