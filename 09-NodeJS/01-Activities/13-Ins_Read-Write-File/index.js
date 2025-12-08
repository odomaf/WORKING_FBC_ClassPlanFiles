// Demo — Reading & Writing Files with fs

// ------------------------------------------------------------
// Node’s built-in fs module allows us to read and write files.
// In modern Node, you can use either callback-based fs or fs.promises.
// This demo keeps callbacks for approachability but uses cleaner patterns.
// ------------------------------------------------------------

const fs = require("fs");

// ------------------------------------------------------------
// 1. Reading a file (asynchronous)
// ------------------------------------------------------------
// data.csv should remain unchanged for this demo.
// utf8 ensures we get readable text instead of a Buffer.

console.log("\n--- Reading data.csv ---");

fs.readFile("data.csv", "utf8", (err, contents) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File contents:");
  console.log(contents);
});


// ------------------------------------------------------------
// 2. Writing to a file (optional instructor demo)
// ------------------------------------------------------------
// Try running:
//   node index.js "Hello from Node!"
//
// This will create or overwrite log.txt with the provided text.

const userInput = process.argv[2];

if (userInput) {
  console.log("\n--- Writing to log.txt ---");

  fs.writeFile("log.txt", userInput, err => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    console.log("Successfully wrote to log.txt!");
  });
} else {
  console.log("\n(No input provided. Skipping file write.)");
}


// ------------------------------------------------------------
// Instructor talking points:
// ------------------------------------------------------------
// • fs.readFile is asynchronous — Node continues executing while it waits.
// • utf8 encoding returns a readable string instead of a Buffer.
// • fs.writeFile will create the file if it doesn’t exist.
// • Accessing process.argv lets us write dynamic input to files.
// • Next steps: introduce fs.promises for async/await patterns.
// ------------------------------------------------------------
