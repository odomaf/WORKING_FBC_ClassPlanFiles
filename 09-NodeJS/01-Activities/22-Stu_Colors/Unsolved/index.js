// 21-Stu_Chalk — Unsolved Version
// After installing chalk v4, require it here:
//   npm install chalk@4

// TODO: Import chalk
const chalk = require("chalk");

// TODO: Capture user input from process.argv
const name = process.argv[2];
const profit = process.argv[3];

console.log("Name: ", name);
console.log("Profit: ", profit);

// TODO: Validate inputs (name exists, profit is a number)
const nameExists = name ? true : false;
const profitIsNumber = isNan(profit);

console.log

// TODO: Determine whether to use bgGreenBright or bgRedBright
// const profitColor = ...

// TODO: Style the name using chalk.bgYellowBright.black()
// const styledName = ...

// TODO: Style the profit using the selected background color
// const styledProfit = ...

// TODO: Log the final formatted message
// console.log(...)
