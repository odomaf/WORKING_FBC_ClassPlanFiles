# Module 19 Mini-Project: Dev Tools Battle (GraphQL Edition)

In this mini-project, you are given a fully functioning MERN-stack application where users can create a head-to-head battle between two developer tools and vote for their favorite.

Currently, the application uses a REST API. Your task is to refactor the application to use a GraphQL API powered by Apollo Server (backend) and Apollo Client (frontend).

The objective is not to redesign the app, but to modernize the data layer and understand how GraphQL replaces traditional REST routes in a full-stack application.

---

## What You’re Building

You are building a simple “battle board” where users can:

- View a list of ongoing developer tool battles
- Create a new battle between two tools
- Vote for one of the two tools
- View the current vote totals for each tool

Example battles:

- React vs Vue
- MongoDB vs PostgreSQL
- GitHub vs GitLab
- Docker vs Podman
- Jest vs Vitest

---

## User Stories

- As a user, I want to see a list of tool battles.
- As a user, I want to be able to create a battle between two developer tools.
- As a user, I want to be able to vote for one of the two tools in a battle.
- As a user, I want to see the current number of votes for each tool.

---

## Acceptance Criteria

The mini-project is complete when the following criteria are met:

- The `/` homepage route renders a list of tool battles.
- The `/battle` route renders a form to create a new battle.
- The `/battle/:id` route renders a single battle where users can vote.
- An Apollo Server is configured to handle GraphQL queries and mutations.
- The existing REST API is replaced with GraphQL.
- Apollo Client is configured so the React app communicates with the Apollo Server.
- A `NotFound` 404 page is displayed for unknown routes.

---

## Technical Focus

This mini-project is about converting the data layer from REST to GraphQL.

You should:

- Create GraphQL type definitions (schema) for battles.
- Implement resolvers for:
  - Queries (get all battles, get battle by id)
  - Mutations (create battle, vote)
- Replace REST `fetch()` calls with:
  - `useQuery()`
  - `useMutation()`

---

## Suggested Battle Categories (Optional)

To keep your app consistent, choose one theme:

### Frontend Faceoffs

- React vs Vue
- Vite vs Webpack
- Tailwind vs Bootstrap

### Backend Battles

- Express vs Fastify
- REST vs GraphQL
- Node vs Deno

### Database Duels

- MongoDB vs PostgreSQL
- Redis vs Memcached

### DevOps Decisions

- Docker vs Podman
- GitHub Actions vs GitLab CI

### Testing Throwdowns

- Jest vs Vitest
- Cypress vs Playwright

---

## Development Hint

After implementing GraphQL on the server, use Apollo Server’s built-in development IDE to test your queries and mutations before connecting the frontend.

---

## Bonus Challenge

If you complete the core requirements, add authentication so that:

- Only logged-in users can create battles.
- Only logged-in users can vote.

---

## Recommended Team Workflow

- Developer 1: Configure Apollo Server, create typeDefs and resolvers.
- Developer 2: Configure Apollo Client and refactor React components to use GraphQL.
- Both: Connect the full stack and test all routes together.

---

## Final Checklist

Before submission, confirm:

- [ ] Homepage loads battles using a GraphQL query
- [ ] Create battle form uses a GraphQL mutation
- [ ] Voting uses a GraphQL mutation
- [ ] Battle detail page loads by id via GraphQL
- [ ] 404 page renders properly for unknown routes

---

Dev Tools Battle is designed to help you understand how modern full-stack applications manage data using GraphQL instead of REST while maintaining clean routing and component structure.
