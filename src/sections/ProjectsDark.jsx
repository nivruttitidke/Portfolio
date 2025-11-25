import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Clock } from "lucide-react";
import { projects } from "../data/projects";
import { revealDelayed } from "../utils/animations";

export default function ProjectsDark() {
  return (
    <section className="min-h-screen projects-bg px-6 sm:px-12 py-24 text-white">
      
      {/* SECTION HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold flex items-center gap-2"
      >
        <span className="text-pink-500 text-2xl"></span> Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-slate-300 mt-2 max-w-3xl"
      >
        A collection of my major works — blending research, AI innovation, and modern UI design.
      </motion.p>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            variants={revealDelayed(index * 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0B1324] border border-[#1A2238] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* IMAGE */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition">
                {p.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                {p.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-[#152238] text-blue-300 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              {p.github === "" ? (
                <div className="mt-4 flex items-center gap-2 text-yellow-400 font-semibold">
                  <Clock size={18} /> In Progress
                </div>
              ) : (
                <div className="flex gap-3 mt-5">

                  {/* Code btn */}
                  <a
                    href={p.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-[#152238] border border-[#1E2A45] text-slate-200 rounded-md hover:bg-[#1C2B4A] transition text-sm"
                  >
                    <Github size={16} /> Code
                  </a>

                  {/* Live btn */}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition text-sm"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}

                </div>
              )}

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
