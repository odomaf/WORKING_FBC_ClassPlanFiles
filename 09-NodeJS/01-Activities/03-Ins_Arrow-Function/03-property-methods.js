// Arrow functions should NOT be used as object methods
// when you want `this` to refer to the object itself.

const car = {
  brand: "Subaru",
  model: "Outback",
  // Using arrow functions for methods here is a bad idea:
  start: () => {
    console.log(`Starting a ${this.brand} ${this.model}...`);
  },
  describe: () => {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  }
};

// Both of these will likely log "undefined" values
car.start();
car.describe();

// Why?
// - Arrow functions do NOT create their own `this`.
// - Inside start/describe, `this` is NOT the `car` object.
//   In Node, `this` will be module.exports.
//   In the browser, `this` would be the window object.

// Correct approach (for your live demo, you can refactor to this):
// const car = {
//   brand: "Subaru",
//   model: "Outback",
//   start() {
//     console.log(`Starting a ${this.brand} ${this.model}...`);
//   },
//   describe() {
//     console.log(`This car is a ${this.brand} ${this.model}.`);
//   }
// };


// Try it out:
// 1. Run with `node 03-property-methods.js`
// 2. Observe the undefined values
// 3. Refactor start/describe to regular methods (as shown above) and re-run