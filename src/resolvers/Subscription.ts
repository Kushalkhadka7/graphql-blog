import { PubSub } from 'apollo-server';
import MyContext from '../domain/Context';

/**
 * Post resolver.
 */
const Subscription = {
  Subscription: {
    newComment: {
      subscribe: async (parent: any, arg: any, context: MyContext, info: any) => {
        return context.pubSub.asyncIterator('NEW_COMMENT');
      }
    }
  }
};

export default Subscription;
