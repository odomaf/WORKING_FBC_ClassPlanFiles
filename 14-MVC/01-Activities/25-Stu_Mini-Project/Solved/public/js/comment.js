async function commentFormHandler(event) {
  event.preventDefault();
  const body = document.querySelector("#comment-body").value.trim();
  const post_id = document.querySelector("#post-id").value;

  if (body) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ body, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) document.location.reload();
    else alert("Failed to add comment.");
  }
}

document
  .querySelector(".comment-form")
  ?.addEventListener("submit", commentFormHandler);
