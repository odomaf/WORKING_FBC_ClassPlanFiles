// Solution — Object & Array Destructuring

// ------------------------------------------------------------
// 1. Basic Object Destructuring
// ------------------------------------------------------------

const runtime = {
  name: "Node.js",
  category: "JavaScript Runtime",
};

const { name, category } = runtime;

console.log(name);      // "Node.js"
console.log(category);  // "JavaScript Runtime"


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

const { primary, secondary } = languageInfo.tooling.frameworks;

console.log(primary);   // "React"
console.log(secondary); // "Svelte"


// ------------------------------------------------------------
// 3. Array Destructuring
// ------------------------------------------------------------

const coreTechnologies = ["HTML", "CSS", "JavaScript"];

const [markup, styling, scripting] = coreTechnologies;

console.log(markup, styling, scripting); // "HTML CSS JavaScript"
console.log(scripting);                  // "JavaScript"


// ------------------------------------------------------------
// Notes for Demo
// ------------------------------------------------------------
// • Object destructuring pulls out properties directly.
// • Nested destructuring allows drilling into deeply structured objects.
// • Array destructuring assigns based on position.
// • These patterns make code cleaner and easier to read.
