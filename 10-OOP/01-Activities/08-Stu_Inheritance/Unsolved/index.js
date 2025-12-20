// ============================================
// TODO: Implement Class Inheritance (ES6)
// ============================================

// TODO: Create a parent class named ContentItem
// It should accept: author, createdAt
// It should assign both properties using `this`

class ContentItem {
  // TODO: Assign properties here
  constructor(author, createdAt) {
    this.author = author;
    this.dateCreated = createdAt;
  }
}

// TODO: Create a child class named Article that extends ContentItem
// Article should accept: author, headline, createdAt
// It should call super(author, createdAt)
// It should set:
//   - this.headline
//   - this.reactions to an empty array
// It should include a method addReaction(reaction) that pushes into reactions

class Article extends ContentItem {
  constructor(author, headline, createdAt) {
    super(author, createdAt);
    this.headline = headline;
    this.reactions = [];
  }
  addReaction(reaction) {
    this.reactions.push(reaction);
  }
  // TODO: Assign Article-specific properties here
}

// TODO: Create a child class named Reaction that extends ContentItem
// Reaction should accept: author, message, createdAt
// It should call super(author, createdAt)
// It should set:
//   - this.message
class Reaction extends ContentItem {
  constructor(author, message, createdAt) {
    // TODO: Call super() here
    super(author, createdAt);

    // TODO: Assign Reaction-specific properties here
    this.message = message;
  }
}

// TODO: Create a new Article instance and store it in a variable named article
// Use your own custom values
const article = new Article("Anne Odom", "Sheep", "12/20/2023");

// TODO: Create a new Reaction instance and store it in a variable named reaction
// Use your own custom values
const reaction = new Reaction("Boo", "Stinky", "12/25/2023");

article.addReaction(reaction);
// TODO: Log both objects to the console to verify they were instantiated correctly
console.log(article);
console.log(reaction);
