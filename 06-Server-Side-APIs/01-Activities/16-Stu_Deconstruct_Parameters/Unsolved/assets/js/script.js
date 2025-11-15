// TODO: Add comments explaining what each parameter does.

// NASA APOD API request with several query parameters.
// Students must explain:
// - api_key
// - date
// - thumbs
// - concept_tags

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2023-07-01&thumbs=true&concept_tags=True"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Log the full API response so students can study the structure.
    console.log(data);
  });

/*
TODO — Explain each parameter:

api_key ->
date ->
thumbs ->
concept_tags ->
*/
