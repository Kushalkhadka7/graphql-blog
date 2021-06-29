import { Schema } from 'mongoose';

import Post from '../domain/misc/Post';

const PostSchema = new Schema<Post>(
  {
    description: {
      type: String
    },
    creator: {
      type: String,
      required: true
    },
    likes: {
      type: [Number]
    },
    recentComments: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);

export default PostSchema;
