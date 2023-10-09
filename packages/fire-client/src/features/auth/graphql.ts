import { gql } from "@apollo/client";

export const login = gql`
  mutation Login($id: ID!) {
    login(id: $id) {
      id
      title
    }
  }
`;

export const logout = gql`
  mutation Logout($id: ID!) {
    logout(id: $id) {
      id
      title
    }
  }
`;
