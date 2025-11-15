// TODO: Replace with your own OpenWeather API key.
// NOTE: Do NOT commit your real key to a public repo.
const API_KEY = 'YOUR_API_KEY_HERE';

// Base URLs for OpenWeather endpoints
const CURRENT_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// Grab references to DOM elements
const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');
const messageEl = document.querySelector('#message');
const currentWeatherEl = document.querySelector('#current-weather');
const forecastEl = document.querySelector('#forecast');

// 1. Handle form submit
searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // TODO:
  // - Read the city from the input
  // - If it's empty, show a message and return
  // - Call fetchWeatherData(city)
});

// 2. Fetch current weather + forecast data
function fetchWeatherData(city) {
  // TODO:
  // - Build the URLs with q (city), appid (API key), and units=imperial
  // - Use fetch() (or Promise.all) to call both endpoints
  // - Handle non-OK responses and show an error message
  // - On success, call renderCurrentWeather and renderForecast
}

// 3. Render current weather card
function renderCurrentWeather(data) {
  // TODO:
  // - Clear any existing content
  // - Create a Bootstrap card (or simple div) with:
  //   - City name
  //   - Current temperature
  //   - Feels-like temperature
  //   - Description
  //   - Weather icon (use data.weather[0].icon)
  // - Append it to currentWeatherEl
}

// 4. Render forecast cards (one per day)
function renderForecast(data) {
  // TODO:
  // - Clear any existing forecast cards
  // - data.list is an array of 3-hour forecasts
  // - Filter to one entry per day (e.g., where dt_txt includes '12:00:00')
  // - For each selected item, create a card with:
  //   - Date
  //   - Temp
  //   - Description
  //   - Icon
  // - Append cards to forecastEl (using Bootstrap .col classes for layout)
}

// 5. Helper for showing messages
function setMessage(text, isError = false) {
  messageEl.textContent = text;
  messageEl.classList.toggle('text-danger', isError);
  messageEl.classList.toggle('text-muted', !isError);
}
