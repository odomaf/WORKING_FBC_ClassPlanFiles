# 🏗️ Reveal Hidden Numbers Using `data-*` Attributes

Work with a partner to implement the following user story:

> **As a web developer**, I want to toggle between showing and hiding values stored inside custom `data-*` attributes when a user clicks a box.

---

## 🧩 **Objectives**

- Use `dataset` and `getAttribute()` / `setAttribute()` to read and update custom data attributes.  
- Dynamically change an element’s text content based on its data state.  
- Practice event delegation by listening for clicks on a parent container.  
- Reinforce accessibility by supporting keyboard input (`Enter` and `Space`).

---

## ✅ **Acceptance Criteria**

* It’s done when clicking a `.box` reveals its hidden number.  
* It’s done when clicking the same `.box` again hides the number.  
* It’s done when the number values are stored using the `data-number` attribute.  
* It’s done when the visibility state toggles between `hidden` and `visible` using the `data-state` attribute.  
* It’s done when the solution works for **all boxes** using **one event listener** on the parent container.  
* Bonus: The boxes can also be toggled using keyboard keys (`Enter` or `Space`).

---

## 📝 **Instructions**

1. Open the `index.html` file and review how each `.box` element uses `data-number` and `data-state`.  
2. Open `assets/js/script.js`. You’ll see an empty event listener attached to `.container`.  
3. Inside the listener:
   - Check if the clicked element matches `.box`.  
   - Read its `data-state` using either `getAttribute()` or `element.dataset.state`.  
   - If it’s `"hidden"`, set its `textContent` to `element.dataset.number`, and update the state to `"visible"`.  
   - Otherwise, clear its text and reset the state to `"hidden"`.  
4. Test your work — each click should toggle the number on and off.  

💡 **Hint:**  
You can access custom data attributes in two ways:
```js
element.dataset.number;
element.getAttribute('data-number');
```

---

## 🏆 **Bonus Challenge**

If you’ve completed the main task, try one or both of these:

1. Add keyboard accessibility by listening for `keydown` events and toggling when `Enter` or `Space` is pressed.  
2. Change the background color of a `.box` when its number is revealed, then restore the default color when hidden.

---

## 💡 **Resources**

- [MDN: Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)  
- [MDN: Element.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)  
- [MDN: Event delegation guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)
