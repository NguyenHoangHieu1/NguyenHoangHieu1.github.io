import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { getAllBlogs } from "../Blogs/index";
import { getAllProjects } from "../../data/projects";

const Intro = () => {
  const recentBlogs = getAllBlogs().slice(0, 3);
  const featuredProjects = getAllProjects().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 md:pt-24 pb-16">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <p className="text-teal-600 dark:text-teal-400 font-medium text-sm tracking-wide">
              Full-Stack Developer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Hi, I'm Hoang Hieu
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              I build web applications with React, TypeScript, and Node.js.
              Currently open to full-time and freelance opportunities.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
              >
                Get in touch
              </Link>
              <Link
                to="/about"
                className="px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                About me
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <img
              src={logo}
              className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg"
              alt="Hoang Hieu"
            />
          </div>
        </div>
      </section>

      {/* Tech stack strip */}
      <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
            Technologies I work with
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      {featuredProjects.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Projects
            </h2>
            <Link
              to="/projects"
              className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                {project.thumbnail ? (
                  <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-teal-500/10 to-gray-100 dark:from-teal-400/10 dark:to-gray-800 flex items-center justify-center">
                    <span className="text-4xl font-bold text-teal-600/20 dark:text-teal-400/20 select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 mb-3">
                    {project.summary}
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      Details →
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-sm text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-teal-600 dark:text-teal-400 hover:underline"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recent blog posts */}
      {recentBlogs.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recent posts
            </h2>
            <Link
              to="/blogs"
              className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBlogs.map((blog) => (
              <Link
                key={blog.slug}
                to={`/blogs/${blog.slug}`}
                className="group block rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                {blog.thumbnail && (
                  <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title || blog.slug}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-1">
                    {blog.title || blog.slug}
                  </h3>
                  {blog.date && (
                    <time className="text-xs text-gray-500 dark:text-gray-500">
                      {blog.date}
                    </time>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Intro;
