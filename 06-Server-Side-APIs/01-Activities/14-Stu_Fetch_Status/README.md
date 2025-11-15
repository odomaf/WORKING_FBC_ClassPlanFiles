# 14-Stu_Fetch_Status (NASA APOD Edition)

In this activity, you will send a request to the NASA APOD (Astronomy Picture of the Day) API and display the HTTP response status on the page. This helps you understand how APIs indicate success or failure.

---

## What You Will Practice

- Making a GET request using `fetch()`
- Reading the response object
- Displaying `response.status` on the page
- Investigating API errors
- Updating the DOM based on the response

---

## User Story

As a developer, I want to display the status code from an API request so that I can understand whether the request succeeded or failed.

---

## Acceptance Criteria

- When the page loads, a fetch request is made to the NASA APOD API using an intentionally incorrect URL.
- The response status appears inside the element with the id `response-text`.
- The console logs both the status code and the returned JSON data.
- The failed request is clearly visible in the Network tab of DevTools.

---

## Files to Edit

- `assets/js/script.js`

---

## Instructions

1. Open the page in your browser.
2. Open Chrome DevTools and click the **Network** tab.
3. Reload the page.
4. Look for the NASA API request and check its status code.
5. In the `script.js` file, use `response.status` to update the page.
6. Use `console.log()` to inspect the full response JSON.
7. Optional: Fix the NASA APOD URL and compare a successful response with the failed one.

Correct APOD URL for testing:

`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`

---

## Hints

- Use `console.log(response.status)` to see the code.
- NASA returns JSON even when an error occurs.
- Any status other than `200` means the request failed.

---

## Stretch Goals

- Change text color based on success or failure (for example, green for 200, red for errors).
- Display the APOD title once the request succeeds.
- Add a **Retry with Correct URL** button.
- Show a helpful message for specific errors like `404 Not Found` or `401 Unauthorized`.

---

## Helpful References

NASA Open APIs  
https://api.nasa.gov/

MDN – Fetch API  
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

MDN – HTTP Status Codes  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
