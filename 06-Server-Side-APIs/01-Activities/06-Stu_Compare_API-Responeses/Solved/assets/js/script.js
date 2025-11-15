// 06-Ins_Compare-API-Responses — Instructor Demo
// Goal: Show the shape and differences of responses using XMLHttpRequest, jQuery AJAX, and Fetch.
// Rules: let/const, no arrow functions, no IIFE.

'use strict';

// Use a public API with no auth to reduce friction. SWAPI returns JSON.
const requestUrl = 'https://swapi.dev/api/people/?page=1';

// Utility to visually separate outputs
function banner(label) {
  console.log('\n' + label + '\n' + Array(label.length + 1).join('-'));
}

// --------------------------------------
// 1) jQuery AJAX (library-powered AJAX)
// --------------------------------------
$.ajax({
  url: requestUrl,
  method: 'GET'
})
  .then(function (response) {
    banner('jQuery AJAX Response');
    // jQuery parses JSON for you already
    console.log(response);

    // TEACHING NOTES:
    // - Response is already a JS object (no need for JSON.parse or response.json()).
    // - jQuery handles many cross-browser quirks for you.
  })
  .catch(function (error) {
    console.error('jQuery AJAX Error:', error);
  });

// -----------------------------
// 2) Fetch (modern, built-in)
// -----------------------------
fetch(requestUrl)
  .then(function (response) {
    banner('Fetch: Response Object');
    // With fetch, the first .then() gets a Response object with status, headers, etc.
    console.log(response);

    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    // You must explicitly parse JSON to use the body
    return response.json();
  })
  .then(function (data) {
    banner('Fetch: Parsed JSON Data');
    console.log(data);

    // TEACHING NOTES:
    // - Two-step: Response metadata first, then parse body (e.g., response.json()).
    // - Fetch uses Promises natively and is widely supported in modern browsers.
  })
  .catch(function (error) {
    console.error('Fetch Error:', error);
  });

// -------------------------------------------
// 3) XMLHttpRequest (older, verbose approach)
// -------------------------------------------
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  // 4 means DONE (request finished and response is ready)
  if (xhr.readyState === XMLHttpRequest.DONE) {
    banner('XMLHttpRequest Response (raw text)');
    // XHR returns text by default; for JSON we need to parse it
    console.log(xhr.responseText);

    try {
      const parsed = JSON.parse(xhr.responseText);
      banner('XMLHttpRequest Parsed JSON');
      console.log(parsed);
    } catch (e) {
      console.error('Failed to parse XHR JSON:', e);
    }

    // TEACHING NOTES:
    // - More boilerplate (readyState checks, manual parsing).
    // - Pre-dates Promises; you manage events/callbacks yourself.
  }
};

xhr.open('GET', requestUrl);
xhr.send();
