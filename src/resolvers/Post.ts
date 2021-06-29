import User from '../domain/misc/User';
import MyContext from '../domain/Context';
import PostService from '../service/Post';
import Post from '../domain/Post';

/**
 * Post resolver.
 */
const Post = {
  Query: {
    getPosts: async (parent: any, arg: any, context: MyContext, info: any): Promise<Post[]> => {
      try {
        const response = await PostService.getAllPosts(context);

        return response;
      } catch (error) {
        throw error;
      }
    },
    getPost: async (parent: any, arg: { postId: String }, context: MyContext, info: any): Promise<Post> => {
      try {
        const response = await PostService.getPost(context, arg.postId);

        return response;
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    createPost: async (parent: any, arg: { description: string }, context: MyContext, info: any): Promise<User> => {
      try {
        const response = await PostService.createPost(arg.description, context);

        return response;
      } catch (error) {
        throw error;
      }
    }
  },
  Post: {
    comments: async (post: any, arg: { description: string }, context: MyContext, info: any): Promise<any> => {
      try {
        const response = await PostService.getPostComments(post._id, context);

        return response;
      } catch (error) {
        throw error;
      }
    }
  }
};

export default Post;
