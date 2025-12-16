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

  // FIX: Override printMetaData() to include Reply-specific state (message)
  printMetaData() {
    console.log(
      `Created by ${this.author} on ${this.createdAt} with "${this.message}"`
    );
  }
}

const article = new Article('Alex', 'Understanding Polymorphism', '03/20/2024');
const reply = new Reply('Jamie', '03/21/2024', 'This finally makes sense!');

article.printMetaData();
reply.printMetaData();
