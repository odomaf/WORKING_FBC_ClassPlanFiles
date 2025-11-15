# 04-Stu_Fetch_StarWars-List

## 🧠 Learning Goals
By the end of this activity, you should be able to:

- Use the Fetch API to make a GET request to a third-party API  
- Work with JSON data returned from an API  
- Dynamically update the DOM using data from a fetch request  
- Use .then() to handle asynchronous data (no arrow functions yet)  
- Practice debugging network calls and understanding response objects  

---

## 🎯 Your Task
Use the Star Wars API (SWAPI) to fetch a list of characters and display their names on the page.

When you click the "Fetch People" button, your app should:

1. Make a fetch request to the correct SWAPI endpoint  
2. Parse the JSON response  
3. Display each character’s name as a list item (<li>) in the <ul>  

---

## 🧩 Instructions

1. Open `assets/js/script.js`  
2. Replace the placeholder in `requestUrl` with the correct API endpoint: const requestUrl = 'https://swapi.dev/api/people/?page=1'
3. Inside `getPeople()`, complete the fetch request:  
- Use `fetch(requestUrl)` and `.then()` to handle the response  
- Convert the response to JSON  
- Loop through `data.results` to create and append a list item for each person’s name  
4. Test your app by clicking the **Fetch People** button — you should see a list of names from the Star Wars universe  

---

## 💡 Example Output

Luke Skywalker  
C-3PO  
R2-D2  
Darth Vader  
Leia Organa  

---

## 🚀 Bonus Challenges

- Add a loading message while data is being fetched  
- Handle errors gracefully using `.catch()`  
- Try changing the query string to `?page=2` or `?page=3` to see more results  

---

## 📚 Helpful Resources

- [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  
- [MDN: Promise.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)  
- [W3Schools: JavaScript Fetch API](https://www.w3schools.com/js/js_api_fetch.asp)  
- [SWAPI Documentation](https://swapi.dev/)  

---

## 🧑‍🏫 Instructor Notes
- Students should not use arrow functions yet  
- Encourage `console.log(data)` to inspect the JSON structure  
- Remind students that `.then()` runs after the fetch request resolves  
- If SWAPI runs slowly, discuss real-world latency and loading states  
