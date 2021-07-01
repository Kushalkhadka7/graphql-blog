import User from './misc/User';
import { LoginArgs, RegisterArgs } from './request/Auth';
import Login from './response/Login';

interface IAuthService {
  loginUser(arg: LoginArgs): Promise<Login>;
  registerUser: (arg: RegisterArgs) => Promise<User>;
}

interface IAuthModel {
  registerUser: (arg: RegisterArgs) => Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
}
export { IAuthService, IAuthModel };
