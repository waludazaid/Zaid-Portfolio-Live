import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Github } from "lucide-react";
import herobg from "../assets/herobg.png";
import wildlife from "../assets/project1.png";

const WorkPage = () => {
  return (
    <div 
      className="min-h-screen w-full bg-primary pt-28 px-6 bg-cover bg-fixed" 
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[#915EFF] font-medium tracking-wider text-lg uppercase">My Work</p>
          <h2 className="text-white font-black text-5xl md:text-6xl mt-2">Projects.</h2>
          
          <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Here is my real-world project that showcases my skills in **Java, MySQL, and Web Development**. 
            Click on the GitHub icon to view the source code.
          </p>
        </motion.div>

        {/* Project Card Section */}
        <div className='mt-16 flex flex-wrap gap-10 justify-center pb-20'>
          
          {/* 👇 WILDLIFE PROJECT CARD START */}
          <Tilt options={{ max: 25, scale: 1.02, speed: 400 }} className="w-full sm:w-[360px]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-card'
            >
              
              {/* Image & GitHub Button */}
              <div className='relative w-full h-[230px]'>
                <img 
                  src={wildlife} 
                  alt="Wildlife Sanctuary" 
                  className='w-full h-full object-cover rounded-2xl'
                />
                
                {/* GitHub Icon - Click karne par aapka link khulega */}
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                  <div 
                    onClick={() => window.open("https://github.com/waludazaid/Wildlife-Sanctuary-Project", "_blank")}
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:scale-110 transition-transform'
                    title="View Source Code"
                  >
                    <Github className="text-white w-3/4 h-3/4" />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Wildlife Sanctuary</h3>
                <p className='mt-2 text-gray-400 text-[14px] leading-relaxed'>
                  Engineered a comprehensive Wildlife Management System to streamline conservation workflows. 
                  Leveraging <strong>Java</strong> for core logic and <strong>MySQL</strong> for data integrity, 
                  this platform manages visitor ticketing and animal census data.
                </p>
              </div>

              {/* Tags (Technologies Used) */}
              <div className='mt-4 flex flex-wrap gap-2'>
                <p className='text-[14px] text-blue-400'>#Java</p>
                <p className='text-[14px] text-green-400'>#MySQL</p>
                <p className='text-[14px] text-pink-400'>#HTML/CSS</p>
              </div>

            </motion.div>
          </Tilt>
          {/* 👆 WILDLIFE PROJECT CARD END */}

        </div>
      </div>
    </div>
  );
};


export default WorkPage;
