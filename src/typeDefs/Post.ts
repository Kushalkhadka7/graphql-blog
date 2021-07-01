import { gql } from 'apollo-server-express';

/**
 * Post definitions.
 */
export default gql`
  extend type Mutation {
    createPost(description: String): Post @auth
  }

  extend type Query {
    getPosts: [Post!] @auth
    getPost(postId: String!): Post @auth
  }

  type Post {
    likes: [String]
    creator: String
    comments: [Comment!]
    description: String
    recentComments: [String]
  }
`;
