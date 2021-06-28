import User from '../misc/User';

interface Login {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export default Login;
