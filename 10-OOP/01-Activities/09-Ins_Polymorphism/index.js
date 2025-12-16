// Base class representing a generic user
class User {
  constructor(username, joinDate) {
    this.username = username;
    this.joinDate = joinDate;
  }

  login() {
    console.log(`${this.username} has logged in.`);
  }

  // Base method that can be overridden
  getDailyLimit() {
    return 1;
  }
}

// FreeUser inherits default behavior from User
class FreeUser extends User {
  constructor(username, joinDate) {
    super(username, joinDate);
  }
}

// PremiumUser overrides getDailyLimit()
class PremiumUser extends User {
  constructor(username, joinDate) {
    super(username, joinDate);
  }

  // Method override
  getDailyLimit() {
    return 10;
  }
}

// Create instances
const freeUser = new FreeUser('alex_free', '03/01/2024');
const premiumUser = new PremiumUser('jordan_pro', '03/02/2024');

// Call overridden methods
console.log(freeUser.getDailyLimit());    // 1
console.log(premiumUser.getDailyLimit()); // 10
