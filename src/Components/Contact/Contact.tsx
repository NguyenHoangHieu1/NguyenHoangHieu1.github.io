import { PropsWithChildren } from "react"
import Container from "../UI/Container"

const Contact: React.FC<PropsWithChildren> = (props) => {

  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below. 
            I'm always open to discussing new opportunities!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-teal-50 mb-8 text-lg">
                Ready to turn your ideas into reality? Whether it's a freelance project, 
                full-time opportunity, or just a chat about tech - I'd love to hear from you!
              </p>
              
              {/* Contact Methods */}
              <div className="space-y-4">
                <a 
                  href="mailto:hoanghieufro@gmail.com"
                  className="flex items-center gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    📧
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-teal-100">Email</div>
                    <div className="text-white font-medium">hoanghieufro@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="tel:0917077967"
                  className="flex items-center gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-teal-100">Phone</div>
                    <div className="text-white font-medium">0917077967</div>
                  </div>
                </a>
                
                <a 
                  href="https://zalo.me/0917077967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-teal-100">Zalo</div>
                    <div className="text-white font-medium">0917077967</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-teal-50 text-sm">
                  <strong>Note:</strong> This is a frontend-only portfolio. Please use the contact methods above to reach me directly.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Why Work With Me */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                Why Work With Me?
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl">
                  <div className="text-3xl">✅</div>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white mb-1">Reliable & Professional</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Clear communication and on-time delivery. I value professionalism and keeping my commitments.
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                  <div className="text-3xl">🎯</div>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white mb-1">Quality-Focused</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Writing clean, maintainable code following best practices and modern standards.
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white mb-1">Fast Learner</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Quick to adapt to new technologies and frameworks. Always staying current with industry trends.
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white mb-1">Team Player</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Collaborative mindset with experience in teaching and mentoring others.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold">Available for Work</h3>
              </div>
              <p className="text-green-50">
                Currently open to full-time, part-time, and freelance opportunities. 
                Let's discuss how I can contribute to your team or project!
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            Prefer Other Platforms?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/NguyenHoangHieu1" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300 flex items-center gap-2"
            >
              <span>🐙</span> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/hieu-nguyen-hoang-18912a298/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
            >
              <span>💼</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact
