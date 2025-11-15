# 🌦️ Week 6 — Server-Side APIs

### Resource Sheet + Lesson Plan Support

This week focuses on Server-Side APIs, fetch(), query parameters, localStorage, and using the OpenWeather API to build a Weather Dashboard.

Students will learn how to:

- Fetch data from third-party APIs
- Parse and use JSON responses
- Chain multiple API calls (city → coordinates → forecast)
- Dynamically update UI elements
- Store and retrieve data from localStorage
- Handle errors and edge cases

---

# 📚 Core Concepts & Recommended Resources

Below are curated resources from MDN, W3Schools, Codecademy, and the Bootcamp activity flow.

---

## 1. Fetching Data from APIs with fetch()

MDN Docs:  
Fetch API Overview: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API  
fetch() usage: https://developer.mozilla.org/en-US/docs/Web/API/fetch

W3Schools:  
Fetch Intro: https://www.w3schools.com/js/js_api_fetch.asp

Codecademy Courses:  
JavaScript: Requests  
https://www.codecademy.com/learn/introduction-to-javascript/modules/js-requests

Learn JavaScript (Async Section)  
https://www.codecademy.com/learn/introduction-to-javascript

Key Skills:

- Using fetch(url).then().catch()
- Using async/await
- Parsing JSON
- Handling failed responses
- Understanding CORS vs API errors

---

## 2. Query Parameters & URLSearchParams

MDN Docs:  
URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

W3Schools:  
URL encoding basics: https://www.w3schools.com/tags/ref_urlencode.ASP

Critical This Week:

- Passing q=cityName between pages
- Building URLs dynamically
- Encoding user input safely
- Reading query params on a results page

---

## 3. OpenWeather API (Geocoding + Forecast)

OpenWeather Docs:

- Geocoding API: https://openweathermap.org/api/geocoding-api
- 5-Day Forecast: https://openweathermap.org/forecast5
- Weather Icons: https://openweathermap.org/weather-conditions

Bootcamp Goals:

- Step 1: Convert city name → coordinates  
  Example: http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={key}
- Step 2: Use lat/lon to fetch weather forecast  
  Example: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={key}
- Extract temp, humidity, wind, icons
- Filter to one "midday" entry per day

---

## 4. Using localStorage

MDN Docs:  
Web Storage API: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

W3Schools:  
localStorage tutorial: https://www.w3schools.com/js/js_api_web_storage.asp

Use Cases:

- Save search history
- Load previous cities on page load
- Avoid duplicates
- Optional “Clear history” button

---

## 5. DOM Manipulation for Weather Cards

MDN Docs:

- createElement: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
- classList: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

Codecademy:  
DOM Manipulation:  
https://www.codecademy.com/learn/introduction-to-javascript/modules/dom-introduction

Required Patterns:

- Clearing containers before adding new data
- Building cards with elements, classes, and textContent
- Reusable functions (renderCurrentWeather, renderForecast)

---

## 6. Error Handling & Debugging

MDN Docs:  
Console API: https://developer.mozilla.org/en-US/docs/Web/API/console

W3Schools:  
JavaScript Errors: https://www.w3schools.com/js/js_errors.asp

Students Often Forget:

- Check response.ok
- Handle “city not found”
- Handle missing forecast data
- Use console.log() heavily while building

---

# 🗂️ Week 6 Lesson Plan Overview

### Day 1: Intro to Server-Side APIs

- What APIs are
- How fetch works
- JSON deep dive
- Warm-up: Fetch Cat Facts or Pokémon data

### Day 2: Weather API Basics

- Setting up the API key
- Testing routes in browser
- Geocoding → Forecast
- Activity: Log weather for one city

### Day 3: UI + Current Weather

- Render a "Current Conditions" card
- Formatting dates
- Using icon URLs
- Activity: Build the current weather card

### Day 4: Forecast + Search History

- Filtering to midday entries
- Making 5-day cards
- Implementing localStorage
- Activity: Clickable history buttons

### Day 5: Integration + Polishing

- Full project integration
- Handle invalid input
- Optional stretch goals
- Activity: Final cleanup + styling

---

# 🧠 Extra Learning Resources

YouTube Channels:

- Fireship (fast API videos): https://youtube.com/fireship
- Web Dev Simplified: https://www.youtube.com/c/WebDevSimplified

Developer Tools:

- Chrome DevTools Network tab
- JSON Formatter browser extensions
- Hoppscotch/Postman (optional)

---

# 🔥 Tips for Student Success

- Test API URLs directly in the browser before writing code.
- Log everything while exploring the data structure.
- Write one small UI function at a time.
- Save only city names in localStorage, not complicated objects.
- Keep functions small and organized (fetchWeather, renderCurrent, renderForecast).

---
