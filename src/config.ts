import Config from './domain/Config';
import { BASE_URL } from './constants/app';

/**
 * App configuration.
 */
const config: Config = {
  baseUrl: process.env.BASE_URL || BASE_URL,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'secret',
  refreshTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'secret',
  accessTokenDuration: Number(process.env.ACCESS_TOKEN_DURATION) || 30,
  refreshTokenDuration: Number(process.env.REFRESH_TOKEN_DURATION) || 30
};

export default config;
