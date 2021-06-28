import User from '../domain/misc/User';
import MyContext from '../domain/Context';
import PostService from '../service/Post';

/**
 * Post resolver.
 */
const Post = {
  Query: {
    getPost: async (parent: any, arg: { description: string }, context: MyContext, info: any): Promise<any> => {
      try {
        const response = await PostService.getPost(context);

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
  }
};

export default Post;
