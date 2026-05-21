"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+",  label: "Projects delivered" },
  { value: "3+",   label: "Years of experience" },
  { value: "10+",  label: "Happy clients" },
  { value: "100%", label: "On-time delivery" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: "var(--surface)" }}>
      <div className="container">

        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Social proof
        </motion.p>
        <h2 className="heading-lg mb-10">Trusted by clients worldwide</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card p-6 text-center"
            >
              <div className="text-3xl font-bold mb-2" style={{ color: "var(--accent-fg)" }}>{s.value}</div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "var(--subtle)" }}>
          Client testimonials coming soon — reach out to see references.
        </p>

      </div>
    </section>
  );
}
