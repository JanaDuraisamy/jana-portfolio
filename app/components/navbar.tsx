"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080b11]/80 backdrop-blur-xl">
      <nav className="shell relative flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white" onClick={() => setIsOpen(false)}>
          JD<span className="text-cyan-300">.</span>
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-200/40 bg-white/[0.04] text-xl text-white shadow-sm transition-colors hover:border-cyan-200/70 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm text-slate-300">
              {link.label}
            </a>
          ))}
        </div>
        {isOpen && (
          <div id="mobile-navigation" className="absolute left-0 right-0 top-[4.5rem] rounded-xl border border-white/10 bg-[#10151e] p-3 shadow-2xl md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
