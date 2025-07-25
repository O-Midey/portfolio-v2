"use client";
import { motion } from "framer-motion";
import Container from "../_components/Container";

export default function Contact() {
  return (
    <Container>
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let`&apos;`s Connect.
      </motion.h1>

      <p className="text-gray-400 mb-10">
        Got a project in mind, a question, or just want to vibe over music and
        dev stuff? Drop a message — I`&apos;`m always open to collaborating or
        chatting.
      </p>

      <form
        className="flex flex-col gap-6"
        action="https://formspree.io/f/yourFormID"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-neutral-900 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06eecb]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-neutral-900 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06eecb]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="bg-neutral-900 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06eecb]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#06eecb] text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-sm text-gray-500">
        or email me directly at{" "}
        <a
          href="mailto:your@email.com"
          className="text-[#06eecb] underline underline-offset-4"
        >
          thatboymidey@gmail.com
        </a>
      </div>
    </Container>
  );
}
