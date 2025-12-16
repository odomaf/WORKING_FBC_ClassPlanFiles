// Base constructor for all users in the system
function User(username, joinDate, role) {
  this.username = username;
  this.joinDate = joinDate;
  this.role = role;
  this.login = function () {
    console.log(`${this.username} has logged in.`);
  };
}

// Admin constructor inherits from User
function Admin(username, joinDate, permissions) {
  User.call(this, username, joinDate, 'admin');
  this.permissions = permissions;
}

// Admin-specific behavior
Admin.prototype.manageUsers = function () {
  console.log(`${this.username} is managing users.`);
};

// Member constructor inherits from User
function Member(username, joinDate, membershipLevel) {
  User.call(this, username, joinDate, 'member');
  this.membershipLevel = membershipLevel;
}

// Member-specific behavior
Member.prototype.viewContent = function () {
  console.log(`${this.username} is viewing content.`);
};

// Create new objects
const adminUser = new Admin('alex_admin', '03/01/2024', ['create', 'delete']);
const memberUser = new Member('jordan_member', '03/05/2024', 'premium');

// Call inherited method
adminUser.login();
memberUser.login();

// Call role-specific methods
adminUser.manageUsers();
memberUser.viewContent();
