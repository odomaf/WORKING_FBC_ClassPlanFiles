// 04-Stu_Fetch_StarWars-List — SOLVED

'use strict';

const peopleList = document.getElementById('people-list');
const fetchButton = document.getElementById('fetch-button');

// Correct SWAPI endpoint for the first page of people
const requestUrl = 'https://swapi.dev/api/people/?page=1';

function clearList() {
  while (peopleList.firstChild) {
    peopleList.removeChild(peopleList.firstChild);
  }
}

function addMessage(text) {
  const li = document.createElement('li');
  li.textContent = text;
  peopleList.appendChild(li);
}

function getPeople() {
  clearList();
  fetchButton.disabled = true;
  fetchButton.textContent = 'Loading...';

  fetch(requestUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      if (!data || !data.results || data.results.length === 0) {
        addMessage('No characters found.');
        return;
      }

      for (let i = 0; i < data.results.length; i++) {
        const person = data.results[i];
        const li = document.createElement('li');
        li.textContent = person.name;
        peopleList.appendChild(li);
      }
    })
    .catch(function (err) {
      console.error(err);
      addMessage('Failed to load. Please try again.');
    })
    .finally(function () {
      fetchButton.disabled = false;
      fetchButton.textContent = 'Fetch People';
    });
}

fetchButton.addEventListener('click', getPeople);
