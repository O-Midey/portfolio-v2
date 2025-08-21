// import React, { useState } from 'react';
// import {
//   Github,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Mail,
//   MapPin,
//   Calendar,
//   Code,
//   Briefcase,
//   User,
//   ExternalLink,
//   ChevronRight,
//   Star,
//   ArrowRight,
//   Settings
// } from 'lucide-react';

// const NotionPortfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');

//   const sections = [
//     { id: 'home', label: 'Home', icon: Settings },
//     { id: 'about', label: 'About', icon: User },
//     { id: 'experience', label: 'Experience', icon: Briefcase },
//     { id: 'projects', label: 'Projects', icon: Code },
//     { id: 'contact', label: 'Contact', icon: Mail }
//   ];

//   const projects = [
//     {
//       title: "DeFi Lending Platform",
//       description: "A decentralized lending platform built with Solidity smart contracts and React frontend, enabling users to lend and borrow crypto assets.",
//       tech: ["Solidity", "Hardhat", "Ethers.js", "React", "Web3.js"],
//       status: "Completed",
//       link: "#"
//     },
//     {
//       title: "Full-Stack E-commerce Platform",
//       description: "Complete MERN stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
//       tech: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API"],
//       status: "Completed",
//       link: "#"
//     },
//     {
//       title: "NFT Marketplace",
//       description: "A marketplace for minting and trading NFTs with smart contract integration and IPFS storage.",
//       tech: ["Solidity", "Next.js", "Ethers.js", "IPFS", "Hardhat"],
//       status: "In Progress",
//       link: "#"
//     },
//     {
//       title: "Task Management API",
//       description: "RESTful API for task management with user authentication, real-time updates, and comprehensive CRUD operations.",
//       tech: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
//       status: "Completed",
//       link: "#"
//     }
//   ];

//   const experience = [
//     {
//       role: "Full-Stack Developer",
//       company: "Tech Startup",
//       period: "2023 - Present",
//       description: "Building end-to-end web applications using MERN stack and developing blockchain solutions with Solidity smart contracts."
//     },
//     {
//       role: "Frontend Developer",
//       company: "Digital Agency",
//       period: "2022 - 2023",
//       description: "Developed responsive web applications and integrated Web3 functionality for blockchain-based projects."
//     }
//   ];

//   const skills = [
//     "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js",
//     "MongoDB", "Tailwind CSS", "Solidity", "Hardhat", "Ethers.js",
//     "Web3.js", "Git", "RESTful APIs", "Smart Contracts", "DeFi"
//   ];

//   const SidebarItem = ({ section, isActive, onClick }) => {
//     const Icon = section.icon;
//     return (
//       <button
//         onClick={onClick}
//         className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-all duration-200 ${
//           isActive
//             ? 'bg-gray-100 text-gray-900 font-medium'
//             : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//         }`}
//       >
//         <Icon size={16} />
//         <span className="text-sm">{section.label}</span>
//       </button>
//     );
//   };

//   const PropertyItem = ({ label, value, icon: Icon }) => (
//     <div className="flex items-center gap-3 py-2">
//       <Icon size={16} className="text-gray-500" />
//       <span className="text-sm text-gray-600 min-w-20">{label}</span>
//       <span className="text-sm text-gray-900">{value}</span>
//     </div>
//   );

//   const ProjectCard = ({ project }) => (
//     <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow duration-200">
//       <div className="flex items-start justify-between mb-3">
//         <h3 className="font-semibold text-gray-900">{project.title}</h3>
//         <div className={`px-2 py-1 rounded-full text-xs ${
//           project.status === 'Completed' ? 'bg-green-100 text-green-700' :
//           project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
//           'bg-yellow-100 text-yellow-700'
//         }`}>
//           {project.status}
//         </div>
//       </div>
//       <p className="text-gray-600 text-sm mb-4">{project.description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.tech.map((tech) => (
//           <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
//             {tech}
//           </span>
//         ))}
//       </div>
//       <a
//         href={project.link}
//         className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
//       >
//         View Project <ExternalLink size={12} />
//       </a>
//     </div>
//   );

//   const ExperienceCard = ({ exp }) => (
//     <div className="border-l-2 border-gray-200 pl-6 pb-6 last:pb-0">
//       <div className="relative">
//         <div className="absolute -left-8 w-3 h-3 bg-blue-500 rounded-full"></div>
//         <h3 className="font-semibold text-gray-900">{exp.role}</h3>
//         <p className="text-blue-600 font-medium text-sm">{exp.company}</p>
//         <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
//         <p className="text-gray-600 text-sm">{exp.description}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">OD</span>
//               </div>
//               <h1 className="font-bold text-gray-900">Omotosho David</h1>
//             </div>
//             <div className="flex items-center gap-4">
//               <a href="https://github.com/o-midey" className="text-gray-500 hover:text-gray-700">
//                 <Github size={20} />
//               </a>
//               <a href="https://linkedin.com/in/yourusername" className="text-gray-500 hover:text-gray-700">
//                 <Linkedin size={20} />
//               </a>
//               <a href="https://twitter.com/meeedzy" className="text-gray-500 hover:text-gray-700">
//                 <Twitter size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex gap-8">
//           {/* Sidebar */}
//           <div className="w-64 flex-shrink-0">
//             <div className="sticky top-24">
//               <nav className="space-y-1">
//                 {sections.map((section) => (
//                   <SidebarItem
//                     key={section.id}
//                     section={section}
//                     isActive={activeSection === section.id}
//                     onClick={() => setActiveSection(section.id)}
//                   />
//                 ))}
//               </nav>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1">
//             {activeSection === 'home' && (
//               <div className="space-y-8">
//                 {/* Hero Section */}
//                 <div className="text-center py-16">
//                   <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
//                     <span className="text-white font-bold text-2xl">OD</span>
//                   </div>
//                   <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                     Omotosho David A.
//                   </h1>
//                   <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                     Full-Stack Developer & Blockchain Engineer
//                   </p>
//                   <div className="flex items-center justify-center gap-6 mb-12">
//                     <a href="https://github.com/o-midey" className="text-gray-500 hover:text-gray-700 transition-colors">
//                       <Github size={24} />
//                     </a>
//                     <a href="https://linkedin.com/in/yourusername" className="text-gray-500 hover:text-gray-700 transition-colors">
//                       <Linkedin size={24} />
//                     </a>
//                     <a href="https://twitter.com/meeedzy" className="text-gray-500 hover:text-gray-700 transition-colors">
//                       <Twitter size={24} />
//                     </a>
//                     <a href="https://instagram.com/thismidey" className="text-gray-500 hover:text-gray-700 transition-colors">
//                       <Instagram size={24} />
//                     </a>
//                   </div>
//                   <button
//                     onClick={() => setActiveSection('about')}
//                     className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
//                   >
//                     Learn More About Me <ArrowRight size={16} />
//                   </button>
//                 </div>

//                 {/* Quick Stats */}
//                 <div className="grid md:grid-cols-3 gap-6">
//                   <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
//                     <Code size={24} className="text-blue-600 mx-auto mb-3" />
//                     <h3 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
//                     <p className="text-gray-600 text-sm">
//                       MERN stack development with React, Node.js, Express, and MongoDB
//                     </p>
//                   </div>
//                   <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
//                     <Star size={24} className="text-purple-600 mx-auto mb-3" />
//                     <h3 className="font-semibold text-gray-900 mb-2">Blockchain Development</h3>
//                     <p className="text-gray-600 text-sm">
//                       Smart contracts with Solidity, Hardhat, and Ethers.js for Web3 applications
//                     </p>
//                   </div>
//                   <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
//                     <Briefcase size={24} className="text-green-600 mx-auto mb-3" />
//                     <h3 className="font-semibold text-gray-900 mb-2">End-to-End Solutions</h3>
//                     <p className="text-gray-600 text-sm">
//                       From database design to smart contracts, delivering complete solutions
//                     </p>
//                   </div>
//                 </div>

//                 {/* Recent Work Preview */}
//                 <div className="bg-gray-50 rounded-lg p-8">
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Work</h2>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="bg-white rounded-lg p-6 border border-gray-200">
//                       <h3 className="font-semibold text-gray-900 mb-2">DeFi Lending Platform</h3>
//                       <p className="text-gray-600 text-sm mb-4">
//                         Decentralized lending platform with Solidity smart contracts
//                       </p>
//                       <div className="flex gap-2 mb-4">
//                         <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Solidity</span>
//                         <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Hardhat</span>
//                         <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Ethers.js</span>
//                       </div>
//                       <button
//                         onClick={() => setActiveSection('projects')}
//                         className="text-blue-600 hover:text-blue-700 text-sm font-medium"
//                       >
//                         View Project →
//                       </button>
//                     </div>
//                     <div className="bg-white rounded-lg p-6 border border-gray-200">
//                       <h3 className="font-semibold text-gray-900 mb-2">Full-Stack E-commerce</h3>
//                       <p className="text-gray-600 text-sm mb-4">
//                         Complete MERN stack solution with payment integration
//                       </p>
//                       <div className="flex gap-2 mb-4">
//                         <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">MERN</span>
//                         <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Node.js</span>
//                         <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">MongoDB</span>
//                       </div>
//                       <button
//                         onClick={() => setActiveSection('projects')}
//                         className="text-blue-600 hover:text-blue-700 text-sm font-medium"
//                       >
//                         View Project →
//                       </button>
//                     </div>
//                   </div>
//                   <div className="text-center mt-6">
//                     <button
//                       onClick={() => setActiveSection('projects')}
//                       className="text-blue-600 hover:text-blue-700 font-medium"
//                     >
//                       View All Projects →
//                     </button>
//                   </div>
//                 </div>

//                 {/* CTA Section */}
//                 <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
//                   <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
//                   <p className="mb-6 opacity-90">
//                     I'm always interested in hearing about new opportunities and interesting projects.
//                   </p>
//                   <button
//                     onClick={() => setActiveSection('contact')}
//                     className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
//                   >
//                     Get In Touch
//                   </button>
//                 </div>
//               </div>
//             )}

//             {activeSection === 'about' && (
//               <div className="space-y-8">
//                 {/* Hero Section */}
//                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
//                   <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                     Full-Stack Developer & Blockchain Engineer
//                   </h1>
//                   <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                     I'm a full-stack developer who builds end-to-end solutions using the{' '}
//                     <span className="font-semibold text-blue-600">MERN stack</span> and creates decentralized applications with{' '}
//                     <span className="font-semibold text-purple-600">Solidity</span>,{' '}
//                     <span className="font-semibold text-purple-600">Hardhat</span>, and{' '}
//                     <span className="font-semibold text-purple-600">Ethers.js</span>. From database design to smart contracts,
//                     I deliver complete solutions that bridge traditional web development with blockchain technology.
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {skills.map((skill) => (
//                       <span key={skill} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full shadow-sm">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Properties */}
//                 <div className="bg-gray-50 rounded-lg p-6">
//                   <h2 className="font-semibold text-gray-900 mb-4">Information</h2>
//                   <div className="space-y-2">
//                     <PropertyItem label="Location" value="Lagos, Nigeria" icon={MapPin} />
//                     <PropertyItem label="Email" value="david@example.com" icon={Mail} />
//                     <PropertyItem label="Status" value="Available for work" icon={Star} />
//                     <PropertyItem label="Joined" value="2022" icon={Calendar} />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeSection === 'experience' && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
//                 <div className="space-y-6">
//                   {experience.map((exp, index) => (
//                     <ExperienceCard key={index} exp={exp} />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'projects' && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
//                 <div className="grid gap-6">
//                   {projects.map((project, index) => (
//                     <ProjectCard key={index} project={project} />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'contact' && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
//                 <div className="bg-gray-50 rounded-lg p-8">
//                   <p className="text-gray-600 mb-6">
//                     I'm always interested in hearing about new opportunities and interesting projects.
//                     Feel free to reach out if you'd like to collaborate!
//                   </p>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <a
//                       href="mailto:david@example.com"
//                       className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
//                     >
//                       <Mail size={20} className="text-blue-600" />
//                       <div>
//                         <div className="font-semibold text-gray-900">Email</div>
//                         <div className="text-gray-600 text-sm">david@example.com</div>
//                       </div>
//                     </a>
//                     <a
//                       href="https://twitter.com/meeedzy"
//                       className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
//                     >
//                       <Twitter size={20} className="text-blue-600" />
//                       <div>
//                         <div className="font-semibold text-gray-900">Twitter</div>
//                         <div className="text-gray-600 text-sm">@meeedzy</div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotionPortfolio;
