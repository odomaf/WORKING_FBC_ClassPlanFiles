// TODO: Create a constructor function named 'Article'
// It should accept: author, headline, content, publishedDate
class Article {
  constructor(author, headline, content, publishedDate) {
    // TODO: Assign each parameter to a property using 'this'
    this.author = author;
    this.headline = headline;
    this.content = content;
    this.publishedDate = publishedDate;
  }

  // TODO: Create a method named 'logSummary'
  // It should print: "Written by AUTHOR on DATE"
  logSummary() {
    console.log(
      `${this.headline} written by ${this.author} on ${this.publishedDate}`
    );
  }
}

// TODO: Create a new Article object using your own custom values
const article = new Article(
  "Anne Odom",
  "Article Headline",
  "Article Content",
  "12/15/2025"
);
console.log(article);
// TODO: Call the 'logSummary()' method on your object
article.logSummary(article);
