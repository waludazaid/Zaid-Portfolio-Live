import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import herobg from "../assets/herobg.png";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    link: "https://wa.me/qr/AQHALGI2W5ZBC1",
  },
  {
    name: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    link: "https://www.instagram.com/zaid_waluda?igsh=am5od2tremlsdzU1",
  },
  {
    name: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    link: "https://www.linkedin.com/in/waluda-mohammed-zaid-867ab1258?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    link: "https://github.com/waludazaid",
  },
  {
    name: "Facebook",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    link: "https://www.facebook.com/share/18P8VXpPp7/",
  },
  {
    name: "X (Twitter)",
    icon: "https://cdn-icons-png.flaticon.com/512/349/349961.png",
    link: "https://x.com/zaidwaluda1",
  },
  {
    name: "Reddit",
    icon: "https://cdn-icons-png.flaticon.com/512/3536/3536761.png",
    link: "https://www.reddit.com/u/Waludazaid/s/PoNjVnInnD",
  },
];

const ContactPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 👇 YAHAN MAINE AAPKI IDs FIT KAR DI HAIN
    emailjs
      .send(
        "service_ibd5p27",      // Service ID
        "template_damdy7f",     // Template ID
        {
          from_name: form.name,
          to_name: "Zaid",
          from_email: form.email,
          to_email: "waludamohammedzaid@gmail.com",
          message: form.message,
        },
        "ZaD3zqmdTZ2MglecG"     // Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div 
        className="min-h-screen w-full bg-primary pt-28 px-6 pb-10 bg-cover bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className={`max-w-7xl w-full flex flex-col-reverse lg:flex-row gap-10 overflow-hidden`}>
        
        {/* Contact Form */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='flex-[0.75] bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-card'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input type='email' name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder='What do you want to say?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            </label>

            <button type='submit' className='bg-[#915EFF] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-violet-600 transition-all'>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='flex-[0.5] flex flex-col justify-center items-center'
        >
            <h3 className="text-white text-[30px] font-bold mb-10 text-center">Connect with Me 🌐</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((social) => (
                    <Tilt key={social.name} options={{ max: 45, scale: 1.1, speed: 450 }}>
                        <div 
                            onClick={() => window.open(social.link, "_blank")}
                            className="w-[100px] h-[100px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-full flex flex-col justify-center items-center cursor-pointer hover:bg-white/10 transition-all shadow-[0_0_20px_rgba(145,94,255,0.3)]"
                        >
                            <img src={social.icon} alt={social.name} className="w-10 h-10 object-contain mb-2" />
                            <p className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">{social.name}</p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;