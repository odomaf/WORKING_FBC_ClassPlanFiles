// 04-Stu_Traverse-DOM — SOLVED

// 1) Select the <ul> by id and log it
var list = document.getElementById("demo-list");
console.log("UL element:", list);

// 2) Log the number of <li> children
console.log("Number of <li> children:", list.children.length);

// 3) First and last <li>: add classes
var firstLi = list.firstElementChild;
var lastLi = list.lastElementChild;

firstLi.classList.add("highlight");
lastLi.classList.add("note");

// 4) Work with the middle item by id
var middle = document.getElementById("middle-item");
console.log("Middle item parent:", middle.parentElement);
console.log("Middle item previous sibling:", middle.previousElementSibling);
console.log("Middle item next sibling:", middle.nextElementSibling);

middle.textContent = "I'm in the middle!";

// 5) Loop all <li> with querySelectorAll and log textContent
var items = document.querySelectorAll("#demo-list li");
for (var i = 0; i < items.length; i++) {
  console.log("Item " + i + ":", items[i].textContent);
}
