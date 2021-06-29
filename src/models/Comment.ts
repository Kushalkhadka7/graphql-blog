import * as mongoose from 'mongoose';

import db from '../db';
import IAuth from '../domain/Auth';
import CommentModel from '../domain/misc/Comment';
import User from '../domain/misc/User';
import IPost from '../domain/Post';
import { RegisterArgs } from '../domain/request/Auth';
import CommentSchema from '../schema/Comment';

/**
 * Auth model.
 */
class Comment {
  private model: mongoose.Model<CommentModel>;

  constructor() {
    const model = db.model('comment', CommentSchema, 'comment');

    this.model = model;
  }

  /**
   * Register new user.
   *
   * @param {RegisterArgs} arg
   * @returns Promise<User>
   */
  public async createComment(description: string, userId: string, postId: String): Promise<any> {
    const data = await this.model.create({ description, creator: userId, postId });

    return data;
  }

  /**
   * Register new user.
   *
   * @param {RegisterArgs} arg
   * @returns Promise<User>
   */
  public async getPostComments(postId: any): Promise<any[]> {
    console.log(postId);
    const data = await this.model.find({ postId });

    console.log('data', data);

    return data;
  }

  /**
   * Register new user.
   *
   * @param {RegisterArgs} arg
   * @returns Promise<User>
   */
  public async getComment(commentId: any): Promise<any> {
    const data = await this.model.findOne({ _id: commentId });

    console.log('data', data);

    return data;
  }
}

export default new Comment();
