// 🌌 Space Explorer Log — Working with Arrays and Strings

const constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
const planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
const star = "polaris";

// 🪐 unshift(): Adds a new constellation to the beginning of the array
constellations.unshift("Canis Major");
console.log("✨ Updated Constellations:", constellations);

// 🌍 pop(): Removes the last planet from the array (Venus)
planets.pop();
console.log("🪐 Remaining Planets:", planets);

// 🌠 concat(): Combines two arrays into a new one (does not change originals)
const galaxyCatalog = constellations.concat(planets);

console.log("🧩 Original Planets Array:", planets);
console.log("🧭 Original Constellations Array:", constellations);
console.log("🌌 Combined Galaxy Catalog:", galaxyCatalog);

// ⭐ toUpperCase(): Converts the star name to uppercase
const upperCaseStar = star.toUpperCase();
console.log("💫 Uppercase Star Name:", upperCaseStar);

// Original string remains unchanged
console.log("📜 Original Star Name:", star);
