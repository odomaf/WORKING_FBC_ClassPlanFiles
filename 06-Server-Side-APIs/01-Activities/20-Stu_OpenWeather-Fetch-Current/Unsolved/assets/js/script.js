// TODO: Replace with your own OpenWeather API key
const apiKey = "85faa379462780b837827feca1804de9";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherOutput = document.getElementById("weather-output");
let cityName = "Champaign";

function getCurrentWeather(cityName) {
  const requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    encodeURIComponent(cityName) +
    "&units=imperial&appid=" +
    apiKey;

  fetch(requestUrl)
    .then(function (response) {
      console.log("Raw Response object:", response);

      // Show the HTTP status code so students see 401/404/etc if the key/city is wrong.
      console.log("HTTP Status:", response.status);

      // Even on many errors, OpenWeather still returns JSON we can inspect.
      return response.json();
    })
    .then(function (data) {
      const name = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;
      console.log(`City: ${name}`);
      console.log(`Temp: ${temp}`);
      console.log(`Description: ${description}`);
    });
}
// TODO:
// 1. Write a function named getCurrentWeather(cityName)
//    that builds the OpenWeather URL and makes a fetch() request.

// Example endpoint:
// https://api.openweathermap.org/data/2.5/weather?q=CITY&units=imperial&appid=YOUR_KEY

// TODO: Inside getCurrentWeather:
// - Build the URL with the city name
// - Call fetch(url)
// - In the first .then(), return response.json()
// - In the second .then(), display:
//     City name
//     Temperature (°F)
//     Weather description

// TODO: Add a click event listener to the search button
// When clicked, it should call getCurrentWeather()
// using the value from cityInput.
$(function () {
  $("search-btn").on("click", getCurrentWeather("Champaign"));
});
