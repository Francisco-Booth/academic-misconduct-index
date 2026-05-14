import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Academic Misconduct Index",
  description: "About the Academic Misconduct Index and its founder, Francisco Booth.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="border-t-2 border-[var(--amber)] pt-8 mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--amber)] mb-3">About</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">The AMI Project</h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-2xl">
          An independent index measuring the prevalence of academic cheating
          and the quality of institutional responses across 28 countries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
        {/* Founder */}
        <div>
          <h2 className="font-serif text-2xl font-bold mb-4 border-b border-[var(--border)] pb-3">Founder</h2>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-ink flex items-center justify-center text-paper font-serif text-xl font-bold shrink-0">
              FB
            </div>
            <div>
              <p className="font-medium text-lg">Francisco Booth</p>
              <p className="text-sm text-[var(--muted)]">Independent researcher</p>
            </div>
          </div>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Francisco Booth is an independent researcher who created the Academic Misconduct Index
            in 2026. The AMI is his original research project, built with open data sources and
            a transparent methodology designed to be independently verifiable.
          </p>
        </div>

        {/* The index */}
        <div>
          <h2 className="font-serif text-2xl font-bold mb-4 border-b border-[var(--border)] pb-3">The index</h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
            The AMI is modelled structurally on the Corruption Perceptions Index (CPI) published
            annually by Transparency International. The first CPI (1995) was built entirely from
            existing surveys and risk assessments before Transparency International commissioned
            its own expert perception surveys. The AMI follows the same approach: version 1.x
            aggregates existing data; version 2.0 will add expert perception surveys once the
            index has an established audience.
          </p>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            All data, methodology, and source code are released openly under Creative Commons
            Attribution 4.0. You are free to reuse, republish, or build on this work with attribution.
          </p>
        </div>
      </div>

      {/* Why this matters */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl font-bold mb-6 border-b border-[var(--border)] pb-3">Why academic misconduct matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Credential inflation",
              body: "When degrees can be obtained through fraud, they become less reliable signals of competence. Employers and graduate schools bear the cost of credentials they cannot trust."
            },
            {
              title: "Research integrity",
              body: "Data fabrication and falsification corrupt the scientific record. Retracted papers continue to be cited post-retraction, meaning the harm compounds over time."
            },
            {
              title: "Public accountability",
              body: "No systematic cross-country index of academic misconduct previously existed. The AMI creates a baseline against which progress — or deterioration — can be measured."
            },
          ].map(c => (
            <div key={c.title} className="border border-[var(--border)] p-5">
              <h3 className="font-serif font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact + links */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl font-bold mb-6 border-b border-[var(--border)] pb-3">Contact and press</h2>
        <p className="text-sm text-[var(--muted)] mb-4">
          For media enquiries, methodology questions, or data corrections, the best approach
          is to raise an issue on the public GitHub repository, or to reach out directly.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/ami_country_scores_20260426.csv"
            download
            className="text-xs font-mono bg-ink text-paper px-4 py-2 hover:bg-[var(--amber)] transition-colors"
          >
            Download full dataset (CSV)
          </a>
          <Link
            href="/methodology"
            className="text-xs font-mono border border-ink text-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
          >
            Read the methodology
          </Link>
        </div>
      </section>

      {/* Version history */}
      <section>
        <h2 className="font-serif text-2xl font-bold mb-6 border-b border-[var(--border)] pb-3">Version history</h2>
        <div className="space-y-4">
          {[
            { v: "1.5", date: "May 2026", note: "Added Argentina, Colombia, Thailand, Vietnam, Kenya — 39 countries. Live Retraction Watch data restored for all countries. All 39 countries now at data quality flag A with 4–5/6 live dimensions. Norway/Sweden Trends signal limitation documented in methodology." },
            { v: "1.3", date: "April 2026", note: "Added essay mill brand Trends, FOI-derived AI misconduct rates for 13 countries, ICAI country-level survey data for 20 countries (D4) and 15 countries (D5). 27/28 countries at quality flag A." },
            { v: "1.2", date: "April 2026", note: "Fixed enforcement-detection correction over-amplification. Added country-differentiated D1 and D2 literature estimates. All 28 countries scoring across 6 dimensions." },
            { v: "1.1", date: "April 2026", note: "Initial public release. 28 countries, 6 dimensions, literature-derived weighting, Retraction Watch and Google Trends live data." },
          ].map(r => (
            <div key={r.v} className="flex gap-4">
              <span className="font-mono text-sm font-bold text-[var(--amber)] w-8 shrink-0">v{r.v}</span>
              <div>
                <p className="text-xs text-[var(--muted)] font-mono mb-1">{r.date}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{r.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
