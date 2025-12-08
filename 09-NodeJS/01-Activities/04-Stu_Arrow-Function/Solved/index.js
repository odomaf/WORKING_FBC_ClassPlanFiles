// 1. flipCase alternates each character’s case
const flipCase = text => {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    output += i % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
  }
  return output;
};

console.log(flipCase("Building good habits takes repetition!"));

// ------------------------------------------------------------

// 2. customMap – recreate Array.map with callbacks
const customMap = (array, callback) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i], i));
  }
  return results;
};

const temps = [72, 68, 75, 80, 79];
const tempsCelsius = customMap(temps, f => ((f - 32) * 5) / 9);
console.log(tempsCelsius);

// ------------------------------------------------------------

// 3. customFilter – recreate Array.filter with callbacks
const customFilter = (array, callback) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) results.push(array[i]);
  }
  return results;
};

const warmDays = customFilter(temps, t => t >= 75);
console.log(warmDays);

// ------------------------------------------------------------

// 4. watchList object demonstrating correct method syntax
//    (this example REPLACES the Netflix queue problems)
const watchList = {
  movies: ["Arrival", "Interstellar", "Blade Runner 2049"],

  add(movie) {
    this.movies.push(movie);
    return `Added: ${movie}`;
  },

  watch() {
    if (this.movies.length === 0) return "No movies left!";
    const watched = this.movies.shift();
    return `You watched: ${watched}`;
  },

  print() {
    let list = "Current Watch List:\n";
    for (let i = 0; i < this.movies.length; i++) {
      list += `${i + 1}. ${this.movies[i]}\n`;
    }
    return list;
  }
};

console.log(watchList.print());
console.log(watchList.watch());
console.log(watchList.print());
console.log(watchList.add("Dune: Part Two"));
console.log(watchList.print());

// ------------------------------------------------------------
// Why does this work?
// All watchList methods use REGULAR function syntax, so `this`
// correctly refers to the watchList object.
// Arrow functions would break this behavior.
