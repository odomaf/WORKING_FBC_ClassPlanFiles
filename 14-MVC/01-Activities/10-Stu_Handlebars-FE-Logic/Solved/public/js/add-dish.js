async function newFormHandler(event) {
  event.preventDefault();

  const dish_name = document.querySelector("#dish_name").value;
  const description = document.querySelector("#description").value;
  const chef_name = document.querySelector("#chef_name").value;
  const has_nuts = document.querySelector("#has_nuts:checked") ? true : false;

  const response = await fetch(`/api/dish`, {
    method: "POST",
    body: JSON.stringify({
      dish_name,
      description,
      chef_name,
      has_nuts,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add dish");
  }
}

document
  .querySelector(".new-dish-form")
  .addEventListener("submit", newFormHandler);
