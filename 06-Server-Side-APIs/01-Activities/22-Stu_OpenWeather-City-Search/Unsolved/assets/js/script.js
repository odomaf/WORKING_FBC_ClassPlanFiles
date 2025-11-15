// 22-Stu_OpenWeather-City-Search (UNSOLVED)

// ✅ Replace this with YOUR real OpenWeather API key before running.
const apiKey = "YOUR_API_KEY_HERE";

const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const messageEl = document.getElementById("message");
const weatherResult = document.getElementById("weather-result");

/**
 * Helper to show a status / error message to the student.
 */
function showMessage(text, type) {
  // type can be "error" or "info"
  messageEl.textContent = text;

  if (type === "error") {
    messageEl.classList.remove("text-info");
    messageEl.classList.add("text-danger");
  } else {
    messageEl.classList.remove("text-danger");
    messageEl.classList.add("text-info");
  }
}

/**
 * TODO:
 * Step 1 – Use the OpenWeather Geocoding API to convert a city name
 * into latitude and longitude.
 *
 * API docs: https://openweathermap.org/api/geocoding-api
 *
 * Example URL (Denton):
 * https://api.openweathermap.org/geo/1.0/direct?q=Denton&limit=1&appid=YOUR_API_KEY
 */
function getCoordinates(cityName) {
  // 1. Build the geocoding URL using cityName and apiKey.
  // 2. Call fetch(...) with that URL.
  // 3. Convert the response to JSON with response.json().
  // 4. Log the result to the console.
  // 5. Grab the first result’s lat/lon (data[0].lat, data[0].lon).
  // 6. Call getWeatherByCoordinates(lat, lon, locationName, countryCode).
}

/**
 * TODO:
 * Step 2 – Use lat/lon to call the Current Weather API.
 *
 * API docs: https://openweathermap.org/current
 *
 * Example URL:
 * https://api.openweathermap.org/data/2.5/weather?lat=LAT_HERE&lon=LON_HERE&units=imperial&appid=YOUR_API_KEY
 */
function getWeatherByCoordinates(lat, lon, cityLabel, countryCode) {
  // 1. Build the weather URL using lat, lon, apiKey, and units=imperial.
  // 2. Call fetch(...) with that URL.
  // 3. Log the response and data to the console.
  // 4. Check the "cod" value from the JSON (remember to turn it into a Number).
  //    If cod !== 200, show an error message and stop.
  // 5. If successful, call renderWeatherCard(data, cityLabel, countryCode).
}

/**
 * TODO:
 * Step 3 – Render a small “card” with the weather details.
 *
 * Suggested fields:
 * - Temperature (main.temp)
 * - Feels like (main.feels_like)
 * - Description (weather[0].description)
 * - Humidity (main.humidity)
 */
function renderWeatherCard(data, cityLabel, countryCode) {
  // 1. Clear weatherResult.innerHTML.
  // 2. Create a wrapping div with class "card card-rounded mt-3".
  // 3. Create header/body elements and fill in textContent.
  // 4. Append everything into weatherResult.
}

// Form submit handler: start the geocoding → weather chain.
cityForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const cityName = cityInput.value.trim();

  if (!cityName) {
    showMessage("Please enter a city name before searching.", "error");
    return;
  }

  showMessage("Searching for city…", "info");
  weatherResult.innerHTML = "";

  // TODO: Call getCoordinates with the cityName.
  // getCoordinates(cityName);
});
