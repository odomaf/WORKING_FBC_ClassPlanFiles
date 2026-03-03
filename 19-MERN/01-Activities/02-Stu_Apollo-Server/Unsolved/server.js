const express = require("express");

// TODO: Explain what ApolloServer is responsible for in a GraphQL application.
// What problem does it solve?
const { ApolloServer } = require("@apollo/server");

// TODO: Explain what expressMiddleware does.
// How does this connect Apollo to Express?
const { expressMiddleware } = require("@apollo/server/express4");

// TODO: Describe what typeDefs and resolvers represent in GraphQL.
// How are they different from each other?
const { typeDefs, resolvers } = require("./schemas");

// TODO: Explain what this database connection file likely exports
// and why we need to wait for it before starting the server.
const db = require("./config/connection");

// TODO: What is happening here?
// Why do we check process.env.PORT?
const PORT = process.env.PORT || 3001;

// TODO: Explain what this ApolloServer instance is being configured with.
// What do typeDefs and resolvers control?
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// TODO: What does calling express() return?
// What role does this object play in the application?
const app = express();

// TODO: Explain why this function is async.
// What asynchronous operations are happening inside it?
const startApolloServer = async () => {
  // TODO: Why must we call server.start() before applying middleware?
  await server.start();

  // TODO: What does this middleware allow the server to handle?
  app.use(express.urlencoded({ extended: false }));

  // TODO: Why is JSON parsing required for GraphQL?
  app.use(express.json());

  // TODO: What does mounting at '/graphql' mean?
  // What would happen if this path changed?
  app.use("/graphql", expressMiddleware(server));

  // TODO: Why do we wait for the database connection before calling app.listen?
  db.once("open", () => {
    // TODO: What does app.listen actually do?
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// TODO: Why do we invoke this function at the bottom of the file?
// What would happen if we forgot to call it?
startApolloServer();
