"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "RuggedGenius", href: "/ruggedgenius" },
  { label: "Consulting", href: "/work-with-us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display font-black text-2xl uppercase tracking-wider"
        >
          <span className="text-brand-red">Rugged</span><span className="text-white">AI</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display font-semibold text-sm uppercase tracking-widest text-brand-iron hover:text-white transition-colors"
            >
              {link.label.startsWith("Rugged") ? (
                <><span className="text-brand-red">Rugged</span>{link.label.slice(6)}</>
              ) : link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="font-display font-bold text-sm uppercase tracking-widest bg-brand-red text-white px-5 py-2 hover:bg-red-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-black border-t border-[#1a1a1a] px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display font-bold text-base uppercase tracking-widest text-brand-iron hover:text-white transition-colors"
            >
              {link.label.startsWith("Rugged") ? (
                <><span className="text-brand-red">Rugged</span>{link.label.slice(6)}</>
              ) : link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="font-display font-bold text-base uppercase tracking-widest bg-brand-red text-white px-5 py-3 text-center hover:bg-red-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}
