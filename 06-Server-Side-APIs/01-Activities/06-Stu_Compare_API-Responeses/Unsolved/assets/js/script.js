// assets/js/script.js (UNSOLVED - Student)
// 06-Stu_Compare-API-Responses
// Goal: Trigger three requests (XMLHttpRequest, jQuery AJAX, Fetch) and compare the responses in DevTools.
// Rules: use let/const, NO arrow functions, NO IIFE.

'use strict';

// TODO(1): Use SWAPI page 1 people endpoint (replace if needed)
// Example: 'https://swapi.dev/api/people/?page=1'
const requestUrl = 'https://swapi.dev/api/people/?page=1';

// OPTIONAL helper (uncomment if you want a clean console separation)
// function banner(label) {
//   console.log('\n' + label + '\n' + Array(label.length + 1).join('-'));
// }

/* --------------------------------------
 * A) jQuery AJAX (library-powered AJAX)
 * -------------------------------------- */
// TODO(2): Call $.ajax with url + method. In the .then callback, log a clear label and the response.
// Hint: jQuery already parses JSON for you.
$.ajax({
  url: requestUrl,
  method: 'GET'
})
  .then(function (response) {
    console.log('jQuery AJAX Response');
    console.log(response);

    // TODO(2a): Add a comment explaining what data type "response" is and why no parsing is needed.
  })
  .catch(function (error) {
    // TODO(2b): Log an error label + error object.
    console.error('jQuery AJAX Error:', error);
  });


/* -----------------------------
 * B) Fetch (modern, built-in)
 * ----------------------------- */
fetch(requestUrl)
  .then(function (response) {
    console.log('Fetch: Response Object');
    console.log(response); // shows status, headers, ok, url, etc.

    // TODO(3): If response.ok is false, throw an Error with response.status
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }

    // TODO(4): Return response.json() to parse the body
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch: Parsed JSON Data');
    console.log(data);

    // TODO(4a): Add a comment explaining the two-step process (metadata first, then parse).
    // TODO(4b): Try logging the first character's name: data.results[0].name
  })
  .catch(function (error) {
    // TODO(3a): Log a clear fetch error label + error.
    console.error('Fetch Error:', error);
  });


/* -------------------------------------------
 * C) XMLHttpRequest (older, verbose approach)
 * ------------------------------------------- */
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  // readyState 4 means "DONE"
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response (raw text)');
    console.log(xhr.responseText); // by default, XHR returns text

    // TODO(5): Parse JSON manually with JSON.parse and log the parsed object.
    // const parsed = JSON.parse(xhr.responseText);
    // console.log('XMLHttpRequest Parsed JSON');
    // console.log(parsed);

    // TODO(5a): Add a comment explaining how XHR differs from fetch/jQuery (parsing, boilerplate).
  }
};

// TODO(6): Open and send the XHR GET request to requestUrl
xhr.open('GET', requestUrl);
xhr.send();

/* --------------------
 * Stretch Challenges:
 * --------------------
 * - Change to `?page=2` and compare results.
 * - In Fetch, log response.headers and response.status specifically.
 * - In jQuery AJAX, inspect the XHR object with $.ajaxSetup / $.ajax({... complete: function(jqXHR){...}})
 * - In XHR, add basic error handling (onerror).
 */
