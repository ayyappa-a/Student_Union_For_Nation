"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Works", href: "/works" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Photo Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navSolid = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        navSolid
          ? "py-3 bg-white/95 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden relative">
            <img src="/logo.jpeg" alt="Student Union For Nation Logo" className="w-full h-full object-cover" />
          </div>
          <span className={cn("font-serif text-lg md:text-xl font-bold tracking-tight transition-colors hidden sm:block", navSolid ? "text-[#0f172a]" : "text-white")}>
            Student Union For Nation
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wide transition-colors relative group",
                navSolid ? "text-[#0f172a]/80 hover:text-[#14b8a6]" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-[#14b8a6] transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/volunteer"
            className={cn(
              "text-sm font-semibold transition-colors",
              navSolid ? "text-[#0f172a]/70 hover:text-[#14b8a6]" : "text-white/80 hover:text-white"
            )}
          >
            Volunteer
          </Link>
          <Link
            href="/donate"
            className="px-5 py-2.5 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold text-sm rounded uppercase tracking-wide transition-all shadow-md hover:-translate-y-0.5"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2", navSolid ? "text-[#0f172a]" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 shadow-xl md:hidden flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#0f172a] hover:text-[#14b8a6] transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full py-3 bg-[#14b8a6] text-white font-bold rounded text-center uppercase tracking-wider"
            >
              Donate Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
