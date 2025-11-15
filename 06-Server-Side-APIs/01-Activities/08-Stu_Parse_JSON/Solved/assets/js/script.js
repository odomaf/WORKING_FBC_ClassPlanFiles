// 08-Stu_Parse-JSON (UNSOLVED)
// Goal: Use fetch + .then() to get JSON from SWAPI and log specific fields
// Rules: Use let/const, no arrow functions, no async/await

'use strict';

// 1) Set the request URL to the SWAPI people endpoint.
//    Docs: https://swapi.dev/documentation#people
//    We only need the FIRST PAGE (which already has 10 results).
//    Then we will take the first 5.
const requestUrl = 'https://swapi.dev/api/people/';

// 2) Use fetch(requestUrl).then(...).then(...)
//    - In the first .then(), return response.json()
//    - In the second .then(data), inspect data in the console to understand the shape
//    - data.results is an array. Loop over the FIRST FIVE (index 0..4)
//      and console.log the character's name and birth_year
//    - Use try/catch-like thinking with defensive checks (optional bonus)

fetch(requestUrl)
  .then(function (response) {
    // TODO: return the parsed JSON object
    return response.json();
  })
  .then(function (data) {
    // TODO: console.log the raw data to see structure
    console.log('SWAPI People: Raw data\n----------');
    console.log(data);

    // TODO: loop the first 5 people and log name + birth_year
    // HINT: data.results is the array of people
    for (let i = 0; i < 5; i++) {
      const person = data.results[i];
      // Log e.g. "Luke Skywalker — 19BBY"
      console.log(person.name + ' — ' + person.birth_year);
    }
  })
  .catch(function (error) {
    // Optional: basic error handling
    console.error('Error fetching SWAPI people:', error);
  });
