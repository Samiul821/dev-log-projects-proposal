"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";
import developerAnimation from "../../public/developer skills.json";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-between px-[2%] lg:px-[10%] overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100">
      {/* Glowing Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-200"></div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm"
          >
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              DevLog
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 text-lg sm:text-xl text-gray-700 max-w-xl mx-auto md:mx-0"
          >
            A clean & minimal blog platform for developers — built with Markdown,
            Next.js, and love ❤️.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8"
          >
            <Link
              href="/posts"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              🚀 Explore Posts
            </Link>
          </motion.div>
        </div>

        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <Lottie
            animationData={developerAnimation}
            loop={true}
            style={{ width: 500, height: 400 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
