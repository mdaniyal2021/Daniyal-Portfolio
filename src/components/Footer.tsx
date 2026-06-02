"use client";

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const navLinks = [
  { id: "about",     label: "About" },
  { id: "education", label: "Education" },
  { id: "services",  label: "Services" },
  { id: "skills",    label: "Skills" },
  { id: "projects",  label: "Projects" },
  { id: "contact",   label: "Contact" },
];

const contactInfo = [
  { icon: <FiMapPin size={14} />,  text: "Pakistan · Remote Worldwide" },
  { icon: <FiPhone size={14} />,   text: "+92 304 7671720" },
  { icon: <FiMail size={14} />,    text: "m.daniyal2021@gmail.com" },
];

const socials = [
  { href: "https://github.com/mdaniyal2021",                         icon: <FaGithub size={16} />,   label: "GitHub" },
  { href: "https://www.linkedin.com/in/muhammad-daniyal-5521a7294/", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
  { href: "https://wa.me/923047671720",                               icon: <FaWhatsapp size={16} />, label: "WhatsApp" },
  { href: "mailto:m.daniyal2021@gmail.com",                           icon: <FiMail size={16} />,     label: "Email" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="container py-12">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Column 1 — Brand */}
          <div>
            <div className="font-bold text-lg tracking-tight mb-3">
              MD<span style={{ color: "var(--accent-fg)" }}>.</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Full Stack Developer & AI/ML Engineer based in Pakistan.
              Building production-ready digital products for clients worldwide.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--subtle)" }}>
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm transition-colors text-left"
                    style={{ color: "var(--muted)", background: "none", border: "none", cursor: "pointer" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--subtle)" }}>
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--muted)" }}>
                  <span className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent-fg)" }}>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Social Icons */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--subtle)" }}>
              Follow
            </h3>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-2.5 text-sm transition-colors"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-fg)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 text-center text-sm"
          style={{ borderTop: "1px solid var(--border)", color: "var(--subtle)" }}
        >
          © {new Date().getFullYear()} Muhammad Daniyal. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
