const SKILLS = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Redux",
    "Next.JS",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "SQL",
    "Redis",
    "Docker",
    "Nest.JS",
  ],
  "Tools & Workflow": [
    "Git & GitHub",
    "VS Code",
    "Vite",
    "npm/yarn",
    "Responsive Design",
    "Linux",
  ],
} as const;

const Techs = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Skills & technologies
        </h2>
        <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              {category}
            </h3>
            <ul className="space-y-2.5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 text-sm font-medium border border-gray-100 dark:border-gray-800"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* What I'm learning */}
      <div className="mt-12 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          Currently exploring
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Experiences, clean codes, etc.
        </p>
      </div>
    </section>
  );
};

export default Techs;
