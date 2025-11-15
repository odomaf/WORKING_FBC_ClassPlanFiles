// 03-Ins_Demo-Fetch — edX style (no IIFE, no arrow funcs), using let/const
// Topic: fetch() -> .then() -> JSON -> render into table
// API: Star Wars API (SWAPI)

'use strict';

const tableBody = document.getElementById('repo-table');
const fetchButton = document.getElementById('fetch-button');

function clearTable() {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

function addRow(name, url) {
  const tr = document.createElement('tr');

  const tdName = document.createElement('td');
  tdName.textContent = name;

  const tdLink = document.createElement('td');
  const a = document.createElement('a');
  a.href = url;                // SWAPI resource URL
  a.target = '_blank';
  a.rel = 'noreferrer noopener';
  a.textContent = 'View on SWAPI';

  tdLink.appendChild(a);
  tr.appendChild(tdName);
  tr.appendChild(tdLink);
  tableBody.appendChild(tr);
}

function addMessageRow(text) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.colSpan = 2;
  td.textContent = text;
  tr.appendChild(td);
  tableBody.appendChild(tr);
}

function getPeople() {
  const requestUrl = 'https://swapi.dev/api/people/?page=1';

  // simple loading state
  fetchButton.disabled = true;
  fetchButton.textContent = 'Loading...';
  clearTable();

  fetch(requestUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      if (!data || !data.results || data.results.length === 0) {
        addMessageRow('No characters found.');
        return;
      }

      for (let i = 0; i < data.results.length; i++) {
        const person = data.results[i];
        addRow(person.name, person.url);
      }
    })
    .catch(function (err) {
      console.error(err);
      addMessageRow('Failed to load. Please try again.');
    })
    .finally(function () {
      fetchButton.disabled = false;
      fetchButton.textContent = 'Load Characters';
    });
}

fetchButton.addEventListener('click', getPeople);
