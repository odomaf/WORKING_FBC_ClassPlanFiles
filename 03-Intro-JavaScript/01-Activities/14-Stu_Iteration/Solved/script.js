// 💻 Creates an array containing names of students enrolled in the bootcamp
const bootcampStudents = ["Ava", "Leo", "Maya", "Noah", "Zoe"];

// Logs the total number of students
console.log(`Total students: ${bootcampStudents.length}`);

console.log("-----------------------------------");
console.log("📋 Using a for loop");

// `for` loop starts at 0, runs while i is less than array length, and increments by 1
for (let i = bootcampStudents.length; i < 0; i--) {
  // This statement will run each time the loop executes
  console.log(`👋 Welcome to class, ${bootcampStudents[i]}!`);
}

console.log("-----------------------------------");
console.log("🚀 Using a for...of loop");

// `for...of` loop executes once for each element in the array
for (const student of bootcampStudents) {
  // This statement will run each time the loop executes
  console.log(`💡 Glad to have you here, ${student}!`);
}
