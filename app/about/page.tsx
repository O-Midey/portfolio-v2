"use client";
import { motion } from "framer-motion";
import Container from "../_components/Container";

export default function About() {
  return (
    <Container heading="About Me.">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-gray-300"
      >
        <p>
          I'm Omotosho Ayomide, a passionate frontend developer with a sharp eye
          for design and an obsession for clean, efficient code. My toolkit
          includes React, Next.js, and TypeScript, which I use to build
          scalable, responsive, and performance-focused web experiences.
        </p>
        <br />
        <p>
          Beyond the code, I have a genuine love for music and digital culture.
          Whether it’s analyzing album rollouts or brainstorming unique ways to
          market a new track, I bring a creative, cross-disciplinary edge to
          everything I do.
        </p>
        <br />
        <p>
          I believe great user interfaces are like great songs — they flow, feel
          natural, and leave a lasting impression. That’s the kind of experience
          I aim to build: intuitive, impactful, and impossible to ignore.
        </p>
        <br />
      </motion.div>

      {/* Optional CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className=" mt-10"
      >
        <p className="text-lg text-gray-300">
          Want to work together or just talk music?{" "}
          <a
            href="/contact"
            className="text-[#06eecb]  underline hover:text-[#0ffff1]"
          >
            Reach out here.
          </a>
        </p>
      </motion.div>
    </Container>
  );
}
