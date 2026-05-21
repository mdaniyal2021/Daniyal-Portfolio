"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiCode } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { projects, categories } from "@/data/projects";
import Image from "next/image";

const catAccent: Record<string, string> = {
  "AI/ML":           "#8b5cf6",
  "SaaS":            "#06b6d4",
  "E-Commerce":      "#f97316",
  "Healthcare":      "#10b981",
  "Student Projects":"#f59e0b",
  "Web":             "#3b82f6",
};

const statusStyle: Record<string, { bg: string; text: string }> = {
  "Live":        { bg: "rgba(16,185,129,0.12)",  text: "#10b981" },
  "Completed":   { bg: "rgba(99,102,241,0.12)",   text: "#818cf8" },
  "In Progress": { bg: "rgba(245,158,11,0.12)",   text: "#f59e0b" },
};

export default function Projects() {
  const [active, setActive]     = useState("All");
  const [showAll, setShowAll]   = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered  = active === "All" ? projects : projects.filter((p) => p.category === active);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              Projects
            </motion.p>
            <motion.h2
              className="heading-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              Selected work
            </motion.h2>
          </div>
          <motion.a
            href="https://github.com/mdaniyal2021"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <FaGithub size={15} />
            All repositories
            <FiExternalLink size={13} />
          </motion.a>
        </div>

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setShowAll(false); }}
              className="btn btn-sm transition-all"
              style={{
                background: active === cat ? "var(--accent)" : "var(--surface-2)",
                color:      active === cat ? "#fff"          : "var(--muted)",
                border:     `1px solid ${active === cat ? "var(--accent)" : "var(--border)"}`,
              }}
            >
              {cat}
              <span
                className="text-xs opacity-70"
              >
                {cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => {
              const accent = catAccent[project.category] ?? "var(--accent-fg)";
              const status = statusStyle[project.status] ?? statusStyle["Completed"];
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="card flex flex-col overflow-hidden group"
                >
                  {/* Thumbnail image */}
                  {project.image ? (
                    <div className="w-full h-44 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={176}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div
                      className="h-1 w-full"
                      style={{ background: accent }}
                    />
                  )}

                  <div className="p-5 flex flex-col flex-1 gap-4">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: accent }}
                      >
                        {project.category}
                      </span>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: status.bg, color: status.text }}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Title + description */}
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2" style={{ color: "var(--text)" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div
                      className="flex gap-2 pt-4"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm flex-1 justify-center"
                      >
                        <FaGithub size={14} />
                        Source
                      </a>
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm flex-1 justify-center"
                        >
                          <FiExternalLink size={13} />
                          Live
                        </a>
                      ) : (
                        <span
                          className="btn btn-sm flex-1 justify-center text-xs"
                          style={{ background: "var(--surface-2)", color: "var(--subtle)", border: "1px solid var(--border)" }}
                        >
                          <FiCode size={13} />
                          No Demo
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show more */}
        {filtered.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-ghost"
            >
              {showAll ? "Show Less" : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
