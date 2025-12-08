// Demo — Using Chalk for Terminal Colors
// Make sure to install chalk v4 for CommonJS compatibility:
//   npm install chalk@4

const chalk = require("chalk");

console.log(chalk.magenta("Hello World!"));
console.log(chalk.magentaBright("Hello World!"));

console.log(chalk.bgMagenta("Hello World!"));
console.log(chalk.bgMagentaBright("Hello World!"));

// styles
console.log(chalk.underline("Hello World!"));

// extras
console.log(chalk.bold.rgb(255, 0, 255)("Hello World!"));
console.log(chalk.inverse("Hello World!"));

// combine styles + colors
console.log(chalk.magenta.strikethrough("Hello World!"));
console.log(chalk.red.bgWhite.strikethrough("Hello World!"));
