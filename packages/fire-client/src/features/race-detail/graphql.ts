import { gql } from "@apollo/client";

export const getRaceBySlug = gql`
  query GetRaceBySlug($slug: String!) {
    getRaceBySlug(slug: $slug) {
      id
      title
      published
    }
  }
`;

export const createRace = gql`
  mutation CreateRace($title: String!) {
    createRace(title: $title) {
      id
      title
    }
  }
`;
