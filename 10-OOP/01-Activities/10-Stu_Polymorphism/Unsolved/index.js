// TODO: Debug the code so that Reply shows the message when its printMetaData() method is run.

class ContentItem {
  constructor(author, createdAt) {
    this.author = author;
    this.createdAt = createdAt;
  }

  printMetaData() {
    console.log(`Created by ${this.author} on ${this.createdAt}`);
  }
}

class Article extends ContentItem {
  constructor(author, headline, createdAt) {
    super(author, createdAt);
    this.headline = headline;
    this.replies = [];
  }

  addReply(reply) {
    this.replies.push(reply);
  }
}

class Reply extends ContentItem {
  constructor(author, createdAt, message) {
    super(author, createdAt);
    this.message = message;
  }

  // BUG: This override doesn't include the message (it behaves like ContentItem)
  printMetaData() {
    console.log(
      `${this.message} -- Created by ${this.author} on ${this.createdAt}`
    );
  }
}

const article = new Article("Alex", "Understanding Polymorphism", "03/20/2024");
const reply = new Reply("Jamie", "03/21/2024", "This finally makes sense!");

article.printMetaData();
reply.printMetaData();
