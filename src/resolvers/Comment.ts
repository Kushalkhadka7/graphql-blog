import User from '../domain/misc/User';
import MyContext from '../domain/Context';
import CommentService from '../service/Comment';
import Comment from '../domain/misc/Comment';

/**
 * Post resolver.
 */
const Comment = {
  Query: {
    getAllComments: async (parent: any, arg: { postId: string }, context: MyContext, info: any): Promise<Comment[]> => {
      try {
        const response = await CommentService.getAllComments(context, arg.postId);

        return response;
      } catch (error) {
        throw error;
      }
    },
    getComment: async (parent: any, arg: { commentId: string }, context: MyContext, info: any): Promise<any> => {
      try {
        const response = await CommentService.getComment(context, arg.commentId);

        return response;
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    createComment: async (
      parent: any,
      arg: { description: string; postId: string },
      context: MyContext,
      info: any
    ): Promise<Comment> => {
      try {
        const response = await CommentService.createComment(context, arg.description, arg.postId);

        // PUBLISH EVENT
        context.pubSub.publish('NEW_COMMENT', {
          newComment: response
        });

        return response;
      } catch (error) {
        throw error;
      }
    }
  }
};

export default Comment;
