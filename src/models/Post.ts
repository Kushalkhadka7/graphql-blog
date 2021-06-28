import * as mongoose from 'mongoose';

import db from '../db';
import IAuth from '../domain/Auth';
import PostModel from '../domain/misc/Post';
import User from '../domain/misc/User';
import IPost from '../domain/Post';
import { RegisterArgs } from '../domain/request/Auth';
import PostSchema from '../schema/Post';
import UserSchema from '../schema/User';

/**
 * Auth model.
 */
class Post {
  private model: mongoose.Model<PostModel>;

  constructor() {
    const model = db.model('post', PostSchema, 'post');

    this.model = model;
  }

  /**
   * Register new user.
   *
   * @param {RegisterArgs} arg
   * @returns Promise<User>
   */
  public async createPost(description: string, userId: string): Promise<any> {
    const data = await this.model.create({ description, creator: userId });

    return data;
  }
}

export default new Post();
