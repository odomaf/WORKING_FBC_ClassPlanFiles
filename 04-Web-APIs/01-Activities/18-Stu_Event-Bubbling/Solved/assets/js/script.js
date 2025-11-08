// 18-Stu_Event-Bubbling — Carousel Demo with stopPropagation()

// Select main elements
var carousel = document.querySelector(".carouselbox");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");

var index = 0;
var currentImage;

// Pexels image sources (vibrant nature/travel)
var images = [
  "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=600",  // mountain lake
  "https://images.pexels.com/photos/355423/pexels-photo-355423.jpeg?auto=compress&cs=tinysrgb&w=600",  // forest road
  "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600", // beach
  "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600"   // waterfall
];


// Initial image
carousel.style.backgroundImage = "url('" + images[0] + "')";

// Function to move carousel forward/backward
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

// Clicking on the image (outer container) opens the image in a new tab
carousel.addEventListener("click", function () {
  window.open(images[index], "_blank");
});

// Clicking next — shows next image only
next.addEventListener("click", function (event) {
  // Prevents bubbling up to the carousel's click event
  event.stopPropagation();
  navigate(1);
});

// Clicking previous — shows previous image only
prev.addEventListener("click", function (event) {
  // Without stopPropagation(), the carousel click would also fire.
  event.stopPropagation();
  navigate(-1);
});

// Initialize first image
navigate(0);
