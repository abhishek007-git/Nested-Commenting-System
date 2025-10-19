'use client';
import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { CommentNode } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';

interface Props {
  comment: CommentNode;
  depth: number;
  onUpvote: (id: number) => void;
  onReply: (parentId: number, text: string) => void;
}

const Comment = ({ comment, depth, onUpvote, onReply }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [upvoted, setUpvoted] = useState(false);

  const handleUpvote = () => {
    if (upvoted) return;
    setUpvoted(true);
    onUpvote(comment.id);
  };

  const handleReply = () => {
    if (!replyText.trim()) return;
    onReply(comment.id, replyText);
    setReplyText('');
    setReplying(false);
  };

  const indent = Math.min(depth, 6) * 24;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      style={{ marginLeft: indent }}
      className="relative mb-3"
    >
      {depth > 0 && (
        <div className="absolute -left-3 top-0 bottom-0 w-px bg-gray-200" />
      )}

      <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors">
        <div className="flex gap-3">
          <img 
            src={comment.user.avatar} 
            alt={comment.user.name}
            className="w-10 h-10 rounded-full flex-shrink-0"
            loading="lazy"
          />
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm truncate">
                {comment.user.name}
              </span>
              <span className="text-xs text-gray-500 flex-shrink-0">
                {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
              </span>
            </div>

            {!collapsed && (
              <p className="text-gray-800 mb-3 break-words whitespace-pre-wrap">
                {comment.text}
              </p>
            )}

            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={handleUpvote}
                disabled={upvoted}
                className={`flex items-center gap-1 transition-colors ${
                  upvoted ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <ThumbsUp size={16} fill={upvoted ? 'currentColor' : 'none'} />
                {comment.upvotes + (upvoted ? 1 : 0)}
              </button>

              <button
                onClick={() => setReplying(!replying)}
                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <MessageSquare size={16} />
                Reply
              </button>

              {comment.replies.length > 0 && (
                <button
                  onClick={() => setCollapsed(!collapsed)}
                  className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                  {collapsed ? 'Show' : 'Hide'} {comment.replies.length}
                </button>
              )}
            </div>

            <AnimatePresence>
              {replying && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-3 overflow-hidden"
                >
                  <textarea
                    value={replyText}
                    onChange={e => setReplyText(e.target.value)}
                    placeholder="Write a reply..."
                    className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    autoFocus
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={handleReply}
                      className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Reply
                    </button>
                    <button
                      onClick={() => setReplying(false)}
                      className="px-4 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {!collapsed && comment.replies.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {comment.replies.map(reply => (
              <Comment
                key={reply.id}
                comment={reply}
                depth={depth + 1}
                onUpvote={onUpvote}
                onReply={onReply}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default memo(Comment);