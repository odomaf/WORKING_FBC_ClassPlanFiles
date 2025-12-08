# 🏗️ Build a Text Logger that Uses chalk

Work with a partner to implement the following user story:

As a developer, I want to create a command-line application that takes input from the user and logs a message in a selected color to the console.

---

## ✅ ACCEPTANCE CRITERIA

You are done when:

• You have initialized your project with a package.json file by running:  
 npm init -y

• You have installed inquirer version 8.2.4 and added it to your dependencies by running:  
 npm install inquirer@8.2.4

• You have installed chalk version 4 and added it to your dependencies by running:  
 npm install chalk@4

• The application asks the user:  
 "What text would you like to log?"

• The application then asks:  
 "What color would you like to use?"  
 with the options: red, blue, green, yellow, cyan, magenta

• The text is logged in the selected color using chalk.

---

## 💡 HINTS

• Use the inquirer npm page to see how to use input and list prompts.  
• Chalk v4 works with require(), which is why we install that specific version.  
• You can map color names to chalk functions, for example:  
 red → chalk.red  
 blue → chalk.blue

---

## 🏆 BONUS

Enhance the app by adding styling choices:

• bold  
• underline  
• background colors

You can use another inquirer prompt to let the user pick a style, then chain it with chalk, for example:

chalk.bold.red("Styled text")
