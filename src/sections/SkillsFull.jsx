import React from "react";
import { motion } from "framer-motion";
import { reveal, revealDelayed } from "../utils/animations";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.png";
import C from "../assets/c.png";
import JAVA from "../assets/java.png";
import MYSQL from "../assets/mysql.jpg";
import MONGO from "../assets/mongo.png";
import REACT from "../assets/react.jpg";
import GIT from "../assets/git.png";


export default function SkillsFull() {
  const icons = [
    HTML, CSS, JS, MYSQL, C, JAVA,
    MONGO, REACT, GIT, 
  ];

  return (
    <section className="min-h-screen bg-[#040B16] text-white px-6 sm:px-10 py-24">

      {/* TITLE */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
        className="text-3xl sm:text-4xl font-bold flex items-center gap-2"
      >
        <span className="text-green-400">💻</span> My Skills
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
        className="text-slate-300 mt-2"
      >
        Technical expertise blended with creativity — explore my core competencies below.
      </motion.p>

      {/* TOP FLOATING ICON SECTION */}
      <div className="mt-10 bg-[#07111F] rounded-3xl p-10 border border-[#0F1A2C] shadow-xl max-w-5xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">

          {icons.map((img, i) => (
            <motion.div
              key={i}
              variants={revealDelayed(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-20 h-20 rounded-full bg-[#0C1628] border border-[#1C2A48] shadow-lg 
                        flex items-center justify-center float-icon"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <img src={img} className="w-10 h-10 object-contain" />
            </motion.div>
          ))}

        </div>
      </div>

      {/* BOTTOM CATEGORY GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        {/* COLUMN 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="bg-[#0A1424] p-6 rounded-xl border border-[#1A2338] shadow"
        >
          <h3 className="text-lg font-bold text-green-400">Programming Languages</h3>
          <ul className="list-disc mt-3 ml-5 text-slate-300 space-y-1">
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </motion.div>

        {/* COLUMN 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="bg-[#0A1424] p-6 rounded-xl border border-[#1A2338] shadow"
        >
          <h3 className="text-lg font-bold text-green-400">Web Technologies</h3>
          <ul className="list-disc mt-3 ml-5 text-slate-300 space-y-1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </motion.div>

        {/* COLUMN 3 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="bg-[#0A1424] p-6 rounded-xl border border-[#1A2338] shadow"
        >
          <h3 className="text-lg font-bold text-green-400">Databases & Tools</h3>
          <ul className="list-disc mt-3 ml-5 text-slate-300 space-y-1">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </motion.div>

        {/* COLUMN 4 */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="bg-[#0A1424] p-6 rounded-xl border border-[#1A2338] shadow"
        >
          <h3 className="text-lg font-bold text-green-400">Frameworks & Libraries</h3>
          <ul className="list-disc mt-3 ml-5 text-slate-300 space-y-1">
            <li>Node.js</li>
            <li>Py</li>
            <li>OpenCV</li>
          </ul>
        </motion.div> */}

        {/* COLUMN 5 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="bg-[#0A1424] p-6 rounded-xl border border-[#1A2338] shadow"
        >
          <h3 className="text-lg font-bold text-green-400">Core Concepts</h3>
          <ul className="list-disc mt-3 ml-5 text-slate-300 space-y-1">
            <li>DSA</li>
            
          </ul>
        </motion.div>

        {/* COLUMN 6 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="bg-[#0A1424] p-6 rounded-xl border border-[#1A2338] shadow"
        >
          <h3 className="text-lg font-bold text-green-400">Soft Skills</h3>
          <ul className="list-disc mt-3 ml-5 text-slate-300 space-y-1">
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Creativity</li>
            <li>Adaptability</li>
            <li>Communication</li>
          </ul>
        </motion.div>

      </div>

    </section>
  );
}
