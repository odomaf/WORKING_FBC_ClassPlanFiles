# 23 Final Project: Solo Full-Stack Application

Throughout this course you have built front-end applications, backend APIs, and full-stack projects. This final project is your opportunity to combine everything you’ve learned into one polished application that demonstrates your ability to design, build, and deploy a modern web app on your own.

Think of this project as something you would proudly include in your professional portfolio. The goal is not to build the largest application possible, but to build a **focused, complete, and well-executed project** that demonstrates strong full-stack development skills.

---

# Project Goal

Build a **full-stack single-page application (SPA)** that solves a clear problem and demonstrates the skills you have developed throughout the course.

Your project should include:

- a modern React front end
- a backend API
- a persistent database
- authentication
- meaningful user interaction
- deployment to a live environment

Your application should feel like a **complete product**, even if the scope is intentionally small.

---

# Core Technical Requirements

Your application must:

- Use **React** for the front end.
- Use **Node.js with Express.js** for the backend server.
- Implement **either a REST API or a GraphQL API**.
- Support **CRUD operations** (Create, Read, Update, Delete).
- Use **one of the following database options**:
  - **MongoDB with Mongoose**
  - **PostgreSQL with Sequelize**

- Include **authentication using JSON Web Tokens (JWT)**.
- Protect **sensitive API keys and environment variables on the server**.
- Be **deployed on Render** with working data persistence.
- Include a **responsive and polished user interface**.
- Allow users to **interact with the application and modify stored data**.

---

# API Options

You may design your backend using either **GraphQL** or **REST**.

### Option 1 — GraphQL

GraphQL allows the client to request exactly the data it needs through a single endpoint.

Common tools include:

- Apollo Server
- Apollo Client
- Express middleware

### Option 2 — REST

REST APIs organize functionality through endpoints and HTTP methods.

Example routes may include:

- `GET /items`
- `POST /items`
- `PUT /items/:id`
- `DELETE /items/:id`

Choose the API style that best fits your application.

---

# Database Options

You may choose either a **document database** or a **relational database**.

### Option 1 — MongoDB + Mongoose

Best for flexible document-based data models.

Good for:

- rapidly evolving schemas
- nested or hierarchical data
- flexible structures

### Option 2 — PostgreSQL + Sequelize

Best for structured relational data with clear associations.

Good for:

- structured schemas
- relationships between entities
- strong data integrity

Both approaches are widely used in modern web development.

---

# Minimum Feature Expectations

Your application should include:

- **User authentication**
- **Protected user data**
- At least **one primary resource with full CRUD functionality**
- A **dashboard or main user interface**
- At least **one relationship between pieces of data**
- A **responsive layout**

The project should have **3–4 meaningful core features** rather than many unfinished ones.

Example applications might include:

- Job application tracker
- Habit tracker
- Study planner
- Recipe manager
- Personal finance tracker
- Event planner
- Workout log
- Book or movie collection manager

Focus on **one strong workflow done well**.

---

# User Experience Expectations

Your application should feel complete and usable.

This includes:

- clear navigation
- responsive design
- consistent styling
- intuitive interactions
- readable layouts

Your UI does not need to be overly complex, but it should look intentional and professional.

---

# Styling Options

You may choose any styling approach that works best for your project.

Options include:

- writing your own CSS
- CSS Modules
- CSS-in-JS libraries such as:
  - styled-components
  - Emotion
- component libraries such as:
  - Material UI
  - Chakra UI
  - Ant Design
  - Semantic UI

Choose tools that allow you to build a clean and consistent interface efficiently.

---

# Deployment Requirements

Your project must be deployed with:

- a **live frontend**
- a **working backend server**
- a **connected database**

Your deployed application should:

- load without major errors
- allow users to log in
- allow users to create and modify stored data

---

# Repository Requirements

Your GitHub repository should demonstrate strong development practices.

Your repository should include:

- a unique project name
- organized file structure
- meaningful commit messages
- clear naming conventions
- helpful comments where appropriate
- a **high-quality README**

---

# README Expectations

Your README should include:

- project title
- project description
- technologies used
- installation instructions
- usage instructions
- screenshots of the application
- deployed application link
- GitHub repository link

A strong README helps others quickly understand your work.

---

# Grading Breakdown

### Technical Implementation — 35%

Your project should demonstrate:

- React front end
- Node + Express backend
- REST or GraphQL API
- CRUD functionality
- MongoDB/Mongoose or PostgreSQL/Sequelize
- JWT authentication
- secure environment variable handling

---

### Deployment — 20%

- Application successfully deployed
- Database connected and functioning
- Application loads without major runtime errors

---

### Application Quality — 20%

- intuitive user experience
- responsive design
- consistent visual styling
- application feels complete

---

### Repository Quality — 15%

- clear file structure
- meaningful commits
- readable code
- strong README

---

### Project Concept and Scope — 10%

- realistic scope for a solo developer
- focused idea
- thoughtful design decisions

---

# Submission Requirements

Submit the following:

- **URL of the deployed application**
- **URL of the GitHub repository**

Make sure your repository includes a complete README and your deployed application is functional at the time of submission.

---

# Final Advice

The strongest projects focus on **execution rather than size**.

A smaller application that is polished, complete, and fully functional is far stronger than a large application that is only partially implemented.

Build something you would feel confident demonstrating during a technical interview.

Focus on **clarity, quality, and completion**.
