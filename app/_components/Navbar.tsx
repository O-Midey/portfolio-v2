"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiCodeblocks } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const filteredLinks = links.filter((link) => link.href !== pathname);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-mono text-lg tracking-tight">
          <SiCodeblocks size={32} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 text-md font-medium text-gray-400">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-2">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors text-md"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
