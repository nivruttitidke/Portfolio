import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "About me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#060E1A] text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50 shadow-lg">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="text-xl font-bold text-blue-400 tracking-wide">
         NT
       </div>
       <div className="leading-tight"><p className="text-sm font-semibold text-white">Nivrutti Tidke</p>
         <p className="text-xs text-slate-400">MERN Stack, AI & Developer</p>
       </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`hover:text-blue-400 transition ${
              location.pathname === item.path ? "text-blue-400 font-semibold" : "text-gray-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden p-2"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE DROPDOWN */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#081526] md:hidden flex flex-col items-center gap-4 py-6 transition-all duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className={`text-lg ${
              location.pathname === item.path ? "text-blue-400 font-semibold" : "text-gray-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
