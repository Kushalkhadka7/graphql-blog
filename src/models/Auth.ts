import * as mongoose from 'mongoose';

import db from '../db';
import IAuth from '../domain/Auth';
import User from '../domain/misc/User';
import { RegisterArgs } from '../domain/request/Auth';
import UserSchema from '../schema/User';

/**
 * Auth model.
 */
class Auth implements IAuth {
  private model: mongoose.Model<User>;

  constructor() {
    const model = db.model('user', UserSchema, 'user');

    this.model = model;
  }

  /**
   * Register new user.
   *
   * @param {RegisterArgs} arg
   * @returns Promise<User>
   */
  public async registerUser(arg: RegisterArgs): Promise<User> {
    const data = await this.model.create({ ...arg });

    return data;
  }

  /**
   * Find user by user email.
   *
   * @param {string} email
   * @returns  Promise<User | null>
   */
  public async findUserByEmail(email: string): Promise<User | null> {
    const data = await this.model.findOne({ email: email });

    return data;
  }
}

export default new Auth();
