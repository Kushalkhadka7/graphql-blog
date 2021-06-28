import IAuth from '../domain/Auth';
import User from '../domain/misc/User';
import { LoginArgs, RegisterArgs } from '../domain/request/Auth';
import LoginResponse from '../domain/response/Login';
import AuthModel from '../models/Auth';
import { Jwt } from '../utils/Jwt';

/**
 * Auth service.
 */
class Auth implements IAuth {
  /**
   * Register user.
   *
   * @param {RegisterArgs} arg
   * @returns Promise<User>
   */
  public async registerUser(arg: RegisterArgs): Promise<User> {
    const user = await AuthModel.findUserByEmail(arg.email);

    if (user) {
      throw new Error('User already exists.');
    }

    return AuthModel.registerUser(arg);
  }

  /**
   * Login user.
   *
   * @param {LoginArgs} arg
   * @returns Promise<LoginResponse>
   */
  public async loginUser(arg: LoginArgs): Promise<LoginResponse> {
    const user = await AuthModel.findUserByEmail(arg.email);

    if (!user) {
      throw new Error(`User doesn't exists, Please register.`);
    }

    if (user.password !== arg.password) {
      throw new Error("Password doesn't match.");
    }
    const accessToken = new Jwt('hello', 1000 * 60).createToken(user);
    const refreshToken = new Jwt('hellorefresh', 1000 * 60).createToken(user);

    return {
      user,
      accessToken,
      refreshToken
    };
  }
}

export default new Auth();
