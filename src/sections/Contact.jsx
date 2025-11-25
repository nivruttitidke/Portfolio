import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

import { reveal, revealDelayed } from "../utils/animations";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SEND EMAIL FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return toast.error("Please fill in all fields.");
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Email Error:", err);
        toast.error("Failed to send message. Try again!");
        setLoading(false);
      });
  };

  return (
    <section className="min-h-screen bg-[#040B16] text-white px-4 sm:px-6 md:px-12 py-28 flex flex-col items-center">

      {/* TITLE */}
      <motion.h2
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
      >
        <span className="text-blue-400">Let's Connect</span> &{" "}
        <span className="text-blue-600">Collaborate</span>
      </motion.h2>

      {/* SUBTEXT */}
      <motion.p
        variants={revealDelayed(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-slate-300 text-center mt-2 text-sm sm:text-base px-3"
      >
        Whether it's a collaboration, project, or just to say hi — feel free to reach out!
      </motion.p>

      {/* SOCIAL ICONS */}
      <motion.div
        variants={revealDelayed(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center gap-8 mt-10 flex-wrap w-full px-4"
      >
        {/* Social items */}
        {[
          {
            icon: <Github size={22} className="text-white" />,
            link: "https://github.com/nivruttitidke",
          },
          {
            icon: <Linkedin size={22} className="text-white" />,
            link: "https://www.linkedin.com/in/nivrutti-tidke",
          },
          {
            icon: <Mail size={22} className="text-white" />,
            link: "mailto:nivruttitidke108@gmail.com",
          },
          {
            icon: <Instagram size={22} className="text-white" />,
            link: "https://instagram.com/nivrutti_tidke_03",
          },
        ].map((item, i) => (
          <a key={i} href={item.link} target="_blank" className="relative group">
            <div className="absolute inset-0 w-12 h-12 rounded-full blur-xl bg-blue-400/40 opacity-0 group-hover:opacity-100 transition"></div>
            <div className="w-12 h-12 rounded-full bg-[#0C1628] border border-[#1C2A48] flex items-center justify-center shadow-xl relative z-10 hover:scale-110 transition">
              {item.icon}
            </div>
          </a>
        ))}
      </motion.div>

      {/* CONTACT FORM */}
      <motion.form
        onSubmit={handleSubmit}
        variants={revealDelayed(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-xl mt-12 space-y-4 px-2"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-md bg-[#0A1424] border border-[#1C2338] text-white"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-3 rounded-md bg-[#0A1424] border border-[#1C2338] text-white"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message..."
          rows="5"
          className="w-full px-4 py-3 rounded-md bg-[#0A1424] border border-[#1C2338] text-white"
        ></textarea>

        {/* SEND BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-4 py-3 rounded-md text-white font-medium shadow-md transition 
            ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* DOWNLOAD RESUME */}
      <motion.div
        variants={revealDelayed(0.35)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center mt-8 w-full"
      >
        <a
          href="/Nivrutti_B_Tidke_Resume.pdf"
          download
          className="px-5 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white shadow-lg transition w-full max-w-xs text-center"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
