// 05-Ins_Setting-Attributes (Instructor Demo)

// Multiple elements using .querySelectorAll()
var divTags = document.querySelectorAll("div");
var pTags = document.querySelectorAll("p");

// Single elements
var imgEl = document.querySelector("#photo");
var linkEl = document.querySelector("#photo-link");
var changeP = document.querySelector("#change2");
var swapBtn = document.querySelector("#swap-btn");

// -----------------------------------------------------------------------------
// Seed the image/link attributes (Picsum placeholder)
var SMALL_STILL = "https://picsum.photos/id/1025/400/300";   // size used in <img>
var SMALL_ALT    = "Black and white dog (placeholder)";

var LARGE_TARGET = "https://picsum.photos/id/1025/1200/900"; // link target
var ALT_STILL    = "https://picsum.photos/id/237/400/300";   // alt image
var ALT_LARGE    = "https://picsum.photos/id/237/1200/900";

// Set link attributes
linkEl.setAttribute("href", LARGE_TARGET);
linkEl.setAttribute("target", "_blank");
linkEl.setAttribute("rel", "noopener noreferrer");
linkEl.setAttribute("aria-label", "Open full-size photo in a new tab");

// Set image attributes (src + alt)
imgEl.setAttribute("src", SMALL_STILL);
imgEl.setAttribute("alt", SMALL_ALT);

// Demonstrate setting a style via attribute (keep it visible in this lesson)
imgEl.setAttribute("style", "width: 50%; border-radius: 8px;");

// Store UI state using data-*
imgEl.setAttribute("data-mode", "dog-1025"); // our current image choice

// Log initial attribute states
console.log("Initial img src:", imgEl.getAttribute("src"));
console.log("Initial img alt:", imgEl.getAttribute("alt"));
console.log("Link href:", linkEl.getAttribute("href"));
console.log("img dataset:", imgEl.dataset);

// -----------------------------------------------------------------------------
// Text styling examples (like your original)
if (pTags.length > 0) {
  // Sets first p to 40px
  pTags[0].setAttribute("style", "font-size: 40px;");
}

// Sets changeP to multiple styles
changeP.setAttribute(
  "style",
  "font-size: 25px; font-weight: bold; text-decoration: underline;"
);

// Loop through all <div> and set color + font size
var i;
for (i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color: blue; font-size: 30px;");
}

// -----------------------------------------------------------------------------
// Interactive demo: swap image + link by toggling data-mode
function swapImage() {
  // aria-pressed is a string attribute: "true"/"false"
  var pressed = swapBtn.getAttribute("aria-pressed") === "true";
  var nextPressed = pressed ? "false" : "true";
  swapBtn.setAttribute("aria-pressed", nextPressed);

  // Check current mode on the <img>
  var mode = imgEl.getAttribute("data-mode");
  if (mode === "dog-1025") {
    // Switch to ALT image (id=237)
    imgEl.setAttribute("src", ALT_STILL);
    imgEl.setAttribute("alt", "Dog (alternate placeholder)");
    linkEl.setAttribute("href", ALT_LARGE);
    imgEl.setAttribute("data-mode", "dog-237");
    swapBtn.textContent = "Swap Image";
  } else {
    // Switch back to original (id=1025)
    imgEl.setAttribute("src", SMALL_STILL);
    imgEl.setAttribute("alt", SMALL_ALT);
    linkEl.setAttribute("href", LARGE_TARGET);
    imgEl.setAttribute("data-mode", "dog-1025");
    swapBtn.textContent = "Swap Image";
  }

  console.log("Swapped image →", imgEl.getAttribute("src"), "| data-mode:", imgEl.getAttribute("data-mode"));
}

swapBtn.addEventListener("click", function () {
  swapImage();
});
