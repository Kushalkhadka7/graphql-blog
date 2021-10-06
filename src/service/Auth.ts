import config from '../config';
import { Jwt } from '../utils/Jwt';
import User from '../domain/misc/User';
import AuthModel from '../models/Auth';
import * as error from '../errors/error';
import { IAuthService } from '../domain/Auth';
import LoginResponse from '../domain/response/Login';
import { LoginArgs, RegisterArgs } from '../domain/request/Auth';

/**
 * Auth service.
 */
class Auth implements IAuthService {
  /**
   * Register user.
   *
   * @param {RegisterArgs} arg
   *
   * @returns {Promise<User>}
   */
  public async registerUser(arg: RegisterArgs): Promise<User> {
    const user = await AuthModel.findUserByEmail(arg.email);

    if (user) {
      throw new Error(error.USER_ALREADY_EXISTS);
    }

    return AuthModel.registerUser(arg);
  }

  /**
   * Login user.
   *
   * @param {LoginArgs} arg
   *
   * @returns {Promise<LoginResponse>}
   */
  public async loginUser(arg: LoginArgs): Promise<LoginResponse> {
    const user = await AuthModel.findUserByEmail(arg.email);

    if (!user) {
      throw new Error(error.USER_DOES_NOT_EXIST);
    }

    if (user.password !== arg.password) {
      throw new Error(error.PASSWORD_DOES_NOT_MATCH);
    }

    const accessToken = new Jwt(config.accessTokenSecret, 1000 * 60).createToken(user);
    const refreshToken = new Jwt(config.refreshTokenSecret, 1000 * 60).createToken(user);

    return {
      user,
      accessToken,
      refreshToken
    };
  }
}

export default new Auth();
