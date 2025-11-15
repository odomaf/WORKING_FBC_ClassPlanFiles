// NASA APOD API base
const apodBaseUrl = "https://api.nasa.gov/planetary/apod";

// Query parameters we’ll include in the request URL
const queryParams = "?api_key=DEMO_KEY&date=2023-06-01&thumbs=true";

// Build the full request URL
const requestUrl = apodBaseUrl + queryParams;

console.log("Request URL:", requestUrl);

// Demonstrate fetch options
fetch(requestUrl, {
  method: "GET",            // Default, but included for demonstration
  redirect: "follow",       // follow | error | manual
  cache: "no-cache",        // default | reload | no-cache | force-cache
  credentials: "omit"       // omit | same-origin | include (NASA does not require auth cookies)
})
  .then(function (response) {
    console.log("Status Code:", response.status);
    return response.json();
  })
  .then(function (data) {
    console.log("NASA APOD Data:");
    console.log(data);
  })
  .catch(function (error) {
    console.error("Network Error:", error);
  });
