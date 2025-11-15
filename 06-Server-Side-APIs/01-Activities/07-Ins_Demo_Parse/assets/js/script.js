// 07-Ins-Demo_Parse — Instructor Demo
// Goal: Demonstrate how to parse JSON and extract specific properties from an API response
// Rules: Use let/const, fetch + .then(), and no arrow functions or async/await

'use strict';

// --------------------------
// Example 1: Raw JSON data
// --------------------------
fetch('https://swapi.dev/api/people/?page=1')
  .then(function (response) {
    // .json() parses the raw response into a JavaScript object
    return response.json();
  })
  .then(function (data) {
    console.log('Star Wars Characters: Full JSON Data\n--------------------------');
    console.log(data);

    // TEACHING NOTES:
    // - `data` is an object with keys like count, next, previous, results
    // - `results` contains an array of individual character objects
  })
  .catch(function (error) {
    console.error('Error fetching characters:', error);
  });

// -----------------------------------
// Example 2: Extracting specific data
// -----------------------------------
fetch('https://swapi.dev/api/starships/?page=1')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Star Wars Starships: Names Only\n--------------------------');

    // data.results is an array — we can loop through it
    for (let i = 0; i < data.results.length; i++) {
      const starship = data.results[i];
      console.log(starship.name);
    }

    // TEACHING NOTES:
    // - Students can modify the loop to log other properties like model or crew
  })
  .catch(function (error) {
    console.error('Error fetching starships:', error);
  });
