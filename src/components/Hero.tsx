"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";
import Image from "next/image";

const roles = ["Web Developer", "Frontend Engineer", "Full Stack Developer", "React Specialist"];

const socialLinks = [
  { icon: FaLinkedin,  url: "https://www.linkedin.com/in/muhammad-daniyal-5521a7294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
  { icon: FaGithub,    url: "https://github.com/mdaniyal2021/", label: "GitHub" },
  { icon: FaInstagram, url: "https://www.instagram.com/m.daniyal2021?igsh=aHRqd2JmZWxra2Zz&utm_source=qr", label: "Instagram" },
  { icon: FaFacebook,  url: "https://www.facebook.com/share/16QABnjKNt/?mibextid=wwXIfr", label: "Facebook" },
];

const charVariants = {
  hidden:  { x: -20, opacity: 0 },
  visible: { x: 0,   opacity: 1 },
};

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [chars,   setChars]   = useState<string[]>(roles[0].split(""));

  const ref    = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    setChars(roles[roleIdx].split(""));
  }, [roleIdx]);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center"
      style={{ background: "var(--bg)" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 md:py-28">

        {/* Right: circular photo — shows on top on mobile */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-[45%] flex items-center justify-center mb-12 md:mb-0 order-1 md:order-2"
        >
          <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-[#7cc1b7] shadow-lg shadow-[#7cc1b7]/40 hover:shadow-[0px_0px_40px_15px_#7cc1b7] transition-shadow duration-300 p-3">
            <Image
              src="/images/Logo_image.jpg"
              alt="Muhammad Daniyal"
              width={380}
              height={380}
              className="w-full h-full rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-[50%] order-2 md:order-1"
        >
          {/* Name */}
          <h2 className="flex flex-wrap items-center gap-x-2 text-3xl md:text-4xl font-bold text-white">
            Hi It&apos;s{" "}
            <span style={{ color: "var(--accent-fg)" }}>Muhammad Daniyal</span>
          </h2>

          {/* Animated role */}
          <h3
            className="text-2xl md:text-3xl font-bold text-white mt-5 flex flex-wrap items-center gap-x-2"
            aria-live="polite"
            aria-atomic="true"
          >
            I&apos;m a{" "}
            <motion.span
              key={roleIdx}
              className="flex"
              style={{ color: "var(--accent-fg)" }}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {chars.map((char, i) => (
                <motion.span key={i} variants={charVariants}>
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </motion.span>
          </h3>

          {/* Bio */}
          <p className="text-white/80 text-sm leading-relaxed mt-5 text-justify">
            I&apos;m Muhammad Daniyal, a passionate Full Stack Web Developer and current Project Manager
            leading a talented team of developers. I specialize in delivering A+ quality digital solutions
            tailored for your business needs. With expertise in HTML, CSS, TailwindCSS, JavaScript, React,
            PHP Laravel, Python, Java, SQL, and database management, I bring a holistic approach to web
            and mobile development — focused on building secure, scalable, and user-friendly systems.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-shadow duration-300 hover:shadow-[0px_0px_8px_4px_#7cc1b7]"
                style={{
                  border: "2px solid var(--accent-fg)",
                  color:  "var(--accent-fg)",
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-40 h-11 rounded-3xl text-white font-medium transition-shadow duration-300 hover:shadow-[0px_0px_8px_4px_#7cc1b7]"
              style={{ border: "1px solid var(--accent-fg)" }}
            >
              Hire Me
            </button>
            <button
              onClick={handleContact}
              className="w-full sm:w-40 h-11 rounded-3xl text-white font-medium transition-shadow duration-300 hover:shadow-[0px_0px_8px_4px_#7cc1b7]"
              style={{ border: "1px solid var(--accent-fg)" }}
            >
              Contact
            </button>
            <a
              href="/Muhammad_Daniyal_CV.pdf"
              download
              className="w-full sm:w-40 h-11 rounded-3xl font-medium transition-shadow duration-300 hover:shadow-[0px_0px_8px_4px_#7cc1b7] flex items-center justify-center gap-2"
              style={{ border: "1px solid var(--accent-fg)", background: "var(--accent-fg)", color: "#000" }}
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
