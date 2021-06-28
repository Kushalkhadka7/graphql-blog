import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import config from './config';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

/**
 * Initialize application.
 *
 * @returns {void}
 */
export function init(): void {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app, path: config.baseUrl });

  app.listen(3000, () => console.log('Listening...'));
}
