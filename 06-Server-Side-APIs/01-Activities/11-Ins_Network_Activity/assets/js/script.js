// One valid SWAPI URL and one invalid URL to demonstrate different status codes
const goodRequestUrl = 'https://swapi.dev/api/people/?page=1';
const badRequestUrl = 'https://swapi.dev/api/peopllllle/?page=1';

// Good request — should return status 200 and JSON data
fetch(goodRequestUrl)
  .then(function (response) {
    console.log('✅ Good request');
    console.log('URL:', goodRequestUrl);
    console.log('Status:', response.status, 'OK:', response.ok);
    return response.json();
  })
  .then(function (data) {
    console.log('Good request data (first character):', data.results[0]);
  })
  .catch(function (error) {
    console.log('Error with goodRequestUrl:', error);
  });

// Bad request — should return status 404 (or similar) and still resolve the promise
fetch(badRequestUrl)
  .then(function (response) {
    console.log('❌ Bad request');
    console.log('URL:', badRequestUrl);
    console.log('Status:', response.status, 'OK:', response.ok);
    // We can still try to parse JSON, but the shape may be different
    return response.json();
  })
  .then(function (data) {
    console.log('Bad request response body:', data);
  })
  .catch(function (error) {
    console.log('Network error with badRequestUrl:', error);
  });
