                       // 0  1  2
let computerOptions = ["R", "P", "S"];

let randomChoice = Math.floor(Math.random() * computerOptions.length);//0 1 2
let computerChoice = computerOptions[randomChoice]; //R, P, S
// console.log("Computer Picks: " + computerChoice);

// Plan of Attack: Play 1 round of Rock Paper Scissors
let isGameOver = false;
const stats = {
    wins: 0,
    losses: 0,
    ties: 0
}

let userChoice = window.prompt("Please pick a position: R, P, or S").trim().toUpperCase();
console.log(userChoice);
//3 Winning Outcomes
if(computerChoice === userChoice){
    stats.ties++;
    alert("It's a tie!");
} else if((userChoice == "R" && computerChoice == "S") ||
 (userChoice == "S" && computerChoice == "P") || (userChoice == "P" && computerChoice == "R") 
){
    stats.wins++;
    alert('You win!')
} else {
    stats.losses++;
    alert('You lose!')
} 

isGameOver = true;
//Winning Outcomes

// 3  3 = 9 outcomes

//3 Winning Outcomes

// Rock > Scissors
// Scissors > Paper
// Paper > Rock

//Everything else is a loss