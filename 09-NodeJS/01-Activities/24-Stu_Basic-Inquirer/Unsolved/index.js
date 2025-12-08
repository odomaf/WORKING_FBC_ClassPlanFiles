// 25-Ins-Advanced-Inquirer — Modernized with chalk
// Install required packages:
//   npm install inquirer@8.2.4 chalk@4

const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your username?",
    },
    {
      type: "password",
      name: "password",
      message: "What is your password?",
      mask: "*",
    },
    {
      type: "password",
      name: "confirm",
      message: "Re-enter password to confirm:",
      mask: "*",
    },
  ])
  .then(response => {
    const { password, confirm } = response;

    if (password === confirm) {
      console.log(chalk.greenBright("Success! Your password was confirmed."));
    } else {
      console.log(
        chalk.redBright("Passwords do not match. Please try again!")
      );
    }
  })
  .catch(err => console.error("Error:", err));
