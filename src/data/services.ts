export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: string;   // react-icons identifier — rendered in the component
  tags: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Next.js Development",
    description: "Production-grade apps with App Router, SSR, ISR, and server components. Fast, SEO-ready, and scalable.",
    iconName: "nextjs",
    tags: ["App Router", "SSR / SSG", "API Routes"],
  },
  {
    id: 2,
    title: "React.js Development",
    description: "Interactive UIs with modern React patterns — hooks, context, Zustand, and performance optimization.",
    iconName: "react",
    tags: ["Hooks", "Redux / Zustand", "Component Libraries"],
  },
  {
    id: 3,
    title: "MERN Stack",
    description: "Full-stack JavaScript apps end-to-end: MongoDB, Express.js, React, and Node.js — from auth to deployment.",
    iconName: "mern",
    tags: ["MongoDB", "Express", "Node.js"],
  },
  {
    id: 4,
    title: "Node.js & Express APIs",
    description: "Scalable RESTful APIs with JWT auth, rate limiting, file uploads, real-time via WebSockets.",
    iconName: "node",
    tags: ["REST APIs", "JWT Auth", "WebSockets"],
  },
  {
    id: 5,
    title: "PHP / Laravel",
    description: "Robust backend systems with Eloquent ORM, queues, broadcasting, and Blade templating.",
    iconName: "laravel",
    tags: ["Eloquent ORM", "Queue Jobs", "Blade"],
  },
  {
    id: 6,
    title: "Database Design",
    description: "Optimized schemas for MySQL and MongoDB — indexing, stored procedures, migrations, and query optimization.",
    iconName: "database",
    tags: ["MySQL", "MongoDB", "Migrations"],
  },
  {
    id: 7,
    title: "AI & Machine Learning",
    description: "Custom ML pipelines for classification, regression, and NLP using Python, TensorFlow, and Scikit-learn.",
    iconName: "ai",
    tags: ["Classification", "NLP", "Model Deployment"],
  },
  {
    id: 8,
    title: "Deep Learning",
    description: "CNN, RNN, and transformer architectures for image recognition, text analysis, and prediction tasks.",
    iconName: "deeplearn",
    tags: ["CNNs", "Transfer Learning", "TensorFlow"],
  },
  {
    id: 9,
    title: "Student Projects",
    description: "Complete final year and academic projects with full documentation, presentations, and source code.",
    iconName: "student",
    tags: ["Documentation", "Presentation", "Any Stack"],
  },
  {
    id: 10,
    title: "SaaS Applications",
    description: "Multi-tenant SaaS platforms with subscription billing, dashboards, admin panels, and analytics.",
    iconName: "saas",
    tags: ["Multi-tenant", "Billing", "Admin Panel"],
  },
  {
    id: 11,
    title: "E-Commerce",
    description: "Full-featured online stores with product management, payment gateways, inventory, and order tracking.",
    iconName: "ecommerce",
    tags: ["Payment Gateway", "Inventory", "Admin"],
  },
  {
    id: 12,
    title: "LMS Platforms",
    description: "Learning management systems with course creation, video streaming, quizzes, and certificate generation.",
    iconName: "lms",
    tags: ["Course Builder", "Video", "Certificates"],
  },
  {
    id: 13,
    title: "Real Estate Systems",
    description: "Property listing platforms with search, filters, agent portals, and CRM integration.",
    iconName: "realestate",
    tags: ["Listings", "Filters", "CRM"],
  },
  {
    id: 14,
    title: "Healthcare Solutions",
    description: "Clinic management with appointment booking, patient records, doctor portals, and reporting.",
    iconName: "healthcare",
    tags: ["Appointments", "Patient Records", "Reports"],
  },
];
