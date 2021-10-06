import Joi from 'joi';

import User from '../domain/misc/User';
import AuthService from '../service/Auth';
import { validate } from '../utils/validate';
import LoginResponse from '../domain/response/Login';
import LOGIN_SCHEMA from '../validation/LoginSchema';
import { RegisterArgs, LoginArgs } from '../domain/request/Auth';

/**
 * Auth resolver.
 */
const Auth = {
  Mutation: {
    /**
     * User register resolver.
     *
     * @param {any} parent
     * @param {RegisterArgs} arg
     * @param {any} context
     * @param {any} info
     *
     * @returns {Promise<User>}
     */
    register: async (parent: any, arg: RegisterArgs, context: any, info: any): Promise<User> => {
      try {
        const response = await AuthService.registerUser(arg);

        return response;
      } catch (error) {
        throw error;
      }
    },
    /**
     * Login resolver.
     *
     * @param {any} parent
     * @param {LoginArgs} arg
     * @param {any} context
     * @param {any} info
     *
     * @returns {Promise<LoginResponse>}
     */
    login: async (parent: any, arg: LoginArgs, context: any, info: any): Promise<LoginResponse> => {
      try {
        await validate<Joi.Schema<LoginArgs>, LoginArgs>(LOGIN_SCHEMA, arg);

        const response = AuthService.loginUser(arg);

        return response;
      } catch (error) {
        throw error;
      }
    }
  }
};

export default Auth;
