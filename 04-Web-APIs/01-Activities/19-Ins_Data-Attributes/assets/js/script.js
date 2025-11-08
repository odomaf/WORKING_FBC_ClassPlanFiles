// 19-Ins_Data-Attributes — Instructor Demo
// Demonstrates how to toggle GIF animation using data attributes

var imageContainer = document.querySelector(".img-container");

// Listen for clicks anywhere inside the .img-container
imageContainer.addEventListener("click", function (event) {
  var element = event.target;

  // Only run if an <img> was clicked
  if (element.matches("img")) {
    // Get the current value of data-state ("still" or "animate")
    var state = element.getAttribute("data-state");

    if (state === "still") {
      // Update both the dataset and actual attribute
      element.dataset.state = "animate";
      element.setAttribute("src", element.dataset.animate);
    } else {
      // Switch back to still frame
      element.dataset.state = "still";
      element.setAttribute("src", element.dataset.still);
    }
  }
});
