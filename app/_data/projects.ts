export type Project = {
  id: number;
  title: string;
  description: string;
  src: string;
  technologies: string[];
  projectLink: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "portfolio website",
    description: "personal portfolio website",
    src: "https://res.cloudinary.com/daypv7q8r/image/upload/v1685146875/portfolio_zrw2lp.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    projectLink: "https://mide-portfolio.vercel.app/",
  },

  {
    id: 2,
    title: "todo app",
    description: "a todo app to keep track of your tasks and goals.",
    src: "https://res.cloudinary.com/daypv7q8r/image/upload/v1685146874/todo_osi50o.png",
    technologies: ["React", "local storage"],
    projectLink: "https://todo-l86m.vercel.app/",
  },
  {
    id: 3,
    title: "SimpleVoting DApp",
    description: "A decentralized Web3 voting application. Users can connect their wallet, vote 'Yes' or 'No', and view live voting results on-chain.",
    src: "https://res.cloudinary.com/daypv7q8r/image/upload/v1685146874/todo_osi50o.png",
    technologies: ["Solidity", "Typescript", "Next.js", "Ether.js", "Tailwind CSS", "React Toast"],
    projectLink: "https://todo-l86m.vercel.app/",
  },
  {
    id: 4,
    title: "quotes generator",
    description: "an app that generates random quotes on click.",
    src: "https://res.cloudinary.com/daypv7q8r/image/upload/v1685146874/quotes_l3uchl.png",
    technologies: ["HTML", "CSS", "javascript"],
    projectLink: "https://quotes-generator-inky.vercel.app/",
  },
  {
    id: 5,
    title: "shopping cart",
    description: "a simple shopping cart CRUD app.",
    src: "https://res.cloudinary.com/daypv7q8r/image/upload/v1687427229/shopping-cart_k0bm9j.png",
    technologies: ["React"],
    projectLink: "https://shopping-cart-zeta-one.vercel.app/",
  },
  {
    id: 6,
    title: "E-Commerce Website",
    description: "A multipurpose online shopping store",
    src: "https://res.cloudinary.com/daypv7q8r/image/upload/v1752805292/Screenshot_2025-07-18_at_03.16.51_peieza.png",
    technologies: ["Next.JS", "Zustand", "Tailwind CSS"],
    projectLink: "https://shop-luxe-theta.vercel.app/",
  },
];
