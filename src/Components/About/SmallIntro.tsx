import { PropsWithChildren } from "react"
import face from "../../assets/face.png"

const SmallIntro: React.FC<PropsWithChildren> = (props) => {
  return (
    <section className="m-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A journey of continuous learning, resilience, and passion for technology
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Timeline Story */}
      <div className="space-y-12">
        {/* Chapter 1: The Beginning */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-lg border border-teal-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">The Spark of Discovery</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            At 16, during the pandemic, I discovered my passion for <code className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-teal-600 dark:text-teal-400 font-mono">programming</code>. 
            As an introvert, quarantine was the perfect opportunity to explore something new. What started as curiosity 
            turned into an obsession that would shape my entire career path.
          </p>
        </div>

        {/* Chapter 2: The Learning Phase */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative">
                <img
                  className="w-full rounded-2xl shadow-xl border-4 border-white dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
                  src={face}
                  alt="Hoang Hieu coding"
                />
                <div className="absolute -bottom-3 -right-3 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                  💻 In my element
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 italic mt-4 text-center">
                Me in my natural habitat - coding this portfolio!
              </p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            {/* HTML/CSS Phase */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-orange-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">2</div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">First Steps: HTML & CSS</h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                My journey started with HTML and CSS - not programming languages, but the foundation of the web. 
                I was fascinated by how markup could create structure and styling could bring it to life. 
                Bootstrap 4 became my design mentor, teaching me what beautiful, responsive websites could look like.
              </p>
            </div>

            {/* JavaScript Phase */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">The JavaScript Revelation</h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Then came JavaScript - my first real programming language. Variables, loops, conditionals - 
                every concept was exciting! I was hooked. I started waking up at 4 AM to code before school, 
                then programming from 1 PM to 7 PM after classes. Every. Single. Day.
              </p>
            </div>
          </div>
        </div>

        {/* Chapter 3: The Burnout */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 shadow-lg border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">⚠️</div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">The Lesson: Burnout is Real</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Then reality hit. I burned out completely. The excitement that once fueled me vanished. 
            I learned a hard lesson: <strong className="text-red-600 dark:text-red-400">passion without balance leads to exhaustion</strong>. 
            I stepped away from programming for over a year and a half, uncertain if I'd ever return.
          </p>
        </div>

        {/* Chapter 4: The Return */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8 shadow-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">The Comeback: Stronger & Wiser</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Choosing IT as my university major reignited my passion - but this time, with wisdom. 
            I learned to code sustainably, to rest when needed, and to enjoy the journey rather than sprint to burnout.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Today, I'm here - experienced, balanced, and more passionate than ever. I've learned from my mistakes 
            and grown both as a developer and as a person.
          </p>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 shadow-lg border border-purple-200 dark:border-purple-800">
          <h3 className="text-2xl font-bold text-center mb-6 text-slate-800 dark:text-white">
            💡 What I've Learned
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold mb-2 text-slate-800 dark:text-white">Persistence</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Keep going, but know when to rest</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚖️</div>
              <h4 className="font-bold mb-2 text-slate-800 dark:text-white">Balance</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Passion needs boundaries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌱</div>
              <h4 className="font-bold mb-2 text-slate-800 dark:text-white">Growth</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Mistakes are lessons in disguise</p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center p-8">
          <p className="text-xl font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
            If my story resonates with you, remember: <span className="text-teal-500 dark:text-teal-400">never give up on your dreams</span>, 
            but always <span className="text-purple-500 dark:text-purple-400">take care of yourself</span>. 
            You deserve rest. Don't burn out. 🌟
          </p>
        </div>
      </div>
    </section>
  )
}

export default SmallIntro
