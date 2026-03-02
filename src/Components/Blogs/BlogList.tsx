import React from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "./index";

const BlogList: React.FC = () => {
  const blogs = getAllBlogs();

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Writing about Linux, development, and things I find interesting.
        </p>
        <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 rounded-full mt-4" />
      </div>

      {blogs.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-500 py-12 text-center">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              to={`/blogs/${b.slug}`}
              className="group block rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              {b.thumbnail && (
                <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={b.thumbnail}
                    alt={b.title || b.slug}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-1">
                  {b.title || b.slug}
                </h2>
                {b.date && (
                  <time className="text-xs text-gray-500 dark:text-gray-500 block mb-2">
                    {b.date}
                  </time>
                )}
                {b.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {b.description}
                  </p>
                )}
                {b.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {b.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
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
      )}
    </section>
  );
};

export default BlogList;
