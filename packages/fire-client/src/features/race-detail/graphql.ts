import { gql } from "@apollo/client";

export const getEventBySlug = gql`
  query GetEventBySlug($slug: String!) {
    getEventBySlug(slug: $slug) {
      id
      title
      published
      date
      type
      races {
        id
        price
        capacity
        distance
      }
    }
  }
`;
