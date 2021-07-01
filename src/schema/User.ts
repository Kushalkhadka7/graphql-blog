import { Schema } from 'mongoose';

import User from '../domain/misc/User';

/**
 * User schema.
 */
const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default UserSchema;
