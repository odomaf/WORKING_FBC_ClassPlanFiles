// Add comments explaining each parameter (see TODO markers below)

fetch(
  // NASA APOD API endpoint with multiple parameters
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2023-07-01&thumbs=true&concept_tags=True"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

/*
TODO — Add comments explaining each query parameter:

api_key       -> 
date          -> 
thumbs        -> 
concept_tags  -> 
*/
