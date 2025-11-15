// 04-Stu_Fetch_StarWars-List — Student Starter
// Goal: Build the correct SWAPI URL and render names into the <ul>.

'use strict';

const peopleList = document.getElementById('people-list');
const fetchButton = document.getElementById('fetch-button');

// TODO: Set this to the correct SWAPI endpoint for page 1 of people.
// Example shape: 'https://swapi.dev/api/people/?page=1'
const requestUrl = 'REPLACE_ME_WITH_SWAPI_PEOPLE_PAGE_1';

function clearList() {
  while (peopleList.firstChild) {
    peopleList.removeChild(peopleList.firstChild);
  }
}

function getPeople() {
  clearList();

  // Fetch the people list from SWAPI
  fetch(requestUrl)
    .then(function (response) {
      // Convert the response body into JSON
      return response.json();
    })
    .then(function (data) {
      // data.results should be an array of people objects
      for (let i = 0; i < data.results.length; i++) {
        const person = data.results[i];

        const li = document.createElement('li');
        li.textContent = person.name;

        peopleList.appendChild(li);
      }
    });
}

fetchButton.addEventListener('click', getPeople);
