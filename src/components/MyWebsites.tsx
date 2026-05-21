"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const websites = [
  { name: "Women Store",     image: "/images/website-01.avif", live: "https://woman-store.vercel.app" },
  { name: "Movie App",       image: "/images/website-02.avif", live: "https://movie-app-beryl-kappa.vercel.app" },
  { name: "Shoe Store",      image: "/images/website-03.avif", live: "https://ecommerece-shoe.vercel.app" },
  { name: "E-Commerce 1",    image: "/images/website-04.avif", live: "" },
  { name: "E-Commerce 2",    image: "/images/website-05.avif", live: "" },
  { name: "E-Commerce 3",    image: "/images/website-06.avif", live: "" },
  { name: "E-Commerce 4",    image: "/images/website-07.avif", live: "" },
  { name: "E-Commerce 5",    image: "/images/website-08.avif", live: "" },
];

export default function MyWebsites() {
  return (
    <section id="websites" className="w-full py-16" style={{ background: "var(--bg)" }}>
      <div className="container mx-auto">

        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-10"
          style={{ color: "var(--text)" }}
        >
          My Websites Demo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {websites.map((site, index) => {
            const card = (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 12px 4px #7cc1b7" }}
                className="rounded-lg overflow-hidden p-4 flex flex-col items-center transition-all cursor-pointer"
                style={{
                  background: "var(--bg)",
                  border:     "1px solid rgba(124,193,183,0.3)",
                }}
              >
                <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                  <Image
                    src={site.image}
                    alt={site.name}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--accent-fg)" }}>
                  {site.name}
                </h3>
              </motion.div>
            );

            return site.live ? (
              <a
                key={site.name}
                href={site.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {card}
              </a>
            ) : (
              <div key={site.name}>{card}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
