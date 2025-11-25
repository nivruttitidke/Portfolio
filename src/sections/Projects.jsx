import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Clock } from "lucide-react";
import { revealDelayed } from "../utils/animations";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-10 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-extrabold text-center">
          My <span className="text-accent">Projects</span>
        </h2>
        <div className="mt-3 w-20 h-1.5 bg-accent mx-auto"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealDelayed(index * 0.2)}
              className="rounded-2xl p-5 bg-white/40 backdrop-blur-md shadow hover:shadow-2xl hover:scale-[1.03] transition border"
            >
              <div className="w-full h-44 rounded-xl overflow-hidden">
                <img src={p.image} className="w-full h-full object-cover hover:scale-110 transition" />
              </div>

              <h3 className="text-xl font-bold mt-4">{p.title}</h3>
              <p className="text-slate-600 mt-2">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                    {t}
                  </span>
                ))}
              </div>

              {p.github === "" ? (
                <div className="mt-5 flex items-center gap-2 text-accent font-semibold">
                  <Clock size={18} /> In Progress
                </div>
              ) : (
                <div className="mt-5 flex gap-3">
                  {p.live && (
                    <a href={p.live} target="_blank"
                      className="px-4 py-2 flex items-center gap-2 rounded bg-accent text-white">
                      Live <ExternalLink size={16} />
                    </a>
                  )}

                  {p.github && (
                    <a href={p.github} target="_blank"
                      className="px-4 py-2 flex items-center gap-2 rounded border">
                      Code <Github size={16} />
                    </a>
                  )}
                </div>
              )}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
