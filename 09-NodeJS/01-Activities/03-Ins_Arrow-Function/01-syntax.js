// All of the `buildGreeting` functions are equivalent,
// but they use different syntax styles.

// Function expression
const buildGreeting = function (message, name) {
  return `${message}, ${name}!`;
};

// Arrow function with block body and explicit return
const buildGreeting2 = (message, name) => {
  return `${message}, ${name}!`;
};

// Arrow function with implicit return (no curly braces)
const buildGreeting3 = (message, name) => `${message}, ${name}!`;

// Arrow function with a single parameter (no parentheses needed)
const printGreeting = text => {
  console.log(text);
};

// We call arrow functions the same way as regular functions
const greeting = buildGreeting("Welcome aboard", "Jordan");

// Logs: "Welcome aboard, Jordan!"
printGreeting(greeting);

// Try it out:
// 1. Run this file with `node 01-syntax.js`
// 2. Comment/uncomment the different buildGreeting calls
// 3. See that they all produce the same result