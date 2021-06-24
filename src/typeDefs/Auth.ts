import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    register(name: String, email: String): User
  }

  type User {
    name: String
    email: String
  }
`;
