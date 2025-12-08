Module 09 Mini-Project: Portfolio Generator

In this mini-project, you will build a command-line tool that generates an HTML portfolio page from user input.

You will collect information from the user in the terminal and then write a fully formed HTML file to the file system using Node.js.

---

## User Story

As a developer, I want to quickly generate a simple portfolio page by answering a few questions in the terminal so that I do not have to manually build an HTML file from scratch every time.

---

## Acceptance Criteria

You are done when:

• The project has been initialized with npm (a package.json file exists).  
• The inquirer package (version 8.2.4) is installed and listed as a dependency.  
• Your application prompts the user for at least the following information:
– Name  
 – Location  
 – Short bio  
 – LinkedIn URL  
 – GitHub URL

• Your application uses the inquirer responses to build a complete HTML document as a string.  
• The HTML string is written to a file (for example: portfolio.html) using the fs module.  
• The generated HTML file includes:
– A valid HTML5 document structure (doctype, html, head, body)  
 – The user’s name, location, and bio  
 – Links to the user’s LinkedIn and GitHub  
 – Some basic CSS styling (can be inline in a style tag in the head section)

---

## Required Tools and Technologies

You will use:

• Node.js  
• fs for writing files to the file system  
• inquirer@8.2.4 for collecting user input  
• Template literals (multi-line strings) to generate the HTML document

---

## Suggested Steps

1. Initialize the project:

   Run: npm init -y

2. Install dependencies:

   Run: npm install inquirer@8.2.4

3. Create a file named index.js (or Main/index.js if following the provided structure).

4. In index.js:

   • Require fs and inquirer  
   • Use inquirer.prompt() to ask the user for:
   – Name  
    – Location  
    – Bio  
    – LinkedIn URL  
    – GitHub URL

5. Create a function (for example: generateHTML) that takes the user’s answers and returns a complete HTML string.

6. Use fs.writeFile to write the HTML string to a file (for example: portfolio.html).

7. Run the application with:

   node index.js

8. Open the generated portfolio.html file in your browser and confirm that:
   • The content matches the answers you entered in the terminal  
   • The page has visible styling (colors, fonts, spacing, etc.)

---

## Hints

• It may help to first design your HTML in a regular .html file until it looks the way you want in the browser. Once you are happy with it, copy the HTML into a JavaScript template literal and replace pieces with placeholders from the inquirer answers.

• Use template literals (backtick strings) for multi-line HTML and variable interpolation.

• Keep your CSS simple: fonts, background color, card layout, spacing, etc. are enough for this project.

---

## Bonus

If you finish early, here are some ideas to extend your portfolio generator:

• Add more prompts:
– Favorite technologies  
 – A list of projects with names and GitHub links  
 – A tagline or headline

• Add a section that lists the user’s projects, with each project in its own styled card.

• Explore other ways to handle asynchronous operations in Node.js, such as:
– Promises  
 – async/await

How could you rewrite your file-writing logic using async/await instead of callbacks?
