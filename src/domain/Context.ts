import { PubSub } from 'apollo-server-express';

interface MyContext {
  user: any;
  token: boolean;
  pubSub: PubSub;
  commentsLoader: any;
}

export default MyContext;
