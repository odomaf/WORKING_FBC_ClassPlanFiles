// Students will use their own API key.
const apiKey = "YOUR_API_KEY_HERE";

// DOM elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherOutput = document.getElementById("weather-output");

// Main function to fetch current weather by city
function getCurrentWeather(cityName) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    encodeURIComponent(cityName) +
    "&units=imperial&appid=" +
    apiKey;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("API Response:", data);

      // Basic error handling
      if (data.cod !== 200 && data.cod !== "200") {
        weatherOutput.innerHTML =
          "<p class='text-danger'>Error: " + data.message + "</p>";
        return;
      }

      // Extract data
      const name = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;

      // Display results
      weatherOutput.innerHTML =
        "<h3>" + name + "</h3>" +
        "<p>Temperature: " + temp + " °F</p>" +
        "<p>Conditions: " + description + "</p>";
    })
    .catch(function (error) {
      weatherOutput.innerHTML =
        "<p class='text-danger'>Network Error: " + error + "</p>";
    });
}

// Event listener
searchBtn.addEventListener("click", function () {
  const cityName = cityInput.value.trim();

  if (cityName === "") {
    weatherOutput.innerHTML =
      "<p class='text-danger'>Please enter a city name.</p>";
    return;
  }

  getCurrentWeather(cityName);
});
