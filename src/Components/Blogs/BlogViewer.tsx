import React from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "./index";

const BlogViewer: React.FC = () => {
  const { slug } = useParams();

  if (!slug)
    return <div className="container mx-auto p-6">No slug provided.</div>;

  const blog = getBlogBySlug(slug);

  if (!blog || !blog.component) {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Not found</h2>
        <p className="mt-3">
          No article found for <code>{slug}</code>.
        </p>
        <Link
          to="/blogs"
          className="text-purple-600 underline mt-4 inline-block"
        >
          Back to list
        </Link>
      </div>
    );
  }

  const Component = blog.component;

  return (
    <div>
      <Component />
    </div>
  );
};

export default BlogViewer;
