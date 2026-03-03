// client/src/utils/mutations.js
import { gql } from "@apollo/client";

export const CREATE_BATTLE = gql`
  mutation CreateBattle($tool1: ID!, $tool2: ID!) {
    createBattle(tool1: $tool1, tool2: $tool2) {
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

export const VOTE = gql`
  mutation Vote($battleId: ID!, $toolNum: Int!) {
    vote(battleId: $battleId, toolNum: $toolNum) {
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
