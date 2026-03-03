/**
 * server.js
 * -------------------------------------------------------------
 * CodeAcademy – Unit 19 (MERN + GraphQL)
 *
 * PURPOSE:
 * This file bootstraps our entire backend application.
 *
 * It:
 * 1) Creates an Express server
 * 2) Creates an Apollo GraphQL server
 * 3) Connects both together
 * 4) Waits for MongoDB to connect
 * 5) Starts listening for incoming requests
 *
 * Big Picture Flow:
 * Client → Express → Apollo → Resolvers → MongoDB
 */

// Import Express (HTTP server framework)
const express = require("express");

// Import Apollo Server (GraphQL engine)
// ApolloServer handles GraphQL queries & mutations
// expressMiddleware allows Apollo to plug into Express
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

// Import the GraphQL schema pieces
// typeDefs = the structure of our API (schema)
// resolvers = the logic that runs when queries/mutations are executed
const { typeDefs, resolvers } = require("./schemas");

// Import MongoDB connection (Mongoose connection instance)
const db = require("./config/connection");

// Define the port our server will run on
// Uses environment variable if deployed, otherwise defaults to 3001
const PORT = process.env.PORT || 3001;

/**
 * Create a new Apollo Server instance.
 *
 * typeDefs → define what clients are allowed to ask for
 * resolvers → define how we fetch or modify the data
 *
 * Apollo does NOT start immediately.
 * We must call server.start() later.
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create the Express application
const app = express();

/**
 * This async function initializes and starts everything.
 *
 * Why async?
 * Because Apollo's server.start() is asynchronous.
 */
const startApolloServer = async () => {
  // Start the Apollo GraphQL engine
  // Must be called before applying middleware
  await server.start();

  /**
   * Middleware Section
   * -------------------------------------------------------------
   * Middleware runs before routes execute.
   */

  // Parse URL-encoded form data
  app.use(express.urlencoded({ extended: false }));

  // Parse incoming JSON requests
  // GraphQL requests are sent as JSON
  app.use(express.json());

  /**
   * Mount Apollo middleware at /graphql
   *
   * This means:
   * Any request sent to /graphql
   * will be handled by Apollo instead of a normal REST route.
   *
   * Example:
   * POST http://localhost:3001/graphql
   */
  app.use("/graphql", expressMiddleware(server));

  /**
   * Wait for MongoDB connection before starting server.
   *
   * This ensures:
   * - The database is ready
   * - Resolvers can access data safely
   */
  db.once("open", () => {
    // Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 API server running on port ${PORT}!`);
      console.log(
        `📊 GraphQL endpoint available at http://localhost:${PORT}/graphql`,
      );
    });
  });
};

// Call the function to start everything
startApolloServer();
