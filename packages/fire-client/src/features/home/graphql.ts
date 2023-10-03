import { gql } from "@apollo/client";

export const getEventsQuery = gql`
  query GetEvents {
    events {
      id
      title
      slug
      races {
        id
        price
      }
    }
  }
`;
