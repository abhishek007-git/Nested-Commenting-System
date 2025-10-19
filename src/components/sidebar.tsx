'use client';

interface OtherPost {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  readTime: string;
}

const otherPosts: OtherPost[] = [
  {
    id: '1',
    title: 'React 19: What\'s New and Why It Matters',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=120&fit=crop&q=80',
    excerpt: 'Exploring the latest features in React 19 including Server Components...',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Mastering TypeScript Generics',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=120&fit=crop&q=80',
    excerpt: 'Deep dive into TypeScript generics and how to write reusable type-safe code...',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Next.js 14 App Router Complete Guide',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=200&h=120&fit=crop&q=80',
    excerpt: 'Learn everything about Next.js App Router, Server Actions, and more...',
    readTime: '10 min read'
  },
  {
    id: '4',
    title: 'Building Scalable APIs with Node.js',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=120&fit=crop&q=80',
    excerpt: 'Best practices for designing and implementing REST APIs that scale...',
    readTime: '6 min read'
  }
];

export default function Sidebar() {
  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Other Posts</h2>
        <div className="space-y-3">
          {otherPosts.map(post => (
            <div
              key={post.id}
              className="group cursor-pointer"
            >
              <div className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {post.readTime}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags Widget */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-bold text-gray-900 mb-3">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'React', 'TypeScript', 'Node.js', 'CSS', 'Web Dev'].map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}