// 05-Ins_Different-APIs — Instructor Demo
// Purpose: Compare XMLHttpRequest, jQuery AJAX, and Fetch

'use strict';

// Using a public API that doesn’t require authentication
const requestUrl = 'https://swapi.dev/api/people/?page=1';

// --------------------------
// 1. XMLHttpRequest Example
// --------------------------
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  // readyState 4 = DONE
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response\n-----------------------');
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.open('GET', requestUrl);
xhr.send();

// --------------------------
// 2. jQuery AJAX Example
// --------------------------
$.ajax({
  url: requestUrl,
  method: 'GET',
})
  .then(function (response) {
    console.log('jQuery AJAX Response\n-----------------------');
    console.log(response);
  })
  .catch(function (error) {
    console.error('jQuery AJAX Error:', error);
  });

// --------------------------
// 3. Fetch Example
// --------------------------
fetch(requestUrl)
  .then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch API Response\n-----------------------');
    console.log(data);
  })
  .catch(function (error) {
    console.error('Fetch Error:', error);
  });
