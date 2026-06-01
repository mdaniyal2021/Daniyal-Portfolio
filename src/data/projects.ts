export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github: string;
  demo?: string;
  status: "Live" | "In Progress" | "Completed";
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bacterial Classification",
    description:
      "AI/ML model for classifying bacterial species using deep learning and CNN. Analyzes microscopy images to accurately identify bacterial types with high precision.",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "Deep Learning", "CNN", "OpenCV"],
    github: "https://github.com/mdaniyal2021/Bacterial-Classification",
    status: "Completed",
    featured: true,
    image: "/images/thumb_8_bacteria.png",
  },
  {
    id: 2,
    title: "Event Ticketing DApp",
    description:
      "Decentralized event ticketing application built on Ethereum blockchain. Enables secure, transparent ticket purchases and transfers using smart contracts.",
    category: "Student Projects",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
    github: "https://github.com/mdaniyal2021/event-ticketing-dapp-Student-Assignment",
    status: "Completed",
    featured: false,
    image: "/images/thumb_10_eventchain.png",
  },
  {
    id: 3,
    title: "Fake News Detector",
    description:
      "AI-powered fake news detection system using NLP and machine learning. Classifies news articles as real or fake with high accuracy using advanced text analysis.",
    category: "AI/ML",
    technologies: ["Python", "NLP", "Scikit-learn", "NLTK", "ML"],
    github: "https://github.com/mdaniyal2021/fake-news-detector-Student-Assignment",
    status: "Completed",
    featured: true,
    image: "/images/thumb_9_fakenews.png",
  },
  {
    id: 4,
    title: "SaaS BAR & POS System",
    description:
      "Complete SaaS Point of Sale system for bars and restaurants. Features inventory management, order processing, billing, and real-time analytics dashboard.",
    category: "SaaS",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind"],
    github: "https://github.com/mdaniyal2021/SaaS-BAR-POS",
    status: "Live",
    featured: true,
    image: "/images/thumb_5_pos.png",
  },
  {
    id: 5,
    title: "Mini Store",
    description:
      "Full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Clean modern UI with responsive design.",
    category: "E-Commerce",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Redux"],
    github: "https://github.com/mdaniyal2021/mini-store-final",
    status: "Completed",
    featured: true,
    image: "/images/thumb_2_minitools.png",
  },
  {
    id: 6,
    title: "Tourism Site",
    description:
      "Modern tourism and travel website with destination showcases, tour packages, booking system, and engaging travel guides with stunning visuals.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/mdaniyal2021/tourism-site",
    status: "Completed",
    featured: false,
    image: "/images/thumb_7_tourism.png",
  },
  {
    id: 7,
    title: "Clinic Website",
    description:
      "Professional healthcare clinic website with appointment booking, doctor profiles, services showcase, and patient information management system.",
    category: "Healthcare",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/mdaniyal2021/clinic-website",
    status: "Completed",
    featured: true,
    image: "/images/thumb_3_hospital.png",
  },
  {
    id: 8,
    title: "CarServ",
    description:
      "Car service management platform for automotive workshops. Features service booking, vehicle tracking, maintenance records, and customer management.",
    category: "Web",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
    github: "https://github.com/mdaniyal2021/CarServ",
    status: "Completed",
    featured: true,
    image: "/images/thumb_6_carserv.png",
  },
  {
    id: 9,
    title: "JYM Management System",
    description:
      "Complete gym management system with member registration, subscription tracking, attendance, payment records, and admin dashboard.",
    category: "SaaS",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind"],
    github: "https://github.com/mdaniyal2021",
    status: "Completed",
    featured: true,
    image: "/images/thumb_1_jym.png",
  },
  {
    id: 10,
    title: "Banking Application",
    description:
      "Secure banking application with account management, transaction history, fund transfers, and real-time balance tracking.",
    category: "Web",
    technologies: ["React.js", "Node.js", "MySQL", "Express.js", "JWT"],
    github: "https://github.com/mdaniyal2021",
    status: "Completed",
    featured: false,
    image: "/images/thumb_4_bank.png",
  },
  {
    id: 11,
    title: "Listrace",
    description:
      "Task and list tracking application with intuitive UI. Helps users organize daily tasks, set priorities, and track progress efficiently.",
    category: "Web",
    technologies: ["React.js", "JavaScript", "CSS", "LocalStorage"],
    github: "https://github.com/mdaniyal2021/Listrace",
    status: "Completed",
    featured: false,
  },
  {
    id: 12,
    title: "Carvilla",
    description:
      "Premium car dealership and automotive platform with vehicle listings, advanced search filters, comparison tools, and dealer contact system.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/mdaniyal2021/carvilla",
    status: "Completed",
    featured: false,
  },
  {
    id: 13,
    title: "Browny",
    description:
      "Modern restaurant and food service website with menu showcase, online ordering, reservation system, and beautiful food photography presentation.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/mdaniyal2021/Browny",
    status: "Completed",
    featured: false,
  },
  {
    id: 14,
    title: "Women Store",
    description:
      "A modern women's clothing e-commerce store with product browsing, shopping cart, and a clean checkout experience built with React.",
    category: "E-Commerce",
    technologies: ["React.js", "JavaScript", "CSS", "Vercel"],
    github: "https://github.com/mdaniyal2021",
    demo: "https://woman-store.vercel.app",
    status: "Live",
    featured: true,
    image: "/images/website-01.avif",
  },
  {
    id: 15,
    title: "Movie App",
    description:
      "A movie discovery application that fetches real-time data from a public API, featuring search, filtering, and detailed movie info pages.",
    category: "Web",
    technologies: ["React.js", "REST API", "JavaScript", "CSS"],
    github: "https://github.com/mdaniyal2021",
    demo: "https://movie-app-beryl-kappa.vercel.app",
    status: "Live",
    featured: true,
    image: "/images/website-02.avif",
  },
  {
    id: 16,
    title: "Shoe Store",
    description:
      "A stylish shoe e-commerce platform with product listings, category filtering, and a polished shopping cart and checkout flow.",
    category: "E-Commerce",
    technologies: ["React.js", "JavaScript", "TailwindCSS", "Vercel"],
    github: "https://github.com/mdaniyal2021",
    demo: "https://ecommerece-shoe.vercel.app",
    status: "Live",
    featured: true,
    image: "/images/website-03.avif",
  },
];

export const categories = [
  "All",
  "AI/ML",
  "SaaS",
  "E-Commerce",
  "Healthcare",
  "Student Projects",
  "Web",
];
