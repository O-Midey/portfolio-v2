import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  Code,
  Star,
  Briefcase,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Omotosho David A.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Full-Stack Developer & Blockchain Engineer
        </p>
        <div className="flex items-center justify-center gap-6 mb-12">
          <a href="https://github.com/o-midey" target="_blank">
            <Github />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            <Linkedin />
          </a>
          <a href="https://twitter.com/meeedzy" target="_blank">
            <Twitter />
          </a>
          <a href="https://instagram.com/thismidey" target="_blank">
            <Instagram />
          </a>
        </div>
        <a
          href="/about"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:opacity-85 transition-all duration-300 font-medium"
        >
          Learn More About Me
          <ArrowRight
            className="transform transition-transform duration-300 animate-pulse group-hover:translate-x-2"
            size={16}
          />
        </a>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <Code className="text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold">Full-Stack Development</h3>
          <p className="text-sm text-gray-600">MERN stack development</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <Star className="text-purple-600 mx-auto mb-3" />
          <h3 className="font-semibold">Blockchain Development</h3>
          <p className="text-sm text-gray-600">Smart Contracts & Web3</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <Briefcase className="text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold">End-to-End Solutions</h3>
          <p className="text-sm text-gray-600">From DB to Smart Contracts</p>
        </div>
      </div>
    </div>
  );
}
