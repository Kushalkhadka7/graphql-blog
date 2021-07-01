import Config from './domain/Config';
import { BASE_URL } from './constants/app';

/**
 * App configuration.
 */
const config: Config = {
  baseUrl: process.env.BASE_URL || BASE_URL,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || '',
  refreshTokenSecret: process.env.ACCESS_TOKEN_SECRET || ''
};

export default config;
