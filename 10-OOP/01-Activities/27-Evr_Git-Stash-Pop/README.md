# Git Stash

You’ve been building your Git skills step by step, and now it’s time to learn one of Git’s most practical tools: git stash.

This command lets you temporarily set aside unfinished work so you can switch tasks without committing incomplete changes.

---

## When Would You Use git stash?

Imagine this situation:

You’re working on a sign-up feature for your team’s application when your manager asks you to pause and fix something urgent on the homepage. You need to switch branches, but:

- Your current work isn’t ready to commit
- You don’t want to lose your progress
- Git won’t let you change branches with conflicting uncommitted files

That’s where git stash comes in.

git stash saves your uncommitted changes locally so you can come back to them later. These changes are not pushed to GitHub (or any remote repo).

---

## Using git stash (Demo)

### Step 1: Set the default branch name (if needed)

Run:

git config --global init.defaultBranch main

---

### Step 2: Create a new repository

Run:

mkdir stashPop
cd stashPop
git init

---

### Step 3: Create and commit a README file

Run:

touch README.md
git add -A
git commit -m "initial commit"

---

### Step 4: Create a new branch and add a tracked file

Run:

git checkout -b dev
touch newFile.js
git add newFile.js
git commit -m "newFile is tracked in dev"

---

### Step 5: Switch back to main

Run:

git checkout main
ls

Notice that newFile.js does not exist on the main branch.

---

### Step 6: Create a conflicting file on main

Run:

touch newFile.js

At this point, newFile.js is untracked on main.

Now try switching back to the dev branch:

git checkout dev

You should see an error similar to:

error: The following untracked working tree files would be overwritten by checkout: newFile.js
Please move or remove them before you switch branches.
Aborting

Git prevents the checkout because switching branches would overwrite the file.

---

### Step 7: Stash your untracked changes

Run:

git stash -u
ls

The -u flag tells Git to include untracked files in the stash. The file has now been safely stored, allowing you to switch branches.

---

### Step 8: Switch branches successfully

Run:

git checkout dev

---

### Step 9: Restore your stashed changes

To bring your stashed changes back:

git checkout main
git stash pop

git stash pop removes the most recent stash from the stack and reapplies its changes.

---

## Other Useful git stash Commands

- git stash drop — Remove the most recent stash
- git stash apply — Apply the stash but keep it in the stash list
- git stash clear — Remove all stashed entries

---

## Review

You used git stash to temporarily save unfinished work so you could safely switch branches. This command is especially useful when collaborating with a team or pulling in changes without committing incomplete code.

You now have another powerful Git tool to manage your workflow efficiently.
