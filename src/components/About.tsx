"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMapPin, FiMail, FiBriefcase, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const expertise = [
  "Next.js & React Applications",
  "MERN Stack Development",
  "PHP / Laravel Backend",
  "REST API Architecture",
  "AI & Machine Learning",
  "Deep Learning Models",
  "SaaS Platform Development",
  "E-Commerce Solutions",
  "Academic & Research Projects",
  "MySQL & MongoDB Design",
];

const socials = [
  { href: "https://github.com/mdaniyal2021", icon: <FaGithub size={16} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/muhammad-daniyal-5521a7294/", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
  { href: "https://wa.me/923047671720", icon: <FaWhatsapp size={16} />, label: "WhatsApp" },
  { href: "mailto:m.daniyal2021@gmail.com", icon: <FiMail size={16} />, label: "Email" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="about" ref={ref} className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        {/* Label */}
        <motion.p className="section-label" {...fade(0)}>
          About
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <div>
            <motion.h2 className="heading-lg mb-6" {...fade(0.05)}>
              Building things that{" "}
              <span className="text-gradient">actually work</span>
            </motion.h2>

            <motion.div
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--muted)" }}
              {...fade(0.1)}
            >
              <p className="mb-5">
                I&apos;m a Full Stack Developer and AI/ML Engineer with 3+ years of experience
                turning complex requirements into production-ready software. I work across the
                entire stack — from crafting clean UIs in React to architecting scalable Node.js
                and Laravel backends.
              </p>
              <p className="mb-5">
                My AI work includes real projects: bacterial image classification with CNNs,
                NLP-based fake news detection, and deep learning pipelines deployed in research
                settings. I don&apos;t just build for the demo — I build for real use.
              </p>
              <p>
                Whether you need a SaaS MVP, an e-commerce platform, a final year project, or
                a machine learning solution — I deliver on time, with clean code and proper
                documentation.
              </p>
            </motion.div>

            {/* Contact info */}
            <motion.div className="space-y-3 mb-8" {...fade(0.15)}>
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--accent-fg)" }}><FiMapPin size={14} /></span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    border:     "1px solid var(--accent-fg)",
                    color:      "var(--accent-fg)",
                    background: "rgba(124,193,183,0.08)",
                  }}
                >
                  Pakistan · Remote Worldwide
                </span>
              </div>
              {[
                { icon: <FiMail size={14} />, text: "m.daniyal2021@gmail.com" },
                { icon: <FiBriefcase size={14} />, text: "Open to freelance & full-time" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "var(--accent-fg)" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div className="flex items-center gap-2" {...fade(0.2)}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="btn btn-ghost btn-sm"
                >
                  {s.icon}
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Expertise + Stats */}
          <div className="space-y-8">
            {/* Stats row */}
            <motion.div className="grid grid-cols-3 gap-4 mt-2" {...fade(0.1)}>
              {[
                { value: "50+",  label: "Projects",     sub: "shipped" },
                { value: "3+",   label: "Years",        sub: "experience" },
                { value: "100%", label: "Satisfaction", sub: "guaranteed" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="card p-5 text-center"
                  style={{ borderColor: "var(--accent-border)", background: "var(--bg)" }}
                >
                  <div
                    className="text-4xl font-bold tracking-tight mb-1"
                    style={{ color: "var(--accent-fg)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text)" }}>
                    {s.label}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--subtle)" }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Expertise list */}
            <motion.div className="card p-6" {...fade(0.15)}>
              <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--muted)" }}>
                AREAS OF EXPERTISE
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {expertise.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.04, duration: 0.35 }}
                    className="flex items-center gap-3 text-sm py-1"
                    style={{ color: "var(--muted)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent-fg)" }}
                    />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div {...fade(0.25)}>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn btn-primary w-full justify-center"
              >
                Let&apos;s Work Together <FiArrowRight size={15} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
