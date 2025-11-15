// Base URL for NASA's Astronomy Picture of the Day (APOD) API
const apodBaseUrl = "https://api.nasa.gov/planetary/apod";

// Query parameters:
// - api_key: your key to access the NASA API (DEMO_KEY is a public testing key)
// - date: specific calendar date for the APOD (YYYY-MM-DD)
// - thumbs: if true, returns a thumbnail URL for videos
const queryParams = "?api_key=DEMO_KEY&date=2021-06-01&thumbs=true";

// Combine base URL + query string into a full request URL
const requestUrl = apodBaseUrl + queryParams;

console.log("Request URL:", requestUrl);

fetch(requestUrl)
  .then(function (response) {
    console.log("HTTP Status:", response.status);
    // Parse the JSON body so we can use the data
    return response.json();
  })
  .then(function (data) {
    console.log("NASA APOD Response\n------------------");
    console.log(data);
    // You can optionally point out: data.title, data.date, data.url, data.explanation
  })
  .catch(function (error) {
    console.log("Network error:", error);
  });
