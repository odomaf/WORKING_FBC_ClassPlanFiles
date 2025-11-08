# 💰 Budget Comparison Logic — Comparison & Logical Operators

Work with a partner to complete this activity in your Codecademy Bootcamp folder.
Predict the output of the javascript statements.
Use a JavaScript comment to mark your prediction then run the code to see if you're right

---

## 👤 User Story

> **As a new JavaScript developer,**  
> I want to practice comparison and logical operators,  
> so that I can write conditions that evaluate to true or false in my code.

---

## ✅ Acceptance Criteria

- **It’s done when** all `console.log()` statements output `true/false` to the console.  
- **It’s done when** I can explain the difference between **loose** (`==`) and **strict** (`===`) equality.  
- **It’s done when** I use **logical operators** (`&&`, `||`, `!`) to evaluate compound expressions.  

---

## 🧱 Your Task (Same Level, New Theme)

You’re building a small feature for a **budget tracking app** to verify if a user’s savings meet their financial goals.

1. Create a new file named **`script.js`** and add the following starter code:

   ```js
   // 💰 Imagine this code helps compare your spending and savings.

   const budgetGoal = "500";   // String version (e.g., from user input)
   const currentSavings = 500; // Number version
   const totalIncome = 1000;
   const remainder = totalIncome % currentSavings;
   const halfIncome = totalIncome / 2;

   // === Evaluates to ???
   const isHalfGoalMet = (currentSavings === halfIncome);

   // < Evaluates to ???
   const isHalfLessThanRemainder = (halfIncome < remainder);

   // 🧮 Use comparison operators so all expressions below log to the console as true

   // Strict equality (===) returns ???; loose equality (==) returns ???
   console.log(budgetGoal == currentSavings); // ???

   // Both values are the number 500 and strictly equal
   console.log(currentSavings === halfIncome); // ???

   // totalIncome is greater than currentSavings → ???
   console.log(totalIncome > currentSavings); // ???

   // remainder is less than 1 → ???
   console.log(remainder < 1); // ???

   // ⚙️ Use logical operators so all expressions below log to the console as true

   // Use || (OR) → true if either expression is ???
   console.log(isHalfGoalMet || isHalfLessThanRemainder); // ???

   // Use ! (NOT) and && (AND) → true when both conditions are ???
   console.log(isHalfGoalMet && !isHalfLessThanRemainder); // ???

   // Remove (!) from one to keep at least one true expression
   console.log(isHalfGoalMet || isHalfLessThanRemainder); // ???
   ```

2. Open your browser’s **DevTools → Console** to test the output.  
   All `console.log()` statements should evaluate to **true**.

---

## 📝 Notes

- `==` compares **values only** (performs type conversion).  
- `===` compares both **value and type** (no conversion).  
- Logical operators:  
  - `&&` (AND) → true if both conditions are true.  
  - `||` (OR) → true if at least one condition is true.  
  - `!` (NOT) → reverses a boolean value.  

**References:**  
- MDN: [Equality Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)  
- MDN: [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

---

## 💡 Hints

- The `%` (modulus) operator returns the remainder of a division.  
- When comparing strings and numbers with `==`, JavaScript automatically converts the types.  
- Use `console.log()` to check the values of variables before comparing them.

---

## 🏆 Bonus

- Try adding your own condition:  
  ```js
  const hasBonus = true;
  console.log(isHalfGoalMet && hasBonus);
  ```
- Add an `if...else` statement that prints `"Goal met!"` if all conditions are true.

---

## ✅ Quick Checklist

- [ ] All `console.log()` statements output `true`  
- [ ] Used both `==` and `===` comparisons  
- [ ] Applied `&&`, `||`, and `!` operators correctly  
- [ ] Verified output in the browser console  
- [ ] (Bonus) Added an extra comparison or `if` statement  
