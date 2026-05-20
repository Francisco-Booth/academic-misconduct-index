"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Index" },
  { href: "/methodology", label: "Methodology" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-7 h-7 bg-[var(--amber)] flex items-center justify-center text-white text-xs font-mono font-bold rounded-sm">
            AMI
          </span>
          <span className="font-serif text-base font-semibold tracking-tight hidden sm:block">
            Academic Misconduct Index
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-150 ${
                pathname === l.href
                  ? "text-[var(--amber)] font-medium"
                  : "text-[var(--muted)] hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/ami_country_scores_20260426.csv"
            download
            className="text-xs font-mono bg-ink text-paper px-3 py-1.5 hover:bg-[var(--amber)] transition-colors"
          >
            Download Data ↓
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-ink mb-1"></div>
          <div className="w-5 h-0.5 bg-ink mb-1"></div>
          <div className="w-5 h-0.5 bg-ink"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-paper px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm ${pathname === l.href ? "text-[var(--amber)] font-medium" : "text-[var(--muted)]"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
