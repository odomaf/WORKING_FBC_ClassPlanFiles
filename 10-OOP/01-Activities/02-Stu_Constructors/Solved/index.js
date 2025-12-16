// Constructor function for creating Article objects
function Article(author, headline, content, publishedDate) {
  this.author = author;
  this.headline = headline;
  this.content = content;
  this.publishedDate = publishedDate;

  this.logSummary = function () {
    console.log(`Written by ${this.author} on ${this.publishedDate}`);
  };
}

// Create a new Article object
const article1 = new Article(
  'Alex Rivera',
  'Learning JavaScript OOP',
  'Constructor functions make object creation easier.',
  'March 3, 2024'
);

// Call the method
article1.logSummary();
