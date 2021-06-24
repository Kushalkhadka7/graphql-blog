import IAuth from '../domain/Auth';

class Auth implements IAuth {
  public async registerUser(arg: any) {
    return arg;
  }
}

export { Auth };
