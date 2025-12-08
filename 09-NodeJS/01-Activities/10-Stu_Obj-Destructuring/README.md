# 📦 Object & Array Destructuring

This exercise demonstrates how to extract values from objects and arrays using ES6 destructuring syntax.

---

## 🎯 LEARNING OBJECTIVES

• Pull properties out of objects directly into variables  
• Destructure values from nested objects  
• Extract array elements based on their position  
• Use destructuring to write cleaner, more expressive code

---

## ✅ WHAT THIS SOLUTION SHOWS

1. Basic Object Destructuring  
   Extract "name" and "category" from the runtime object.

2. Nested Object Destructuring  
   Pull out "primary" and "secondary" from languageInfo.tooling.frameworks.

3. Array Destructuring  
   Assign "HTML", "CSS", and "JavaScript" to markup, styling, and scripting.

---

## 🧪 HOW TO TEST

Run this command:

node index.js

You should see output for:
• Node.js metadata  
• JavaScript framework names  
• Core web technology names

---

## 🏆 BONUS CHALLENGE

How can you rename variables during destructuring?

Example pattern (not code fenced here):

const { name: runtimeName } = runtime  
console.log(runtimeName)

Try adding renamed variables inside index.js.
