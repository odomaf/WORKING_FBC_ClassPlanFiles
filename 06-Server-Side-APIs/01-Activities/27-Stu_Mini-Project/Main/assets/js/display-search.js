// assets/js/display-search.js

const resultTextEl = document.querySelector('#result-text');
const resultMetaEl = document.querySelector('#result-meta');
const resultStatusEl = document.querySelector('#results-status');
const resultContentEl = document.querySelector('#result-content');
const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-input');
const formatInputEl = document.querySelector('#format-input');

function getParams() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') || '';
  const format = params.get('format') || '';

  if (!query) {
    resultStatusEl.textContent = 'Start by entering a search term.';
    return;
  }

  // Pre-fill form with current values
  searchInputEl.value = decodeURIComponent(query);
  formatInputEl.value = format;

  searchApi(query, format);
}

function printResultCard(resultObj) {
  const card = document.createElement('article');
  card.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  const body = document.createElement('div');
  body.classList.add('card-body');
  card.append(body);

  const titleEl = document.createElement('h3');
  titleEl.textContent = resultObj.title || 'Untitled item';

  const metaEl = document.createElement('p');
  metaEl.classList.add('text-default');
  const date = resultObj.date || 'Unknown date';
  metaEl.innerHTML = `<strong>Date:</strong> ${date}<br />`;

  if (resultObj.subject && resultObj.subject.length) {
    metaEl.innerHTML += `<strong>Subjects:</strong> ${resultObj.subject.join(
      ', '
    )}<br />`;
  } else {
    metaEl.innerHTML +=
      '<strong>Subjects:</strong> No subjects listed for this entry.<br />';
  }

  const descriptionText =
    resultObj.description && resultObj.description.length
      ? resultObj.description[0]
      : 'No description available for this entry.';

  const descEl = document.createElement('p');
  descEl.textContent = descriptionText;

  const linkButtonEl = document.createElement('a');
  linkButtonEl.textContent = 'View on loc.gov ↗';
  linkButtonEl.setAttribute('href', resultObj.url);
  linkButtonEl.setAttribute('target', '_blank');
  linkButtonEl.setAttribute('rel', 'noopener noreferrer');
  linkButtonEl.classList.add('btn', 'btn-dark', 'mt-2');

  body.append(titleEl, metaEl, descEl, linkButtonEl);
  resultContentEl.append(card);
}

function searchApi(query, format) {
  resultStatusEl.textContent = 'Loading results…';
  resultContentEl.innerHTML = '';

  let locQueryUrl = 'https://www.loc.gov/search/?fo=json';

  if (format) {
    locQueryUrl = `https://www.loc.gov/${format}/?fo=json`;
  }

  locQueryUrl += `&q=${encodeURIComponent(query)}`;

  fetch(locQueryUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then((locRes) => {
      const searchQuery = locRes.search?.query || query;
      const count = locRes.results?.length || 0;

      resultTextEl.textContent = searchQuery;
      resultMetaEl.textContent = `${count} result${count === 1 ? '' : 's'
        } found${format ? ` in “${format}”` : ''}.`;

      if (!count) {
        resultStatusEl.textContent =
          'No results found. Try another search term or format.';
        return;
      }

      resultStatusEl.textContent = '';
      locRes.results.forEach((result) => printResultCard(result));
    })
    .catch((error) => {
      console.error(error);
      resultStatusEl.textContent =
        'Something went wrong while fetching results. Please try again.';
    });
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const query = searchInputEl.value.trim();
  const format = formatInputEl.value;

  if (!query) {
    console.error('You need a search input value!');
    resultStatusEl.textContent = 'Please enter a search term to continue.';
    return;
  }

  // Update URL so refresh/bookmark still works
  const params = new URLSearchParams({
    q: query,
    format: format || '',
  });
  history.replaceState(null, '', `?${params.toString()}`);

  searchApi(query, format);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// Kick off initial search if URL has params
getParams();
