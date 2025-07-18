"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  description: string;
  src: string;
  technologies: string[];
  projectLink: string;
  githubLink?: string;
};

export default function ProjectCard({
  title,
  description,
  src,
  technologies,
  projectLink,
  githubLink,
}: ProjectCardProps) {
  const shortDesc =
    description.length > 100 ? description.slice(0, 100) + "…" : description;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group bg-[#111] rounded-2xl border border-neutral-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={projectLink} target="_blank" className="block">
        <div className="relative w-full h-52 md:h-64">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Link href={projectLink} target="_blank" aria-label="Live demo">
              <FiExternalLink
                className="text-[#06eecb] hover:text-white"
                size={20}
              />
            </Link>
            {githubLink && (
              <Link href={githubLink} target="_blank" aria-label="GitHub repo">
                <FiGithub
                  className="text-[#06eecb] hover:text-white"
                  size={20}
                />
              </Link>
            )}
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-2">{shortDesc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-[#1a1a1a] px-2 py-1 rounded-full text-[#06eecb]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
