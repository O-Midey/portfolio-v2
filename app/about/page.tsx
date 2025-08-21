import { skills } from "../_data/skills";
import PropertyItem from "../_components/PropertyItem";
import { MapPin, Mail, Star, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Full-Stack Developer & Blockchain Engineer
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          I'm a full-stack developer who builds end-to-end solutions using the{" "}
          <span className="font-semibold text-blue-600">MERN stack</span> and
          creates decentralized applications with{" "}
          <span className="font-semibold text-purple-600">Solidity</span>,{" "}
          <span className="font-semibold text-purple-600">Hardhat</span>, and{" "}
          <span className="font-semibold text-purple-600">Ethers.js</span>. From
          database design to smart contracts, I deliver complete solutions that
          bridge traditional web development with blockchain technology.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Properties */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Information</h2>
        <div className="space-y-2">
          <PropertyItem label="Location" value="Lagos, Nigeria" icon={MapPin} />
          <PropertyItem label="Email" value="david@example.com" icon={Mail} />
          <PropertyItem label="Status" value="Available for work" icon={Star} />
          <PropertyItem label="Joined" value="2022" icon={Calendar} />
        </div>
      </div>
    </div>
  );
}
