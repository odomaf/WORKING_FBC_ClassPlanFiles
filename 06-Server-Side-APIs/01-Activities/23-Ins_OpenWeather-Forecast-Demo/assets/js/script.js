// 23-Ins_OpenWeather_Forecast_Demo (SOLVED)

// ✅ Replace this with YOUR actual OpenWeather API key before demoing.
const apiKey = "YOUR_API_KEY_HERE";

// Fixed demo city
const demoCityName = "Chicago";

const forecastButton = document.getElementById("forecast-button");
const messageEl = document.getElementById("message");
const forecastList = document.getElementById("forecast-list");

function showMessage(text, type) {
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
 * Build the OpenWeather 5-day / 3-hour forecast URL using the city name.
 * Docs: https://openweathermap.org/forecast5
 */
function buildForecastUrl(cityName) {
  // Example:
  // https://api.openweathermap.org/data/2.5/forecast?q=Denton&units=imperial&appid=YOUR_API_KEY
  const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
  const query =
    "?q=" +
    encodeURIComponent(cityName) +
    "&units=imperial&appid=" +
    apiKey;
  return baseUrl + query;
}

function fetchForecastForCity(cityName) {
  const url = buildForecastUrl(cityName);

  showMessage("Fetching forecast for " + cityName + "…", "info");
  forecastList.innerHTML = "";

  fetch(url)
    .then(function (response) {
      console.log("Forecast response object:", response);
      return response.json();
    })
    .then(function (data) {
      console.log("Forecast JSON data:", data);

      // In this endpoint, cod is often returned as a string, e.g. "200".
      const code = Number(data.cod);

      if (code !== 200) {
        showMessage(
          "Forecast request failed (" + data.cod + "): " + (data.message || ""),
          "error"
        );
        return;
      }

      showMessage(
        "Showing a few upcoming forecast entries for " + data.city.name + ".",
        "info"
      );

      renderForecastCards(data);
    })
    .catch(function (error) {
      console.error("Error fetching forecast:", error);
      showMessage("Something went wrong fetching the forecast.", "error");
    });
}

/**
 * Render a handful of upcoming forecast entries as cards.
 * `data.list` is an array of 3-hour forecasts.
 */
function renderForecastCards(data) {
  forecastList.innerHTML = "";

  const list = data.list;

  if (!Array.isArray(list) || list.length === 0) {
    showMessage("No forecast data available.", "error");
    return;
  }

  // Show the first 5 forecast entries for the demo.
  const maxEntries = 5;

  for (let i = 0; i < list.length && i < maxEntries; i++) {
    const entry = list[i];

    const dateTime = entry.dt_txt; // e.g. "2025-11-12 18:00:00"
    const temp = entry.main && entry.main.temp;
    const feelsLike = entry.main && entry.main.feels_like;
    const description =
      entry.weather && entry.weather[0]
        ? entry.weather[0].description
        : "No description";

    // Create the card container
    const card = document.createElement("div");
    card.className = "card card-rounded mb-2";

    const header = document.createElement("header");
    header.className = "card-header";

    const title = document.createElement("h3");
    title.className = "text-white";
    title.textContent = dateTime;

    header.appendChild(title);

    const body = document.createElement("div");
    body.className = "card-body";

    const tempEl = document.createElement("p");
    tempEl.textContent = "Temp: " + temp + " °F";

    const feelsEl = document.createElement("p");
    feelsEl.textContent = "Feels like: " + feelsLike + " °F";

    const descEl = document.createElement("p");
    descEl.textContent = "Conditions: " + description;

    body.appendChild(tempEl);
    body.appendChild(feelsEl);
    body.appendChild(descEl);

    card.appendChild(header);
    card.appendChild(body);

    forecastList.appendChild(card);
  }
}

// Click handler for the demo button
forecastButton.addEventListener("click", function () {
  fetchForecastForCity(demoCityName);
});
