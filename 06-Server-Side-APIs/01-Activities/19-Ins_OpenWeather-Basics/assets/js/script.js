// 19-Ins_OpenWeather_Basics
// Instructor demo: basic OpenWeather "Current Weather" request by city name.

// IMPORTANT:
// For the public repo / starter code, leave this as "YOUR_API_KEY_HERE".
// In class, you (the instructor) can temporarily paste your real key
// to show a live demo.
const apiKey = "YOUR_API_KEY_HERE";

// We'll start with a single, hard-coded city for the demo.
const cityName = "Dallas";

// Base URL for the "Current Weather" endpoint (by city name).
// Docs: https://openweathermap.org/current
const requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    encodeURIComponent(cityName) +
    "&units=imperial&appid=" +
    apiKey;

console.log("Request URL:", requestUrl);

fetch(requestUrl)
    .then(function (response) {
        console.log("Raw Response object:", response);

        // Show the HTTP status code so students see 401/404/etc if the key/city is wrong.
        console.log("HTTP Status:", response.status);

        // Even on many errors, OpenWeather still returns JSON we can inspect.
        return response.json();
    })
    .then(function (data) {
        console.log("Parsed JSON data:", data);

        // If the request worked, OpenWeather returns "cod: 200".
        // Use a simple guard to avoid errors if it did not.
        if (data.cod === 200 || data.cod === "200") {
            const name = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;

            console.log("Summary:");
            console.log("City:", name);
            console.log("Temperature (°F):", temp);
            console.log("Conditions:", description);
        } else {
            // For example: invalid API key, unknown city, etc.
            console.log("OpenWeather returned an error code:", data.cod);
            console.log("Message from API:", data.message);
        }
    })
    .catch(function (error) {
        // This will catch network errors, not API-level errors like 401.
        console.error("Network or fetch error:", error);
    });
