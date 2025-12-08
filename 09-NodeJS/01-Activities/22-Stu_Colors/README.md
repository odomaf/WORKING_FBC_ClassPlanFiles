# 🎨 Install and Use the chalk Package (Unsolved)

In this activity, you will initialize an npm project, install chalk, and use it to style terminal output.

---

## 🎯 USER STORY

As a developer, I want to initialize my project and use a package like chalk to create styled console output.

---

## ✅ ACCEPTANCE CRITERIA

You are done when:

• A package.json file exists in this folder.  
• The chalk package (version 4) is installed and listed under dependencies.  
• Running:

node index.js Sally 500

prints a message where:  
 • Sally has a bright yellow background  
 • 500 has a bright green background (profit > 0)

• Running:

node index.js Bob -300

prints a message where:  
 • Bob has a bright yellow background  
 • -300 has a bright red background (profit <= 0)

---

## 🧪 TASKS

1. Navigate to the Unsolved folder.
2. Create a package.json:

   npm init -y

3. Install chalk v4:

   npm install chalk@4

4. In index.js:  
   • Require chalk  
   • Read name and profit from process.argv  
   • Pick bgGreenBright or bgRedBright based on profit  
   • Color the name using bgYellowBright  
   • Color the profit using the selected background color  
   • Log the full message

---

## 💡 NOTES

We use chalk v4 so we can use require().  
Chalk v5 requires ES modules and cannot be used with CommonJS syntax.

Example methods used:

chalk.bgYellowBright(text)  
chalk.bgGreenBright(text)  
chalk.bgRedBright(text)  
chalk.black(text)

---

## 🏆 BONUS

Research how chalk chains styles:

Example pattern:

chalk.bold.bgBlue.white("Hello")
