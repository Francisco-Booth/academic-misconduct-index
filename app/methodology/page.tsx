import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology — Academic Misconduct Index",
  description: "How the AMI is built: six dimensions, two axes, literature-derived weights, and live data sources.",
};

const DIMENSIONS = [
  { code: "D1", name: "Contract cheating / essay mills", weight: "19.5%", sources: "Google Trends brand keywords; essay mill domain presence; Newton 2018 systematic review; Bretag et al. 2018" },
  { code: "D2", name: "AI-generated submissions",        weight: "17.1%", sources: "Guardian FOI 2025 (UK); Turnitin 2024 global data; Stanford Survey 2023; Feedough 2025" },
  { code: "D3", name: "Exam impersonation",             weight: "14.6%", sources: "ICAI surveys; Springer 2023 systematic review; country-adjusted literature estimates" },
  { code: "D4", name: "Plagiarism",                     weight: "17.1%", sources: "ICAI / McCabe country-level data (20 countries); Pupovac & Fanelli 2015 meta-analysis; Curtis et al. 2021" },
  { code: "D5", name: "Collusion",                      weight: "14.6%", sources: "ICAI / McCabe country-level data (15 countries); Bretag 2018; McCabe graduate surveys" },
  { code: "D6", name: "Data fabrication / falsification", weight: "17.1%", sources: "Retraction Watch database (69,911 records); OpenAlex publication counts; Fanelli 2009; Fang et al. 2012 (PNAS)" },
];

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="border-t-2 border-[var(--amber)] pt-8 mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--amber)] mb-3">Technical documentation</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Methodology</h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-2xl">
          The AMI uses a literature-derived weighting methodology for version 1.x, modelled on the
          approach used by the Corruption Perceptions Index in its first releases (1995–2001),
          before expert-panel perception surveys were added. All weights are transparent and
          independently verifiable from the cited sources.
        </p>
      </div>

      {/* Two axes */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl font-bold mb-6 border-b border-[var(--border)] pb-3">The two-axis framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[var(--border)] p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--amber)] mb-2">Axis 1</p>
            <h3 className="font-serif text-xl font-bold mb-3">Prevalence Score (P)</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              A weighted composite of estimated misconduct rates across six dimensions.
              Draws on live data (Google Trends, Retraction Watch, FOI disclosures) supplemented
              by country-adjusted literature estimates where live data is unavailable.
              Expressed 0–100; higher means more cheating estimated.
            </p>
          </div>
          <div className="border border-[var(--border)] p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-ink mb-2">Axis 2</p>
            <h3 className="font-serif text-xl font-bold mb-3">Response Quality Score (R)</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Measures how robustly a country detects, investigates, and deters academic misconduct.
              Built from four policy sub-components: legislation, detection tool adoption,
              disclosure transparency, and penalty severity. Derived from policy research,
              not self-reported data.
            </p>
          </div>
        </div>

        <div className="mt-6 p-5 bg-[var(--amber)]/8 border border-[var(--amber)]/20">
          <p className="text-sm leading-relaxed">
            <strong>The enforcement-detection correction:</strong>{" "}
            Institutions with strong enforcement report more misconduct because they catch more — they should
            not be penalised for this. The AMI applies a bounded ±10 point correction to the P-Score
            based on the R-Score, adjusting upward where enforcement is weak (under-detection likely)
            and slightly downward where enforcement is strong (reporting is more complete).
            Both the raw and corrected P-Score are published.
          </p>
        </div>
      </section>

      {/* Six dimensions */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl font-bold mb-6 border-b border-[var(--border)] pb-3">Six misconduct dimensions</h2>
        <p className="text-sm text-[var(--muted)] mb-6">
          Weights are derived from two factors: estimated prevalence (how common is this behaviour?)
          and severity (how much harm does it cause per incident?). Each factor scored 1–5
          from the literature; the average is normalised across all six dimensions to sum to 100%.
        </p>
        <div className="space-y-3">
          {DIMENSIONS.map(d => (
            <div key={d.code} className="border border-[var(--border)] p-4 grid grid-cols-12 gap-4 items-start">
              <div className="col-span-1">
                <span className="text-xs font-mono font-bold text-[var(--amber)]">{d.code}</span>
              </div>
              <div className="col-span-7 md:col-span-8">
                <p className="font-medium text-sm mb-1">{d.name}</p>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{d.sources}</p>
              </div>
              <div className="col-span-4 md:col-span-3 text-right">
                <span className="score-badge bg-ink/8 text-ink">{d.weight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data quality */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl font-bold mb-6 border-b border-[var(--border)] pb-3">Data quality flags</h2>
        <p className="text-sm text-[var(--muted)] mb-6">
          Each country score carries a data quality flag indicating what proportion of
          dimensions used live data versus literature estimates.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { flag: "A", label: "Majority live", description: "3 or more dimensions scored from live data sources. High confidence.", color: "#0F6E56" },
            { flag: "B", label: "Mixed",         description: "At least 1 live dimension; remaining from literature. Moderate confidence.", color: "#C8832A" },
            { flag: "C", label: "Literature only", description: "All dimensions from literature estimates. Lower confidence; treat with caution.", color: "#6B6B6B" },
          ].map(f => (
            <div key={f.flag} className="border border-[var(--border)] p-4">
              <span className="text-2xl font-mono font-bold" style={{ color: f.color }}>{f.flag}</span>
              <p className="font-medium text-sm mt-1 mb-2">{f.label}</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Limitations */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl font-bold mb-6 border-b border-[var(--border)] pb-3">Limitations</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p><strong className="text-ink">Self-report bias.</strong> All literature base rates derive from self-report surveys that systematically underestimate true prevalence. AMI treats all prevalence estimates as lower bounds.</p>
          <p><strong className="text-ink">Coverage gaps.</strong> Most large-scale studies are conducted in English-speaking countries. Asian, African, and Latin American institutional data are underrepresented. Coverage gaps are flagged per country.</p>
          <p><strong className="text-ink">Reporting paradox.</strong> Institutions with strong detection look worse on raw misconduct rates. The enforcement-detection correction addresses this but is itself an analytical judgement.</p>
          <p><strong className="text-ink">AI dimension immaturity.</strong> D2 data is less than three years old. Estimates will be revised with each annual update as the evidence base matures.</p>
        </div>
      </section>

      {/* Citation */}
      <section>
        <h2 className="font-serif text-2xl font-bold mb-4 border-b border-[var(--border)] pb-3">How to cite</h2>
        <div className="bg-ink text-paper p-5 font-mono text-xs leading-relaxed">
          Booth, F. ({new Date().getFullYear()}). Academic Misconduct Index, Version 1.3.
          Retrieved from academicmisconductindex.vercel.app
        </div>
        <p className="text-xs text-[var(--muted)] mt-3">
          Data released under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener" className="underline">
            Creative Commons Attribution 4.0
          </a>
          . You are free to share and adapt with attribution.
        </p>
      </section>

    </div>
  );
}
