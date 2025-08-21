"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full md:max-w-[75%] mx-auto overflow-hidden flex items-center">
      <motion.div
        className="px-2 md:px-15 max-w-5xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 className="text-gray-300 text-sm md:text-base tracking-widest uppercase mb-4">
          Hi, my name is
        </motion.h1>
        <br />
        <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
          Omotosho David A.
        </h2>
        <br />
        <p className="text-gray-300 text-base md:text-lg leading-relaxed ">
          I&apos;m a frontend developer who turns complex ideas into clean,
          responsive interfaces using{" "}
          <span className="text-[#06eecb]">React</span>,{" "}
          <span className="text-[#06eecb]">Next.js</span>, and{" "}
          <span className="text-[#06eecb]">Typescript</span>. When I&apos;m not
          debugging codes, you&apos;ll probably find me obsessing over music releases
          or brainstorming wild ideas for marketing rollouts. I like my UIs just
          like my playlists; smooth, engaging, and impossible to skip.
        </p>
        <Link
          href="/about"
          className="group inline-flex items-center text-gray-300 my-10 animate-pulse hover:text-[#06eecb] duration-200 transition-all"
        >
          See more about me
          <ArrowRight
            className="ml-2 transition-transform space-x-6"
            size={18}
          />
        </Link>
        <div className="flex gap-10 mt-5 md:mt-12">
          <Link
            href="https://github.com/o-midey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              className="text-gray-400 hover:text-[#06eecb] transition duration-300"
              size={24}
            />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              className="text-gray-400 hover:text-[#06eecb] transition duration-300"
              size={24}
            />
          </Link>
          <Link
            href="https://twitter.com/meeedzy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              className="text-gray-400 hover:text-[#06eecb] transition duration-300"
              size={24}
            />
          </Link>
          <Link
            href="https://instagram.com/thismidey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              className="text-gray-400 hover:text-[#06eecb] transition duration-300"
              size={24}
            />
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
