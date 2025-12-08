// Solution — Read & Write with fs

const fs = require("fs");

// ------------------------------------------------------------
// Helper: Write a message to log.txt
// ------------------------------------------------------------

const writeToLog = message => {
    fs.writeFile("log.txt", message, err => {
        if (err) {
            console.error("Error writing to file:", err);
            return;
        }
        console.log("Log created!");
    });
};

// ------------------------------------------------------------
// Add two values passed from the command line
// ------------------------------------------------------------

const addFunc = (x, y) => {
    let message;

    // Validate input count
    if (y === undefined) {
        message = "Incorrect number of inputs provided.";
        writeToLog(message);
        return;
    }

    // Convert arguments into numbers
    const num1 = Number(x);
    const num2 = Number(y);

    // Handle non-numeric input gracefully
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        writeToLog("Both inputs must be valid numbers.");
        return;
    }

    const sum = num1 + num2;
    message = `The result is ${sum}`;
    writeToLog(message);
};

// ------------------------------------------------------------
// Execute using command-line arguments
// Example:
//   node index.js 5 10
// ------------------------------------------------------------

addFunc(process.argv[2], process.argv[3]);
