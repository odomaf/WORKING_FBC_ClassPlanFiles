// 16-Stu_Append-File — Unsolved Version

const fs = require("fs");

// TODO:
// Add comments explaining:
//   • What fs.appendFile does
//   • Why we add a newline character (\n)
//   • How the callback handles success or error

fs.appendFile("log.txt", `${process.argv[2]}\n`, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Commit logged!");
  }
});
