# Module 14 Project: Crowdfunding Application (MVC)

## Overview

In this project, you will work with a group to build a full-stack crowdfunding application using Node.js, Express.js, Sequelize, Handlebars.js, and the Model-View-Controller (MVC) architectural pattern.

The application allows users to create accounts, log in, and publish fundraising projects. Authentication, session management, and protected routes are required to ensure users can only manage their own content.

This project focuses on connecting all layers of an MVC application and reinforcing real-world full-stack development practices.

---

## User Stories

- As a visitor, I want to see a list of active crowdfunding projects.
- As a user, I want to create an account so I can participate.
- As a logged-in user, I want to create, view, and manage my own projects.

---

## Acceptance Criteria

- The homepage (`/`) displays all projects stored in the database.
- Visiting `/project/:id` shows detailed information for a single project.
- The `/login` route displays forms for both logging in and creating an account.
- Existing users can log in and establish a server-side session.
- New users can create an account and are logged in immediately.
- The `/profile` route displays the logged-in user’s projects and a form to create a new project.
- Only logged-in users can access the `/profile` route.
- Logged-in users are redirected to `/profile` if they attempt to access `/login`.
- Users can create new projects from their profile page.
- Users can delete their own projects.
- Users can log out, which ends their session.
- Sessions expire after a period of inactivity.
- API routes that create or delete projects are protected from unauthenticated users.
- The application follows MVC architecture.
- Views are rendered using Handlebars.js templates.

---

## Data Models

### User

- `id` (primary key)
- `name`
- `email`
- `password`

### Project

- `id` (primary key)
- `name`
- `description`
- `date_created`
- `needed_funding`
- `user_id` (foreign key)

### Relationships

- A user can have many projects.
- A project belongs to one user.
- Deleting a user deletes all associated projects.

---

## Run the App Locally

### 0) Prerequisites (One-Time Setup)

Make sure you have:

- Node.js installed
- PostgreSQL installed and running
- A database GUI tool (optional): pgAdmin, TablePlus, DBeaver, etc.

You can confirm PostgreSQL is running by opening a terminal and running:
`psql --version`

---

### 1) Install Dependencies

From the project folder:
`npm install`

---

### 2) Create the Database

This project includes a schema file you can run to create the database.

Option A (Recommended): Use `psql` to run the schema

1. Open your terminal
2. Run:
   `psql -U postgres`
3. Then run:
   `\i db/schema.sql;`
4. Exit psql:
   `\q`

Option B: Create the DB manually in a GUI

- Create a database named `crowdfunding_db`

---

### 3) Configure Environment Variables

1. Copy the example env file:

- Rename `.env.EXAMPLE` → `.env`

2. Update `.env` with your local credentials:

- `DB_NAME=crowdfunding_db`
- `DB_USER=postgres`
- `DB_PASSWORD=your_password`
- `SESSION_SECRET=some_long_random_string`

---

### 4) Seed the Database (Optional but Recommended)

Seeding gives you sample users/projects so you can test quickly.

Run:
`npm run seed`

---

### 5) Start the Server

Run:
`npm start`

Then open:
`http://localhost:3001`

---

### 6) Helpful Testing Tips

- If you want to test API routes directly, use Insomnia or Postman.
- If you seed the database, use one of the seeded users to log in.
- If something fails, check the terminal output first — the error message usually points to the issue.

---

## Common Issues (Quick Fixes)

### “Database does not exist”

- Make sure you ran `db/schema.sql` or created `crowdfunding_db` manually.

### “Password authentication failed”

- Double-check `DB_USER` and `DB_PASSWORD` in `.env`
- Confirm your Postgres username/password works by logging into `psql`.

### App loads but nothing happens when clicking buttons

- Open DevTools → Console and Network tab
- Check for JavaScript errors or failed fetch requests (404/500)

---

## Getting Started (Development Plan)

1. Rename `.env.EXAMPLE` to `.env` and set credentials.
2. Confirm the MVC folder structure:
   - `models/`
   - `views/`
   - `controllers/`
3. Use the acceptance criteria as your checklist.
4. Review Express Handlebars if needed:
   https://www.npmjs.com/package/express-handlebars

---

## Helpful Questions to Consider

- How can API routes be tested before the front end is complete?
- Where should client-side JavaScript live?
- How can middleware protect routes?
- How can Handlebars helpers simplify conditional rendering?

---

## Bonus Challenge

- Add an `/edit/:id` route that allows logged-in users to update their projects.
- Deploy the completed application to Render.

---

## Submission Requirements

Submit:

- A live URL to the deployed application
- A GitHub repository URL containing:
  - Complete application code
  - Clear project structure
  - Meaningful commit messages
  - A README describing the project
