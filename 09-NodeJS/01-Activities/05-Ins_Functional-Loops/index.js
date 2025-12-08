const attendees = [
  { name: "Liam", age: 16 },
  { name: "Olivia", age: 29 },
  { name: "Mia", age: 18 },
  { name: "Noah", age: 22 },
  { name: "Ava", age: 14 },
  { name: "Ethan", age: 15 }
];

// ------------------------------------------------------------
// 1. forEach — iterate and perform a side effect (no return)
// ------------------------------------------------------------

console.log("Ages of all attendees:");
attendees.forEach(person => console.log(`• ${person.name}: ${person.age}`));


// ------------------------------------------------------------
// 2. filter — keep only attendees who meet a condition
// ------------------------------------------------------------

const allowedForRatedR = attendees.filter(person => person.age >= 17);

console.log("\nAttendees allowed to watch Rated-R:");
console.log(allowedForRatedR);


// ------------------------------------------------------------
// 3. map — transform each attendee into a new object (immutability)
// ------------------------------------------------------------

const verifiedAttendees = attendees.map(person => {
  return {
    ...person,                         // copy existing data safely
    canWatchRatedR: person.age >= 17   // add a new property
  };
});

console.log("\nOriginal Attendees (unchanged):");
console.log(attendees);

console.log("\nVerified Attendees (new objects):");
console.log(verifiedAttendees);