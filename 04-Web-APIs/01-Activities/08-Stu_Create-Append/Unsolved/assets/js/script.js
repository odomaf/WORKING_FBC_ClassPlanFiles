// 08-Stu_Create-Append — STARTER
// GOAL: Use createElement(), textContent, appendChild(), and setAttribute()
// to build a small web page dynamically with JavaScript.

// TODO: Step 1 — Select the <body> element so we can append new elements to it.
var body = document.body;

var app = document.getElementById('app');
if(!app){
  console.error('Missing #app container');
}

// TODO: Step 2 — Create all the necessary elements (use createElement).
// - h1
let h1El = document.createElement('h1');
// - div for info section
let div = document.createElement('div');
// - img
let img = document.createElement('img');

// - div for kitten info
// - div for name
// - div for favorite foods
// - ordered list (ol)
// - four list items (li1, li2, li3, li4)


// TODO: Step 3 — Add textContent for each new element.
// Example: h1El.textContent = "Welcome to my page";
h1El.textContent = 'This is my H1';
div.textContent = 'This is my div';
img.src = 'https://picsum.photos/id/1025/200/300';

// TODO: Step 4 — Append all elements to the DOM in the correct order.
// Hint: Nest them so the structure matches the example in class.
app.appendChild(h1El);
app.appendChild(div);
app.appendChild(img);

// TODO: Step 5 — Use setAttribute() to style or assign properties.
// - Add margin, width, and text alignment to h1El and infoEl
// - Set image src to a Picsum placeholder (e.g., https://picsum.photos/id/1025/200/300)
// - Style the name and kitten info divs
// - Style the favorite food section and list
// - Give each li its own background shade using inline style

