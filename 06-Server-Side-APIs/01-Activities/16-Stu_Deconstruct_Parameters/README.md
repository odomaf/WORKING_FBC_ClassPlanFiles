# 15-Stu_Deconstruct-Parameters (NASA APOD Edition)

In this activity, you will examine a URL that includes **query parameters** and add comments explaining what each parameter does.  
You’ll use the **NASA Astronomy Picture of the Day (APOD)** API.

---

## 🧠 What You Will Practice

- How APIs accept configuration using URL parameters
- Reading and understanding a request URL
- Using `fetch()` and `.then()`
- Inspecting API responses in DevTools
- Adding meaningful comments in code

---

## ✅ User Story

As a developer, I want to understand how query parameters work  
so that I can control the data an API returns.

---

## ✅ Acceptance Criteria

- When I open the browser, a request is made to the NASA APOD API.
- The full JSON response logs in the console.
- The student adds comments explaining **each parameter** in the URL.
- Parameters are explained in plain English.

---

## 🗂 Files to Edit

- `assets/js/script.js`

---

## 🚦 Instructions

1. Open `assets/js/script.js` in VS Code.
2. Examine the request URL:

```
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2023-07-01&thumbs=true&concept_tags=True
```

3. Add comments explaining what each query parameter does:

- `api_key=`
- `date=`
- `thumbs=`
- `concept_tags=`

4. Save your file and open `index.html` in the browser.
5. Open DevTools → Console and observe the API response.
6. Verify that your comments clearly explain how the parameters affect the request.

---

## 💡 Hints

- Every `?key=value` pair changes the response from the server.
- NASA’s API will still return JSON even if a parameter is invalid.
- Use `console.log()` to study the structure of the result.

---

## 🏆 Stretch Goals

- Try changing the `date` to another day.
- Turn `thumbs=true` into `thumbs=false` and compare results.
- Look up additional APOD parameters in NASA’s documentation.
- Try adding an invalid parameter and observe what happens.

---

## 🔗 Helpful References

- NASA Open APIs: https://api.nasa.gov/
- MDN – Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN – URL Search Params: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
