import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

const Footer: React.FC<PropsWithChildren> = (props) => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="container m-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              Hoang Hieu
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Full-Stack Developer passionate about building exceptional web experiences 
              and sharing knowledge with the community.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Available for full-time, part-time, and freelance opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-slate-800 dark:text-slate-200">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-slate-800 dark:text-slate-200">Get In Touch</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a 
                  href="mailto:hoanghieufro@gmail.com" 
                  className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition flex items-center gap-2"
                >
                  <span>📧</span> hoanghieufro@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:0917077967" 
                  className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition flex items-center gap-2"
                >
                  <span>📱</span> 0917077967
                </a>
              </li>
              <li>
                <a 
                  href="https://zalo.me/0917077967" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition flex items-center gap-2"
                >
                  <span>💬</span> Zalo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Hoang Hieu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://github.com/NguyenHoangHieu1" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <span className="text-2xl">🐙</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/hieu-nguyen-hoang-18912a298/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <span className="text-2xl">💼</span>
            </a>
            <a 
              href="mailto:hoanghieufro@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition transform hover:scale-110"
              aria-label="Email"
            >
              <span className="text-2xl">📧</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
