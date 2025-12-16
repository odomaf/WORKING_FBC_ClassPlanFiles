// The Player class is a blueprint for creating player objects
class Player {
  constructor(username, level, role) {
    this.username = username;
    this.level = level;
    this.role = role;
  }

  // Class method
  rest() {
    console.log(`${this.username} is resting to recover energy.`);
  }
}

// Create a new Player instance
const player1 = new Player('SkyRogue', 5, 'Archer');

// Call a method on the object
player1.rest();
