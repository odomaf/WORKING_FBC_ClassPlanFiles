// Demo — Appending vs Writing Files with fs

// ------------------------------------------------------------
// Node’s built-in fs module allows us to write and append to files.
// This demo contrasts fs.writeFile (overwrite) and fs.appendFile (append).
// ------------------------------------------------------------

const fs = require("fs");

const message = "May the Force be with you.";


// ------------------------------------------------------------
// 1. Writing to a file (overwrites the entire file)
// ------------------------------------------------------------
// fs.writeFile creates the file if it doesn’t exist,
// OR replaces the file contents entirely if it does.

console.log("\n--- Using fs.writeFile (overwrite) ---");

fs.writeFile("log.txt", message, err => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File written: log.txt (contents overwritten)");
});


// ------------------------------------------------------------
// 2. Appending to a file (use this during live demo)
// ------------------------------------------------------------
// fs.appendFile adds new text to the end of the file.
// This is typically what we want when adding log entries.
//
// Uncomment these lines DURING DEMO:

// console.log("\n--- Using fs.appendFile (append) ---");

// fs.appendFile("log.txt", `${message}\n`, err => {
//   if (err) {
//     console.error("Error appending file:", err);
//     return;
//   }
//   console.log("New line appended to log.txt!");
// });


// ------------------------------------------------------------
// Instructor talking points:
// ------------------------------------------------------------
// • fs.writeFile replaces the entire contents — good for resets or generating files.
// • fs.appendFile adds new content without deleting previous data — ideal for logs.
// • Both methods create the file automatically if it does not exist.
// • Students will build on this when creating CLI tools and logging systems.
// ------------------------------------------------------------
