"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    date:        "2020 – 2022",
    title:       "Intermediate — Superior College Multan",
    description: "Focused on pre-engineering subjects. Built problem-solving skills and started exploring coding through basic HTML & CSS.",
  },
  {
    date:        "2022 – 2024",
    title:       "BSCS — Muhammad Nawaz Sharif University, Multan",
    description: "Graduated with a degree in Computer Science. Specialized in web development, data structures, and software engineering.",
  },
  {
    date:        "2023 – Present",
    title:       "Job — Web Developer & Team Lead",
    description: "Currently serving as a Team Lead & Project Manager, guiding developers and handling end-to-end client projects.",
  },
  {
    date:        undefined,
    title:       "Technologies I Work With",
    description: "Frontend: HTML, CSS, TailwindCSS, JavaScript, React  |  Backend: PHP (Laravel), Python, Java  |  Database: SQL, MySQL  |  Others: API Integration, Git, RESTful Services, Deployment",
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full py-20" style={{ background: "var(--surface)" }}>
      <div className="container mx-auto">

        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-16"
          style={{ color: "var(--accent-fg)" }}
        >
          My Education
        </h2>

        {/* Single-pass responsive timeline — avoids any duplicate rendering */}
        <div className="relative">

          {/* Vertical line: left-aligned on mobile, centred on desktop */}
          <div
            className="absolute top-0 bottom-0 left-[8px] w-px md:left-1/2 md:w-1 md:-translate-x-1/2"
            style={{ background: "var(--accent-fg)", opacity: 0.45 }}
          />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.title}
                className="relative flex items-start gap-4 mb-10 md:mb-20 md:flex-none md:block"
              >
                {/* ── Mobile dot (removed from flow on desktop) ── */}
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0 z-10 animate-pulse mt-1 md:hidden"
                  style={{ background: "var(--accent-fg)" }}
                />

                {/* ── Desktop centred dot (absolute, hidden on mobile) ── */}
                <div
                  className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full z-10 animate-pulse"
                  style={{ background: "var(--accent-fg)" }}
                />

                {/* ── Card: flex-1 on mobile; 45 % wide, left or right on desktop ── */}
                <motion.div
                  className={`
                    flex-1 p-4 md:p-6 rounded-lg
                    md:flex-none md:w-[45%]
                    ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                  `}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px 4px #7cc1b7" }}
                  style={{
                    background: "var(--bg)",
                    border:     "1px solid var(--accent-fg)",
                    color:      "var(--text)",
                  }}
                >
                  {item.date && (
                    <div className="text-xs md:text-sm font-semibold mb-2" style={{ color: "var(--accent-fg)" }}>
                      {item.date}
                    </div>
                  )}
                  <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
