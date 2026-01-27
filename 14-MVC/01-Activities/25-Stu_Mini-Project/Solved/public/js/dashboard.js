async function newPostHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (title && content) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) document.location.replace("/dashboard");
    else alert("Failed to create post.");
  }
}

async function deletePostHandler(event) {
  const btn = event.target.closest("button[data-id]");
  if (!btn) return;

  const id = btn.getAttribute("data-id");
  const response = await fetch(`/api/posts/${id}`, { method: "DELETE" });

  if (response.ok) document.location.replace("/dashboard");
  else alert("Failed to delete post.");
}

document
  .querySelector(".new-post-form")
  ?.addEventListener("submit", newPostHandler);
document.querySelector(".post-list")?.addEventListener("click", (e) => {
  if (e.target.matches(".btn-delete")) deletePostHandler(e);
});
