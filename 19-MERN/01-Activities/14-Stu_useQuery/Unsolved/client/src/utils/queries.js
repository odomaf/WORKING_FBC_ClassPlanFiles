import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
  query Thoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;
