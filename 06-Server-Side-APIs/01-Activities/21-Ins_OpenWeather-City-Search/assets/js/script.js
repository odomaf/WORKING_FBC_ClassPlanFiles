// assets/js/script.js

// ✅ Replace this with YOUR real OpenWeather API key before demoing.
const apiKey = "YOUR_API_KEY_HERE";

const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const messageEl = document.getElementById("message");
const weatherResult = document.getElementById("weather-result");

/**
 * Helper to safely display a status / error message.
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
 * Step 1: Use OpenWeather Geocoding API to convert a city name into coordinates.
 */
function getCoordinates(cityName) {
  // Example:
  // https://api.openweathermap.org/geo/1.0/direct?q=Denton&limit=1&appid=YOUR_API_KEY
  const geoUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    encodeURIComponent(cityName) +
    "&limit=1&appid=" +
    apiKey;

  showMessage("Searching for city coordinates…", "info");
  weatherResult.innerHTML = "";

  fetch(geoUrl)
    .then(function (response) {
      console.log("Geocoding response:", response);
      return response.json();
    })
    .then(function (data) {
      console.log("Geocoding JSON:", data);

      if (!Array.isArray(data) || data.length === 0) {
        showMessage("City not found. Try another name.", "error");
        return;
      }

      const location = data[0];
      const lat = location.lat;
      const lon = location.lon;

      showMessage(
        "Found " + location.name + ". Fetching current weather…",
        "info"
      );

      // Step 2: With lat/lon, get the current weather.
      getWeatherByCoordinates(lat, lon, location.name, location.country);
    })
    .catch(function (error) {
      console.error("Error fetching geocoding data:", error);
      showMessage("Something went wrong fetching city data.", "error");
    });
}

/**
 * Step 2: Use lat/lon with the Current Weather API.
 */
function getWeatherByCoordinates(lat, lon, cityLabel, countryCode) {
  // Example:
  // https://api.openweathermap.org/data/2.5/weather?lat=...&lon=...&units=imperial&appid=YOUR_API_KEY
  const weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&appid=" +
    apiKey;

  fetch(weatherUrl)
    .then(function (response) {
      console.log("Weather response:", response);
      return response.json();
    })
    .then(function (data) {
      console.log("Weather JSON:", data);

      // Normalize cod to a number because OpenWeather sometimes sends it as a string.
      const code = Number(data.cod);

      if (code !== 200) {
        showMessage(
          "Weather request failed (" + data.cod + "): " + (data.message || ""),
          "error"
        );
        weatherResult.innerHTML = "";
        return;
      }

      renderWeatherCard(data, cityLabel, countryCode);
      showMessage("Weather loaded successfully!", "info");
    })
    .catch(function (error) {
      console.error("Error fetching weather data:", error);
      showMessage("Something went wrong fetching weather data.", "error");
    });
}

/**
 * Step 3: Render the result into the page.
 */
function renderWeatherCard(data, cityLabel, countryCode) {
  weatherResult.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card card-rounded mt-3";

  const header = document.createElement("header");
  header.className = "card-header";
  const title = document.createElement("h3");
  title.className = "text-white";
  title.textContent =
    cityLabel +
    (countryCode ? ", " + countryCode.toUpperCase() : "") +
    " – Current Weather";
  header.appendChild(title);

  const body = document.createElement("div");
  body.className = "card-body";

  const temp = document.createElement("p");
  temp.textContent = "Temperature: " + data.main.temp + " °F";

  const feels = document.createElement("p");
  feels.textContent = "Feels like: " + data.main.feels_like + " °F";

  const conditions = document.createElement("p");
  conditions.textContent =
    "Conditions: " +
    (data.weather && data.weather[0]
      ? data.weather[0].description
      : "Not available");

  const humidity = document.createElement("p");
  humidity.textContent = "Humidity: " + data.main.humidity + "%";

  body.appendChild(temp);
  body.appendChild(feels);
  body.appendChild(conditions);
  body.appendChild(humidity);

  card.appendChild(header);
  card.appendChild(body);
  weatherResult.appendChild(card);
}

/**
 * Form submit handler (prevents reload + starts the geocoding → weather chain).
 */
cityForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const cityName = cityInput.value.trim();

  if (!cityName) {
    showMessage("Please enter a city name before searching.", "error");
    return;
  }

  getCoordinates(cityName);
});
