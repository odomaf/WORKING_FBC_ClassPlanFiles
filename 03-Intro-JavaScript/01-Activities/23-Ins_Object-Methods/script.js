// 🪐 Objects can store multiple types of data, including arrays and functions (methods)
const planetReport = {
  name: "Mars",
  discoveredBy: "Galileo Galilei",
  hasWater: true,
  moons: 2,
  temperature: "-81°F average",
  // Arrays can be stored as values to represent related data
  nearbyPlanets: ["Earth", "Jupiter"],
  // Methods can be used to store reusable functionality
  shareFunFact: function () {
    console.log("🌌 Fun Fact: Mars has the tallest volcano in the solar system — Olympus Mons!");
  },
  sendWarning: function () {
    console.log("🚨 Caution: Dust storms on Mars can cover the entire planet for weeks!");
  }
};

// 🌍 Accessing values inside the object
// Logs "Earth" using dot notation
console.log(planetReport.nearbyPlanets[0]);

// Logs "Earth" using bracket notation
console.log(planetReport["nearbyPlanets"][0]);

// 🚀 Calling object methods
planetReport.shareFunFact();
planetReport.sendWarning();
