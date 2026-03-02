import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type BlogTemplateProps = PropsWithChildren<{
  title: string;
  date?: string;
  tags?: string[];
  thumbnail?: string;
}>;

const BlogTemplate: React.FC<BlogTemplateProps> = ({
  title,
  date,
  tags,
  thumbnail,
  children,
}) => {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <Link
        to="/blogs"
        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 mb-8"
      >
        &larr; Back to blog
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          {date && (
            <time className="text-sm text-gray-500 dark:text-gray-500">
              {date}
            </time>
          )}
          {tags && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
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
      </header>

      {thumbnail && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>
      )}

      <section className="prose prose-gray dark:prose-invert max-w-none">
        {children}
      </section>
    </article>
  );
};

export default BlogTemplate;
