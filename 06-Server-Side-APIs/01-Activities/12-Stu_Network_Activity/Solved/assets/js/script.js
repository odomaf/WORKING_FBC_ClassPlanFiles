// Demonstration fetch so students see at least one successful network request
const requestUrl = "https://swapi.dev/api/planets/?page=1";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("SWAPI data:", data);
  });
