# 🧠 Advanced Inquirer + JSON Output

In this activity, you will build a small command-line app that collects user information using inquirer and saves the results to a JSON file.

---

## 🎯 USER STORY

As a developer, I want to collect user input from the command line and save it to a JSON file so I can reuse that data later.

---

## ✅ ACCEPTANCE CRITERIA

You are done when:

• You have initialized the project with a package.json file using:
npm init -y

• You have installed the required dependencies:
npm install inquirer@8.2.4 chalk@4

• The app asks the user:
"What is your name?"

• The app asks the user:
"What languages do you know?"
with checkbox options:
HTML, CSS, JavaScript, PostgreSQL

• The app asks the user:
"What is your preferred method of communication?"
with list options:
email, phone, telekinesis

• After the prompts complete:

- A JSON file is created in the same folder
- The file name is the user's name in lowercase with spaces removed, plus ".json"
  Example:
  "Roger Le" → "rogerle.json"
- The file contains the full response object in valid JSON format.

---

## 🧪 HOW TO TEST

1. Run:
   node index.js

2. Answer all questions.

3. Confirm that:
   • A new .json file appears in the folder  
   • The filename matches your name, lowercased with no spaces  
   • The file contains the name, stack, and contact values you entered

---

## 💡 HINTS

• Use chalk.magentaBright() to style your question messages.  
• Use inquirer types:
input, checkbox, and list.  
• JSON.stringify(data, null, 2) will format the JSON nicely.

---

## 🏆 BONUS

Try adding validation:

• Prevent empty names  
• Require at least one language to be selected

Use inquirer's validate function on your questions.
