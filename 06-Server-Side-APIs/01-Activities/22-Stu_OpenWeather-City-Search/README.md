# 22-Stu_OpenWeather-City-Search

In this activity, you will use **two** OpenWeather APIs to search for a city and display its current weather:

1. **Geocoding API** – converts a city name into latitude and longitude.
2. **Current Weather API** – uses those coordinates to return weather data.

You will practice chaining multiple fetch calls and updating the DOM with real API data.

---

## 🧠 What You’ll Practice

- Building a URL with query parameters (q, limit, lat, lon, units, appid)
- Making GET requests with `fetch()`
- Parsing JSON with `.json()`
- Chaining API calls (Geocoding → Current Weather)
- Handling errors (missing city, non-200 `cod` values)
- Creating and appending DOM elements to show results

---

## ✅ User Story

As a developer,  
I want to search for a city and see its current weather,  
so that I can practice chaining API calls and rendering data on the page.

---

## ✅ Acceptance Criteria

- When I enter a city name and submit the form:
  - The app makes a request to the **OpenWeather Geocoding API**.
  - If the city is found, it extracts `lat` and `lon`.
  - Then it uses those coordinates to call the **Current Weather API**.
- If the weather request succeeds (`cod` is `200`):
  - A card appears on the page showing:
    - City name (and country code)
    - Temperature and “feels like”
    - Weather description
    - Humidity
- If something goes wrong (city not found, bad response):
  - A helpful error message is displayed instead of a card.

---

## 🗂 Files You’ll Work In

- `index.html`
  - The form, input, and container for the results are already provided.
- `assets/js/script.js`
  - You will complete the functions:
    - `getCoordinates(cityName)`
    - `getWeatherByCoordinates(lat, lon, cityLabel, countryCode)`
    - `renderWeatherCard(data, cityLabel, countryCode)`
  - You will also call `getCoordinates(cityName)` inside the submit handler.

---

## 🔑 API Setup

1. Go to the OpenWeather website and create a free account.
2. Get your API key from your account dashboard.
3. Replace the placeholder value in `script.js`:

   - `const apiKey = "YOUR_API_KEY_HERE";`

Without a valid key, the requests will fail.

---

## 🚦 Step-by-Step Instructions

1. **Wire up the form submit**

   - In the existing `submit` event listener:
     - Prevent the default form behavior.
     - Read and trim the value from `#city-input`.
     - If it’s empty, show an error message.
     - Otherwise, call `getCoordinates(cityName)`.

2. **Implement `getCoordinates(cityName)`**

   - Build the URL for the Geocoding API:

     - Base: `https://api.openweathermap.org/geo/1.0/direct`
     - Query parameters:
       - `q` – the city name (remember to `encodeURIComponent` it)
       - `limit=1`
       - `appid` – your API key

   - Call `fetch(geoUrl)`.
   - Convert the response to JSON (`response.json()`).
   - If the returned array is empty:
     - Show an error message like “City not found. Try another name.”
   - Otherwise:
     - Extract `lat`, `lon`, `name`, and `country` from the first result.
     - Call `getWeatherByCoordinates(lat, lon, name, country)`.

3. **Implement `getWeatherByCoordinates(lat, lon, cityLabel, countryCode)`**

   - Build the URL for the Current Weather API:

     - Base: `https://api.openweathermap.org/data/2.5/weather`
     - Query parameters:
       - `lat` and `lon` – from the geocoding result
       - `units=imperial` (for °F) or `units=metric` (for °C)
       - `appid` – your API key

   - Call `fetch(weatherUrl)`.
   - Convert the response to JSON.
   - Convert `data.cod` to a number using `Number(data.cod)`.
     - If it is not `200`, show an error message including the status and message.
   - If it is `200`, call:
     - `renderWeatherCard(data, cityLabel, countryCode)`.

4. **Implement `renderWeatherCard(data, cityLabel, countryCode)`**

   - Clear any previous content: `weatherResult.innerHTML = ""`.
   - Create a wrapper `div` with classes like `card card-rounded mt-3`.
   - Create a header that shows the city and country.
   - Create paragraphs for:
     - Temperature (`data.main.temp`)
     - Feels like (`data.main.feels_like`)
     - Description (`data.weather[0].description`)
     - Humidity (`data.main.humidity`)
   - Append all of these elements into `weatherResult`.

---

## 💡 Hints

- Use `console.log` on the JSON from each API to understand the shape of the data.
- Remember that `cod` might come back as a string, so cast it with `Number(data.cod)`.
- Use `encodeURIComponent(cityName)` when building the geocoding URL.
- Work one step at a time:
  - First log the geocoding data.
  - Then log the weather data.
  - Then render just one field.
  - Finally, render the full card.

---

## 🏆 Stretch Goals

If you finish early, try adding:

- An icon from `data.weather[0].icon`
- A second card that shows **metric** values alongside **imperial**
- A simple “search history” list under the form
- Basic form validation for very short input (e.g. less than 2 characters)

---

## 🔗 Helpful References

- OpenWeather Geocoding API  
  https://openweathermap.org/api/geocoding-api

- OpenWeather Current Weather API  
  https://openweathermap.org/current

- MDN: Fetch API  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

- MDN: `encodeURIComponent`  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

- MDN: `document.createElement`  
  https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
