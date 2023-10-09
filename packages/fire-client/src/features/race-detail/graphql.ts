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

export const getEventByID = gql`
  query GetEventByID($id: ID!) {
    getEventByID(id: $id) {
      id
      title
    }
  }
`;

export const updateEventByID = gql`
  mutation UpdateEventByID($id: ID!) {
    updateEventByID(id: $id) {
      id
      title
    }
  }
`;
