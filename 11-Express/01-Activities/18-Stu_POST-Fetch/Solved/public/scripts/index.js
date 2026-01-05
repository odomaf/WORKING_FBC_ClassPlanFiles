// Grab references to the form inputs so we can read user-entered values
const usernameInput = document.getElementById('username');
const eventInput = document.getElementById('eventName');
const locationInput = document.getElementById('location');
const reviewInput = document.getElementById('review');
const ratingInput = document.getElementById('rating');

// Grab the form so we can listen for the submit event
const reviewForm = document.getElementById('review-form');

/**
 * Helper function:
 * - Accepts a JavaScript object (reviewData)
 * - Sends it to the server using fetch() as JSON
 * - Returns the parsed JSON response from the server
 *
 * Where does the data live?
 * ✅ In the request body (body: JSON.stringify(reviewData))
 */
const postReview = (reviewData) =>
  fetch('/api/reviews', {
    // Tell the server we want to create something (POST)
    method: 'POST',

    // Tell the server the body is JSON
    headers: {
      'Content-Type': 'application/json',
    },

    // Convert our JS object into a JSON string for the request body
    body: JSON.stringify(reviewData),
  })
    // Convert the response into JSON we can work with in JavaScript
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

/**
 * Listen for the form submission.
 * - preventDefault() stops the browser from reloading the page
 * - build a new review object from input values
 * - call postReview() to send it to the server
 */
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Build an object that matches what the server expects in req.body
  const newReview = {
    username: usernameInput.value.trim(),
    eventName: eventInput.value.trim(),
    location: locationInput.value.trim(),
    review: reviewInput.value.trim(),
    rating: ratingInput.value ? Number(ratingInput.value) : null,
  };

  // Send the review to the server and show the new ID from the response
  postReview(newReview)
    .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});
