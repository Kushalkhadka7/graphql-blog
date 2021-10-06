interface Config {
  baseUrl: string;
  accessTokenSecret: string;
  refreshTokenSecret: string;
  accessTokenDuration: number;
  refreshTokenDuration: number;
}

export default Config;
