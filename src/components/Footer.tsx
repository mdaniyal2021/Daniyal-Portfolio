"use client";

import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const navLinks = [
  { id: "education",    label: "Education" },
  { id: "services",     label: "Services" },
  { id: "skills",       label: "Skills" },
  { id: "projects",     label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact",      label: "Contact" },
];

const socials = [
  { href: "https://github.com/mdaniyal2021",                        icon: <FaGithub size={16} />,   label: "GitHub" },
  { href: "https://www.linkedin.com/in/muhammad-daniyal-5521a7294/", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
  { href: "https://wa.me/923047671720",                              icon: <FaWhatsapp size={16} />, label: "WhatsApp" },
  { href: "mailto:m.daniyal2021@gmail.com",                          icon: <FiMail size={16} />,     label: "Email" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-bold text-lg tracking-tight mb-1">
              MD<span style={{ color: "var(--accent-fg)" }}>.</span>
            </div>
            <p className="text-sm max-w-xs" style={{ color: "var(--muted)" }}>
              Full Stack Developer & AI/ML Engineer based in Pakistan.
              Building premium digital products for clients worldwide.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-6">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm transition-colors"
                style={{ color: "var(--muted)", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-sm" style={{ color: "var(--subtle)" }}>
            © {new Date().getFullYear()} Muhammad Daniyal. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
                style={{ color: "var(--muted)", border: "1px solid var(--border)", background: "var(--surface-2)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent-fg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
