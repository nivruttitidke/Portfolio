import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  BrainCircuit,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  MessageCircle
} from "lucide-react";
import Profile from "../assets/profile.jpg";
import { reveal, staggerParent } from "../utils/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#040B16] text-white pt-40 md:pt-28 pb-10 px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: PROFILE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img src={Profile} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* RIGHT: MAIN CONTENT */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h1
            variants={reveal}
            className="text-4xl sm:text-5xl font-bold leading-snug"
          >
            Hi, I'm <span className="text-blue-400">Nivrutti Tidke</span>
          </motion.h1>

          <motion.p variants={reveal} className="mt-3 text-slate-300 font-medium">
            Software Developer | Tech Explorer
          </motion.p>

          {/* TAGS */}
          <motion.div
            variants={reveal}
            className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start"
          >
            {[
              "AI Enthusiast",
              "DSA Learner",
              "Deep Learning Expert",
              "Computer Vision Researcher",
              "Developer"
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* INFO CARDS */}
          <motion.div
            variants={reveal}
            className="grid sm:grid-cols-3 gap-4 mt-10"
          >
            {/* Location */}
            
            <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg p-4 text-sm">
              <div className="flex items-center gap-2 font-semibold text-blue-300">
                <MapPin size={18} />
                Location
              </div>
              <p className="mt-1 text-slate-300">Jalna, Maharashtra, India</p>
            </div>

            {/* Expertise */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg p-4 text-sm">
              <div className="flex items-center gap-2 font-semibold text-blue-300">
                <BrainCircuit size={18} />
                Expertise
              </div>
              <p className="mt-1 text-slate-300">MERN Stack</p>
            </div>

            {/* Contact */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg p-4 text-sm w-full min-h-[90px] flex flex-col justify-center">
             <div className="flex items-center gap-2 font-semibold text-blue-300">
              <Mail size={18} />
                Contact
                </div>
               <p className="mt-1 text-slate-300 break-all">
                 nivruttitidke108@gmail.com
               </p>
            </div>

          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div variants={reveal} className="mt-10">
            <p className="font-semibold text-slate-300 mb-3">Connect</p>

            <div className="flex gap-6 justify-center md:justify-start text-white">
            <a
                href="https://www.linkedin.com/in/nivrutti-tidke"
                 target="_blank"
                rel="noopener noreferrer"
                 className="relative group"
              >
              <div className="absolute inset-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full blur-xl bg-blue-400/40 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0C1628] border border-[#1C2A48] flex items-center justify-center shadow-xl relative z-10 hover:scale-110 transition">
              <Linkedin size={22} className="text-white" />
              </div>
           </a>

              <a
                href="mailto:nivruttitidke108@gmail.com"
                 target="_blank"
                rel="noopener noreferrer"
                 className="relative group"
              >
              <div className="absolute inset-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full blur-xl bg-blue-400/40 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0C1628] border border-[#1C2A48] flex items-center justify-center shadow-xl relative z-10 hover:scale-110 transition">
              <Mail size={22} className="text-white" />
              </div>
           </a>
              <a
                href="https://github.com/nivruttitidke"
                 target="_blank"
                rel="noopener noreferrer"
                 className="relative group"
              >
              <div className="absolute inset-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full blur-xl bg-blue-400/40 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0C1628] border border-[#1C2A48] flex items-center justify-center shadow-xl relative z-10 hover:scale-110 transition">
              <Github size={22} className="text-white" />
              </div>
           </a>
              <a
                href="https://instagram.com/nivrutti_tidke_03"
                 target="_blank"
                rel="noopener noreferrer"
                 className="relative group"
              >
              <div className="absolute inset-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full blur-xl bg-blue-400/40 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0C1628] border border-[#1C2A48] flex items-center justify-center shadow-xl relative z-10 hover:scale-110 transition">
              <Instagram size={22} className="text-white" />
              </div>
           </a>
              
            </div>
          </motion.div>
          {/* DOWNLOAD RESUME BUTTON */}
          <motion.div 
             variants={reveal}
              className="mt-8 flex justify-center md:justify-start"
            >
            <a
             href="/Nivrutti_B_Tidke_Resume.pdf"
             download
             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-medium shadow-lg text-sm sm:text-base"
            >
            Download Resume
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
