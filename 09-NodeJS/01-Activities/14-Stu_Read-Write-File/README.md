# 📝 File System Read & Write

In this activity, you will practice using Node's file system module (fs) to validate inputs and write messages to a log file.

---

## 🎯 USER STORY

As a developer, I want to create a log file that tracks the execution of code in my application.

---

## ✅ ACCEPTANCE CRITERIA

You are done when:

• You have completed the writeToLog function so it writes a message into a new log.txt file.  
• You validate the number of arguments passed into the program using process.argv.  
• Your program logs an appropriate message when input is invalid.  
• Running the script successfully writes results into log.txt.

---

## 🧪 HOW TO TEST

Run the file with:

node index.js 5 10  
node index.js 3  
node index.js hello world

Then open log.txt to check the output.

---

## 📘 NOTES

Reference documentation:

Node.js File System: https://nodejs.org/api/fs.html#filehandlewritefiledata-options

writeFile creates the file if it doesn't already exist and overwrites it each time.

---
