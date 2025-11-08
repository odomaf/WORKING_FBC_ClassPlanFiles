// 03-Ins-Traverse-DOM
// NOTE: No arrow functions or defer. Script runs after the DOM is parsed.

console.log("Document Body:");
console.log(document.body);

console.log("Children of Document Body:");
console.log(document.body.children);

console.log("First child of body:");
console.log(document.body.children[0]);

console.log("First child of the <ul>:");
console.log(document.body.children[1].children[0]);

// Accessing an element by ID
var firstChildUl = document.getElementById("first-child-ul");
console.log("Accessed by ID:");
console.log(firstChildUl);

// Setting style via JS
firstChildUl.style.color = "green";

// Add a class for visual emphasis (CSS .highlight)
firstChildUl.classList.add("highlight");

// Example: Looping through children
var list = document.getElementById("demo-list");
console.log("Loop through all <li> elements:");
for (var i = 0; i < list.children.length; i++) {
  console.log("Child", i, ":", list.children[i].textContent);
}
