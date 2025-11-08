# 🔁 Loop Practice — Iterating Over Arrays (14-Stu_Loops)

Work with a partner to practice iterating over arrays using both a classic `for` loop and a modern `for...of` loop.

---

## 👤 User Story

> **As a beginning JavaScript developer,**  
> I want to loop over an array using different loop types,  
> so that I can display and process each item in a list.

---

## ✅ Acceptance Criteria

- **It’s done when** I create an array with **at least 5 items**.  
- **It’s done when** I log the **total count** using the array’s `.length`.  
- **It’s done when** I use a **`for` loop** to log each item with its **position number** (1-based).  
- **It’s done when** I use a **`for...of` loop** to log each item (no index needed).  

---

## 🧱 Your Task

1. Create a file named **`script.js`** and copy the starter code below.  
2. Replace the sample data with your own theme (e.g., bootcamp students, favorite snacks, project names).  
3. Run the file and verify that both loop sections print the list to the console.

```js
// 💻 Create an array of at least 5 items (customize this list)


// 1) Log the array length


// 2) Use a classic for loop (include the item number)


// 3) Use a for...of loop (no index required)

```

---

## 📝 Notes

- Arrays are **zero-indexed**: the first element is index `0`.  
- Use template literals (backticks \`) with `${}` to embed values into strings.  
- `for` loops are great when you **need the index**; `for...of` is cleaner when you **don’t**.

**References**  
- MDN: [`for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)  
- MDN: [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)  
- MDN: [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## 💡 Hints

- Try changing the array length and confirm both loops still work.  
- If nothing prints, check for typos and confirm your file is linked in `index.html` before `</body>`.

---

## 🏆 Bonus

- After printing, add a new item using `.push()` and print the list again.  
- Create a **second array** and loop through both to print a combined message (e.g., student + project).  
- Use `continue` to **skip** an item if it matches a certain value.

---

## ✅ Quick Checklist

- [ ] Array with 5+ items created  
- [ ] `.length` logged  
- [ ] `for` loop prints each item with its number  
- [ ] `for...of` loop prints each item  
- [ ] (Bonus) Added `.push()` / combined lists / used `continue`  
