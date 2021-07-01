interface Comment {
  _id?: string;
  postId: number;
  likes: number[];
  creator: number;
  description: string;
}

export default Comment;
