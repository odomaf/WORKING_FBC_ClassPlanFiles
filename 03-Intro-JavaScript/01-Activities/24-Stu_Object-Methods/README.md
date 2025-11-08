# 🐾 Object Methods and Conditional Logic — AdoptMe App (21-Stu_Objects-Methods)

Work with a partner to build a simple **pet adoption checker** app that uses an object with arrays and methods.  
You’ll use **object methods**, **arrays**, and **conditional logic** to display messages based on user input.

---

## 👤 User Story

> **As a JavaScript learner,**  
> I want to check if a chosen pet is available for adoption,  
> so that I can display a friendly message and contact information when it is.

---

## ✅ Acceptance Criteria

- **It’s done when** I create an object representing a pet shelter that contains:  
  - Two arrays (`dogs` and `cats`) listing available animals.  
  - One method (`contactInfo`) that logs a contact message.  
- **It’s done when** I create two functions (`showDogMessage` and `showCatMessage`) that log adoption messages and call the contact method.  
- **It’s done when** my conditional logic correctly determines whether the chosen pet is a dog, a cat, or unavailable.  
- **It’s done when** each outcome displays a unique, user-friendly message.

---

## 🧱 Your Task

1. Create a new file named **`script.js`**.  
2. In your file:  

   - Declare a variable `chosenPet` and assign it the name of a pet as a string (e.g., `"Luna"`).  
   - Create an object named `shelter` with:  
     - A `dogs` array containing at least **4 dog names**.  
     - A `cats` array containing at least **4 cat names**.  
     - A method named `contactInfo` that logs an email or phone message to the console (e.g., `"Contact us at hello@adoptme.org"`).  

3. Write two functions:  
   - `showDogMessage()` should log a celebratory message when the pet is in the `dogs` array, then call `shelter.contactInfo()`.  
   - `showCatMessage()` should do the same for pets in the `cats` array.  

4. Write an **if/else if/else** statement that:  
   - Checks if the chosen pet is in the `dogs` array using `.includes()`.  
   - Checks if the chosen pet is in the `cats` array.  
   - Logs a friendly message if the pet isn’t found, including featured animals using:  
     ```js
     console.log(`🐾 Featured pets: ${shelter.dogs[0]} the dog or ${shelter.cats[0]} the cat!`);
     ```

5. Test your code by changing the `chosenPet` variable to different names!

---

## 📝 Notes

- Use `.includes()` to check if an array contains a specific value.  
- Object methods must include parentheses `()` when called.  
- Use both emojis 🐾 and descriptive log messages to make the output fun and clear.  
- Keep your variable and function names descriptive (avoid one-letter names).

---

## 💡 Hints

- Start by logging your arrays and object to verify structure before adding conditionals.  
- Test different `chosenPet` names to see all outcomes.  
- Use template literals (backticks \`) with `${}` to embed variables inside messages.  

---

## 🧠 Bonus Challenges

- Add a third array (e.g., `birds` or `rabbits`) and handle it with an additional conditional branch.  
- Add a new method to your `shelter` object that thanks the user for visiting.  
- Store the contact information as an **object** (e.g., `contact: { email: "...", phone: "..." }`) and update your method to log both.

---

## ✅ Quick Checklist

- [ ] Created a `shelter` object with two arrays and a method  
- [ ] Declared a `chosenPet` variable  
- [ ] Built `showDogMessage()` and `showCatMessage()` functions  
- [ ] Used `.includes()` to check pet availability  
- [ ] Called object methods with `()` correctly  
- [ ] Displayed a custom message for unavailable pets  
- [ ] (Bonus) Added more categories or methods  
