import DataLoader from 'dataloader';

import Comment from '../domain/misc/Comment';
import CommentService from '../service/Comment';

// Type of batch loader func.
type BatchComments = (keys: any[]) => Promise<Comment[][]>;

interface InitialValue {
  [key: string]: Comment[];
}

/**
 * Data loader to load comments for specific post.
 *
 * @param {string[]} keys
 * @returns Promise<Comment[]>
 */
const loadComments: BatchComments = async (keys: string[]): Promise<Comment[][]> => {
  const comments: Comment[] = await CommentService.getLoadedComments(keys);

  const initialValue: InitialValue = {};

  const data = comments.reduce((acc, curr) => {
    const postId = curr.postId;

    if (!!acc[postId]) {
      acc[postId] = [...acc[postId], curr];
    } else {
      acc = { ...acc, [postId]: [curr] };
    }

    return acc;
  }, initialValue);

  return keys.map(id => data[id]);
};

export const CommentsLoader = new DataLoader<string, Comment>(loadComments as any);
