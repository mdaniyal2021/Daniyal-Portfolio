"use client";

import { motion } from "framer-motion";

const servicesData = [
  { icon: "💻", title: "Frontend Development", desc: "Pixel-perfect UIs with React, Next.js, and Tailwind CSS. Fast, responsive, and accessible." },
  { icon: "⚙️", title: "Backend Development", desc: "Scalable REST APIs with Node.js, Express, Laravel, and secure database architecture." },
  { icon: "🔗", title: "Full Stack Web Development", desc: "End-to-end web apps from database design to deployment on Vercel or VPS." },
  { icon: "📱", title: "Java Mobile App Development", desc: "Native Android applications built with Java, focused on performance and usability." },
  { icon: "🤖", title: "Generative AI Solutions", desc: "Custom AI integrations, chatbots, and LLM-powered features for your product." },
  { icon: "🚀", title: "SaaS Application Development", desc: "Full SaaS products with auth, billing, dashboards, and multi-tenant architecture." },
  { icon: "🛒", title: "E-Commerce Solutions", desc: "Custom storefronts with cart, checkout, inventory management, and payment gateways." },
  { icon: "🎓", title: "Academic & Research Projects", desc: "End-to-end project development with documentation, architecture design, and deployment — for research and academic institutions." },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">

        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What I offer
        </motion.p>
        <h2 className="heading-lg mb-12" style={{ color: "var(--text)" }}>
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(124,193,183,0.2)" }}
              className="card p-6 flex flex-col gap-3 cursor-default"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>{service.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
