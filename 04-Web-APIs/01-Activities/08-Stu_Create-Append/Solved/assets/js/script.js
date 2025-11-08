// 08-Stu_Create-Append — SOLVED
// NOTE: No arrow functions or defer. Builds page dynamically using DOM methods.

var body = document.body;

// Create all elements
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Add text content
h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "Apples 🍎";
li2.textContent = "Pizza 🍕";
li3.textContent = "Dumplings 🥟";
li4.textContent = "Cupcakes 🧁";

// Append hierarchy
body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Apply inline styles and attributes
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "https://picsum.photos/id/1025/200/300");
imgEl.setAttribute("alt", "Placeholder kitten photo");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px; text-align:center;");
listEl.setAttribute("style", "background:#333333; padding:20px; border-radius:8px;");

// Individual list item colors
li1.setAttribute("style", "color:white; background:#666666; padding:5px; margin-left:35px;");
li2.setAttribute("style", "color:white; background:#777777; padding:5px; margin-left:35px;");
li3.setAttribute("style", "color:white; background:#888888; padding:5px; margin-left:35px;");
li4.setAttribute("style", "color:white; background:#999999; padding:5px; margin-left:35px;");
