import * as mongoose from 'mongoose';

import db from '../db';
import PostSchema from '../schema/Post';
import PostModel from '../domain/misc/Post';
import { IPostModel } from '../domain/Post';
import { POST } from '../constants/collections';

/**
 * Post model.
 */
class Post implements IPostModel {
  private model: mongoose.Model<PostModel>;

  constructor() {
    const model = db.model(POST, PostSchema, POST);

    this.model = model;
  }

  /**
   * Create new post.
   *
   * @param {string} userId
   * @param {string} description
   *
   * @returns {Promise<PostModel>}
   */
  public async createPost(userId: string, description: string): Promise<PostModel> {
    const data = await this.model.create({ description, creator: userId });

    return data;
  }

  /**
   * Get all posts.
   *
   * @param {string} userId
   *
   * @returns {Promise<PostModel[]>}
   */
  public async getAllPosts(userId: string): Promise<PostModel[]> {
    const data = await this.model.find({ creator: userId as any });

    return data;
  }

  /**
   * Get post by post id.
   *
   * @param {string} userId
   * @param {string} postId
   *
   * @returns {Promise<PostModel>}
   */
  public async getPostById(userId: string, postId: any): Promise<PostModel | null> {
    const data = await this.model.findOne({ creator: userId as any, _id: postId });

    return data;
  }
}

export default new Post();
