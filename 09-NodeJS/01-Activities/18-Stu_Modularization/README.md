# 🧩 Modularization Practice — CLI Calculator (Unsolved)

In this activity, you will create a simple command-line calculator using Node.js modules. You will separate your logic into multiple files and import functions using require().

---

## 🎯 USER STORY

As a developer, I want to organize reusable math functions in a separate module and call them from a main program.

---

## ✅ ACCEPTANCE CRITERIA

You are done when:

• You create a basicmath.js file that exports four functions: sum, difference, product, quotient  
• You import that module into index.js using require()  
• You retrieve arguments from process.argv  
• Your calculator performs the operation requested by the user  
• Running the script logs the correct result

Example usage:

node index.js sum 5 10  
node index.js product 6 3

---

## 🧪 TASKS

• Implement math functions in basicmath.js  
• Export them using module.exports  
• Import them in index.js  
• Parse user input and run the correct operation  
• Use a switch statement to handle logic

---

## 🏆 BONUS CHALLENGE

Add error handling:

• Print a message if the user does not pass enough arguments  
• Print a message if the inputs are not numbers  
• Prevent division by zero

---
