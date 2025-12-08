# 🐛 Fix Arrow Function Misuse (Unsolved)

In this activity, you will debug and fix code that incorrectly uses arrow functions.  
Your goal is to understand when arrow functions are appropriate — and when they break your logic.

------------------------------------------------------------
🎯 USER STORY
------------------------------------------------------------
As a developer, I want to write functional utilities and update a movie watch list using the correct function syntax.

------------------------------------------------------------
📌 ACCEPTANCE CRITERIA
------------------------------------------------------------
You are done when:

1. You implement a flipCase function that alternates character casing.  
2. You write your own customMap and customFilter functions.  
3. You use customMap and customFilter to process a list of temperatures.  
4. You fix the watchList object's methods so the script runs correctly.  
5. Running `node index.js` produces valid output with no errors.

------------------------------------------------------------
🧪 STEPS TO TEST
------------------------------------------------------------
1. Navigate to this folder in your terminal.  
2. Run: node index.js  
3. Fix errors as they appear until the output matches expectations.

------------------------------------------------------------
💡 HINTS
------------------------------------------------------------
- Arrow functions are great for **callbacks** (map, filter, etc.).  
- Arrow functions are **NOT** great for **object methods** that rely on `this`.  
- If your object methods cannot read `this.movies`, you probably used an arrow function.

------------------------------------------------------------
🏆 BONUS
------------------------------------------------------------
Try rewriting your customMap and customFilter using:

- Implicit returns  
- One-line arrow functions  
- Parameter shorthand  

Example:  
element => element * 2

Experiment and see how concise your code can become!