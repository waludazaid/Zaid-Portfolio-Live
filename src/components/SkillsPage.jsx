import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import herobg from "../assets/herobg.png";

// Icons ki list - High Quality URLs
const techStacks = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ]
  }
];

const SkillsPage = () => {
  return (
    <div 
        className="min-h-screen w-full bg-primary pt-28 px-6 bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <p className="text-[#915EFF] font-medium tracking-wider text-lg uppercase">What I know</p>
          <h2 className="text-white font-black text-5xl md:text-6xl mt-2">Technical Skills.</h2>
        </motion.div>

        <div className="flex flex-col gap-12 pb-20">
          {techStacks.map((stack, index) => (
            <div key={index}>
              {/* Category Title */}
              <h3 className="text-white text-2xl font-bold mb-6 pl-4 border-l-4 border-[#915EFF]">
                {stack.category}
              </h3>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {stack.skills.map((skill, i) => (
                  <Tilt key={i} options={{ max: 25, scale: 1.05 }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-colors h-[160px]"
                    >
                      {/* ICON SIZE CONTROLLED HERE */}
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-16 h-16 object-contain drop-shadow-lg" 
                      />
                      <p className="text-gray-300 font-medium text-sm">{skill.name}</p>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;