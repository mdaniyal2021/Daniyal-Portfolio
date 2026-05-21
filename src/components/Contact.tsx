// EmailJS setup: https://www.emailjs.com/
// 1. Create a free account at emailjs.com
// 2. Add an Email Service (Gmail works)
// 3. Create an Email Template with variables: from_name, from_email, phone, subject, message
// 4. Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY below

"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

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
    <section id="contact" className="w-full min-h-screen py-16 flex items-center" style={{ background: "var(--bg)" }}>
      <div className="container mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-8"
          style={{ border: "1px solid var(--accent-fg)" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ color: "var(--text)" }}
          >
            Contact Us
          </h2>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-16 gap-4"
            >
              <FiCheckCircle size={52} style={{ color: "var(--accent-fg)" }} />
              <div>
                <h3 className="font-bold text-xl mb-1" style={{ color: "var(--text)" }}>Message sent!</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setSent(false)}
                className="mt-2 px-6 py-2 rounded-md font-medium transition-shadow duration-300 hover:shadow-[0px_0px_8px_4px_#7cc1b7]"
                style={{ border: "1px solid var(--accent-fg)", color: "var(--text)" }}
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={submit} className="flex flex-col lg:flex-row gap-8">

              {/* Left: input fields */}
              <div className="flex flex-col w-full lg:w-1/2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={change}
                  type="text"
                  placeholder="Full Name"
                  required
                  className="bg-transparent px-4 py-3 rounded-md outline-none text-white placeholder:text-[var(--subtle)] transition-all focus:shadow-[0px_0px_5px_2px_#7cc1b7]"
                  style={{ border: "1px solid var(--accent-fg)" }}
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={change}
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-transparent px-4 py-3 rounded-md outline-none text-white placeholder:text-[var(--subtle)] transition-all focus:shadow-[0px_0px_5px_2px_#7cc1b7]"
                  style={{ border: "1px solid var(--accent-fg)" }}
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-transparent px-4 py-3 rounded-md outline-none text-white placeholder:text-[var(--subtle)] transition-all focus:shadow-[0px_0px_5px_2px_#7cc1b7]"
                  style={{ border: "1px solid var(--accent-fg)" }}
                />
                <input
                  name="subject"
                  value={form.subject}
                  onChange={change}
                  type="text"
                  placeholder="Subject"
                  required
                  className="bg-transparent px-4 py-3 rounded-md outline-none text-white placeholder:text-[var(--subtle)] transition-all focus:shadow-[0px_0px_5px_2px_#7cc1b7]"
                  style={{ border: "1px solid var(--accent-fg)" }}
                />
              </div>

              {/* Right: message + submit */}
              <div className="flex flex-col w-full lg:w-1/2 gap-4">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={change}
                  rows={10}
                  placeholder="Your Message"
                  required
                  className="bg-transparent px-4 py-3 rounded-md outline-none text-white placeholder:text-[var(--subtle)] resize-none transition-all focus:shadow-[0px_0px_5px_2px_#7cc1b7]"
                  style={{ border: "1px solid var(--accent-fg)" }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-md font-semibold text-black transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-[0px_0px_8px_4px_#7cc1b7] disabled:opacity-60"
                  style={{
                    background:  loading ? "var(--accent-bg)" : "var(--accent-fg)",
                    border:      "1px solid var(--accent-fg)",
                    color:       loading ? "var(--accent-fg)" : "#000",
                  }}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
