# Module 06 Mini-Project: Library of Congress Story Explorer

In this mini-project, you and your group will build a **“story explorer”** powered by the **Library of Congress API**.

You’ll let users search across maps, photos, audio, newspapers, films, and more — then display the results in a clean, modern UI.

---

## 🎯 User Stories

Your completed app should satisfy these:

- As a user, I can **type a search term** and get results from the Library of Congress.
- As a user, I can choose to **search all formats** or **filter by a specific format** (maps, audio, photos, etc.).
- As a user, I see my search results on a **separate results page**.
- As a user, I can **search again from the results page** without going back.

To learn how the API works, read the **Requests** section of the  
[Library of Congress API documentation](https://www.loc.gov/apis/json-and-yaml/requests/).

---

## 🏠 Homepage (`index.html`)

Your homepage should:

- Have a **simple, polished UI** (think: “mini search engine”).
- Include a **search form** with:

  - A text input for the **search term**.
  - A `<select>` dropdown for **format** (maps, photos, audio, etc.).
  - Format options must come from the **format values** listed in the  
    [Library of Congress requests docs](https://www.loc.gov/apis/json-and-yaml/requests/endpoints/).

- On submit:
  - Use a **submit event listener** on the form.
  - Prevent the default page reload.
