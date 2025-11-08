# ✅ Equality Functions — Comparing Values & Types (16-Stu_Functions)

Work with a partner to practice writing functions that compare two inputs using **strict** and **loose** equality.

---

## 👤 User Story

> **As a beginning JavaScript developer,**  
> I want to compare two inputs using different equality operators,  
> so that I can display accurate messages based on whether values and/or types match.

---

## ✅ Acceptance Criteria

- **It’s done when** I create a **function declaration** that compares two inputs using `===` and `==` and logs the correct message.  
- **It’s done when** I create a **function expression** with the same comparison logic.  
- **It’s done when** I test each function with at least **three** different input pairs to trigger each outcome:
  - exact match (**same value & same type**),
  - loose match (**same value, different type**),
  - not equal (**different values**).

---

## 🧱 Your Task

1. Create a file named **`script.js`** and use the starter code below.  
2. Run the script and verify the console output matches the expected messages.  
3. Add at least **three additional test calls** that cover each case.

```js
// ✅ Function Declaration — Write a function that checks if two inputs are equal

// Example calls
validateInput("password123", "password123"); // exact match
validateInput(42, "42");                     // loose match

// ⚙️ Function Expression — Write a function expression with the same logic, different syntax as a variable

// Example call
checkEquality(false, 0); // not equal (different value & type, even though both are falsy)

// 🧪 TODO: Add at least three more test cases to cover all outcomes
```

---

## 📝 Notes

- `===` (strict equality) compares **both type and value** (no type conversion).  
- `==` (loose equality) compares **value only** (performs type coercion).  
- Good practice: prefer `===` in production code and use `==` only when you **intend** to allow coercion.

**References**  
- MDN: [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)  
- MDN: [`==` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)  
- MDN: [`===` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

---

## 💡 Hints

- Try pairs like `0` and `false`, `""` and `0`, `null` and `undefined` to see how `==` behaves.  
- Log both inputs with `typeof` first to understand type differences:  
  ```js
  console.log(typeof inputA, typeof inputB);
  ```

---

## 🏆 Bonus

- Write a **third function** that returns a **string** instead of logging, then print that string.  
- Extend the message to include the **types** of both inputs (e.g., \`(string vs number)\`).  
- Add basic input validation: if either input is `null` or `undefined`, log a helpful message.

---

## ✅ Quick Checklist

- [ ] Function declaration implemented (`validateInput`)  
- [ ] Function expression implemented (`checkEquality`)  
- [ ] Tested with at least 3 additional cases covering all outcomes  
- [ ] Used `===` and `==` appropriately  
- [ ] (Bonus) Wrote a return-based version and/or added type details  
