import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 bg-[var(--amber)] flex items-center justify-center text-white text-[10px] font-mono font-bold rounded-sm">
              AMI
            </span>
            <span className="font-serif font-semibold text-sm">Academic Misconduct Index</span>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            An independent index measuring the prevalence of academic cheating
            and quality of institutional responses across 28 countries.
          </p>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-3">Navigate</p>
          <div className="flex flex-col gap-2">
            {[
              { href: "/", label: "Index Explorer" },
              { href: "/methodology", label: "Methodology" },
              { href: "/blog", label: "Updates" },
              { href: "/about", label: "About" },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-sm text-[var(--muted)] hover:text-ink transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-3">Data</p>
          <p className="text-xs text-[var(--muted)] mb-2">Version 1.3 — April 2026</p>
          <p className="text-xs text-[var(--muted)] mb-2">28 countries scored</p>
          <p className="text-xs text-[var(--muted)] mb-4">6 misconduct dimensions</p>
          <a
            href="/ami_country_scores_20260426.csv"
            download
            className="text-xs font-mono underline text-[var(--amber)] hover:text-[var(--amber-dark)]"
          >
            Download full dataset (CSV)
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--border)] max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <p className="text-xs text-[var(--muted)]">
          Created by <strong className="text-ink">Francisco Booth</strong>, independent researcher.
        </p>
        <p className="text-xs text-[var(--muted)]">
          Data released under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener" className="underline hover:text-ink">
            CC BY 4.0
          </a>
        </p>
      </div>
    </footer>
  );
}
