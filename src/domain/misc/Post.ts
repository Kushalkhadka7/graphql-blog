interface Post {
  _id?: string;
  likes: number[];
  creator: number;
  comments: number[];
  description: string;
  recentComments: number[];
}

export default Post;
