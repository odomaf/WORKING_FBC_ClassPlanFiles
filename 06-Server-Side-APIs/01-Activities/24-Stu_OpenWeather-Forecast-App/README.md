# 24-Stu_OpenWeather_Forecast_App

Build a small weather dashboard where a user can:

- Type a **city name**
- See the **current weather**
- See a **multi-day forecast** as a row of cards

You’ll use the **same OpenWeather endpoints** from the previous activities and combine them into a single UI.

---

## Objectives

By the end of this activity, you should be able to:

- Read user input from a form and prevent the default submit behavior
- Use `fetch()` to call **two** API endpoints
- Work with JSON responses to pull out useful fields
- Dynamically create and insert DOM elements for a “card per day” layout
- Gracefully handle errors (bad city name, network issues, etc.)

---

## Setup

1. Make sure you have an OpenWeather API key.  
   If you don’t, sign up at their site and get one.

2. In `script.js`, replace:

   ```js
   const API_KEY = "YOUR_API_KEY_HERE";
   ```
