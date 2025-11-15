const badRequestUrl = "https://api.nasa.gov/planetary/apod?apiKey=WRONG_KEY";

const responseText = document.getElementById("response-text");

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response.status);

      // TODO:
      // Use response.status to update the page.
      // If the status is not 200, display it inside #response-text.

      return response.json();
    })
    .then(function (data) {
      // TODO:
      // Look at the returned data in the console.
      // NASA returns JSON even for errors—inspect what it looks like.
      console.log(data);
    })
    .catch(function (error) {
      console.log("Network error:", error);
    });
}

getApi(badRequestUrl);