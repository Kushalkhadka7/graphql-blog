import Config from './domain/Config';
import { BASE_GRAPHQL_PATH } from './constants/app';

/**
 * App configuration.
 */
const config: Config = {
  baseUrl: process.env.BASE_URL || BASE_GRAPHQL_PATH
};

export default config;
