import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    createPost(description: String): Post @auth
  }

  extend type Query {
    getPosts: Post
  }

  type Post {
    likes: [String]
    creator: String
    comments: [String]
    description: String
    recentComments: [String]
  }
`;
