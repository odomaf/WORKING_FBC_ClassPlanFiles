const inquirer = require("inquirer");
const chalk = require("chalk");

// Map color names to chalk functions
const colorMap = {
  red: chalk.red,
  blue: chalk.blue,
  green: chalk.green,
  yellow: chalk.yellow,
  cyan: chalk.cyan,
  magenta: chalk.magenta,
};

inquirer
  .prompt([
    {
      type: "list",
      message: "What is your favorite color?",
      name: "color",
      choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
    }
  ])
  .then((response) => {
    const chosenColor = response.color;
    const stylize = colorMap[chosenColor];

    console.log(stylize(`Your favorite color is ${chosenColor}!`));
  })
  .catch(err => console.error("Error:", err));
