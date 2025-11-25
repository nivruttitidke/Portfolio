import React from "react";
import { motion } from "framer-motion";
import { reveal, revealDelayed } from "../utils/animations";
import { GraduationCap, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-[#040B16] text-white px-6 sm:px-12 py-24">

      {/* ABOUT TITLE */}
      <motion.h2
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-blue-400"
      >
        About Me
      </motion.h2>

      {/* ABOUT PARAGRAPH CARD */}
      <motion.div
        variants={revealDelayed(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 bg-[#0A1424] border border-[#1A2338] rounded-2xl shadow-xl p-8 leading-relaxed text-slate-300"
      >
        <p>
          Hi, I’m <span className="font-semibold text-white">Nivrutti Tidke</span> — an aspiring 
          <span className="text-white font-semibold"> MERN Developer </span> and 
          <span className="text-white font-semibold"> AI Enthusiast</span> who loves turning ideas into intelligent, beautiful digital experiences.
        </p>

        <p className="mt-4">
          I enjoy exploring modern UI design, crafting responsive experiences, and blending 
          <span className="text-white font-semibold"> technical precision</span> with 
          <span className="text-white font-semibold"> creativity</span>. My goal is to build digital products that not only perform — but also inspire.
        </p>

        <p className="mt-4">
          I’m a 3rd-year <span className="font-semibold text-white">B.Tech Computer Engineering student</span> specializing in 
          <span className="font-semibold text-white"> Web Development, AI & Cloud technologies</span>. Skilled in MERN Stack, Java, Python, MySQL, MongoDB, and modern frontend design.
        </p>
      </motion.div>

      {/* EDUCATION TITLE */}
      <motion.h3
        variants={revealDelayed(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-blue-400 mt-16"
      >
        Education
      </motion.h3>

      {/* EDUCATION LIST */}
      <div className="mt-8 space-y-8">

        {/* CARD 1 */}
        <motion.div
          variants={revealDelayed(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0A1424] border border-[#1A2338] rounded-2xl shadow-xl p-8"
        >
          <h4 className="text-xl font-semibold text-blue-300">
            B.Tech in Computer Engineering
          </h4>

          <p className="flex items-center gap-2 mt-2 text-slate-300">
            <GraduationCap size={18} />
             Government College of Engineering, Yavatmal (DBATU Lonere University) — Raigad, Maharashtra
          </p>

          <p className="text-slate-400 mt-1">
            3rd Year (Pursuing) | GPA: 7.3 
          </p>

          <p className="text-slate-400 mt-1">2023 — 2027</p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={revealDelayed(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0A1424] border border-[#1A2338] rounded-2xl shadow-xl p-8"
        >
          <h4 className="text-xl font-semibold text-blue-300">
            Higher Secondary Education (12th)
          </h4>

          <p className="flex items-center gap-2 mt-2 text-slate-300">
            <GraduationCap size={18} />
             Deulgaon raja junior college, deulgaon raja, Buldana
          </p>

          <p className="text-slate-400 mt-1">
            Maharashtra Board | Percentage: 78.83%
          </p>

          <p className="text-slate-400 mt-1">Completed in 2023</p>
        </motion.div>

      </div>

    </section>
  );
}
