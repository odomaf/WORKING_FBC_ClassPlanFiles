# 12-Stu_Network-Activity (SWAPI Edition)

In this activity, you will use the **Network** tab in Chrome DevTools to
diagnose why a JavaScript file is failing to load.

---

## 🧩 Objective

As a developer, I want all of my scripts to load correctly  
so that the browser can run my JavaScript code without errors.

---

## ✅ Expected Behavior

- The request for `script.js` should show a **Status 200 (OK)**.
- The SWAPI request should also load successfully.

## ❌ Actual Behavior (Unsolved Version)

- The request for `script.js` shows **(failed)** in red in the Network tab.
- The JavaScript never runs.

---

## 🔍 Steps to Reproduce

1. Open **Unsolved/index.html** in your browser.
2. Open **DevTools → Network**.
3. Reload the page (`Cmd/Ctrl + R`).
4. Look for a red request.
5. Click it to inspect:
   - **Status code**
   - **Request URL**
   - **Error message**

---

## 🛠 Your Task

Fix the issue in `index.html` so that:

- The script loads correctly
- The Network tab shows a **200 OK**
- `script.js` runs and logs SWAPI data to the console

---

## 💡 Hints

- Compare your script path to the project folder structure.
- Check for typos in folder names.
- Status codes help identify exactly what failed.

---

## 🏆 Bonus Challenge

Research the following:

- What does each column in the Network tab mean?
- What is the difference between **(failed)**, **404**, and **304** statuses?
- What does the **Initiator** column tell you?

---

## 🔗 References

- Chrome DevTools Network Panel  
  https://developer.chrome.com/docs/devtools/network
- MDN: Fetch  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- SWAPI  
  https://swapi.dev/
