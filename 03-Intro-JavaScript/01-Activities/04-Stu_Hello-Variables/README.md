# 🧩 Profile Status Updater — Template Literals & Reassignment

Work with a partner to complete this activity in your Codecademy Bootcamp folder.

---

## 👤 User Story

> **As a new JavaScript developer,**  
> I want to use template literals and variable reassignment,  
> so that I can dynamically display updated information in my app.

---

## ✅ Acceptance Criteria

- **It’s done when** I can declare variables using `let` to store user information.  
- **It’s done when** I use **template literals** to combine strings and variables inside `console.log()` statements.  
- **It’s done when** I reassign each variable and log updated messages showing the changes.  

---

## 🧱 Your Task (Same Level, New Theme)

You’re helping a pretend social media app called **ProfilePro** display and update a user’s profile info.

1. Create a file named **`script.js`** and add the following starter code:

   ```js
   // 🧩 Declaring variables with let (values can be changed later)
   let displayName = "Avery";
   let followers = 120;
   let bio = "Coffee addict ☕ who loves coding challenges!";

   // 🗣️ Using template literals to log personalized messages
   console.log(`Hi, I'm ${displayName}.`);
   console.log(`I currently have ${followers} followers.`);
   console.log(`Bio: ${bio}`);

   // 🔁 Reassigning variables to simulate updating a user profile
   displayName = "Jordan";
   followers = 350;
   bio = "Lifelong learner 🌱 | Full-stack dev in progress.";

   // 🧠 Logging the updated info
   console.log(`Hi, I'm ${displayName}.`);
   console.log(`I currently have ${followers} followers.`);
   console.log(`Bio: ${bio}`);
   ```

2. Open **`index.html`** in your browser, open **DevTools → Console**, and verify that both the original and updated messages appear.

---

## 📝 Notes

- **Template literals** use backticks (\`) instead of quotes, allowing variable embedding with `${}`.  
- `let` allows **reassignment**, while `const` does not.  
- This pattern (declaring, updating, and re-logging) is common in web apps when users edit their profile or settings.

**References:**  
- MDN: [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)  
- MDN: [`let` Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

---

## 💡 Hints

- If you see no output, ensure your `<script>` tag path matches your file name.  
- Remember: don’t wrap template literals in quotes — they must start and end with backticks (\`).

---

## 🏆 Bonus

- Add another variable, such as `isVerified = true`, and include it in your message:  
  ```js
  console.log(`Verified: ${isVerified}`);
  ```
- Experiment with emojis and formatting for a personalized touch!

---

## ✅ Quick Checklist

- [ ] Declared variables using `let`  
- [ ] Logged output using template literals  
- [ ] Reassigned variables and re-logged updated info  
- [ ] Verified output in the browser console  
- [ ] (Bonus) Added one or more extra variables  
