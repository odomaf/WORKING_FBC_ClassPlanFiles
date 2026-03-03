// client/src/utils/queries.js
import { gql } from "@apollo/client";

export const QUERY_BATTLES = gql`
  query GetBattles {
    battles {
      _id
      tool1 {
        _id
        name
      }
      tool2 {
        _id
        name
      }
      tool1Votes
      tool2Votes
    }
  }
`;

export const QUERY_BATTLE = gql`
  query GetBattle($id: ID!) {
    battle(id: $id) {
      _id
      tool1 {
        _id
        name
      }
      tool2 {
        _id
        name
      }
      tool1Votes
      tool2Votes
    }
  }
`;

export const QUERY_TOOLS = gql`
  query GetTools {
    tools {
      _id
      name
    }
  }
`;
