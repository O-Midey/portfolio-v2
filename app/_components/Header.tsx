import { Github, Linkedin, Twitter } from "lucide-react";

export default function Header() {
  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OD</span>
            </div>
            <h1 className="font-bold text-gray-900">Omotosho David</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/o-midey" target="_blank">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/meeedzy" target="_blank">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
