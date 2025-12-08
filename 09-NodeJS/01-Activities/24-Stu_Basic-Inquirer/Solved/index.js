// 24-Stu_Basic-Inquirer — Modernized with chalk

// Install in this folder:
//   npm init -y
//   npm install inquirer@8.2.4 chalk@4

const inquirer = require("inquirer");
const chalk = require("chalk");

// Map color choices to chalk functions
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
      type: "input",
      message: "What text would you like to log?",
      name: "text",
    },
    {
      type: "list",
      message: "What color would you like to use?",
      name: "color",
      choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
    },
  ])
  .then(response => {
    const { text, color } = response;
    const stylize = colorMap[color] || ((value) => value);

    console.log(stylize(text));
  })
  .catch(err => console.error("Error:", err));
