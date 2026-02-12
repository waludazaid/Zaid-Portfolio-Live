import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import SkillsPage from "./components/SkillsPage"; 
import WorkPage from "./components/WorkPage"; // 👇 YE LINE PEHLE NAHI THI
import ContactPage from "./components/ContactPage";
const App = () => {
  return (
    <div className='relative z-0 bg-primary min-h-screen'>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        
        {/* 👇 YAHAN PEHLE "COMING SOON" THA, AB NAYA PAGE HAI */}
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact" element={<div className="pt-32 text-white text-center text-3xl">Contact Page Coming Soon...</div>} />
      </Routes>
    </div>
  );
}

export default App;