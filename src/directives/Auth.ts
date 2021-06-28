import { defaultFieldResolver } from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';

import { Jwt } from '../utils/Jwt';

class Auth extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = function (...args: any[]) {
      const [, , context] = args;

      //check sign in here.
      const header = context.req.headers.authorization;
      const token = header?.split(' ')[1];

      const user: any = new Jwt('hello', 1000 * 60).decodeToken(token);

      delete user.createdAt;
      delete user.updatedAt;

      context.user = user;

      if (!token) {
        throw new Error('user not authenticated');
      }

      return resolve.apply(this, args);
    };
  }
}

export default Auth;
