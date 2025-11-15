// assets/js/search.js

const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-input');
const formatInputEl = document.querySelector('#format-input');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const query = searchInputEl.value.trim();
  const format = formatInputEl.value;

  if (!query) {
    // For now: simple console error. Students can upgrade to inline message.
    console.error('You need a search input value!');
    return;
  }

  const params = new URLSearchParams({
    q: query,
    format: format || '',
  });

  const queryString = `./search-results.html?${params.toString()}`;
  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
