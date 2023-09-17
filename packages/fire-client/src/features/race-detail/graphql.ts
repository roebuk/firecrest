import { gql } from '@apollo/client'

export const getRace = gql`
  query GetRace($getRaceId: ID!) {
    getRace(id: $getRaceId) {
      id
      title
      published
    }
  }
`;