import Auth from '../models/Auth';
import PostModel from '../models/Post';
import IPost from '../domain/misc/Post';
import MyContext from '../domain/Context';
import * as error from '../constants/error';
import CommentModel from '../models/Comment';
import { IPostService } from '../domain/Post';
import IComment from '../domain/misc/Comment';

/**
 * Post service.
 */
class Post implements IPostService {
  /**
   * Create new post.
   *
   * @param {MyContext} ctx
   * @param {string} description
   * @returns {Promise<IPost>}
   */
  public async createPost(ctx: MyContext, description: string): Promise<IPost> {
    const user = await Auth.findUserByEmail(ctx.user.email);

    if (!user) {
      throw new Error(error.USER_NOT_FOUND);
    }

    return PostModel.createPost(description, user?._id!);
  }

  /**
   * Get all posts.
   *
   * @param {MyContext} ctx
   * @returns {Promise<IPost>}
   */
  public async getAllPosts(ctx: MyContext): Promise<IPost[]> {
    const posts = PostModel.getAllPosts(ctx.user._id);

    return posts;
  }

  /**
   * Get comments of post.
   *
   * @param {MyContext} ctx
   * @param {string} postId
   * @returns {Promise<IComment[]>}
   */
  public async getPostComments(ctx: MyContext, postId: string): Promise<IComment[]> {
    const comments = await CommentModel.getPostComments(postId);

    return comments;
  }

  /**
   * Get post by post id.
   *
   * @param {MyContext} ctx
   * @param {string} postId
   * @returns {Promise<IPost | null>}
   */
  public async getPost(ctx: MyContext, postId: String): Promise<IPost | null> {
    const post = await PostModel.getPostById(ctx.user._id, postId);

    return post;
  }
}

export default new Post();
