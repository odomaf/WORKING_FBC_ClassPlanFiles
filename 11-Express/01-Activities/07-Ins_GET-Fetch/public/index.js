// public/index.js (07-Ins-GET-Fetch)

// DOM references
const termsEl = document.getElementById('terms');
const loadBtn = document.getElementById('load-btn');

/**
 * Fetch term data from the Express API.
 * This returns a Promise that resolves to an array of term objects.
 */
function getTerms() {
  return fetch('/api/terms')
    .then((res) => res.json())
    .then((data) => data);
}

/**
 * Render a single term object onto the page.
 * Expects a term in the shape:
 * { term, definition, url, category, relevance }
 */
function renderTerm(term) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('card', 'p-3', 'm-3');

  const title = document.createElement('div');
  title.classList.add('card-header');

  // Link title to the reference URL
  title.innerHTML = `<a href="${term.url}" target="_blank" rel="noopener noreferrer">${term.term}</a>`;

  const body = document.createElement('div');
  body.classList.add('card-body');
  body.innerText = term.definition;

  const meta = document.createElement('p');
  meta.classList.add('text-muted');
  meta.innerHTML = `<small>Category: ${term.category} • Relevance: ${term.relevance}</small>`;

  wrapper.appendChild(title);
  wrapper.appendChild(body);
  wrapper.appendChild(meta);

  termsEl.appendChild(wrapper);
}

/**
 * Button click handler:
 * - Clears the UI
 * - Fetches terms
 * - Renders each term to the page
 */
function handleLoadClick() {
  // Clear existing content
  termsEl.innerHTML = '';

  getTerms().then((terms) => {
    terms.forEach((t) => renderTerm(t));
  });
}

// Wire up the click event
loadBtn.addEventListener('click', handleLoadClick);
