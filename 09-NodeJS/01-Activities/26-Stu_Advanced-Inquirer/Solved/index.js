// 26-Stu-Advanced-Inquirer — Solved (Modernized with chalk)
// Install dependencies in this folder:
//   npm install inquirer@8.2.4 chalk@4

const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: chalk.magentaBright("What is your name?"),
    },
    {
      type: "checkbox",
      name: "stack",
      message: chalk.magentaBright("What languages do you know?"),
      choices: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
    },
    {
      type: "list",
      name: "contact",
      message: chalk.magentaBright(
        "What is your preferred method of communication?"
      ),
      choices: ["email", "phone", "telekinesis"],
    },
  ])
  .then(data => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log(chalk.greenBright(`Success! Saved responses to ${filename}`));
    });
  })
  .catch(err => console.error("Prompt error:", err));
