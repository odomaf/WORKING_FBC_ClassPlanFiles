// 20-Stu_Data-Attributes — Starter (Unsolved)
// Goal: When a .box is activated, toggle between showing/hiding its data-number
// Hints:
// 1) Use event delegation on the .container
// 2) Check event.target.matches('.box')
// 3) Read state with element.getAttribute('data-state') OR element.dataset.state
// 4) If state === 'hidden' -> set textContent to data-number, set state to 'visible', set aria-pressed="true"
//    Else -> clear textContent, set state back to 'hidden', set aria-pressed="false"

var container = document.querySelector(".container");

container.addEventListener("click", function (event){
  let element = event.target;
  console.log ("Listening to the click");
  if (element.matches(".box")){
    // console.log("the element is a box");
    var state = element.getAttribute("data-state");
    if (state == "hidden") {
      // console.log (element.dataset.number);
      element.textContent = element.dataset.number;
      element.setAttribute("data-state", "visible");
      // console.log (element.dataset.state);
    } else {
      // console.log (element.dataset.state);
      element.textContent = "";
      element.setAttribute("data-state", "hidden");
      // console.log (element.dataset.state);
    }
  }
})
// TODO: Add a 'click' event listener to container that toggles a tile


// BONUS: Support keyboard activation (Enter/Space) for accessibility
// Tip: Listen to 'keydown' on container and check event.key === 'Enter' or ' ' (space)
