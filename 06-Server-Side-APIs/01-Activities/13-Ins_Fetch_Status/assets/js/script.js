// NASA APOD (Astronomy Picture of the Day) API endpoint using demo key
const requestUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const responseText = document.getElementById('response-text');

function getApi(requestUrlArg) {
  fetch(requestUrlArg)
    .then(function (response) {
      console.log("Full Response:", response);

      // Display HTTP status (200 means success)
      responseText.textContent = "Status: " + response.status;

      return response.json();
    })
    .then(function (data) {
      console.log("APOD Data:", data);

      // Helpful to show something meaningful from APOD
      const titleEl = document.createElement('p');
      titleEl.textContent = "Title: " + data.title;

      responseText.appendChild(titleEl);
    })
    .catch(function (error) {
      console.log("Fetch error:", error);
    });
}

getApi(requestUrl);
