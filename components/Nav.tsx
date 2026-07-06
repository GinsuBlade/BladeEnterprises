"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/investment-philosophy", label: "Investment Philosophy" },
  { href: "/acquisitions", label: "Acquisitions" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blade-black/95 backdrop-blur-sm border-b border-blade-graphite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl tracking-widest text-blade-white hover:text-blade-accent transition-colors duration-300"
        >
          <img src="/logo.png" alt="Blade Enterprises" style={{ height: "36px" }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
                pathname === href
                  ? "text-blade-white"
                  : "text-blade-silver hover:text-blade-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-blade-silver hover:text-blade-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {open && (
        <nav className="md:hidden border-t border-blade-graphite bg-blade-black">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 text-xs tracking-widest uppercase font-medium border-b border-blade-graphite transition-colors duration-200 ${
                pathname === href
                  ? "text-blade-white"
                  : "text-blade-silver hover:text-blade-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
