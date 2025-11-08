// WRITE YOUR CODE HERE
// 🎵 Music Playlist Example
// So far, we've been storing a single piece of data in each variable.
const songTitle = "Midnight Sky";
const songDuration = 3.45;
const isFavorite = true;

// 🧱 To store multiple values together, we can use an array.

//                      0              1              2           3 = length -1 = 3
const playlist = ["Midnight Sky", "Neon Lights", "Golden Hour", "Waves"];//4 Length

// 🧾 Logging the entire array
console.log(playlist); // ["Midnight Sky", "Neon Lights", "Golden Hour", "Waves"]

// 🎯 Accessing a single value by index (arrays are zero-indexed)
console.log(playlist[1]); // "Neon Lights"
console.log(playlist[0]); // "Midnight Sky"

// 🔄 Using an index to update a value
console.log(playlist[3]); // "Waves"

// Replace the fourth song with a new track
playlist[3] = "Electric Heart";

// Logs "The fourth song is Electric Heart."
console.log(`The fourth song is ${playlist[3]}.`); 

// 🧮 Using the array's length property to get how many songs are in the playlist
console.log(`The playlist has ${playlist.length} songs.`);

console.log(playlist[playlist.length -1]);//3, Electric Heart
