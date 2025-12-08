// 1. TODO: Write a function named flipCase that alternates each character's case.
// Example: "hello" → "hElLo"
// Use an arrow function and return the transformed string.


// 2. TODO: Recreate Array.map as customMap.
// It should take (array, callback) and return a new array.


// 3. TODO: Recreate Array.filter as customFilter.
// It should take (array, callback) and return only the elements where cb returns true.


// Example dataset to use with customMap/customFilter
const temps = [72, 68, 75, 80, 79];

// TODO: Use your customMap function to convert temps from Fahrenheit to Celsius.



// TODO: Use your customFilter function to keep only temps >= 75.



// 4. TODO: Fix the watchList object below.
// The object methods currently use arrow functions and break `this`.
// Replace arrow functions with regular function syntax.

const watchList = {
  movies: ["Arrival", "Interstellar", "Blade Runner 2049"],

  add: (movie) => {
    this.movies.push(movie);
    return `Added: ${movie}`;
  },

  watch: () => {
    if (this.movies.length === 0) return "No movies left!";
    const watched = this.movies.shift();
    return `You watched: ${watched}`;
  },

  print: () => {
    let list = "Current Watch List:\n";
    for (let i = 0; i < this.movies.length; i++) {
      list += `${i + 1}. ${this.movies[i]}\n`;
    }
    return list;
  }
};

// TODO: Test your object:
// console.log(watchList.print());
// console.log(watchList.watch());
// console.log(watchList.add("Dune: Part Two"));
// console.log(watchList.print());