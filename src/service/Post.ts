import IPost from '../domain/Post';
import User from '../domain/misc/User';
import { LoginArgs, RegisterArgs } from '../domain/request/Auth';
import LoginResponse from '../domain/response/Login';
import PostModel from '../models/Post';
import { Jwt } from '../utils/Jwt';
import Auth from '../models/Auth';
import MyContext from '../domain/Context';

/**
 * Post service.
 */
class Post {
  public async createPost(description: string, ctx: MyContext) {
    const user = await Auth.findUserByEmail(ctx.user.email);

    if (!user) {
      throw new Error('User not found.');
    }

    return PostModel.createPost(description, user._id!);
  }

  public async getPost(ctx: MyContext) {
    return 'Hello';
  }
}

export default new Post();
