'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Comment, CommentNode, User, SortOption } from '@/lib/types';
import { buildTree, sortComments } from '@/lib/utils';

export const useComments = (initialComments: Comment[], users: User[]) => {
  const [comments, setComments] = useState<Comment[]>(() => {
    if (typeof window === 'undefined') return initialComments;
    const stored = localStorage.getItem('comments');
    return stored ? JSON.parse(stored) : initialComments;
  });

  const [sortBy, setSortBy] = useState<SortOption>('upvotes');

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const tree = useMemo(
    () => sortComments(buildTree(comments, users), sortBy),
    [comments, users, sortBy]
  );

  const upvote = useCallback((id: number) => {
    setComments(prev => prev.map(c => 
      c.id === id ? { ...c, upvotes: c.upvotes + 1 } : c
    ));
  }, []);

  const addReply = useCallback((parentId: number | null, text: string, userId: string) => {
    const maxId = Math.max(...comments.map(c => c.id), 0);
    const newComment: Comment = {
      id: maxId + 1,
      text,
      upvotes: 0,
      created_at: new Date().toISOString(),
      user_id: userId,
      parent_id: parentId
    };
    setComments(prev => [...prev, newComment]);
  }, [comments]);

  return { tree, sortBy, setSortBy, upvote, addReply };
};