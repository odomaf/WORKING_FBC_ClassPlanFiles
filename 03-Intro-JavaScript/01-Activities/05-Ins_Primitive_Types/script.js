// JavaScript primitive data types include: undefined, string, number, boolean, and null.

// Undefined variables haven’t been assigned a value yet.
let currentUser;

// Strings are sequences of characters wrapped in quotes.
const welcomeMessage = "Welcome to CodeConnect!";
const userPassword = "Code1234!";

// Numbers can be integers or decimals.
const pointsEarned = 85;
const bonusMultiplier = 1.5;

// Booleans represent true or false values.
const isUserOnline = true;
const isAdmin = false;

// Null represents an intentional absence of value.
// It’s different from undefined — null means “known to be nothing.”
const lastLogin = null;

// Checking the type of data using typeof:
console.log(typeof currentUser);       // undefined
console.log(typeof pointsEarned);      // number
console.log(typeof isUserOnline);      // boolean
console.log(typeof welcomeMessage);    // string
console.log(typeof lastLogin);         // object (quirk of JS — historically labeled as object)

// JavaScript is loosely typed — the type depends on the value, not the variable.
let sessionData = 42;
console.log(typeof sessionData);       // number

sessionData = "active";
console.log(typeof sessionData);       // string
