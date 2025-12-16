// TODO: Add a comment describing what kind of function this is
function Playlist(title, trackCount, isPublic) {
  this.title = title;
  this.trackCount = trackCount;
  this.isPublic = isPublic;
  this.songs = [];
}


// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
Playlist.prototype.addSong = function (songTitle) {
  this.songs.push(songTitle);
};

// TODO: Add comment describing the following function
const myPlaylist = new Playlist('Focus Beats', 25, true);

// TODO: Add a comment describing what this function will do
myPlaylist.addSong('Lo-fi Study Mix');

// TODO: Add a comment describing what you expect to see printed in the console
console.log(myPlaylist.songs);

