// 🏀 Team Roster Example
// So far, we've been storing a single piece of data in each variable.
let playerName = "Avery"; //Primative Variable
let playerScore = 23;
let isCaptain = true;

// 🧱 To store multiple values together, we can use an array.
//                   0          1         2         3
const teamRoster = ["Avery", "Jordan", "Taylor", "Morgan"];


console.log(teamRoster[0]);//Avery
console.log(teamRoster[1]);//Jordan
console.log(teamRoster[2]);//Taylor
console.log(teamRoster[3]);//Morgan

// Add a new member
console.log(teamRoster[4]);//Exception: Out of Bounds

// .length 

console.log(teamRoster.length); // length 4

// Last item in array length - 1
console.log(teamRoster.length - 1); //3 index of the last element

