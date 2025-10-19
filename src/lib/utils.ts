import { Comment, CommentNode, User, SortOption } from './types';

export const buildTree = (
  comments: Comment[],
  users: User[],
  parentId: number | null = null,
  depth: number = 0
): CommentNode[] => {
  // Prevent infinite recursion
  if (depth > 50) {
    console.warn('Maximum nesting depth reached');
    return [];
  }
  
  // Create maps for fast lookup
  const userMap = new Map(users.map(u => [u.id, u]));
  const result: CommentNode[] = [];
  
  for (const comment of comments) {
    // Skip invalid comments
    if (!comment || comment.id === null || comment.id === undefined) {
      console.warn('Skipping comment with invalid ID:', comment);
      continue;
    }
    
    // Checking if this comment belongs to current parent
    // Used == instead of === to handle type coercion
    if (comment.parent_id != parentId) {
      continue;
    }
    
    // Skip self-references
    if (comment.id === comment.parent_id) {
      console.warn(`Skipping comment ${comment.id} - self reference`);
      continue;
    }
    
    // Get user - user_id should be a string
    const user = userMap.get(comment.user_id);
    if (!user) {
      console.warn(`⚠️ Skipping comment ${comment.id} - user ${comment.user_id} not found`);
      console.warn('Available user IDs:', Array.from(userMap.keys()).slice(0, 5));
      continue;
    }
    
    // Build node with replies
    const node: CommentNode = {
      ...comment,
      user,
      replies: buildTree(comments, users, comment.id, depth + 1)
    };
    
    result.push(node);
  }
  
  return result.sort((a, b) => b.upvotes - a.upvotes);
};

export const sortComments = (
  comments: CommentNode[],
  sortBy: SortOption
): CommentNode[] => {
  const sorted = [...comments].sort((a, b) => {
    switch (sortBy) {
      case 'upvotes': 
        return b.upvotes - a.upvotes;
      case 'recent': 
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      case 'replies': 
        return b.replies.length - a.replies.length;
      default:
        return 0;
    }
  });

  return sorted.map(c => ({
    ...c,
    replies: sortComments(c.replies, sortBy)
  }));
};

export const countComments = (comment: CommentNode): number => 
  1 + comment.replies.reduce((sum, r) => sum + countComments(r), 0);

export const getTotalComments = (comments: CommentNode[]): number => {
  return comments.reduce((sum, c) => sum + countComments(c), 0);
};