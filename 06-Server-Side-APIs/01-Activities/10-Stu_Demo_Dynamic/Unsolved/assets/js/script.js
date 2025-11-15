// Select DOM nodes
const peopleContainer = document.getElementById("people");
const fetchButton = document.getElementById("load-people");

function getPeople() {
  // 1) Define the request URL to get page 1 of "people" from SWAPI.
  // Docs: https://swapi.dev/
  const requestUrl = "https://swapi.dev/api/people/?page=1";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.results.length; i++) {
        const person = data.results[i];
        console.log(`Person: ${person.name}`);
      }
    });
  // 2) Make a fetch() request.
  //    - First .then(): return response.json()
  //    - Second .then(data): console.log(data) and loop data.results
  //    - For each person, create elements and append to #people
  //
  //    REQUIRED FIELDS TO SHOW:
  //      - Name (as an <h3>)
  //      - A <p> that shows: Birth Year and Gender
  //
  //    HINTS:
  //      - Use document.createElement('h3') and ('p')
  //      - Set text with .textContent
  //      - Append with peopleContainer.append(child)
  //
  //  🔧 Write your code below this comment:
}

fetchButton.addEventListener("click", getPeople);
