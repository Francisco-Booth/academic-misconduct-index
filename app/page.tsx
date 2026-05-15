"use client";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import CountryPanel from "@/components/CountryPanel";
import { COUNTRIES, Country, QUADRANT_DESCRIPTIONS, LAST_UPDATED, VERSION, COUNTRIES_COUNT } from "@/lib/data";

const ScatterPlot = dynamic(() => import("@/components/ScatterPlot"), { ssr: false });

const Q_COLORS: Record<string, string> = {
  Q1: "#0F6E56", Q2: "#1A5FA8", Q3: "#B22B2B", Q4: "#6B6B6B",
};

const REGIONS = ["All regions", ...Array.from(new Set(COUNTRIES.map(c => c.region))).sort()];

export default function HomePage() {
  const [selected, setSelected] = useState<Country | null>(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All regions");
  const [sortBy, setSortBy] = useState<"p_score" | "r_score" | "r_score_asc" | "name">("p_score");

  const filtered = useMemo(() => {
    return COUNTRIES
      .filter(c => {
        const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.iso2.toLowerCase().includes(search.toLowerCase());
        const matchRegion = region === "All regions" || c.region === region;
        return matchSearch && matchRegion;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "r_score") return b.r_score - a.r_score;
        if (sortBy === "r_score_asc") return a.r_score - b.r_score;
        return b.p_score - a.p_score;
      });
  }, [search, region, sortBy]);

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="border-t-2 border-[var(--amber)] pt-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--amber)] mb-4 fade-up">
            v{VERSION} — {LAST_UPDATED} — {COUNTRIES_COUNT} Countries
          </p>
          <h1 className="display text-5xl md:text-7xl text-ink mb-6 fade-up-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Academic<br />
            <em className="text-[var(--amber)]">Misconduct</em><br />
            Index
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed fade-up-2">
            Measuring the prevalence of academic cheating and the quality
            of institutional responses across {COUNTRIES_COUNT} countries.
            Two axes. Six dimensions. One independent index.
          </p>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 fade-up-3">
          {[
            { n: COUNTRIES_COUNT, label: "Countries" },
            { n: "6", label: "Misconduct dimensions" },
            { n: "69,911", label: "Retraction records analysed" },
            { n: "4", label: "Response components" },
          ].map(s => (
            <div key={s.label} className="border border-[var(--border)] p-4">
              <p className="font-mono text-2xl font-bold text-ink">{s.n}</p>
              <p className="text-xs text-[var(--muted)] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scatter + detail */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="border-t border-[var(--border)] pt-8 mb-6">
          <h2 className="font-serif text-2xl font-bold">Country scatter plot</h2>
          <p className="text-sm text-[var(--muted)] mt-1">Click any dot to see a country profile</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScatterPlot onSelect={setSelected} selected={selected?.iso2 || null} />
          </div>
          <div>
            {selected ? (
              <CountryPanel country={selected} onClose={() => setSelected(null)} />
            ) : (
              <div className="border border-dashed border-[var(--border)] p-6 h-full flex flex-col items-center justify-center text-center">
                <p className="text-[var(--muted)] text-sm mb-2">No country selected</p>
                <p className="text-xs text-[var(--muted)]">Click a dot on the chart to see the full country profile</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quadrant explainer */}
      <section className="bg-ink text-paper py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--amber-light)] mb-6">Understanding the quadrants</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ffffff15]">
            {Object.entries(QUADRANT_DESCRIPTIONS).map(([q, v]) => (
              <div key={q} className="bg-ink p-6">
                <div className="w-8 h-8 rounded-sm mb-3 flex items-center justify-center text-xs font-mono font-bold text-white"
                     style={{ background: Q_COLORS[q] }}>
                  {q}
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: Q_COLORS[q] }}>{v.label}</h3>
                <p className="text-xs text-paper/60 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking table */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-t border-[var(--border)] pt-8">
          <div>
            <h2 className="font-serif text-2xl font-bold">Country rankings</h2>
            <p className="text-sm text-[var(--muted)] mt-1">{filtered.length} countries shown</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="Search countries…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border border-[var(--border)] bg-transparent px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--amber)] w-44"
            />
            <select
              value={region}
              onChange={e => setRegion(e.target.value)}
              className="border border-[var(--border)] bg-transparent px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--amber)]"
            >
              {REGIONS.map(r => <option key={r}>{r}</option>)}
            </select>
            <select
              value={sortBy}
              onChange={e =>
                setSortBy(e.target.value as "p_score" | "r_score" | "r_score_asc" | "name")
              }
              className="border border-[var(--border)] bg-transparent px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--amber)]"
            >
              <option value="p_score">Sort: Prevalence ↓</option>
              <option value="r_score">Sort: Response ↓</option>
              <option value="r_score_asc">Sort: Response ↑</option>
              <option value="name">Sort: A–Z</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="ami-table w-full">
            <thead>
              <tr>
                <th className="text-left">#</th>
                <th className="text-left">Country</th>
                <th className="text-left">Region</th>
                <th className="text-right">P-Score</th>
                <th className="text-right">R-Score</th>
                <th className="text-left">Quadrant</th>
                <th className="text-left">Quality</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr
                  key={c.iso2}
                  onClick={() => setSelected(selected?.iso2 === c.iso2 ? null : c)}
                  className="cursor-pointer"
                  style={{ background: selected?.iso2 === c.iso2 ? "rgba(200,131,42,0.06)" : undefined }}
                >
                  <td className="font-mono text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</td>
                  <td>
                    <span className="font-medium">{c.name}</span>
                    <span className="text-[var(--muted)] text-xs ml-2 font-mono">{c.iso2}</span>
                  </td>
                  <td className="text-[var(--muted)] text-xs">{c.region}</td>
                  <td className="text-right">
                    <span className="score-badge" style={{ background: Q_COLORS[c.quadrant] + "20", color: Q_COLORS[c.quadrant] }}>
                      {c.p_score.toFixed(1)}
                    </span>
                  </td>
                  <td className="text-right font-mono text-sm">{c.r_score.toFixed(1)}</td>
                  <td>
                    <span className="text-xs px-2 py-0.5 rounded-sm font-mono text-white" style={{ background: Q_COLORS[c.quadrant] }}>
                      {c.quadrant}
                    </span>
                  </td>
                  <td>
                    <span className={`text-xs font-mono font-bold ${c.data_quality === "A" ? "text-[#0F6E56]" : c.data_quality === "B" ? "text-[var(--amber)]" : "text-[var(--muted)]"}`}>
                      {c.data_quality}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
