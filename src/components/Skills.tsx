"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiPhp, SiLaravel,
  SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiPython, SiTensorflow, SiScikitlearn,
  SiTailwindcss, SiGit, SiDocker, SiRedux,
  SiHtml5, SiCss,
} from "react-icons/si";

interface Tech {
  name:  string;
  icon:  React.ReactNode;
  color: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

const techStack: { category: string; items: Tech[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js",     icon: <SiReact />,      color: "#61dafb", level: "Expert" },
      { name: "Next.js",      icon: <SiNextdotjs />,  color: "#e5e5e5", level: "Expert" },
      { name: "TypeScript",   icon: <SiTypescript />, color: "#3178c6", level: "Advanced" },
      { name: "JavaScript",   icon: <SiJavascript />, color: "#f7df1e", level: "Expert" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />,color: "#06b6d4", level: "Expert" },
      { name: "HTML5",        icon: <SiHtml5 />,      color: "#e34f26", level: "Expert" },
      { name: "CSS3",         icon: <SiCss />,        color: "#1572b6", level: "Expert" },
      { name: "Redux",        icon: <SiRedux />,      color: "#764abc", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js",    icon: <SiNodedotjs />, color: "#339933", level: "Expert" },
      { name: "Express.js", icon: <SiExpress />,   color: "#e5e5e5", level: "Expert" },
      { name: "PHP",        icon: <SiPhp />,        color: "#777bb4", level: "Advanced" },
      { name: "Laravel",    icon: <SiLaravel />,    color: "#ff2d20", level: "Advanced" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB",    icon: <SiMongodb />,    color: "#47a248", level: "Expert" },
      { name: "MySQL",      icon: <SiMysql />,      color: "#4479a1", level: "Advanced" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", level: "Intermediate" },
      { name: "Redis",      icon: <SiRedis />,      color: "#dc382d", level: "Intermediate" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "Python",        icon: <SiPython />,      color: "#3776ab", level: "Expert" },
      { name: "TensorFlow",    icon: <SiTensorflow />,  color: "#ff6f00", level: "Advanced" },
      { name: "Scikit-learn",  icon: <SiScikitlearn />, color: "#f7931e", level: "Advanced" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git",    icon: <SiGit />,    color: "#f05032", level: "Expert" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ed", level: "Intermediate" },
    ],
  },
];

const levelColor: Record<string, string> = {
  Expert:       "#7cc1b7",
  Advanced:     "#5fa89e",
  Intermediate: "#a8ddd7",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Skills
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <motion.h2
            className="heading-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            My tech stack
          </motion.h2>
          <motion.div
            className="flex items-center gap-4 text-xs self-end ml-auto flex-wrap"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {Object.entries(levelColor).map(([lv, col]) => (
              <div key={lv} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: col }} />
                <span style={{ color: "var(--muted)" }}>{lv}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="space-y-10">
          {techStack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
            >
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--subtle)" }}
              >
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {group.items.map((tech, ti) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.08 + ti * 0.04 }}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="card p-4 flex flex-col items-center gap-2.5 text-center cursor-default group"
                  >
                    {/* Icon */}
                    <div
                      className="text-2xl transition-transform duration-200 group-hover:scale-110"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>

                    {/* Name */}
                    <span className="text-xs font-medium leading-tight" style={{ color: "var(--text)" }}>
                      {tech.name}
                    </span>

                    {/* Level dot */}
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: levelColor[tech.level] }}
                      title={tech.level}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
