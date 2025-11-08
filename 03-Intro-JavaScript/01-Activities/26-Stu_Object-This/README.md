# 💼 Understanding `this` in Context — Startup Simulation (26-Stu_Object-This)

Work with a partner to explore how the JavaScript keyword **`this`** changes depending on where it’s used — in the global scope, inside objects, and within nested objects.

---

## 👤 User Story

> **As a JavaScript developer,**  
> I want to understand how the keyword `this` behaves in different contexts,  
> so that I can write clearer, more predictable object methods.

---

## ✅ Acceptance Criteria

- **It’s done when** I log the value of `this` in the global scope and observe what it returns.  
- **It’s done when** I create an object with a method that references its own properties using `this`.  
- **It’s done when** I create a nested object with a method that uses `this` to access one of its properties.  
- **It’s done when** I can explain why each `this` refers to different objects in each example.  

---

## 🧱 Your Task

1. Create a new file named **`script.js`**.  
2. In your file, complete the following steps:  

   - **Step 1:** Log the value of `this` in the global scope to see what it refers to (it should be the global object).  
   - **Step 2:** Create a **standalone function** that logs `this` when executed.  
   - **Step 3:** Create an object named `employee` with the following properties:  
     - `name` (string)  
     - `yearsAtCompany` (number)  
     - A method named `celebrateAnniversary()` that uses `this` to access the employee’s properties and log a message to the console.  
   - **Step 4:** Create a **nested object** named `startup` that includes:  
     - A `name` property (string)  
     - A `portfolio` object containing:  
       - `seedInvestment` (number)  
       - A method named `calculateGrowth()` that logs the projected investment growth using `this.seedInvestment`.  
   - **Step 5:** Call all functions and methods to observe how `this` changes in each case.

---

## 💡 Example Output

Your output should look something like this:

```
👋 Inside this function, "this" is: Window
🎉 Congrats Jordan! In 10 years, you'll celebrate 13 years at TechNova!
📈 Projected Growth: $125000
```

*(Exact output may vary depending on your object names and values.)*

---

## 📝 Notes

- In **global scope**, `this` refers to the global object (`window` in browsers).  
- In **object methods**, `this` refers to the **object itself**.  
- In **nested objects**, `this` refers to the **nearest parent object** that owns the method.  
- Avoid using arrow functions for methods if you need `this` to refer to the object, as arrow functions don’t have their own `this`.  

---

## 🧠 Bonus Challenges

- Add another method in the nested object that calls a method from the parent object — what happens to `this`?  
- Experiment by replacing a regular method with an **arrow function** and note how `this` behaves differently.  
- Create a class named `Employee` with a constructor and a method — how does `this` behave inside a class compared to a regular object?  

---

## ✅ Quick Checklist

- [ ] Logged `this` globally and inside a regular function  
- [ ] Created an object method using `this`  
- [ ] Created a nested object using `this`  
- [ ] Tested all function and method outputs  
- [ ] Observed how `this` changes in each context  
- [ ] (Bonus) Tested arrow functions or class methods  
