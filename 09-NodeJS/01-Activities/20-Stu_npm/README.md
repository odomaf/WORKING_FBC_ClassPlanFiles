# 📦 Initialize a Project Using npm (Unsolved)

In this activity, you will set up a Node.js project, install dependencies using npm, and run a simple script using the inquirer package.

---

## 🎯 USER STORY

As a developer, I want to initialize my project with npm and manage dependencies so I can use external packages like inquirer.

---

## ✅ ACCEPTANCE CRITERIA

You are done when:

• A package.json file exists in the Unsolved folder.  
• You have installed inquirer version 8.2.4 using npm.  
• The node_modules folder and package-lock.json file appear in the Unsolved folder.  
• Running the script using "node index.js" displays the prompt:
Press ENTER to continue...

---

## 🧪 TASKS

1. Navigate into the Unsolved folder using the terminal.
2. Run npm init to create a package.json file.
3. Install the specific version of inquirer:
   npm install inquirer@8.2.4
4. Require inquirer inside index.js.
5. Create a basic prompt asking the user to press ENTER.
6. Test by running:
   node index.js

---

## 💡 NOTES

• npm init -y will automatically create a default package.json without questions.  
• node_modules may be hidden by the files.exclude setting in VS Code—this is normal.  
• inquirer version 9+ uses ES modules, so we intentionally install version 8.2.4 for CommonJS compatibility.

---

## 🏆 BONUS

Research the following:

• What does the -y flag do in npm init?  
• What is the difference between local installs and global installs (-g)?
