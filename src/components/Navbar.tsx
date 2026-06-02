"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  { id: "home",         label: "Home" },
  { id: "about",        label: "About" },
  { id: "education",    label: "Education" },
  { id: "services",     label: "Services" },
  { id: "skills",       label: "Skills" },
  { id: "projects",     label: "Projects" },
  { id: "contact",      label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    setActive("home");

    const sectionIds = links.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background:     scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom:   scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <nav className="container flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="text-white font-bold text-xl tracking-tight"
          >
            Muhammad{" "}
            <span style={{ color: "var(--accent-fg)" }}>Daniyal</span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`nav-link ${active === l.id ? "active" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mdaniyal2021"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex btn btn-ghost btn-sm"
            >
              <FaGithub size={15} />
              GitHub
            </a>

            <ThemeToggle />

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg"
              style={{ background: "var(--surface-2)", color: "var(--muted)" }}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-40"
            style={{
              background:   "var(--bg)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: active === l.id ? "var(--accent-fg)" : "var(--muted)" }}
                >
                  {l.label}
                </button>
              ))}
              <div className="mt-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <a
                  href="https://github.com/mdaniyal2021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  <FaGithub size={15} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
