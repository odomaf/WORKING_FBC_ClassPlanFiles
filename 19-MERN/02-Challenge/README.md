# 19 MERN: Watch Later (GraphQL Edition)

## 🎬 Project Overview

Modern applications are driven by **data and personalization**.

This week, you will take a fully functional MERN application that currently uses a **REST API** and refactor it to use a **GraphQL API with Apollo Server**.

> A “Watch Later” app that allows users to search movies and TV shows using the OMDb API and save them to their personal queue.

You will:

- Replace REST endpoints with GraphQL queries and mutations
- Implement Apollo Server on the backend
- Connect Apollo Client on the frontend
- Update authentication to work in a GraphQL context
- Deploy your application to Render with MongoDB Atlas

This assignment is about understanding how GraphQL changes the way data flows in a full-stack MERN application.

---

## 🧠 Learning Objectives

By the end of this challenge, you should be able to:

- Explain the difference between REST and GraphQL
- Implement Apollo Server in an Express backend
- Define `typeDefs` and `resolvers`
- Use GraphQL queries and mutations in React with Apollo Client
- Pass authentication through GraphQL context
- Deploy a full-stack MERN app using MongoDB Atlas

---

## 🧾 User Story

AS A busy student or movie fan  
I WANT to search for movies and shows  
SO THAT I can save them to a Watch Later list

---

## ✅ Acceptance Criteria

GIVEN a Watch Later application  
WHEN I load the application  
THEN I am presented with Search and Login/Signup options and a search input field

WHEN I search for a movie or show while not logged in  
THEN I see search results from the OMDb API including title, year, poster, and type

WHEN I click Login/Signup  
THEN a modal appears allowing me to toggle between login and signup

WHEN I sign up with a username, email, and password  
THEN my account is created and I am logged in

WHEN I log in with valid credentials  
THEN the modal closes and I am authenticated

WHEN I am logged in  
THEN I see Search, Watch Later, and Logout options in the navigation

WHEN I search while logged in  
THEN I see search results with an option to "Add to Watch Later"

WHEN I click "Add to Watch Later"  
THEN the title is saved to my account

WHEN I click Watch Later  
THEN I see all saved titles with the option to remove them

WHEN I click Remove  
THEN the title is removed from my saved list

WHEN I click Logout  
THEN I am logged out and returned to the public search view

---

# 🏗️ Getting Started

This application already works using a REST API.

Your job is to refactor it to use GraphQL.

Before making changes:

- Study the application
- Understand how REST currently works
- Create a copy before modifying anything

You are converting REST → GraphQL, not building from scratch.

---

# 🔧 Back-End Specifications

You must implement Apollo Server and refactor the existing REST logic into GraphQL.

---

## 1️⃣ Update Authentication Middleware (`auth.js`)

Modify the middleware so it works in a GraphQL context.

You will pass the JWT token through Apollo’s `context` function instead of traditional Express request middleware.

---

## 2️⃣ Configure Apollo Server (`server.js`)

You must:

- Import `ApolloServer`
- Import `typeDefs` and `resolvers`
- Apply Apollo middleware to Express
- Configure context to include authentication

Your server should:

- Connect to MongoDB Atlas
- Start Apollo Server
- Apply middleware to Express

---

## 3️⃣ Create the GraphQL Schema

Inside the `schemas` directory:

### `index.js`

Export `typeDefs` and `resolvers`.

---

### `typeDefs.js`

Define the following types:

### Query

- `me: User`

---

### Mutation

- `login(email: String!, password: String!): Auth`
- `addUser(username: String!, email: String!, password: String!): Auth`
- `saveTitle(input: TitleInput!): User`
- `removeTitle(imdbID: ID!): User`

---

### Types

```graphql
type User {
  _id: ID!
  username: String!
  email: String!
  titleCount: Int
  savedTitles: [Title]
}

type Title {
  imdbID: ID!
  title: String
  year: String
  type: String
  poster: String
  plot: String
  imdbRating: String
  imdbLink: String
}

type Auth {
  token: ID!
  user: User
}
```

---

### Input Type

```graphql
input TitleInput {
  imdbID: ID!
  title: String
  year: String
  type: String
  poster: String
  plot: String
  imdbRating: String
  imdbLink: String
}
```

---

### `resolvers.js`

Implement:

- `me` query
- `login` mutation
- `addUser` mutation
- `saveTitle` mutation
- `removeTitle` mutation

Use your existing controller logic as a guide.

Important:

- Use `$addToSet` to prevent duplicate saved titles
- Use `$pull` to remove titles

---

# 🎨 Front-End Specifications

You must replace REST API calls with Apollo Client queries and mutations.

---

## Create These Files

### `utils/queries.js`

- `GET_ME`

---

### `utils/mutations.js`

- `LOGIN_USER`
- `ADD_USER`
- `SAVE_TITLE`
- `REMOVE_TITLE`

---

## Update These Components

### `App.jsx`

- Wrap application in `ApolloProvider`
- Configure auth link to send JWT token

---

### `SearchTitles.jsx`

- Replace REST save logic with `useMutation(SAVE_TITLE)`
- Keep state logic for tracking saved IDs

---

### `SavedTitles.jsx`

- Remove existing `useEffect` data fetching
- Use `useQuery(GET_ME)`
- Replace REST delete logic with `useMutation(REMOVE_TITLE)`

---

### `SignupForm.jsx`

- Replace REST signup with `ADD_USER` mutation

---

### `LoginForm.jsx`

- Replace REST login with `LOGIN_USER` mutation

---

# 🚀 Deployment Requirements

Your application must:

- Be deployed to Render
- Use MongoDB Atlas
- Load without errors
- Use environment variables for:
  - MongoDB connection string
  - JWT secret
  - OMDb API key

You must submit:

- Live application URL
- GitHub repository URL

---

# 🧪 Grading Criteria

## Technical (40%)

- Apollo Server implemented correctly
- REST endpoints removed
- GraphQL schema and resolvers configured
- Authentication works with GraphQL context
- Apollo Client connected properly

---

## Deployment (32%)

- Live deployed URL
- No runtime errors
- MongoDB Atlas connected
- GitHub repo submitted

---

## Application Quality (15%)

- Clean UI
- Intuitive navigation
- Proper Watch Later functionality

---

## Repository Quality (13%)

- Unique repository name
- Clean folder structure
- Meaningful commits
- High-quality README
- Proper comments and formatting

---

# 🎯 Final Thoughts

This challenge is not about copying syntax.

It is about understanding:

- Why GraphQL exists
- How it differs from REST
- How authentication changes in a GraphQL architecture
- How frontend and backend communicate differently

If you understand this assignment, you understand modern full-stack architecture.# 19 MERN: Watch Later (GraphQL Edition)

## 🎬 Project Overview

Modern applications are driven by **data and personalization**.

This week, you will take a fully functional MERN application that currently uses a **REST API** and refactor it to use a **GraphQL API with Apollo Server**.

> A “Watch Later” app that allows users to search movies and TV shows using the OMDb API and save them to their personal queue.

You will:

- Replace REST endpoints with GraphQL queries and mutations
- Implement Apollo Server on the backend
- Connect Apollo Client on the frontend
- Update authentication to work in a GraphQL context
- Deploy your application to Render with MongoDB Atlas

This assignment is about understanding how GraphQL changes the way data flows in a full-stack MERN application.

---

## 🧠 Learning Objectives

By the end of this challenge, you should be able to:

- Explain the difference between REST and GraphQL
- Implement Apollo Server in an Express backend
- Define `typeDefs` and `resolvers`
- Use GraphQL queries and mutations in React with Apollo Client
- Pass authentication through GraphQL context
- Deploy a full-stack MERN app using MongoDB Atlas

---

## 🧾 User Story

AS A busy student or movie fan  
I WANT to search for movies and shows  
SO THAT I can save them to a Watch Later list

---

## ✅ Acceptance Criteria

GIVEN a Watch Later application  
WHEN I load the application  
THEN I am presented with Search and Login/Signup options and a search input field

WHEN I search for a movie or show while not logged in  
THEN I see search results from the OMDb API including title, year, poster, and type

WHEN I click Login/Signup  
THEN a modal appears allowing me to toggle between login and signup

WHEN I sign up with a username, email, and password  
THEN my account is created and I am logged in

WHEN I log in with valid credentials  
THEN the modal closes and I am authenticated

WHEN I am logged in  
THEN I see Search, Watch Later, and Logout options in the navigation

WHEN I search while logged in  
THEN I see search results with an option to "Add to Watch Later"

WHEN I click "Add to Watch Later"  
THEN the title is saved to my account

WHEN I click Watch Later  
THEN I see all saved titles with the option to remove them

WHEN I click Remove  
THEN the title is removed from my saved list

WHEN I click Logout  
THEN I am logged out and returned to the public search view

---

# 🏗️ Getting Started

This application already works using a REST API.

Your job is to refactor it to use GraphQL.

Before making changes:

- Study the application
- Understand how REST currently works
- Create a copy before modifying anything

You are converting REST → GraphQL, not building from scratch.

---

# 🔧 Back-End Specifications

You must implement Apollo Server and refactor the existing REST logic into GraphQL.

---

## 1️⃣ Update Authentication Middleware (`auth.js`)

Modify the middleware so it works in a GraphQL context.

You will pass the JWT token through Apollo’s `context` function instead of traditional Express request middleware.

---

## 2️⃣ Configure Apollo Server (`server.js`)

You must:

- Import `ApolloServer`
- Import `typeDefs` and `resolvers`
- Apply Apollo middleware to Express
- Configure context to include authentication

Your server should:

- Connect to MongoDB Atlas
- Start Apollo Server
- Apply middleware to Express

---

## 3️⃣ Create the GraphQL Schema

Inside the `schemas` directory:

### `index.js`

Export `typeDefs` and `resolvers`.

---

### `typeDefs.js`

Define the following types:

### Query

- `me: User`

---

### Mutation

- `login(email: String!, password: String!): Auth`
- `addUser(username: String!, email: String!, password: String!): Auth`
- `saveTitle(input: TitleInput!): User`
- `removeTitle(imdbID: ID!): User`

---

### Types

```graphql
type User {
  _id: ID!
  username: String!
  email: String!
  titleCount: Int
  savedTitles: [Title]
}

type Title {
  imdbID: ID!
  title: String
  year: String
  type: String
  poster: String
  plot: String
  imdbRating: String
  imdbLink: String
}

type Auth {
  token: ID!
  user: User
}
```

---

### Input Type

```graphql
input TitleInput {
  imdbID: ID!
  title: String
  year: String
  type: String
  poster: String
  plot: String
  imdbRating: String
  imdbLink: String
}
```

---

### `resolvers.js`

Implement:

- `me` query
- `login` mutation
- `addUser` mutation
- `saveTitle` mutation
- `removeTitle` mutation

Use your existing controller logic as a guide.

Important:

- Use `$addToSet` to prevent duplicate saved titles
- Use `$pull` to remove titles

---

# 🎨 Front-End Specifications

You must replace REST API calls with Apollo Client queries and mutations.

---

## Create These Files

### `utils/queries.js`

- `GET_ME`

---

### `utils/mutations.js`

- `LOGIN_USER`
- `ADD_USER`
- `SAVE_TITLE`
- `REMOVE_TITLE`

---

## Update These Components

### `App.jsx`

- Wrap application in `ApolloProvider`
- Configure auth link to send JWT token

---

### `SearchTitles.jsx`

- Replace REST save logic with `useMutation(SAVE_TITLE)`
- Keep state logic for tracking saved IDs

---

### `SavedTitles.jsx`

- Remove existing `useEffect` data fetching
- Use `useQuery(GET_ME)`
- Replace REST delete logic with `useMutation(REMOVE_TITLE)`

---

### `SignupForm.jsx`

- Replace REST signup with `ADD_USER` mutation

---

### `LoginForm.jsx`

- Replace REST login with `LOGIN_USER` mutation

---

# 🚀 Deployment Requirements

Your application must:

- Be deployed to Render
- Use MongoDB Atlas
- Load without errors
- Use environment variables for:
  - MongoDB connection string
  - JWT secret
  - OMDb API key

You must submit:

- Live application URL
- GitHub repository URL

---

# 🧪 Grading Criteria

## Technical (40%)

- Apollo Server implemented correctly
- REST endpoints removed
- GraphQL schema and resolvers configured
- Authentication works with GraphQL context
- Apollo Client connected properly

---

## Deployment (32%)

- Live deployed URL
- No runtime errors
- MongoDB Atlas connected
- GitHub repo submitted

---

## Application Quality (15%)

- Clean UI
- Intuitive navigation
- Proper Watch Later functionality

---

## Repository Quality (13%)

- Unique repository name
- Clean folder structure
- Meaningful commits
- High-quality README
- Proper comments and formatting

---

# 🎯 Final Thoughts

This challenge is not about copying syntax.

It is about understanding:

- Why GraphQL exists
- How it differs from REST
- How authentication changes in a GraphQL architecture
- How frontend and backend communicate differently

If you understand this assignment, you understand modern full-stack architecture.
