# 🌱 Git Forking Workflow

How to Copy, Modify, and Contribute to Another Developer’s Project

Now that you’re comfortable with Git and GitHub, you're ready for a workflow used in real software engineering every day: forking.

Forking allows you to:

• Make your own copy of someone else's repository  
• Build on an open-source project safely  
• Contribute improvements through pull requests  
• Use a repo as a starter template for your own work

A fork creates your own version of a repository under your GitHub account while keeping a link back to the original source. This protects the original project while allowing you to experiment freely.

In this exercise, you will fork a practice repository and walk through the full fork-and-PR workflow.

---

## Getting Started

Visit the practice repository:  
https://github.com/coding-boot-camp/forking-tutorial

---

# Part 1 — Fork & Clone

1. Open the repository on GitHub.
2. Click the **Fork** button in the top-right corner.
3. Choose **your personal GitHub account** when asked “Where should we fork?”.
4. GitHub will create a full copy of the repo under your account.
5. On your fork, click the green "Code" button and copy the SSH or HTTPS link.
6. Open your terminal and clone your fork:

   git clone git@github.com:YOUR_GITHUB_USERNAME/forking-tutorial.git  
   cd forking-tutorial

7. Verify the remote is pointing to your fork:

   git remote -v

You should see URLs that include your GitHub username.

---

# Part 2 — Create a Branch & Make Changes

1. Create a new branch for your work:

   git checkout -b branch-name

   Example: feature/update-readme

2. Make changes to the README or any other file.
3. Stage and commit your changes:

   git add .  
   git commit -m "Improve README formatting"

4. Push your branch to your GitHub fork:

   git push origin branch-name

---

# Part 3 — Open a Pull Request (PR)

1. After pushing, go back to your GitHub fork.
2. You should see a banner with the option **Compare & Pull Request**. Click it.
3. Write a clear description of what you changed and why.
4. Click **Create Pull Request**.

Your PR will now be visible to the owner of the original repository. They may approve it, request changes, or leave comments.

---

# Review

You have now practiced the full GitHub contribution workflow:

Fork → Clone → Branch → Commit → Push → Pull Request

This is the exact workflow used in open-source and professional development teams. The more you practice, the more fluent and confident you will become with collaborative version control.
