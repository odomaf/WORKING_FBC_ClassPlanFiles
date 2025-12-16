// Class representing a post in an application
class Post {
  constructor(author, title, body, createdAt) {
    this.author = author;
    this.title = title;
    this.body = body;
    this.createdAt = createdAt;
    this.replies = [];
  }

  printMeta() {
    console.log(`Created by ${this.author} on ${this.createdAt}`);
  }

  addReply(reply) {
    this.replies.push(reply);
  }
}

// Class representing a reply to a post
class Reply {
  constructor(author, message, createdAt) {
    this.author = author;
    this.message = message;
    this.createdAt = createdAt;
  }

  printMeta() {
    console.log(
      `Reply from ${this.author} on ${this.createdAt}: "${this.message}"`
    );
  }
}

// Create a reply
const reply = new Reply(
  'Jamie',
  'This explanation really helped!',
  '03/21/2024'
);

// Create a post
const post = new Post(
  'Alex',
  'Understanding JavaScript Classes',
  'Classes help organize related data and behavior.',
  '03/20/2024'
);

// Add the reply to the post
post.addReply(reply);

// Print metadata
post.printMeta();
reply.printMeta();
