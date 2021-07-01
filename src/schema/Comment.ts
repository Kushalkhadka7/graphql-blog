import { Schema } from 'mongoose';

import Comment from '../domain/misc/Comment';

/**
 * Comment schema.
 */
const CommentSchema = new Schema<Comment>(
  {
    postId: {
      type: String,
      ref: 'post'
    },
    creator: {
      type: String,
      required: true
    },
    likes: {
      type: [String]
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default CommentSchema;
