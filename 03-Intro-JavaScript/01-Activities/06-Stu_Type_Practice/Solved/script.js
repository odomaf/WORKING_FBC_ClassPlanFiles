// Imagine this is part of a user profile system for a web app.

const userID = 64;                // number
const userPIN = "656302";         // string
const isVerified = false;         // boolean
const accountStatus = null;       // null (but typeof returns "object" — JS quirk)
let userScore = 64.55;            // number
let greetingMessage = "Howdy!";   // string
let lastLogin;                    // undefined (no value assigned yet)

// 🧠 Insert comments to explain what each console.log() below will log to the console
console.log(typeof userID);          // "number"
console.log(typeof userPIN);         // "string"
console.log(typeof isVerified);      // "boolean"
console.log(typeof accountStatus);   // "object" (special case in JS)
console.log(typeof userScore);       // "number"
console.log(typeof greetingMessage); // "string"
console.log(typeof lastLogin);       // "undefined"

// ⏩ Variables can be reassigned to hold different types
userScore = "Hello!";    // now a string
greetingMessage = false; // now a boolean
lastLogin = 23;          // now a number

// 🧠 Insert comments again to predict the output after reassignment
console.log(typeof userScore);       // "string"
console.log(typeof greetingMessage); // "boolean"
console.log(typeof lastLogin);       // "number"
