// 26-Stu-Advanced-Inquirer — Unsolved Version
// After running `npm init -y`, install:
//   npm install inquirer@8.2.4 chalk@4

// TODO: Import inquirer, chalk, and fs
// const inquirer = ...
// const chalk = ...
// const fs = ...

// TODO: Use inquirer.prompt() to ask the user:
//   1. "What is your name?"            (type: "input", name: "name")
//   2. "What languages do you know?"   (type: "checkbox", name: "stack",
//      choices: ["HTML", "CSS", "JavaScript", "PostgreSQL"])
//   3. "What is your preferred method of communication?"
//        (type: "list", name: "contact",
//         choices: ["email", "phone", "telekinesis"])
//
// Use chalk.magentaBright() to style each message.

// inquirer
//   .prompt([
//     // Your question objects here
//   ])
//   .then(data => {
//     // TODO:
//     // 1. Create a filename from the user's name:
//     //    • Lowercase
//     //    • Remove spaces
//     //    • Add ".json" extension
//     //
//     // 2. Use fs.writeFile to save the data object as JSON
//     //    - Use JSON.stringify(data, null, 2) for pretty formatting
//     // 3. Log a success message to the console (you can style it with chalk)
//   })
//   .catch(err => console.error("Prompt error:", err));
