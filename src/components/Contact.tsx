// EmailJS setup: https://www.emailjs.com/
// Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY below

"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const fieldStyle =
  "w-full bg-transparent px-4 py-3 rounded-md outline-none transition-all focus:shadow-[0px_0px_5px_2px_#7cc1b7]";

const labelStyle = "block text-sm font-medium mb-1.5";

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm]       = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name:  form.name,
          from_email: form.email,
          phone:      form.phone,
          subject:    form.subject,
          message:    form.message,
        },
        "YOUR_PUBLIC_KEY"
      );
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error("Email send failed:", err);
      alert("Failed to send message. Please try emailing m.daniyal2021@gmail.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen py-20 flex items-center" style={{ background: "var(--bg)" }}>
      <div className="container mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-6 md:p-10"
          style={{ border: "1px solid var(--accent-fg)" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ color: "var(--text)" }}
          >
            Contact
          </h2>

          <form onSubmit={submit} className="flex flex-col gap-8">

            {/* 2-column input layout */}
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Left: labeled input fields */}
              <div className="flex flex-col w-full lg:w-1/2 gap-5">

                <div>
                  <label htmlFor="name" className={labelStyle} style={{ color: "var(--muted)" }}>
                    Full Name <span style={{ color: "var(--accent-fg)" }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={change}
                    type="text"
                    placeholder="e.g. Muhammad Ali"
                    required
                    className={fieldStyle}
                    style={{ border: "1px solid var(--accent-fg)", color: "var(--text)" }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelStyle} style={{ color: "var(--muted)" }}>
                    Email Address <span style={{ color: "var(--accent-fg)" }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={change}
                    type="email"
                    placeholder="you@example.com"
                    required
                    className={fieldStyle}
                    style={{ border: "1px solid var(--accent-fg)", color: "var(--text)" }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelStyle} style={{ color: "var(--muted)" }}>
                    Phone Number <span style={{ color: "var(--subtle)", fontSize: "11px" }}>(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={change}
                    type="tel"
                    placeholder="+92 300 0000000"
                    className={fieldStyle}
                    style={{ border: "1px solid var(--accent-fg)", color: "var(--text)" }}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={labelStyle} style={{ color: "var(--muted)" }}>
                    Subject <span style={{ color: "var(--accent-fg)" }}>*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={change}
                    type="text"
                    placeholder="e.g. Project Inquiry"
                    required
                    className={fieldStyle}
                    style={{ border: "1px solid var(--accent-fg)", color: "var(--text)" }}
                  />
                </div>

              </div>

              {/* Right: message */}
              <div className="flex flex-col w-full lg:w-1/2">
                <label htmlFor="message" className={labelStyle} style={{ color: "var(--muted)" }}>
                  Message <span style={{ color: "var(--accent-fg)" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={change}
                  rows={10}
                  placeholder="Describe your project or what you need help with..."
                  required
                  className={`${fieldStyle} resize-none flex-1`}
                  style={{ border: "1px solid var(--accent-fg)", color: "var(--text)" }}
                />
              </div>

            </div>

            {/* Full-width submit button below both columns */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md font-semibold transition-all duration-300 disabled:opacity-60"
              style={{
                background: loading ? "var(--accent-bg)" : "var(--accent-fg)",
                border:     "1.5px solid var(--accent-fg)",
                color:      loading ? "var(--accent-fg)" : "#000",
              }}
            >
              {loading ? "Sending…" : "Send Message"}
            </button>

          </form>

          {sent && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 px-5 py-4 rounded-md text-center text-sm font-medium"
              style={{
                background: "rgba(16,185,129,0.10)",
                border:     "1px solid rgba(16,185,129,0.45)",
                color:      "#10b981",
              }}
            >
              Thanks for reaching out! I&apos;ll get back to you within 24 hours.
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
