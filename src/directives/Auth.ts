import { defaultFieldResolver } from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';

import { Jwt } from '../utils/Jwt';
import { USER_NOT_AUTHORIZED } from '../errors/error';

/**
 * Auth directive to validate either user is logged in or not.
 */
class Auth extends SchemaDirectiveVisitor {
  /**
   * VisitFieldDefinition func , inherited from SchemaDirectiveVisitor.
   *
   * @param {any} field
   *
   * @returns {void}
   */
  visitFieldDefinition(field: any): void {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = function (...args: any[]) {
      const [, , context] = args;

      console.log(context.req.headers.authorization);
      //check sign in here.
      const header = context.req.headers.authorization;
      const token = header?.split(' ')[1];

      // if (!token) {
      //   throw new Error(USER_NOT_AUTHORIZED);
      // }

      const user: any = new Jwt('secret', 1000 * 60).decodeToken(
        'eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MTVkYzA2NTAzYTFiNWJlYzcyNDg0NTMiLCJuYW1lIjoia3VzaGFsIiwiZW1haWwiOiJoZWxsb0BnbWFpbC5jb20iLCJwYXNzd29yZCI6Imt1c2hhbCIsImNyZWF0ZWRBdCI6IjIwMjEtMTAtMDZUMTU6Mjc6MzMuOTg3WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTAtMDZUMTU6Mjc6MzMuOTg3WiIsIl9fdiI6MH0.e4NcuF9yIIGQqM4JhTiAcT4z8XS63ESlIEyPWhhtU9M'
      );

      console.log('user', user);

      delete user.createdAt;
      delete user.updatedAt;

      context.user = user;

      return resolve.apply(this, args);
    };
  }
}

export default Auth;
