// This demo shows how `this` behaves differently
// with a regular function vs an arrow function inside setTimeout.

const user = {
  username: "codePilot",
  think: function () {
    console.log(`${this.username} is thinking...`);

    // Regular function callback: `this` is NOT the `user` object here
    setTimeout(function () {
      console.log("Regular callback:", this.username);
    }, 200);
  }
};

user.think();
// Logs:
// "codePilot is thinking..."
// "Regular callback: undefined" (in Node, `this` is module.exports)

// Arrow functions do NOT have their own `this` and instead
// capture `this` from the surrounding context.
const user2 = {
  username: "devNavigator",
  think: function () {
    console.log(`${this.username} is thinking...`);

    setTimeout(() => {
      console.log("Arrow callback:", this.username);
    }, 200);
  }
};

user2.think();
// Logs:
// "devNavigator is thinking..."
// "Arrow callback: devNavigator"

// Try it out:
// 1. Run this file with `node 02-context.js`
// 2. Comment out one of the objects at a time
// 3. Ask: "Where is `this` pointing in each callback?"