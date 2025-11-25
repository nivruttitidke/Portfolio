import React from "react";
import { motion } from "framer-motion";
import { revealDelayed } from "../utils/animations";

export default function Skill() {
  const skills = [
    "React", "JavaScript", "Node.js", "MongoDB",
    "Express", "Tailwind", "Framer Motion"
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 bg-white">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-extrabold text-center">
          My <span className="text-accent">Skills</span>
        </h2>
        <div className="mt-3 w-20 h-1.5 bg-accent mx-auto"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealDelayed(index * 0.2)}
              className="p-6 rounded-xl bg-slate-50 shadow hover:shadow-xl transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
