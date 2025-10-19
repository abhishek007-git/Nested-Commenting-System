"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { useComments } from "@/hooks/use-comments";
import Post from "@/components/post";
import CommentList from "@/components/comment-list";
import CommentForm from "@/components/comment-form";
import Sidebar from "@/components/sidebar";
import commentsData from "@/lib/comments.json";
import usersData from "@/lib/users.json";
import { Comment, User } from "@/lib/types";
import { getTotalComments } from "@/lib/utils";
import { validateDataTypes } from "@/lib/validate-data-types";

export default function Home() {
  const { isAuthenticated, logout, currentUserId } = useAuth();
  const router = useRouter();

  const { tree, sortBy, setSortBy, upvote, addReply } = useComments(
    commentsData as Comment[],
    usersData as User[]
  );

  useEffect(() => {
    validateDataTypes();
    console.log("📊 Dataset Stats:");
    console.log("Total comments in JSON:", commentsData.length);
    console.log("Total users:", usersData.length);

    // Checking first comment structure
    console.log("First comment sample:", commentsData[0]);
    console.log("First comment ID type:", typeof commentsData[0]?.id);
    console.log(
      "First comment parent_id type:",
      typeof commentsData[0]?.parent_id
    );
    console.log("First comment user_id:", commentsData[0]?.user_id);

    // Checking first user structure
    console.log("First user sample:", usersData[0]);
    console.log("First user ID type:", typeof usersData[0]?.id);

    console.log(
      "Top-level comments (parent_id = null):",
      commentsData.filter((c) => c.parent_id === null).length
    );
    console.log(
      "Reply comments (parent_id != null):",
      commentsData.filter((c) => c.parent_id !== null).length
    );
    console.log("Comment tree built:", tree.length, "top-level");

    if (tree.length === 0) {
      console.error("No comments in tree! Checking for issues...");
      // Checking if any user_ids match
      const commentUserIds = new Set(commentsData.map((c) => c.user_id));
      const userIds = new Set(usersData.map((u) => u.id));
      console.log("Sample comment user_id:", Array.from(commentUserIds)[0]);
      console.log("Sample user id:", Array.from(userIds)[0]);
      console.log(
        "Do they match type?",
        typeof Array.from(commentUserIds)[0] === typeof Array.from(userIds)[0]
      );
    }
  }, [tree]);

  const totalComments = getTotalComments(tree);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">CommentHub</h1>
            <div className="flex items-center gap-4">
              {/* Show current user */}
              <span className="text-sm text-gray-600">
                Logged in as:{" "}
                {usersData.find((u) => u.id === currentUserId)?.name}
              </span>
              <button
                onClick={() => {
                  logout();
                  router.push("/login");
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 lg:w-2/3">
            <Post />

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Leave your comment</h3>
              <CommentForm
                onSubmit={(text) => addReply(null, text, currentUserId)}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">
                Comment and Sub-comment thread ({totalComments} total)
              </h2>

              {/* ADD LOADING STATE */}
              {tree.length === 0 ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800">
                    No comments loaded. Check console for errors.
                  </p>
                </div>
              ) : (
                <CommentList
                  comments={tree}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  onUpvote={upvote}
                  onReply={(parentId, text) =>
                    addReply(parentId, text, currentUserId)
                  }
                />
              )}
            </div>
          </div>

          <aside className="lg:w-1/3">
            <Sidebar />
          </aside>
        </div>
      </main>
    </div>
  );
}
