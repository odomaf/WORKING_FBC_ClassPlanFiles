# Git Cherry-Pick

Sometimes you’ll run into a situation where code you need already exists in another commit—written by a teammate or even by you on a different branch. However, that branch might not be merged yet, or you may not want *all* of its changes.

That’s where **`git cherry-pick`** comes in.

`git cherry-pick` allows you to apply **one specific commit (or multiple commits)** from another branch directly onto your current branch—without merging the entire branch.

> 📌 For more details, see the official [Git documentation on `git cherry-pick`](https://git-scm.com/docs/git-cherry-pick).

---

## Create an Example Repository

We’ll walk through a small example that simulates working with a teammate who adds a feature and later removes it—but you still want to keep the original feature.

### 1. Create a new repository

From any directory you like, run:

```sh
mkdir git-cherry-pick
cd git-cherry-pick
git init
```

---

### 2. Create starter files and make an initial commit

```sh
touch app.js index.html README.md
git add .
git commit -m "Initial commit"
```

This represents the starting point of the project.

---

### 3. Create a feature branch (teammate branch)

Pretend a teammate is working on a notifications feature:

```sh
git checkout -b feature/notifications
```

---

### 4. Add basic HTML

Update `index.html` with the following content:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Git Cherry-Pick</title>
  </head>
  <body>
    <script src="app.js"></script>
    <code>Git Cherry-Pick 🍒</code>
  </body>
</html>
```

Make sure the `app.js` file is linked so it runs when the page loads.

---

### 5. Add a feature in `app.js`

Add the following code to display a random message each time the page loads:

```js
const randomMessage = (notifications) =>
  notifications[Math.floor(Math.random() * notifications.length)];

const notifications = [
  { person: 'Mac', message: 'Hello! This is git cherry-pick!' },
  { person: 'Deandre', message: 'I hope to be a comedian one day' },
  { person: 'Charlie', message: 'I am the king of the rats' },
];

const { person, message } = randomMessage(notifications);
alert(`${person} says: ${message}`);
```

---

### 6. Commit the feature

```sh
git add .
git commit -m "Add random notification feature"
```

This is the commit we’ll want later.

---

### 7. Simulate removing the feature

Now imagine the teammate decides to remove the feature. Replace everything in `app.js` with:

```js
console.log('hello world');
```

---

### 8. Commit the removal

```sh
git add .
git commit -m "Remove random notification feature"
```

---

### 9. Find the commit you want

Run:

```sh
git log
```

Find the commit hash for **“Add random notification feature”** and copy it somewhere.  
Press `q` to exit the log.

---

## Why Cherry-Pick?

At this point:
- The feature was added
- The feature was later removed
- Both commits exist on the same branch

You want the **original feature**, but *not* the removal. Instead of merging the entire branch, you can cherry-pick just the commit you need.

---

## Using `git cherry-pick`

### 1. Create your own branch

Switch back to `main` and create a new branch:

```sh
git checkout main
git checkout -b feature/mybranch
```

---

### 2. Cherry-pick the commit

Use the commit hash you copied earlier:

```sh
git cherry-pick <commit-hash>
```

You can use the full hash or just the first 7 characters.

Git will apply the changes and create a **new commit** on your branch.

---

### Optional: Cherry-pick without committing

If you want to review or edit the changes before committing:

```sh
git cherry-pick <commit-hash> -n
```

This stages the changes but lets you commit them manually later.

---

## Conclusion

In this activity, you:

- Simulated working with a teammate
- Created and removed a feature on a separate branch
- Used **`git cherry-pick`** to pull in a single commit
- Avoided merging unnecessary changes

`git cherry-pick` is a powerful tool when you want **precision instead of everything**. Add it to your Git toolbox—you’ll use it often in real-world development.
