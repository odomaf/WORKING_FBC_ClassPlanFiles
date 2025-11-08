// 18-Stu_Event-Bubbling — Unsolved Starter

// Select the carousel element
const carousel = document.querySelector(".carouselbox");

// Select the Next and Previous buttons (nested within the carousel)
const next = carousel.querySelector(".next");
const prev = carousel.querySelector(".prev");

// Track the current image index
let index = 0;
let currentImage;

// Replace these with verified Pexels images
const images = [
  "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=600", // mountain lake
  "https://images.pexels.com/photos/355423/pexels-photo-355423.jpeg?auto=compress&cs=tinysrgb&w=600", // forest road
  "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600", // beach
  "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600", // waterfall
];

// Set initial image
carousel.style.backgroundImage = "url('" + images[0] + "')";

// Function to navigate through carousel images
function navigate(direction) {
  index = index + direction;

  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }

  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// Clicking on the image (carousel container)
// Should open the current image in a new browser tab
carousel.addEventListener("click", function () {
  window.open(images[index], "_blank");
});

// Clicking Next should navigate forward
// TODO: Prevent bubbling so the image doesn’t open in a new tab
next.addEventListener("click", function (event) {
  event.stopPropagation();
  navigate(1);
});

// Clicking Previous should navigate backward
// TODO: Prevent bubbling so the image doesn’t open in a new tab
prev.addEventListener("click", function (event) {
  event.stopPropagation();
  navigate(-1);
});

// Initialize first image
navigate(0);
