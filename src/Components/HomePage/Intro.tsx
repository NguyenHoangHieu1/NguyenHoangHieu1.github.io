import { PropsWithChildren, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import Button from "../UI/Button"
import AOS from "aos"
import "aos/dist/aos.css"

const Intro: React.FC<PropsWithChildren> = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])
  return (
    <section className="container m-auto max-w-6xl px-4 pt-20 xl:pt-32 pb-16">
      {/* Gradient Background Effect */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/10 dark:from-teal-400/5 dark:to-purple-400/5 -z-10 blur-3xl"></div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div data-aos="fade-right" className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-teal-500 dark:text-teal-400 font-medium tracking-wide uppercase text-sm">
              Full-Stack Developer & Tech Educator
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
                Hoang Hieu
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Passionate developer dedicated to building exceptional web experiences 
              and sharing knowledge with the global community
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Coding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">20+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">100+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Students Taught</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get In Touch
              </button>
            </Link>
            <Link to="/about">
              <button className="px-8 py-3 border-2 border-teal-500 text-teal-500 dark:text-teal-400 font-semibold rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300">
                Learn More About Me
              </button>
            </Link>
          </div>

          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition group"
          >
            More about my journey 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Right Image */}
        <div data-aos="fade-left" className="flex justify-center">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Profile Image */}
            <div className="relative z-10">
              <img
                src={logo}
                className="w-80 h-80 rounded-2xl border-4 border-white dark:border-slate-700 shadow-2xl hover:shadow-teal-500/50 dark:hover:shadow-teal-400/30 transition-all duration-500 hover:scale-105 object-cover"
                alt="Hoang Hieu - Full-Stack Developer"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-xl border-2 border-teal-500">
                <p className="text-sm font-semibold">
                  <span className="text-teal-500">●</span> Available for opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-16 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Intro
