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
    <section id="education" className="w-full py-16" style={{ background: "var(--surface)" }}>
      <div className="container mx-auto">

        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-16"
          style={{ color: "var(--accent-fg)" }}
        >
          My Education
        </h2>

        <div className="relative">
          {/* Vertical centre line — desktop only */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-1 h-full z-0 hidden md:block"
            style={{ background: "var(--accent-fg)" }}
          />

          {/* Desktop layout */}
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.title} className="relative w-full mb-12 md:mb-20">
                <div className="hidden md:flex items-center w-full">
                  {/* Left column */}
                  <div className="w-1/2 pr-8 flex justify-end">
                    {isLeft ? (
                      <motion.div
                        className="w-full max-w-md p-6 rounded-lg"
                        initial={{ opacity: 0, x: -30 }}
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
                          <div className="text-sm font-semibold mb-2" style={{ color: "var(--accent-fg)" }}>
                            {item.date}
                          </div>
                        )}
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                          {item.description}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="w-full max-w-md" />
                    )}
                  </div>

                  {/* Centre dot */}
                  <div
                    className="w-5 h-5 rounded-full z-10 flex-shrink-0 animate-pulse"
                    style={{ background: "var(--accent-fg)" }}
                  />

                  {/* Right column */}
                  <div className="w-1/2 pl-8 flex justify-start">
                    {!isLeft ? (
                      <motion.div
                        className="w-full max-w-md p-6 rounded-lg"
                        initial={{ opacity: 0, x: 30 }}
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
                          <div className="text-sm font-semibold mb-2" style={{ color: "var(--accent-fg)" }}>
                            {item.date}
                          </div>
                        )}
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                          {item.description}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="w-full max-w-md" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile layout — separate pass with vertical line */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div
            className="absolute left-2 top-0 bottom-0 w-0.5"
            style={{ background: "var(--accent-fg)", opacity: 0.4 }}
          />
          {timelineData.map((item, index) => (
            <div key={item.title + "-mobile"} className="flex gap-4 mb-8 relative">
              {/* Dot */}
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 mt-1 z-10 animate-pulse"
                style={{ background: "var(--accent-fg)" }}
              />
              {/* Card */}
              <motion.div
                className="flex-1 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ background: "var(--bg)", border: "1px solid var(--accent-fg)", color: "var(--text)" }}
              >
                {item.date && (
                  <div className="text-xs font-semibold mb-1" style={{ color: "var(--accent-fg)" }}>
                    {item.date}
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
