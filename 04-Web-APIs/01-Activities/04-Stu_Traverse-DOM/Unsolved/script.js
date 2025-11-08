// 04-Stu_Traverse-DOM — STARTER

/*
GOAL:
- Select and traverse DOM elements.
- Read children, first/last elements, parents and siblings.
- Add/remove classes to style selected elements.

TASKS:
1) Select the <ul> by its id ("demo-list") and log it.
2) Log the number of <li> children on that list.
3) Select the first and last <li> using DOM traversal and:
   - add the "highlight" class to the first
   - add the "note" class to the last
4) Select the middle <li> by id ("middle-item") and:
   - log its parent element
   - log its next and previous element siblings
   - change its textContent to "I'm in the middle!"
5) Using querySelectorAll, loop all <li> and log their text content (one per line).
*/

// 1) Select the <ul> by id and log it
// TODO: your code here
console.log("ul demo-list info");
let list = document.getElementById("demo-list");

// 2) Log the number of <li> children
// Hint: use .children on the list
// TODO: your code here
console.log(`ul length: ${list.children.length}`);

// 3) First and last <li>: add classes
// Hints: firstElementChild, lastElementChild, classList.add()
// TODO: your code here
let firstElementChild = list.firstElementChild;
console.log(`firstElement: ${firstElementChild.textContent}`);

let lastElementChild = list.lastElementChild;
console.log(`lasttElement: ${lastElementChild.textContent}`);

// 4) Work with the middle item by id
// Hints: parentElement, nextElementSibling, previousElementSibling
// TODO: your code here
let middleElementChild = list.firstElementChild.nextElementSibling;
console.log(middleElementChild);
console.log(`middle element: ${middleElementChild.textContent}`);

// 5) Loop all <li> with querySelectorAll and log textContent
// Hints: document.querySelectorAll('#demo-list li')
// TODO: your code here

let childList = document.querySelectorAll("#demo-list li");
console.log(`ul children are:`);
for (var i = 0; i < childList.length; i++) {
  console.log("Child", i, ":", childList[i].textContent);
}

