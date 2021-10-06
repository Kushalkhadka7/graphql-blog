import http from 'http';
import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import AuthDirective from './directives/Auth';
import { CommentsLoader } from './dataloader/CommentsLoader';

/**
 * Initialize application.
 *
 * @returns {void}
 */
export async function init(): Promise<void> {
  const app = express();

  const pubSub = new PubSub();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      return {
        req,
        res,
        commentsLoader: CommentsLoader,
        pubSub
      };
    },
    subscriptions: {
      path: '/sub',
      onConnect: async (connectionParams, webSocket) => {
        console.log('xxx');
        console.log(connectionParams);
      }
    },
    schemaDirectives: {
      auth: AuthDirective
    },
    tracing: true
  });

  await server.start();

  server.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);

  await new Promise((resolve: any) => {
    console.log(`listening on port 3000...`);
    return httpServer.listen(3000, resolve);
  });
}
