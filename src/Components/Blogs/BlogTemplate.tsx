import React, { PropsWithChildren } from "react";

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
    <article className="container mx-auto max-w-3xl py-8 px-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {date && <time className="text-sm text-gray-500">{date}</time>}
        {tags && (
          <div className="mt-3">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 mr-2"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      {thumbnail && (
        <div className="mb-8">
          <img
            src={thumbnail}
            alt={title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}

      <section className="prose dark:prose-invert max-w-none">
        {children}
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        Thanks for reading.
      </footer>
    </article>
  );
};

export default BlogTemplate;
