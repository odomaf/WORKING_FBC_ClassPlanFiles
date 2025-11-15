# 18-Stu_Fetch-Options (NASA APOD Edition)

In this activity, you will make a `fetch()` request to the NASA APOD  
(Astronomy Picture of the Day) API and use the **cache reload option**.

This demonstrates how to pass an options object into `fetch()`.

---

## 🧠 What You Will Practice

- Adding a fetch options object
- Using the `cache: "reload"` setting
- Inspecting API results
- Working with a real external API (NASA APOD)

---

## ✅ User Story

As a developer, I want my fetch requests to reload cached resources  
so that I always receive the most recent data from the server.

---

## ✅ Acceptance Criteria

- A call to `fetch()` is made using the NASA APOD API.
- The `cache` option is set to `"reload"`.
- The JSON response is logged to the console.

---

## 🗂 Files to Edit

- `assets/js/script.js`

---

## 🚦 Instructions

1. Open `assets/js/script.js`.
2. Create a variable for the request URL, for example:

```
const requestUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
```

3. Call:

```
fetch(requestUrl, { cache: "reload" })
```

4. Use `.then()` to parse and log the data:

```
.then(function(response) { return response.json(); })
.then(function(data) { console.log(data); });
```

5. Open the browser and inspect the results in DevTools → Console.

---

## 💡 Hints

- The `cache` option tells the browser whether to reuse or refresh cached data.
- `"reload"` forces the browser to skip its cache and refetch the resource.
- The APOD API always returns JSON, even for errors.

---

## 🏆 Stretch Goals

- Display the APOD title or explanation on the page.
- Add error handling using `.catch()`.
- Try different `cache` values like `"no-store"` or `"force-cache"`.

---

## 🔗 Helpful References

NASA APIs: https://api.nasa.gov/  
MDN – Fetch Options: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch  
MDN – Cache Modes: https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
