"use client";
import { motion } from "motion/react";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <motion.div
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-gray-400 text-sm md:text-base tracking-widest uppercase mb-4">
          Hi, my name is
        </h1>

        <h2 className="text-white text-4xl md:text-6xl font-light leading-tight mb-4">
          Mide —<span className="text-blue-500"> Frontend Developer</span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          I build clean, interactive and responsive web experiences using tools
          like
          <span className="text-white"> React</span>,{" "}
          <span className="text-white">Next.js</span>, and{" "}
          <span className="text-white">TypeScript</span>.
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-16 animate-bounce text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </main>
  );
}
