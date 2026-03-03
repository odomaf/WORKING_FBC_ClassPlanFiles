const typeDefs = `#graphql
  type Tool {
    _id: ID!
    name: String!
  }

  type Battle {
    _id: ID!
    tool1: Tool!
    tool2: Tool!
    tool1Votes: Int!
    tool2Votes: Int!
  }

  type Query {
    tools: [Tool]!
    battles: [Battle]!
    battle(id: ID!): Battle
  }

  type Mutation {
  createBattle(tool1: ID!, tool2: ID!): Battle!
  vote(battleId: ID!, toolNum: Int!): Battle!
}
`;

module.exports = typeDefs;
