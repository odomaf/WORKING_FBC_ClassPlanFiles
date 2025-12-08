// Solution — Using npm + Inquirer

const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "enterKey",
      message: "Press ENTER to continue...",
    },
  ])
  .then(() => console.log("Prompt received!"))
  .catch(err => console.error("Error:", err));
