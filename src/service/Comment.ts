import IPost from '../domain/Post';
import User from '../domain/misc/User';
import { LoginArgs, RegisterArgs } from '../domain/request/Auth';
import LoginResponse from '../domain/response/Login';
import CommentModel from '../models/Comment';
import { Jwt } from '../utils/Jwt';
import Auth from '../models/Auth';
import MyContext from '../domain/Context';

/**
 * Post service.
 */
class Comment {
  public async createComment(description: string, ctx: MyContext, postId: String) {
    const user = await Auth.findUserByEmail(ctx.user.email);

    if (!user) {
      throw new Error('User not found.');
    }

    return CommentModel.createComment(description, user._id!, postId);
  }

  public async getAllComments(ctx: MyContext, postId: String) {
    const comments = CommentModel.getPostComments(postId);

    return comments;
  }

  public async getComment(ctx: MyContext, commentId: String) {
    const comment = CommentModel.getComment(commentId);

    return comment;
  }
}

export default new Comment();
