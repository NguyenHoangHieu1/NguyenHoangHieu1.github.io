import { PropsWithChildren } from "react"

const Techs: React.FC<PropsWithChildren> = (props) => {
  const technologies = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: "⚛️", description: "Building modern, component-based UIs" },
        { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript development" },
        { name: "JavaScript (ES6+)", icon: "🟨", description: "Core language proficiency" },
        { name: "HTML5 & CSS3", icon: "🎨", description: "Semantic markup and styling" },
        { name: "Tailwind CSS", icon: "🎭", description: "Utility-first CSS framework" },
        { name: "Redux", icon: "🔄", description: "State management solutions" },
      ],
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: "🟢", description: "Server-side JavaScript runtime" },
        { name: "Express.js", icon: "🚂", description: "Web application framework" },
        { name: "REST APIs", icon: "🔌", description: "RESTful API design & development" },
        { name: "MongoDB", icon: "🍃", description: "NoSQL database management" },
        { name: "SQL", icon: "🗄️", description: "Relational database queries" },
      ],
    },
    {
      category: "Tools & DevOps",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git & GitHub", icon: "🐙", description: "Version control & collaboration" },
        { name: "VS Code", icon: "💻", description: "Primary development environment" },
        { name: "Vite", icon: "⚡", description: "Fast build tool & dev server" },
        { name: "npm/yarn", icon: "📦", description: "Package management" },
        { name: "Responsive Design", icon: "📱", description: "Mobile-first approach" },
      ],
    },
  ]

  return (
    <section className="m-auto max-w-6xl px-4 py-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl my-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A comprehensive toolkit built through years of hands-on experience and continuous learning
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Category Header */}
            <div className="mb-6">
              <h3
                className={`text-2xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent mb-2`}
              >
                {tech.category}
              </h3>
              <div className={`w-16 h-1 bg-gradient-to-r ${tech.color} rounded-full`}></div>
            </div>

            {/* Skills List */}
            <div className="space-y-3">
              {tech.skills.map((skill, skillIdx) => (
                <div 
                  key={skillIdx}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {skill.name}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {skill.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-6 text-white">
          <h4 className="text-2xl font-bold mb-3">🎯 Current Focus</h4>
          <p className="text-teal-50">
            Expanding my expertise in full-stack development, cloud technologies, 
            and building scalable applications that make a real impact.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
          <h4 className="text-2xl font-bold mb-3">📚 Always Learning</h4>
          <p className="text-purple-50">
            Currently exploring Next.js, GraphQL, Docker, and modern DevOps practices 
            to stay at the cutting edge of web development.
          </p>
        </div>
      </div>

      {/* Certifications/Achievements */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
          Achievements & Milestones
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md">
            <div className="text-3xl mb-2">🏆</div>
            <div className="font-bold text-lg text-slate-800 dark:text-white">5+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md">
            <div className="text-3xl mb-2">⭐</div>
            <div className="font-bold text-lg text-slate-800 dark:text-white">6+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">months Experience</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md">
            <div className="text-3xl mb-2">👥</div>
            <div className="font-bold text-lg text-slate-800 dark:text-white">50+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Students Mentored (English & Programming)</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md">
            <div className="text-3xl mb-2">💡</div>
            <div className="font-bold text-lg text-slate-800 dark:text-white">2+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Techs
