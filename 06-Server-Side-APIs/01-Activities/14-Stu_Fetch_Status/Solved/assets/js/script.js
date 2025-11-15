// Intentionally incorrect APOD URL to trigger an error
// Correct would be: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
const badRequestUrl = "https://api.nasa.gov/planetary/apod?apiKey=WRONG_KEY";

const responseText = document.getElementById("response-text");

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log("Status:", response.status);

      // Update the page based on the response status
      responseText.textContent = "Status: " + response.status;

      return response.json();
    })
    .then(function (data) {
      console.log("API Response:", data);
    })
    .catch(function (error) {
      console.log("Network error:", error);
    });
}

getApi(badRequestUrl);
