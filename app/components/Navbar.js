"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Posts", href: "/posts" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all">
      <div className="px-[2%] lg:px-[10%] py-4 flex justify-between items-center">
        {/* Logo with Motion */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 tracking-tight hover:scale-105 transition-transform"
          >
            Dev<span className="text-gray-800">Log</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex items-center space-x-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors relative group ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {link.name}
                <span
                  className={`block h-[2px] bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </motion.nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pt-2 pb-4 bg-white"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-2 font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </nav>
  );
}
