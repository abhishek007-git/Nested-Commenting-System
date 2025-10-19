export interface User {
  id: string;
  name: string;
  avatar: string;
  created_at: string;
}

export interface Comment {
  id: number;
  text: string;
  upvotes: number;
  created_at: string;
  user_id: string;
  parent_id: number | null;
}

export interface CommentNode extends Comment {
  user: User;
  replies: CommentNode[];
}

export type SortOption = 'upvotes' | 'recent' | 'replies';