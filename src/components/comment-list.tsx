'use client';
import { CommentNode, SortOption } from '@/lib/types';
import Comment from './comment';

interface Props {
  comments: CommentNode[];
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onUpvote: (id: number) => void;
  onReply: (parentId: number, text: string) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'upvotes', label: 'Top' },
  { value: 'recent', label: 'Recent' },
  { value: 'replies', label: 'Most Replies' }
];

export default function CommentList({ 
  comments, 
  sortBy, 
  onSortChange, 
  onUpvote, 
  onReply 
}: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-sm text-gray-600">Sort by:</span>
        {sortOptions.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onSortChange(value)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              sortBy === value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {comments.length > 0 ? (
          comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              depth={0}
              onUpvote={onUpvote}
              onReply={onReply}
            />
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No comments yet</p>
            <p className="text-sm mt-2">Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  );
}