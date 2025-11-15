# GitHub Repository Setup for Collaborative Projects

This guide will help your group set up a shared GitHub repository and protect the `main` branch so everyone can work safely and consistently.

Only **one person** in your group needs to create the repository. After setup, that person will invite everyone else as collaborators.

---

## 1. Create the Repository & Add a `.gitignore`

1. Go to GitHub → **New Repository** and create a repo for your group project.  
   Make sure “**Add a README.md**” is checked.

2. Clone the repo to your computer:

   ```bash
   git clone <repository-url>
   ```

3. Open the project in VS Code.

4. Create a file at the root named:

   ```
   .gitignore
   ```

5. Add this line to the `.gitignore` file:

   ```
   .DS_Store
   ```

6. Save, then run:

   ```bash
   git add -A
   git commit -m "add gitignore"
   git push origin main
   ```

Your repository is now ready.

---

## 2. Protect the `main` Branch

To keep your project safe, no one should push directly to `main`.  
Everyone will make branches and open pull requests instead.

1. On GitHub, open your repository and go to **Settings**.

   ![GitHub repo settings page](./Images/01-repo-settings.png)

2. In the left sidebar, click **Branches**.

3. Select **Add branch protection rule**.

   ![Branch rules page](./Images/02-branch-rules.png)

4. Set the following options:

   - **Branch name pattern:** `main`
   - Check: **Require a pull request before merging**
   - Make sure **Require approvals** stays enabled (1 approval is fine)
   - Check: **Do not allow bypassing the above settings**

   ![Branch protection rule complete](./Images/03-branch-rules-done.png)

5. Click **Create** to save the rule.

From now on, you cannot push directly to `main`.  
You must create a new branch and use a pull request to merge your code.

---

## 3. Add Collaborators to the Repository

Each teammate must be added so they can push branches and open pull requests.

1. Go to **Settings → Collaborators**.

   ![Manage access settings](./Images/04-manage-access.png)

2. Click **Add people**.

3. Type your teammate’s GitHub username.

   ![Invite collaborator dialog](./Images/05-invite-collaborator.png)

4. Select the user and click **Add <username> to this repository**.

5. You will now see a pending invitation:

   ![Pending invite](./Images/06-pending-invite.png)

6. Each teammate must accept the invite.

Repeat this process for all group members.

---

## 4. You're Ready to Code!

Your group is now ready to:

- Create branches
- Push features to those branches
- Open pull requests
- Review each other’s work
- Merge safely into `main`

If you need help, ask your instructional staff.

---
