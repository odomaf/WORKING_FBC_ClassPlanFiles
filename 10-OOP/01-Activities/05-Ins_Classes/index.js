// Class that defines the structure and behavior of a podcast episode
class PodcastEpisode {
  constructor(title, duration, host) {
    this.title = title;
    this.duration = duration; // minutes
    this.host = host;
  }

  // Method shared by all PodcastEpisode instances
  play() {
    console.log(`Now playing "${this.title}" hosted by ${this.host}.`);
  }
}

// Create multiple objects from the same class
const episodeOne = new PodcastEpisode('Learning JavaScript OOP', 45, 'Alex');
const episodeTwo = new PodcastEpisode('Understanding Prototypes', 38, 'Jordan');

// Call the shared method on each object
episodeOne.play();
episodeTwo.play();
