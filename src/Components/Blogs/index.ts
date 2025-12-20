// Auto-import all blog posts placed in `posts/` using Vite's glob eager import.
// Each post should export `meta` and a default React component.

type BlogModule = {
  meta?: {
    slug?: string;
    title?: string;
    date?: string;
    tags?: string[];
    thumbnail?: string;
    description?: string;
  };
  default?: React.ComponentType<any>;
};

const modules = import.meta.globEager("./posts/*.tsx") as Record<
  string,
  BlogModule
>;

type BlogEntry = {
  slug: string;
  title?: string;
  date?: string;
  tags?: string[];
  thumbnail?: string;
  description?: string;
  component?: React.ComponentType<any>;
};

const blogs: BlogEntry[] = Object.entries(modules).map(([filePath, mod]) => {
  const fileName = filePath.split("/").pop() || "";
  const inferredSlug = fileName.replace(/\.tsx?$/, "");
  const slug = (mod.meta && mod.meta.slug) || inferredSlug;
  return {
    slug,
    title: mod.meta?.title,
    date: mod.meta?.date,
    tags: mod.meta?.tags,
    thumbnail: mod.meta?.thumbnail,
    description: mod.meta?.description,
    component: mod.default,
  };
});

export function getAllBlogs() {
  // sort by date (newest first) if available
  return blogs.slice().sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date);
    return 0;
  });
}

export function getBlogBySlug(slug: string) {
  return blogs.find((b) => b.slug === slug);
}

export default { getAllBlogs, getBlogBySlug };
