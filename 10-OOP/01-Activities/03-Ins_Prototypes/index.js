// Constructor function for creating Playlist objects
function Playlist(title, trackCount, isPublic) {
  this.title = title;
  this.trackCount = trackCount;
  this.isPublic = isPublic;
}

// Add a method to the prototype
Playlist.prototype.play = function () {
  console.log(`Playing playlist: ${this.title}`);
};

// Create a new Playlist object
const myPlaylist = new Playlist('Focus Beats', 25, true);

// Log the object to inspect it in the browser console
// Notice: play() exists on the prototype, not directly on the object
console.log(myPlaylist);

// Call the prototype method
myPlaylist.play();
