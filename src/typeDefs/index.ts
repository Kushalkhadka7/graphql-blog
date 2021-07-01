import { gql } from 'apollo-server-express';

import Root from './root';
import Auth from './Auth';
import Post from './Post';
import Comment from './Comment';
import Subscription from './Subscription';

export default [Root, Auth, Post, Comment, Subscription];
