// TODO: Replace with your own OpenWeather API key
const apiKey = "YOUR_API_KEY_HERE";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherOutput = document.getElementById("weather-output");

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
