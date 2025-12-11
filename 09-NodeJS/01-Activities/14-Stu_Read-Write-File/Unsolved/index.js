// 14-Stu_Read-Write-File — Unsolved Version

const fs = require("fs");

// ------------------------------------------------------------
// TODO: Implement writeToLog(message)
//   • Accept a single string argument (message)
//   • Use fs.writeFile to write the message into "log.txt"
//   • Log a success message or an error to the console
// ------------------------------------------------------------

const userInput = process.argv[2];
const writeToLog = (message) => {
  if (message) {
    console.log("----writing file----");
    fs.writeFile("log.txt", message, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("----DONE---");
      }
    });
  } else {
    console.log("Please enter a value to log to the file");
  }
  // Your code here
};

const readLog = () => {
  console.log("----Reading File----");
  fs.readFile("log.txt", "utf8", (err, contents) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    } else {
      console.log("File says: ", contents);
    }
  });
};

writeToLog(userInput);
readLog();

// ------------------------------------------------------------
// TODO: Implement addFunc(x, y)
//   • Validate the number of inputs
//   • If y is missing, write a message like:
//       "Incorrect number of inputs provided."
//   • Convert both x and y to numbers
//   • If either is not a valid number, log a helpful error message
//   • Otherwise, compute the sum and write "The result is <sum>" to the log
// ------------------------------------------------------------

const addFunc = (x, y) => {
  // Your code here
};

// ------------------------------------------------------------
// TODO: Call addFunc using command-line arguments
// Example usage:
//   node index.js 5 10
//   node index.js 3
//   node index.js hello world
// ------------------------------------------------------------

// addFunc(process.argv[2], process.argv[3]);
