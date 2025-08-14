import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, CheckSquare } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="px-10 py-5 flex items-center justify-between border-b border-hb600 fixed top-0 w-full z-50 bg-[#f1fbfd]">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 bg-gradient-to-br from-pc500 to-bg500 rounded-lg flex items-center justify-center "
            onClick={() => setIsOpen(!isOpen)}
          >
            <CheckSquare className="w-5 h-5 text-white " />
          </div>
          <span className="font-bold text-2xl text-fb500">Taskflow</span>
        </div>
        <div className="max-sm:hidden">
          <div className="space-x-6">
            <button className="text-mb400 cursor-pointer hover:text-pc500 transition duration-300">
              <Link to="features" spy={true} smooth={true} duration={500}>
                Features
              </Link>
            </button>
            <button className="text-mb400 cursor-pointer hover:text-pc500 transition duration-300">
              <Link to="Reviews" spy={true} smooth={true} duration={500}>
                Reviews
              </Link>
            </button>
            <button className="text-mb400 cursor-pointer hover:text-pc500 transition duration-300">
              <Link to="Pricing" spy={true} smooth={true} duration={500}>
                Pricing
              </Link>
            </button>
            <button className="bg-gradient-to-r from-pc500 to-bg500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-pc500 transition duration-200 hover:from-pc600 hover:to-bg600 transform hover:scale-105 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
        <div className="sm:hidden">
          <Menu
            className="w-8 h-8 cursor-pointer "
            onClick={() => {
              setIsOpen((s) => !s);
            }}
          />
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              className={`bg-[#f1fbfd] flex flex-col gap-3 fixed mt-18 overflow-hidden items-baseline py-5 px-10 divide-y divide-hb600 transition-all duration-300 sm:hidden 
        ${isOpen ? "w-full" : "w-0 p-0"}`}
            >
              <button className="text-mb400 cursor-pointer hover:text-pc500 transition duration-300">
                <Link
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Features
                </Link>
              </button>
              <button className="text-mb400 cursor-pointer hover:text-pc500 transition duration-300">
                <Link
                  to="Reviews"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Reviews
                </Link>
              </button>
              <button className="text-mb400 cursor-pointer hover:text-pc500 transition duration-300">
                <Link
                  to="Pricing"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Pricing
                </Link>
              </button>
              <button
                className="bg-gradient-to-r from-pc500 to-bg500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-pc500 transition duration-200 hover:from-pc600 hover:to-bg600 transform hover:scale-105 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
