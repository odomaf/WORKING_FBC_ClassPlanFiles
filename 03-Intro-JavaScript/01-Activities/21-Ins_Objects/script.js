// 👤 Objects are collections of related data stored as key-value pairs

const myObject = {
  isRaining: true,
  myStudents: ['Bob', 'Alice'],
  daObject:{"myVal": 21},
  count: 5,
  theString: 'Monopoly',
  theLength: function(){
    return 9;
  }
};
const val = myObject.theLength();//9

myObject.daObject["myVal"] = 35;

const planets = ['Venus', 'Earth'];

planets.length;

const userProfile = {
  username: "techExplorer",
  age: 28,
  location: "Austin, TX",
  isActive: true,
  membershipLevel: "Pro"
};

// 🧭 Accessing property values
// Using dot notation — best for known property names
console.log(userProfile.username); // "techExplorer"

// Using bracket notation — useful for dynamic property names
console.log(userProfile["location"]); // "Austin, TX"

// 🧩 Example of dynamic access
const keyToAccess = "membershipLevel";
console.log(userProfile[keyToAccess]); // "Pro"
