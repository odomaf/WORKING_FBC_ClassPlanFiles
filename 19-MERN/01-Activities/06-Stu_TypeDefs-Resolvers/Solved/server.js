/**
 * server.js
 * ---------------------------------------------------------
 * CodeAcademy – Unit 19 (MERN + GraphQL)
 *
 * This file is responsible for:
 * 1) Creating the Express HTTP server
 * 2) Creating the Apollo GraphQL server
 * 3) Connecting them together
 * 4) Waiting for MongoDB to be ready
 * 5) Starting the application
 *
 * Request Flow Overview:
 * Client → Express → Apollo → Resolvers → MongoDB
 */

const express = require("express");

// ApolloServer is the core GraphQL engine.
// It interprets GraphQL queries and executes resolver logic.
const { ApolloServer } = require("@apollo/server");

// expressMiddleware allows Apollo to plug into Express.
// Without this, Apollo would not be connected to our HTTP server.
const { expressMiddleware } = require("@apollo/server/express4");

// Import schema definition (structure of API)
// typeDefs = defines types, queries, mutations
// resolvers = defines the logic that runs when a query is executed
const { typeDefs, resolvers } = require("./schemas");

// Import MongoDB connection (via Mongoose)
const db = require("./config/connection");

// Choose port:
// - If deployed (e.g., Render/Heroku), use environment variable
// - Otherwise default to 3001 for local development
const PORT = process.env.PORT || 3001;

/**
 * Create Apollo Server instance.
 *
 * typeDefs → WHAT the API looks like
 * resolvers → HOW the API behaves
 *
 * Apollo does not automatically start —
 * we must explicitly call server.start().
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Initialize Express application.
// This creates the HTTP server object that will listen for requests.
const app = express();

/**
 * startApolloServer()
 * ---------------------------------------------------------
 * This function bootstraps the application.
 *
 * Why async?
 * Because server.start() is asynchronous.
 *
 * If we do not await server.start(),
 * middleware will fail to attach properly.
 */
const startApolloServer = async () => {
  // Start the Apollo GraphQL engine
  // Required before attaching middleware
  await server.start();

  /**
   * Middleware Configuration
   * ---------------------------------------------------------
   * Middleware runs in order before requests reach routes.
   */

  // Parses URL-encoded data (form submissions)
  app.use(express.urlencoded({ extended: false }));

  // Parses JSON bodies.
  // GraphQL requests are typically sent as JSON.
  app.use(express.json());

  /**
   * Mount Apollo middleware at /graphql
   *
   * This means:
   * Any request to /graphql
   * will be handled by Apollo instead of a REST route.
   *
   * Example:
   * POST http://localhost:3001/graphql
   */
  app.use("/graphql", expressMiddleware(server));

  /**
   * Wait for MongoDB connection before starting server.
   *
   * Why?
   * Because resolvers depend on database access.
   * If the DB isn't ready, queries would fail.
   */
  db.once("open", () => {
    // Start listening for incoming HTTP requests
    app.listen(PORT, () => {
      console.log(`🚀 API server running on port ${PORT}!`);
      console.log(
        `📊 GraphQL endpoint available at http://localhost:${PORT}/graphql`,
      );
    });
  });
};

// Invoke the startup function.
// Without this call, nothing runs.
startApolloServer();
