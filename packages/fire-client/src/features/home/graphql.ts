import { gql } from '@apollo/client'

export const getRacesQuery = gql`
  query GetRaces {
    races {
      id
      title
    }
  }
`;