import { Schema } from 'mongoose';
import Comment from '../domain/misc/Comment';

const CommentSchema = new Schema<Comment>(
  {
    postId: {
      type: Number
    },
    creator: {
      type: Number,
      required: true
    },
    likes: {
      unique: true,
      type: [Number],
      required: true
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
