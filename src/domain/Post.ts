import Post from './misc/Post';
import MyContext from './Context';
import Comment from './misc/Comment';

interface IPostService {
  getAllPosts(ctx: MyContext): Promise<Post[]>;
  getPost(ctx: MyContext, postId: String): Promise<Post | null>;
  createPost(ctx: MyContext, description: string): Promise<Post>;
  getPostComments(ctx: MyContext, postId: string): Promise<Comment[]>;
}

interface IPostModel {
  getAllPosts(userId: string): Promise<Post[]>;
  createPost(userId: string, description: string): Promise<Post>;
  getPostById(userId: string, postId: any): Promise<Post | null>;
}

export { IPostService, IPostModel };
