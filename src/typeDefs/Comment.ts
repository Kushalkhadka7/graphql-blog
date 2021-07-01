import { gql } from 'apollo-server-express';

/**
 * Comments definitions
 */
export default gql`
  extend type Mutation {
    createComment(description: String, postId: String!): Comment @auth
  }

  extend type Query {
    getComment(postId: String): Comment! @auth
    getAllComments(postId: String): [Comment!] @auth
  }

  type Comment {
    postId: String!
    likes: [String]
    creator: String!
    description: String
  }
`;
