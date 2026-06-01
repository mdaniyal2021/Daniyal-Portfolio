import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daniyal-portfolio-alpha.vercel.app"),
  title: "Muhammad Daniyal — Full Stack Developer & AI/ML Engineer | Pakistan",
  description:
    "Professional portfolio of Muhammad Daniyal — Full Stack Developer based in Pakistan, available for remote work worldwide. Specializing in Next.js, React, MERN Stack, Laravel, and AI/ML solutions.",
  keywords: [
    "Full Stack Developer",
    "AI ML Engineer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "Laravel Developer",
    "Pakistan Developer",
    "Freelance Developer",
    "Muhammad Daniyal",
  ],
  authors: [{ name: "Muhammad Daniyal" }],
  openGraph: {
    title: "Muhammad Daniyal — Full Stack Developer & AI/ML Engineer",
    description: "Professional portfolio showcasing web development, AI/ML, and SaaS projects.",
    type: "website",
    url: "https://daniyal-portfolio-alpha.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Daniyal — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Daniyal — Full Stack Developer & AI/ML Engineer",
    description: "Professional portfolio showcasing web development, AI/ML, and SaaS projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        {/* Runs before paint to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.add(t);}catch(e){}})();`,
          }}
        />
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:text-black"
          style={{ background: "var(--accent-fg)" }}
        >
          Skip to content
        </a>
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
