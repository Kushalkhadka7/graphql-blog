import { gql } from 'apollo-server-express';

/**
 * Root definitions.
 */
const root = gql`
  directive @auth on FIELD_DEFINITION

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`;

export default root;
