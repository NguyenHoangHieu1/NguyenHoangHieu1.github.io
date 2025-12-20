import React from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "./index";

const BlogList: React.FC = () => {
  const blogs = getAllBlogs();

  return (
    <main className="container mx-auto max-w-5xl py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">
        Articles & Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <Link
            key={b.slug}
            to={`/blogs/${b.slug}`}
            className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            {b.thumbnail && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={b.thumbnail}
                  alt={b.title || b.slug}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 mb-2">
                {b.title || b.slug}
              </h2>
              {b.date && (
                <time className="text-sm text-gray-500 dark:text-gray-400 block mb-3">
                  {b.date}
                </time>
              )}
              {b.description && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
                  {b.description}
                </p>
              )}
              {b.tags && (
                <div className="flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogList;
