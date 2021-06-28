import { gql } from 'apollo-server-express';

const root = gql`
  directive @auth on FIELD_DEFINITION

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default root;
