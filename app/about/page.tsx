import { skills } from "../_data/skills";
import PropertyItem from "../_components/PropertyItem";
import { MapPin, Mail, Star } from "lucide-react";
import AnimatedDiv from "../_components/AnimatedDiv";

export default function AboutPage() {
  return (
    <AnimatedDiv>
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className=" rounded-xl ">
          <h1 className="text-2xl md:text-3xl mb-6 font-bold text-gray-900">
            Full-Stack Developer & Blockchain Engineer
          </h1>
          <p className="text-gray-600 text-md md:text-md my-10">
            I&apos;m a full-stack developer who builds end-to-end solutions
            using the{" "}
            <span className="font-semibold text-blue-600">MERN stack</span> and
            creates decentralized applications with{" "}
            <span className="font-semibold text-purple-600">Solidity</span>,{" "}
            <span className="font-semibold text-purple-600">Hardhat</span>, and{" "}
            <span className="font-semibold text-purple-600">Ethers.js</span>.
            From database design to smart contracts, I deliver complete
            solutions that bridge traditional web development with blockchain
            technology. I approach every project with precision and creativity,
            whether I&apos;m architecting scalable databases or writing secure
            smart contracts. Each line of code is an opportunity to build
            something meaningful that users will love. When I&apos;m not coding,
            I&apos;m usually vibing to some good Afrobeats. There&apos;s
            something about the energy that keeps me motivated during those
            late-night development sessions.
            <br />
            <br />
            You can check out my playlist{" "}
            <a
              className="text-blue-700"
              target="_blank"
              href="https://open.spotify.com/user/31jibew2j4bcfy3edf6ezxorcbxu/playlists"
            >
              here 😉
            </a>
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 font-mono bg-white text-gray-700 text-sm rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Properties */}
          <div className="bg-gray-50 rounded-lg p-6 mt-10">
            <h2 className="font-semibold text-gray-900 mb-4">Information</h2>
            <div className="space-y-2">
              <PropertyItem
                label="Location"
                value="Lagos, Nigeria"
                icon={MapPin}
              />
              <PropertyItem
                label="Email"
                value="talk2adeoluwa2310@gmail.com"
                icon={Mail}
              />
              <PropertyItem
                label="Status"
                value="Available for work"
                icon={Star}
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}
