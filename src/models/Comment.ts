import * as mongoose from 'mongoose';

import db from '../db';
import IComment from '../domain/misc/Comment';
import CommentSchema from '../schema/Comment';
import CommentModel from '../domain/misc/Comment';
import { ICommentModel } from '../domain/Comment';
import { COMMENT } from '../constants/collections';

/**
 * Auth model.
 */
class Comment implements ICommentModel {
  private model: mongoose.Model<CommentModel>;

  constructor() {
    const model = db.model(COMMENT, CommentSchema, COMMENT);

    this.model = model;
  }

  /**
   * Create comment for a post.
   *
   * @param {string} description
   * @param {string} userId
   * @param {string} postId
   *
   * @returns {Promise<IComment>}
   */
  public async createComment(description: string, userId: string, postId: String): Promise<IComment> {
    const data = await this.model.create({ description, creator: userId, postId });

    return data;
  }

  /**
   * Get comments for specific post.
   *
   * @param {string} postId
   *
   * @returns {Promise<IComment[]>}
   */
  public async getPostComments(postId: string): Promise<IComment[]> {
    const data = await this.model.find({ postId: postId as any });

    return data;
  }

  /**
   * Get comment by comment id.
   *
   * @param {string} commentId
   *
   * @returns {Promise<IComment | null>}
   */
  public async getComment(commentId: string): Promise<IComment | null> {
    const data = await this.model.findOne({ _id: commentId as any });

    return data;
  }

  /**
   * Get loaded comments for data loader.
   *
   * @param {string[]} ids
   *
   * @returns {Promise<IComment[]>}
   */
  public async getLoadedComments(ids: string[]): Promise<IComment[]> {
    const data = this.model.find({ postId: { $in: ids as any[] } });

    return data;
  }
}

export default new Comment();
