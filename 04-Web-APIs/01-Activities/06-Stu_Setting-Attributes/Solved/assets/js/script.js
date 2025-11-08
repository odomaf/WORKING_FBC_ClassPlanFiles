// 06-Stu_Setting-Attributes

// Select parent containers
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

// Select all <h4> elements
var siteTitles = document.querySelectorAll("h4");

// --------------------
// Site 1 — Google
site1El.children[0].textContent = "Site 1 — Google";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].setAttribute("target", "_blank");
site1El.children[1].setAttribute("rel", "noopener noreferrer");
site1El.children[1].children[0].setAttribute("src", "https://picsum.photos/id/1011/400/250");
site1El.children[1].children[0].setAttribute("alt", "Mountain landscape");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

// --------------------
// Site 2 — Twitter
site2El.children[0].textContent = "Site 2 — Twitter";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].setAttribute("target", "_blank");
site2El.children[1].setAttribute("rel", "noopener noreferrer");
site2El.children[1].children[0].setAttribute("src", "https://picsum.photos/id/1041/400/250");
site2El.children[1].children[0].setAttribute("alt", "City skyline at dusk");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

// --------------------
// Site 3 — Instagram
site3El.children[0].textContent = "Site 3 — Instagram";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].setAttribute("target", "_blank");
site3El.children[1].setAttribute("rel", "noopener noreferrer");
site3El.children[1].children[0].setAttribute("src", "https://picsum.photos/id/1025/400/250");
site3El.children[1].children[0].setAttribute("alt", "Dog portrait placeholder");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// --------------------
// Loop through all <h4> elements to add consistent styling
var i;
for (i = 0; i < siteTitles.length; i++) {
  siteTitles[i].setAttribute(
    "style",
    "color: blue; font-size: 30px; padding-left:10px; margin:0;"
  );
}
