import { gql } from 'apollo-server-express';

const root = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default root;
