export default function Post() {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
      {/* Featured Image */}
      <div className="relative h-96 w-full">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&q=80" 
          alt="Code on screen with colorful syntax highlighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Post Content */}
      <div className="p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          The Evolution of Modern Web Development: From Monoliths to Microservices
        </h1>

        {/* Meta Information */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=author" 
            alt="Author"
            className="w-12 h-12 rounded-full border-2 border-gray-200"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Sarah Mitchell</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>October 18, 2024</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                2.4k views
              </span>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Follow
          </button>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl leading-relaxed mb-6 text-gray-800 font-medium">
            The web development landscape has transformed dramatically over the past decade. 
            What once required complex server setups and monolithic architectures now embraces 
            distributed systems, serverless computing, and edge networks. Let's explore this 
            fascinating journey.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The Rise of Component-Based Architecture
          </h2>
          
          <p className="mb-4 leading-relaxed">
            Modern frameworks like React, Vue, and Angular revolutionized how we think about 
            building user interfaces. The shift from jQuery's DOM manipulation to declarative, 
            component-based systems fundamentally changed development patterns. Components became 
            reusable, testable, and maintainable units that could be composed into complex applications.
          </p>

          <p className="mb-6 leading-relaxed">
            This paradigm shift brought immense benefits: faster development cycles, better code 
            organization, and improved team collaboration. State management libraries like Redux 
            and Zustand emerged to handle complex application states, while hooks in React simplified 
            component logic and promoted code reuse.
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
            <p className="text-gray-800 italic">
              "The best code is not the cleverest code, but the code that's easiest to understand 
              and maintain by the next developer who reads it—which might be you, six months from now."
            </p>
            <p className="text-sm text-gray-600 mt-2">— Martin Fowler, Software Engineering Thought Leader</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Serverless and Edge Computing: The New Frontier
          </h2>

          <p className="mb-4 leading-relaxed">
            The advent of serverless architecture liberated developers from infrastructure management. 
            Platforms like Vercel, Netlify, and AWS Lambda allow us to deploy applications globally 
            with automatic scaling, built-in CDNs, and zero server maintenance. This isn't just 
            about convenience—it's about fundamentally rethinking how we build and deploy software.
          </p>

          <p className="mb-6 leading-relaxed">
            Edge computing takes this further by executing code closer to users geographically, 
            reducing latency and improving performance. Modern frameworks like Next.js and Remix 
            leverage these capabilities, offering server-side rendering at the edge, incremental 
            static regeneration, and seamless API routes that scale effortlessly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            TypeScript: Type Safety in a Dynamic World
          </h2>

          <p className="mb-4 leading-relaxed">
            TypeScript's adoption has exploded, and for good reason. It brings static typing to 
            JavaScript's dynamic nature, catching errors at compile time rather than runtime. 
            Large codebases become more maintainable, refactoring becomes safer, and IDE support 
            becomes incredibly powerful with intelligent autocomplete and inline documentation.
          </p>

          <p className="mb-6 leading-relaxed">
            The TypeScript compiler doesn't just check types—it's a powerful tool for code 
            transformation, allowing developers to use cutting-edge JavaScript features while 
            maintaining compatibility with older browsers. It's become the de facto standard 
            for professional web development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Modern Advantages
              </h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Faster development cycles</li>
                <li>• Better developer experience</li>
                <li>• Improved performance</li>
                <li>• Enhanced security</li>
                <li>• Automatic scaling</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Challenges to Consider
              </h3>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• Steeper learning curve</li>
                <li>• Framework fatigue</li>
                <li>• Tooling complexity</li>
                <li>• Vendor lock-in risks</li>
                <li>• Debugging distributed systems</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The JAMstack Revolution
          </h2>

          <p className="mb-4 leading-relaxed">
            JAMstack (JavaScript, APIs, and Markup) represents a fundamental shift in web 
            architecture. By decoupling the frontend from the backend, pre-rendering pages at 
            build time, and serving static assets from CDNs, JAMstack sites achieve incredible 
            performance, security, and scalability.
          </p>

          <p className="mb-6 leading-relaxed">
            This approach isn't just about static sites anymore. Modern JAMstack applications 
            can be highly dynamic, leveraging client-side JavaScript, third-party APIs, and 
            serverless functions to create rich, interactive experiences without traditional 
            servers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Looking Ahead: The Future of Web Development
          </h2>

          <p className="mb-4 leading-relaxed">
            As we look to the future, several trends are emerging: WebAssembly bringing 
            near-native performance to the browser, Progressive Web Apps blurring the line 
            between web and native applications, and AI-assisted development tools transforming 
            how we write code.
          </p>

          <p className="mb-4 leading-relaxed">
            The focus is increasingly on developer experience and user experience simultaneously. 
            Frameworks are becoming more opinionated, providing better defaults and conventions 
            while remaining flexible enough for complex use cases. Build tools are getting faster 
            (Vite, esbuild, SWC), and deployment pipelines are becoming more sophisticated.
          </p>

          <p className="mb-6 leading-relaxed">
            Yet, amid all this change, the fundamentals remain crucial. Understanding HTML 
            semantics, CSS layout systems, JavaScript closures, and web performance optimization 
            will always be valuable. The tools and frameworks may evolve, but solid foundations 
            in web fundamentals will serve developers well regardless of future changes.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">→</span>
                <span>Component-based architecture has become the standard for building modern UIs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">→</span>
                <span>Serverless and edge computing remove infrastructure complexity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">→</span>
                <span>TypeScript provides essential type safety for large-scale applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">→</span>
                <span>JAMstack offers performance and security benefits through static generation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">→</span>
                <span>Web fundamentals remain critical despite evolving tools and frameworks</span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-800 font-medium mt-8">
            The web development ecosystem will continue evolving, but one thing remains constant: 
            the need for developers who understand both modern tools and timeless principles. 
            Embrace the new, respect the fundamentals, and never stop learning.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
          {['Web Development', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Serverless'].map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600">
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="font-medium">243</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="font-medium">89 comments</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="font-medium">Save</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors ml-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>
    </article>
  );
}