# 🚀 Array and String Methods Practice — Space Explorer Log (18-Ins_Array-Methods-2)

Work with a partner to explore how JavaScript array and string methods work by simulating updates to a **space explorer data log**.

---

## 👤 User Story

> **As a JavaScript learner,**  
> I want to use array and string methods to modify and combine data,  
> so that I can understand how to manage collections of values in JavaScript.

---

## ✅ Acceptance Criteria

- **It’s done when** I use the **`.unshift()`** method to add a new constellation to the beginning of an array.  
- **It’s done when** I use the **`.pop()`** method to remove the last planet from the array.  
- **It’s done when** I use the **`.concat()`** method to combine two arrays into a new one.  
- **It’s done when** I use the **`.toUpperCase()`** method to transform a string to all uppercase letters.  
- **It’s done when** I confirm that none of these methods (except `.pop()` and `.unshift()`) modify the original arrays or strings.  

---

## 🧱 Your Task

You are building a simple **space explorer log** that keeps track of constellations, planets, and stars.  

1. Create a new file named **`script.js`**.  

2. Inside it, do the following:  

   - Create an array called `constellations` that contains at least **five constellation names**.  
   - Create another array called `planets` that contains at least **six planet names**.  
   - Create a string variable named `star` with a lowercase star name (e.g., `"polaris"`).  

3. Perform the following steps in order:  

   1. Use `.unshift()` to **add a new constellation** at the **beginning** of the `constellations` array.  
      - Log the updated array to the console with a label describing what changed.  
   2. Use `.pop()` to **remove the last planet** from the `planets` array.  
      - Log the updated `planets` array and include a descriptive message.  
   3. Use `.concat()` to **combine** the `constellations` and `planets` arrays into a new array named `galaxyCatalog`.  
      - Log all three arrays (`constellations`, `planets`, and `galaxyCatalog`) to show which were changed and which remained the same.  
   4. Use `.toUpperCase()` to **convert** the star name to uppercase.  
      - Log both the **uppercase** version and the **original** version to demonstrate that strings are immutable.  

4. Add clear `console.log()` statements after each operation that describe what your code is doing — for example:  
   ```js
   console.log("Added new constellation at the start:", constellations);
   ```

---

## 💡 Hints

- `.unshift()` and `.pop()` **modify** the original array directly.  
- `.concat()` **returns a new array** and does not change the originals.  
- `.toUpperCase()` **returns a new string** — strings cannot be changed in place.  
- Use emojis or labels in your `console.log()` messages to make output easier to read!

---

## 🧠 Stretch Challenges

- Use `.shift()` to remove the first element from the `constellations` array.  
- Use `.push()` to add a new planet at the end of the `planets` array.  
- Try combining all three arrays (`constellations`, `planets`, and `[star]`) into one large array.  
- Practice chaining methods — for example:  
  ```js
  const updatedStar = star.toUpperCase().concat(" 🌟");
  console.log(updatedStar);
  ```

---

## ✅ Quick Checklist

- [ ] Created both arrays and one string variable  
- [ ] Used `.unshift()` to add a new element to the start  
- [ ] Used `.pop()` to remove the last element  
- [ ] Used `.concat()` to merge arrays into a new one  
- [ ] Used `.toUpperCase()` to change string case  
- [ ] Verified which methods changed originals vs created new values  
- [ ] Logged descriptive output after each operation  
- [ ] (Bonus) Completed one or more stretch challenges  
