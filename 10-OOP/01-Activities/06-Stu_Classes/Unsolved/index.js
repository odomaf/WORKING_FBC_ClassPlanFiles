// TODO: Create a class named Post
// It should accept: author, title, body, createdAt
// It should also have a property named replies set to an empty array

//const { createElement } = require("react");

class Post {
  constructor(author, title, body, createdAt) {
    // TODO: Assign properties here
    this.author = author;
    this.title = title;
    this.body = body;
    this.createdDate = createdAt;
    this.replies = [];
  }

  // TODO: Create a method named printMeta()
  // It should log: "Created by AUTHOR on DATE"
  printMeta() {
    console.log(
      `${this.title} created by ${this.author} on ${this.createdDate}`
    );
    console.log(`${this.body}`);
  }

  // TODO: Create a method named addReply()
  // It should add a reply to the replies array
  addReply(reply) {
    this.replies.push(reply);
  }
}

// TODO: Create a class named Reply
// It should accept: author, message, createdAt
class Reply {
  // TODO: Assign properties here1
  constructor(author, message, createdAt) {
    this.author = author;
    this.message = message;
    this.createdDate = createdAt;
  }

  // TODO: Create a method named printMeta()
  // It should log: "Reply from AUTHOR on DATE: \"MESSAGE\""
  printMeta() {
    console.log(
      `Reply from ${this.author} on ${this.createdDate}: \"${this.message}\"`
    );
  }
}

// TODO: Create a new Reply object
const reply1 = new Reply("Bigfoot", "I do not exist", "12/7/2025");
// TODO: Create a new Post object
const post1 = new Post(
  "Moth Man",
  "BIGFOOT EXISTS",
  "I have pictures, and I can share them with you",
  "12/16/2025"
);
// TODO: Add the Reply to the Post using addReply()
post1.addReply(reply1);
// TODO: Call printMeta() for both the Post and the Reply
post1.printMeta();
reply1.printMeta();
console.log("\n", post1);
