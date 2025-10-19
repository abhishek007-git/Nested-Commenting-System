'use client';
import { useState } from 'react';

interface Props {
  onSubmit: (text: string) => void;
}

export default function CommentForm({ onSubmit }: Props) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 border border-gray-200">
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What are your thoughts?"
        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows={4}
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Post Comment
      </button>
    </form>
  );
}