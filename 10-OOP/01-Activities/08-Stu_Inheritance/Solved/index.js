// Base class that defines shared properties for all content
class ContentItem {
  constructor(author, createdAt) {
    this.author = author;
    this.createdAt = createdAt;
  }
}

// Article inherits common properties from ContentItem
class Article extends ContentItem {
  constructor(author, headline, createdAt) {
    super(author, createdAt);
    this.headline = headline;
    this.reactions = [];
  }

  addReaction(reaction) {
    this.reactions.push(reaction);
  }
}

// Reaction inherits common properties from ContentItem
class Reaction extends ContentItem {
  constructor(author, message, createdAt) {
    super(author, createdAt);
    this.message = message;
  }
}

// Create a new Article instance
const article = new Article(
  'Alex',
  'Understanding Class Inheritance',
  '03/22/2024'
);

// Create a new Reaction instance
const reaction = new Reaction(
  'Jamie',
  'This explanation makes inheritance much clearer!',
  '03/23/2024'
);

// Log both objects to verify inheritance
console.log(article);
console.log(reaction);
