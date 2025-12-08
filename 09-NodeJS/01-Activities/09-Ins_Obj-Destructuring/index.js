// Demo: Object & Array Destructuring

// ------------------------------------------------------------
// Sample data
// ------------------------------------------------------------

const characterA = {
  name: "Ahsoka Tano",
  affiliations: ["Jedi Order", "Rebels"],
};

const characterB = {
  name: "Din Djarin",
  affiliations: ["Mandalorians", "Bounty Hunters"],
};


// ------------------------------------------------------------
// Old way (pre-ES6): manually pulling properties off objects
// ------------------------------------------------------------

const oldName = characterA.name;
const oldAffiliations = characterA.affiliations;

console.log("Old way:");
console.log(oldName);
console.log(oldAffiliations);


// ------------------------------------------------------------
// Object destructuring (ES6)
// ------------------------------------------------------------

const { name, affiliations } = characterB;

console.log("\nDestructured values:");
console.log(name);
console.log(affiliations);


// ------------------------------------------------------------
// Renaming properties during destructuring
// ------------------------------------------------------------

const { name: mandoName } = characterB;
console.log("\nRenamed during destructuring:");
console.log(mandoName);


// ------------------------------------------------------------
// Destructuring inside function parameters
// ------------------------------------------------------------

const logCharacter = ({ name, affiliations }) => {
  console.log(
    `${name} is connected to ${affiliations[0]} and ${affiliations[1]}.`
  );
};

console.log("\nLogging via parameter destructuring:");
logCharacter(characterA);


// ------------------------------------------------------------
// Array destructuring
// ------------------------------------------------------------

const planets = ["Tatooine", "Naboo", "Coruscant"];

const [tatooine, naboo, coruscant] = planets;

console.log("\nArray destructuring results:");
console.log(tatooine);
console.log(naboo);
console.log(coruscant);


// ------------------------------------------------------------
// Notes for Live Demo
// ------------------------------------------------------------
// • Object destructuring lets you pull properties directly into variables.
// • Array destructuring assigns values based on position.
// • You can rename destructured properties, give defaults, or destructure in parameters.
// • This pattern helps write cleaner, more expressive functions.
