import Auth from '../models/Auth';
import MyContext from '../domain/Context';
import * as error from '../errors/error';
import CommentModel from '../models/Comment';
import IComment from '../domain/misc/Comment';
import { ICommentService } from '../domain/Comment';

/**
 * Post service.
 */
class Comment implements ICommentService {
  /**
   * Create comment for post.
   *
   * @param {MyContext} ctx
   * @param {string} description
   * @param {string} postId
   *
   * @returns {Promise<IComment>}
   */
  public async createComment(ctx: MyContext, description: string, postId: String): Promise<IComment> {
    const user = await Auth.findUserByEmail(ctx.user.email);

    if (!user) {
      throw new Error(error.USER_NOT_FOUND);
    }

    return CommentModel.createComment(description, user._id!, postId);
  }

  /**
   * Get all comments.
   *
   * @param {MyContext} ctx
   * @param {string} postId
   *
   * @returns {Promise<IComment[]>}
   */
  public async getAllComments(ctx: MyContext, postId: string): Promise<IComment[]> {
    const comments = CommentModel.getPostComments(postId);

    return comments;
  }

  /**
   * Get comment by comment id.
   *
   * @param {MyContext} ctx
   * @param {string} commentId
   *
   * @returns {Promise<IComment | null>}
   */
  public async getComment(ctx: MyContext, commentId: string): Promise<IComment | null> {
    const comment = CommentModel.getComment(commentId);

    return comment;
  }

  /**
   * Get loaded comments for data loader.
   *
   * @param {string} ids
   *
   * @returns {Promise<IComment[]>}
   */
  public async getLoadedComments(ids: string[]): Promise<IComment[]> {
    const comment = CommentModel.getLoadedComments(ids);

    return comment;
  }
}

export default new Comment();
