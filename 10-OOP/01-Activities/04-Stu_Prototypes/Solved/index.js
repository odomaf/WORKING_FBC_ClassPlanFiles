// Constructor function that defines the properties of a Playlist
function Playlist(title, trackCount, isPublic) {
  this.title = title;
  this.trackCount = trackCount;
  this.isPublic = isPublic;
  this.songs = [];
}

// Prototype method shared by all Playlist instances
Playlist.prototype.addSong = function (songTitle) {
  this.songs.push(songTitle);
};

// Create a new Playlist object
const myPlaylist = new Playlist('Focus Beats', 25, true);

// Add a song to the playlist
myPlaylist.addSong('Lo-fi Study Mix');

// Should log an array with one song inside
console.log(myPlaylist.songs);
