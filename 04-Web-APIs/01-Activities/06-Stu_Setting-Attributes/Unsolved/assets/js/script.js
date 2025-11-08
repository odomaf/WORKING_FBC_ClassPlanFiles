// 06-Stu_Setting-Attributes — STARTER
// GOAL: Use setAttribute() and querySelectorAll() to update links, images, and titles.

// 1) Select parent containers
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

// 2) Select all <h4> elements
var siteTitles = document.querySelectorAll("h4");

// --- Reference URLs (feel free to use these or pick your own placeholders) ---
var IMG1 = "https://picsum.photos/id/1011/400/250"; // mountains
var IMG2 = "https://picsum.photos/id/1041/400/250"; // city skyline
var IMG3 = "https://picsum.photos/id/1025/400/250"; // dog portrait

// ===================
// TODO: SITE 1 (Google)
// ===================
// A) Set the <h4> text to "Site 1 — Google"
// B) Make the <a> open https://google.com in a new tab (href, target, rel)
// C) Set the <img> src to IMG1 and alt text to something meaningful
// D) Give the <img> inline padding of 10px using setAttribute("style", "...")

// Hints: site1El.children[0] is the <h4>, site1El.children[1] is the <a>, and its child is <img>.
console.log(site1El.children);
site1El.children[0].textContent = "Site 1 - My Title";
site1El.children[1].children[0].setAttribute("src", IMG1);




// document.getElementById("h4").setAttribute("Site 1 - Google");

// ===================
// TODO: SITE 2 (Twitter)
// ===================
// A) Title: "Site 2 — Twitter"
// B) Link to https://twitter.com (new tab + security rel)
// C) Image: use IMG2 and a meaningful alt
// D) Inline padding 10px on the image


// ===================
// TODO: SITE 3 (Instagram)
// ===================
// A) Title: "Site 3 — Instagram"
// B) Link to https://instagram.com (new tab + security rel)
// C) Image: use IMG3 and a meaningful alt
// D) Inline padding 10px on the image


// ===================
// TODO: Style all <h4> consistently
// ===================
// Acceptance Criteria:
// - color: blue
// - font-size: 30px
// - padding-left: 10px
// - margin: 0
//
// Use a standard for-loop over siteTitles and set the "style" attribute on each <h4>.

