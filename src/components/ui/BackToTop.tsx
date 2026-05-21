"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
      style={{
        background:  "var(--accent)",
        color:       "#fff",
        boxShadow:   "0 4px 16px rgba(109,40,217,0.35)",
        border:      "none",
        cursor:      "pointer",
      }}
      aria-label="Back to top"
    >
      <FiArrowUp size={16} />
    </button>
  );
}
