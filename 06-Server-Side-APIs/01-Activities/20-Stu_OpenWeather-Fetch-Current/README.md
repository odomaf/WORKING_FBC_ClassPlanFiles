# 20-Stu_OpenWeather-Fetch-Current

In this activity, you will use the **OpenWeather Current Weather API** to fetch
live weather data based on a city name and display the results on the page.

This is your first hands-on weather activity.

---

## 🧠 What You Will Practice

- Building a URL using user input
- Calling an API with `fetch()`
- Parsing JSON with `.then()`
- Displaying data in the DOM
- Handling basic errors
- Using your own API key from OpenWeather

---

## ✅ User Story

As a user, I want to enter a city name  
so that I can see the current weather for that city.

---

## ✅ Acceptance Criteria

- When I type a city name and click **Get Weather**, a fetch request is sent.
- The fetch request uses the **Current Weather** endpoint:
  ```
  https://api.openweathermap.org/data/2.5/weather
  ```
- The API key is included in the URL.
- The temperature, city name, and weather description display on the page.
- Errors (bad city name, invalid key) show a helpful message.

---

## 🗂 Files to Edit

- `assets/js/script.js`

---

## 🚦 Steps to Complete

1. Sign up for an API key:  
   https://openweathermap.org/api

2. Open `assets/js/script.js`.

3. Replace:

   ```
   const apiKey = "YOUR_API_KEY_HERE";
   ```

   with your own key.

4. Build a URL like:

   ```
   https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=YOUR_KEY
   ```

5. Write `getCurrentWeather(city)` to:

   - Fetch the URL
   - Return `response.json()`
   - Extract:
     - `data.name`
     - `data.main.temp`
     - `data.weather[0].description`

6. Update the DOM inside the second `.then()`.

7. Add the click event listener for the button.

---

## 💡 Hints

- Always check for misspelled city names.
- Use `console.log(data)` to explore the response.
- `"units=imperial"` gives Fahrenheit.
- If API returns:
  ```
  cod: "404"
  ```
  then the city is not found.

---

## 🏆 Stretch Goals

- Display an icon using the OpenWeather icon URL.
- Add humidity or wind speed.
- Add Enter key support.
- Make recent searches appear below using localStorage.

---

## 🔗 Helpful References

OpenWeather Docs: https://openweathermap.org/current  
MDN – Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
