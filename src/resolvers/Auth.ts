import * as AuthService from '../service/Auth';

const Auth = {
  Mutation: {
    register: (parent: any, arg: any, context: any, info: any) => {
      const auth = new AuthService.Auth();

      return auth.registerUser(arg);
    }
  }
};

export default Auth;
