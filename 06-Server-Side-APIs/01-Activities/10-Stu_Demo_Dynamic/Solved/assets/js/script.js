// Select DOM nodes
const peopleContainer = document.getElementById('people');
const fetchButton = document.getElementById('load-people');

function getPeople() {
  const requestUrl = 'https://swapi.dev/api/people/?page=1';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('SWAPI Data:', data);

      // Clear before appending new results
      peopleContainer.innerHTML = '';

      // Loop through the results array
      for (let i = 0; i < data.results.length; i++) {
        const person = data.results[i];

        // Create new elements
        const nameEl = document.createElement('h3');
        const infoEl = document.createElement('p');
        const divider = document.createElement('hr');

        // Set text content
        nameEl.textContent = person.name;
        infoEl.textContent =
          'Birth Year: ' + person.birth_year + ' — Gender: ' + person.gender;

        // Append elements to the container
        peopleContainer.append(nameEl);
        peopleContainer.append(infoEl);
        peopleContainer.append(divider);
      }
    })
    .catch(function (error) {
      console.log('Error fetching SWAPI data:', error);
    });
}

// Button triggers the fetch
fetchButton.addEventListener('click', getPeople);
