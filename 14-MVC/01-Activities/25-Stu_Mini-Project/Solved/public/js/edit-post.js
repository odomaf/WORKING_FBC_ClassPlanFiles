async function editPostHandler(event) {
  event.preventDefault();
  const id = document.querySelector("#edit-post-id").value;
  const title = document.querySelector("#edit-post-title").value.trim();
  const content = document.querySelector("#edit-post-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) document.location.replace("/dashboard");
    else alert("Failed to update post.");
  }
}

document
  .querySelector(".edit-post-form")
  ?.addEventListener("submit", editPostHandler);
