import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import herobg from "../assets/herobg.png";

// Professional Icons (High Quality URLs)
const skills = {
  frontend: [
    { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ],
  backend: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ]
};

const SkillCard = ({ title, items }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="flex-1 min-w-[300px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
  >
    <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {items.map((skill, index) => (
        <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 bg-black/30 px-4 py-3 rounded-xl border border-white/5 hover:border-[#915EFF] transition-colors group"
        >
            <img src={skill.icon} alt={skill.name} className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 font-medium group-hover:text-white">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AboutPage = () => {
  return (
    <div 
        className="min-h-screen w-full bg-primary pt-28 pb-10 px-6 bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: `url(${herobg})` }} // Same Background
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Glass Effect */}
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 mb-16 shadow-2xl"
        >
            <p className={`${styles.sectionSubText} text-[#915EFF]`}>Introduction</p>
            <h2 className={`${styles.sectionHeadText} text-white`}>About Me.</h2>
            
            <p className="mt-6 text-gray-300 text-[18px] leading-[32px] max-w-4xl">
                I am a passionate <span className="text-white font-bold">Full Stack Developer</span> specialized in building immersive web experiences. 
                With a strong command over <span className="text-[#915EFF]">Java</span> and <span className="text-[#915EFF]">JavaScript</span>, 
                I create scalable applications that look beautiful and perform flawlessly. 
                <br /><br />
                My journey involves mastering <span className="text-white">React.js</span> for dynamic frontends and <span className="text-white">SQL</span> for robust database management. 
                I don't just write code; I craft digital solutions that solve real-world problems with a touch of creativity.
            </p>
        </motion.div>

        {/* Skills Section Title */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-10"
        >
            <h2 className="text-4xl font-bold text-white text-center">My Technical Arsenal</h2>
        </motion.div>

        {/* Glossy Cards Grid */}
        <div className="flex flex-wrap gap-8 justify-center">
            <SkillCard title="Frontend Development" items={skills.frontend} />
            <SkillCard title="Backend & Database" items={skills.backend} />
            <SkillCard title="Tools & Workflow" items={skills.tools} />
        </div>

      </div>
    </div>
  );
};

export default AboutPage;