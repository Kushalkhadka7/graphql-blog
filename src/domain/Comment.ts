import * as Mongoose from 'mongoose';
import MyContext from './Context';
import Comment from './misc/Comment';
import Post from './misc/Post';

interface ICommentService {
  getLoadedComments(ids: string[]): Promise<Comment[]>;
  getComment(ctx: MyContext, commentId: string): Promise<Comment | null>;
  createComment(ctx: MyContext, description: string, postId: String): Promise<Comment>;
}

interface ICommentModel {
  getPostComments(postId: string): Promise<Comment[]>;
  getLoadedComments(ids: string[]): Promise<Comment[]>;
  getComment(commentId: string): Promise<Comment | null>;
  createComment(description: string, userId: string, postId: String): Promise<Comment>;
}

export { ICommentService, ICommentModel };
