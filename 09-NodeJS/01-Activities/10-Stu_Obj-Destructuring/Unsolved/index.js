// Unsolved Version — Object & Array Destructuring
// Fill in the destructuring where indicated.

// ------------------------------------------------------------
// 1. Basic Object Destructuring
// ------------------------------------------------------------

const runtime = {
  name: "Node.js",
  category: "JavaScript Runtime",
};

// TODO:
// Destructure values from runtime so that
// name → "Node.js"
// category → "JavaScript Runtime"

// const { ... } = runtime;

console.log(name);
console.log(category);


// ------------------------------------------------------------
// 2. Nested Object Destructuring
// ------------------------------------------------------------

const languageInfo = {
  name: "JavaScript",
  version: "ES2023",
  tooling: {
    frameworks: {
      primary: "React",
      secondary: "Svelte",
    },
    libraries: {
      utility: "Lodash",
      testing: "Jest",
    },
  },
};

// TODO:
// Pull out primary and secondary from the nested frameworks object.

// const { ... } = languageInfo.tooling.frameworks;

console.log(primary);
console.log(secondary);


// ------------------------------------------------------------
// 3. Array Destructuring
// ------------------------------------------------------------

const coreTechnologies = ["HTML", "CSS", "JavaScript"];

// TODO:
// Destructure the array into variables:
// markup = "HTML"
// styling = "CSS"
// scripting = "JavaScript"

// const [ ... ] = coreTechnologies;

console.log(markup, styling, scripting);
console.log(scripting);


// ------------------------------------------------------------
// BONUS (Optional)
// ------------------------------------------------------------
// Try renaming variables while destructuring.
// Example:
// const { name: runtimeName } = runtime;
// console.log(runtimeName);
