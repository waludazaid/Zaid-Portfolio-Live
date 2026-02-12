import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { styles } from "../styles";
import { Menu, X, Github, Linkedin } from "lucide-react"; // 👇 Icons Import Kiye

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex tracking-wider'>
            ZAID <span className='sm:block hidden text-[#915EFF]'> &nbsp;| DEV</span>
          </p>
        </Link>

        {/* Desktop Menu - GLOSSY PILL STYLE */}
        <div className="hidden sm:flex items-center gap-6">
          
          {/* Links Section */}
          <div className='flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm'>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skills" },
              { name: "Work", path: "/work" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-300 ${
                  isActive(link.path) 
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 👇 SOCIAL ICONS (Yahan Add Kiye Hain) */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/" // Apna Link Yahan Daalna
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition-colors scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/" // Apna Link Yahan Daalna
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#0A66C2] transition-colors scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>

        </div>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div onClick={() => setToggle(!toggle)} className="text-white cursor-pointer p-2 bg-white/10 rounded-lg backdrop-blur-md">
             {toggle ? <X size={24} /> : <Menu size={24} />}
          </div>

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-white/10`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {["Home", "About", "Skills", "Work", "Contact"].map((item) => (
                <li key={item} className="text-white font-medium cursor-pointer text-[16px]">
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={() => setToggle(false)}>{item}</Link>
                </li>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex gap-4 mt-2 border-t border-white/10 pt-4 w-full justify-center">
                <a href="https://github.com/" target="_blank" className="text-white"><Github size={20} /></a>
                <a href="https://linkedin.com/" target="_blank" className="text-white"><Linkedin size={20} /></a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;