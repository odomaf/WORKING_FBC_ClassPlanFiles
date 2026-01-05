// server.js (SOLVED — FULL COMMENTS)
//
// Goal of this demo:
// - Show how to use Express routes with BOTH:
//   1) Query string parameters (req.query)  -> /api/terms?sort=asc
//   2) Route parameters (req.params)        -> /api/term/:term and /api/terms/:category
//
// Data source:
// - terms.json contains an array of term objects (term, definition, category, relevance, etc.)
// Sorting helper:
// - sortData.js returns a comparator function to sort the array

const express = require('express');

// Import our sorting helper factory function
// sortData(firstKey, secondKey, type) returns a comparator function for Array.sort()
const { sortData } = require('./sortData');

// Import the term data from a local JSON file
// termData is now an ARRAY of objects
const termData = require('./terms.json');

const PORT = 3001;
const app = express();

/**
 * sortHelper(type)
 * - Sorts the termData array in-place (mutates it)
 * - Uses a comparator from sortData() to sort by:
 *   - Primary key: "term"
 *   - Tie-breaker: "relevance"
 * - type is expected to be "asc" or "dsc"
 */
const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

/**
 * GET /api/terms
 * GET /api/terms?sort=asc
 * GET /api/terms?sort=dsc
 *
 * This route returns:
 * - all terms by default
 * - OR sorted terms when a query string is provided
 *
 * Query string parameters are accessed with req.query
 * Example URL: /api/terms?sort=asc
 * Example req.query: { sort: 'asc' }
 */
app.get('/api/terms/', (req, res) => {
  // req.query holds everything after the "?" in the URL as an object.
  // If the user visits /api/terms with no query string,
  // req.query will be an empty object: {}
  const hasQuery = Object.keys(req.query).length > 0;

  // If a query exists AND the user requested descending sort,
  // return the data sorted descending.
  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  // If a query exists AND the user requested ascending sort,
  // return the data sorted ascending.
  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query string (or it doesn't match asc/dsc),
  // return the original term list (whatever current order it's in).
  return res.json(termData);
});

/**
 * GET /api/term/:term
 * Example: /api/term/http
 * Example: /api/term/json
 *
 * This route returns ONE matching term object.
 *
 * Route parameters are variables in the path and are accessed with req.params.
 * In this route, ":term" is the route parameter name.
 * Example URL: /api/term/http
 * Example req.params: { term: 'http' }
 */
app.get('/api/term/:term', (req, res) => {
  // Read the route parameter from the URL
  // Coerce to lowercase so matching is case-insensitive
  const requestedTerm = req.params.term.toLowerCase();

  // If the user provided something (they always will if they hit this route),
  // iterate through termData and find a matching term
  if (requestedTerm) {
    for (let i = 0; i < termData.length; i++) {
      // Compare both sides in lowercase so "HTTP" matches "http"
      if (requestedTerm === termData[i].term.toLowerCase()) {
        return res.json(termData[i]);
      }
    }
  }

  // If no match was found, return a simple message.
  // (In a real API, you might return a 404 status code.)
  return res.json('No term found');
});

/**
 * GET /api/terms/:category
 * Example: /api/terms/web
 * Example: /api/terms/networking
 * Example: /api/terms/cloud
 *
 * This route returns ALL terms in a given category.
 *
 * This also uses route parameters:
 * - ":category" is the variable part of the path
 * - accessed via req.params.category
 */
app.get('/api/terms/:category', (req, res) => {
  // Read the category from the URL and normalize it
  const requestedCategory = req.params.category.toLowerCase();

  // We'll push matching terms into this array
  const result = [];

  // Loop through all terms and collect matches
  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;

    // Compare the requested category to each term's category
    // Note: currentTermCategory in the JSON should already be lowercase
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }

  // Return ALL matching terms in this category
  return res.json(result);
});

/**
 * GET /api/categories
 *
 * This route returns a list of UNIQUE categories found in the dataset.
 *
 * Steps:
 * 1) Create an array of categories from termData (may include duplicates)
 * 2) Filter out duplicates
 * 3) Return the unique list
 */
app.get('/api/categories', (req, res) => {
  // Create an array of categories (duplicates will exist)
  const categories = termData.map((term) => term.category);

  // Filter out duplicate categories
  // Keep only the FIRST occurrence of each category in the array
  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  // Return the unique categories
  return res.json(result);
});

// Start the server and listen for requests
app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
