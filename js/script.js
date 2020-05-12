/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * establish an array of objects with quotes, sources, and if applicable, citations and years.
***/

const quotes = [
  { 
    quote: 'If it is not right, do not do it, if it is not true, do not say it.',
    source: 'Marcus Aurelius',
    tags: 'philosophy'
  },
  {
    quote: 'As it is not one swallow or a fine day that makes a spring, so it is not one day or a short time that makes a man blessed and happy.',
    source: 'Aristotle'
  },
  {
    quote: 'The simple but hard to follow rule is this: Only borrow money to buy things that go up in value.',
    source: 'Seth Godin',
    citation: 'Linchpin',
    tags: 'finance'
  },
  {
    quote: 'Do not think that what is hard for you to master is humanly impossible; and if it is humanly possible, consider it to be within your reach.',
    source: 'Marcus Aurelius',
    tags: 'philosophy'
  },
  {
    quote: 'When the suggestion comes to you that you cannot do any one thing, declare you can positively, persistently. ...Good, works through you.',
    source: 'Mary Baker Eddy',
    tags: 'spirituality'
  },
  {
    quote: 'Knowledge is in every country the surest basis of public happiness.',
    source: 'George Washington'
  },
  {
   quote: 'Learning is not attained by chance. It must be sought with ardor and attended with diligence.',
   source: 'Abigail Adams',
   year: 1780,
   tags: 'philosophy'
  },
  {
   quote: 'Let everything happen to you / Beauty and terror / Just keep going / No feeling is final',
   source: 'Rainer Maria Rilke',
   tags: 'poetry'
  },
  {
   quote: 'The professional arms himself with patience, not only to give the stars time to realign in his career, but to keep himself from flaming out in each individual work. He knows that any job ... takes twice as long he thinks and costs twice as much. He accepts that. He recognizes it as a reality.',
   source: 'Steven Pressfield',
   citation: 'The War of Art',
   year: 2002
  },
  {
   quote: 'Perseverance and spirit have done wonders in all ages.',
   source: 'George Washington'
  },
  {
   quote: 'Happiness was in the enlargement of one’s being through the life of the mind and of the spirit.',
   source: 'David McCullough',
   citation: 'The American Spirit',
   year: 2017,
   tags: 'philosophy'
  },
  {
   quote: 'I love a good nap. Sometimes it\'s the only thing getting me out of bed in the morning.',
   source: 'George Costanza',
   citation: 'Seinfeld',
   tags: 'humor'
  },
  {
   quote: 'Kids, just because I don\'t care doesn\'t mean I\'m not listening.',
   source: 'Homer Simpson',
   citation: 'The Simpsons',
   tags: 'humor'
  },
  {
   quote: 'Art, freedom and creativity will change society faster than politics. What is extraordinary about contemporary art is the energy - it has our energy. New energy.',
   source: 'Victor Pinchuk'
  },
  {
   quote: 'Roaaaaaaaaarrrrr!!!',
   source: 'Tyrannosaurus Rex',
   year: '6.8e7 years ago',
   tags: 'palentology'
  }
];
// console.log(quotes);

/***
 * `getRandomQuote` function generates a random number from 0 to the length of the array. 
 * This random number is used to grab a quote at the index of the random number.
***/
const getRandomQuote = () => {
 let randomNum = Math.floor(Math.random() * quotes.length);
 return quotes[randomNum];
};
//console.log(getRandomQuote());

/**
 * [`changeHex generates a random hex value`]
 * 
 * @returns {[string]} [a 7 character string that starts with # (${hex}) followed by 6 letters A-F or numbers 1-9]
 */ 
const changeHex = () => {
 // selects the body tag
 const bgColor = document.querySelector('body');
 // an array of the 16 possible hex values
 const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
 let hex = '#';
 // loop through hexValues and concatenate six random values together very similar to the `getRandomQuote` function.
 for(let i = 0; i < 6; i++){
  const random = Math.floor(Math.random() * hexValues.length);
  hex += hexValues[random];
 };
 bgColor.style.backgroundColor = hex;
};


/***
 * `printQuote` function uses the getRandomQuote function to grab specific properties from random objects of the quotes array
 * and then concatenates them into the HTML to display in the DOM
 * It also calls the changeHex() function.
***/
const printQuote = () => {
 changeHex();
 let getQuote = getRandomQuote();
 let quoteHTML = `<p class="quote"> ${getQuote.quote}</p> <p class="source"> ${getQuote.source}`;
  if (getQuote.citation) {
   quoteHTML += `<span class="citation"> ${getQuote.citation}</span>`
  };
  if (getQuote.year) {
   quoteHTML += `<span class="year"> ${getQuote.year}</span>`
  };
  if (getQuote.tags) {
   quoteHTML += `<span class="tags"> (${getQuote.tags})</span>`
  };
  quoteHTML += "</p>";

  return document.getElementById('quote-box').innerHTML = quoteHTML;
 };

/**
 * setInterval repeatedly calls a function
 *
 * @returns {[function]} [calls two functions within itself every 10 seconds]
 */
setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);