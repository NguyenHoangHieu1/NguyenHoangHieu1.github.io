import React from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "./index";

const BlogViewer: React.FC = () => {
  const { slug } = useParams();

  if (!slug) {
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <p className="text-gray-500">No slug provided.</p>
      </div>
    );
  }

  const blog = getBlogBySlug(slug);

  if (!blog || !blog.component) {
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Not found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          No article found for{" "}
          <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">
            {slug}
          </code>
          .
        </p>
        <Link
          to="/blogs"
          className="text-teal-600 dark:text-teal-400 hover:underline text-sm font-medium"
        >
          &larr; Back to blog
        </Link>
      </div>
    );
  }

  const Component = blog.component;
  return <Component />;
};

export default BlogViewer;
