import { PropsWithChildren, ReactElement, ReactNode, useEffect } from "react";
import { useState } from "react";
import Blur from "../UI/Blur";
import { NavLink } from "react-router-dom";
import BackDrop from "../UI/Backdrop";
interface props {
  children?: React.ReactNode;
}

const Header: React.FC<props> = (props) => {
  const [theme, setTheme] = useState<string>("light");
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark")
  //   } else {
  //     setTheme("light")
  //   }
  // }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [mode, setMode] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [blurBg, setBlurBg] = useState(false);

  let blurEl: ReactElement = <></>;

  if (blurBg) {
    blurEl = <Blur onChangeBlur={changeMobileNav} />;
  }

  function changeMobileNav() {
    setMobileNav(!mobileNav);
    setBlurBg(!blurBg);
  }
  function changeMode() {
    setMode(!mode);
    handleThemeSwitch();
  }
  return (
    <header className="p-3 z-50 sticky top-0  w-full     backdrop-blur-md  text-white ">
      <div className="container m-auto max-w-6xl px-2 flex justify-between items-center">
        <div className="text-3xl dark:text-white text-black/50  rounded-full cursor-pointer">
          {/* <img src={logo} className="w-8" alt="" /> */}H
        </div>
        <nav className="xl:block hidden">
          {/* Desktop */}
          <ul className="flex gap-10 text-lg ">
            <li className="hover:text-white cursor-pointer transition ">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? "text-sky-300 hover:text-sky-200 font-bold"
                    : "hover:text-slate-900 text-slate-900/70 hover:dark:text-white dark:text-white/50"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-slate-900 text-slate-900/70 hover:dark:text-white dark:text-white/50 cursor-pointer transition  ">
              <NavLink
                to="/about"
                className={(navData) =>
                  navData.isActive
                    ? "text-sky-300 hover:text-sky-200 font-bold"
                    : "hover:text-slate-900 text-slate-900/70 hover:dark:text-white dark:text-white/50"
                }
              >
                About
              </NavLink>
            </li>
            <li className="hover:text-slate-900 text-slate-900/70 hover:dark:text-white dark:text-white/50 cursor-pointer transition  ">
              <NavLink
                to="/blogs"
                className={(navData) =>
                  navData.isActive
                    ? "text-sky-300 hover:text-sky-200 font-bold"
                    : "hover:text-slate-900 text-slate-900/70 hover:dark:text-white dark:text-white/50"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className="hover:text-slate-900 cursor-pointer transition text-slate-900/70 hover:dark:text-white dark:text-white/50">
              <NavLink
                to="/contact"
                className={(navData) =>
                  navData.isActive
                    ? "text-sky-300 hover:text-sky-200 font-bold"
                    : "hover:text-slate-900 text-slate-900/70 hover:dark:text-white dark:text-white/50"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="xl:flex xl:gap-2">
          <div className="md:block xl:hidden relative">
            <button
              onClick={changeMobileNav}
              className="dark:border-white border-black  border-2 px-2 py-1 rounded-full transition "
            >
              <i className="fa-solid fa-bars px-1 text-2xl text-black dark:text-white hover:text-black transition inline-block"></i>
            </button>
            {/* Mobile */}
            {mobileNav && (
              <BackDrop
                position="p-8 top-20 right-2"
                styles=" z-50   w-64  bg-gray-800 text-white border-gray-900 border-2 rounded-3xl text-2xl   "
              >
                {blurEl}
                <nav>
                  <ul className="mb-5 flex flex-col gap-5">
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive
                            ? "text-sky-300 hover:text-sky-200 font-bold"
                            : " hover:text-white text-white/50"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={(navData) =>
                          navData.isActive
                            ? "text-sky-300 hover:text-sky-200 font-bold"
                            : "hover:text-white text-white/50"
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blogs"
                        className={(navData) =>
                          navData.isActive
                            ? "text-sky-300 hover:text-sky-200 font-bold"
                            : "hover:text-white text-white/50"
                        }
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={(navData) =>
                          navData.isActive
                            ? "text-sky-300 hover:text-sky-200 font-bold"
                            : "hover:text-white text-white/50"
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="flex gap-5">
                  <button
                    onClick={changeMode}
                    className="border-white border-2 px-4 py-2 rounded-full transition hover:bg-white group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform inline-block">
                      {theme === "dark" ? "☀️" : "🌙"}
                    </span>
                  </button>
                </div>
              </BackDrop>
            )}
          </div>
          <div className="xl:block hidden">
            <button
              onClick={changeMode}
              className="dark:border-white border-black border-2 px-4 py-2 rounded-full transition hover:dark:bg-white hover:bg-black group"
              aria-label="Toggle dark mode"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform inline-block">
                {theme === "dark" ? "☀️" : "🌙"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
