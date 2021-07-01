import { gql } from 'apollo-server-express';

/**
 * Auth definitions.
 */
export default gql`
  extend type Mutation {
    login(email: String!, password: String!): LoginResponse
    register(name: String!, email: String!, password: String!): User
  }

  type User {
    name: String
    email: String
  }

  type LoginResponse {
    user: User!
    accessToken: String!
    refreshToken: String!
  }
`;
