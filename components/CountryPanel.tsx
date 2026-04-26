"use client";
import { Country, QUADRANT_DESCRIPTIONS } from "@/lib/data";

const Q_COLORS: Record<string, string> = {
  Q1: "#0F6E56", Q2: "#1A5FA8", Q3: "#B22B2B", Q4: "#6B6B6B",
};

const DIMENSIONS = [
  { key: "d1_contract_cheating", label: "Contract cheating" },
  { key: "d2_ai_submissions",    label: "AI submissions" },
  { key: "d3_impersonation",     label: "Exam impersonation" },
  { key: "d4_plagiarism",        label: "Plagiarism" },
  { key: "d5_collusion",         label: "Collusion" },
  { key: "d6_data_fabrication",  label: "Data fabrication" },
];

const R_COMPONENTS = [
  { key: "r_legislation",     label: "Legislation" },
  { key: "r_detection_tools", label: "Detection tools" },
  { key: "r_disclosure",      label: "Disclosure" },
  { key: "r_penalties",       label: "Penalties" },
];

function Bar({ value, color = "var(--amber)" }: { value: number; color?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${value}%`, background: color }} />
      </div>
      <span className="text-xs font-mono w-8 text-right text-[var(--muted)]">{value}</span>
    </div>
  );
}

export default function CountryPanel({ country, onClose }: { country: Country; onClose: () => void }) {
  const qInfo = QUADRANT_DESCRIPTIONS[country.quadrant];
  const qColor = Q_COLORS[country.quadrant];

  return (
    <div className="border border-[var(--border)] bg-white/60 backdrop-blur-sm p-6 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-[var(--muted)] hover:text-ink text-xl leading-none"
        aria-label="Close"
      >
        ×
      </button>

      {/* Header */}
      <div className="mb-5">
        <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">{country.region}</span>
        <h2 className="font-serif text-2xl font-bold mt-0.5">{country.name}</h2>
        <div
          className="inline-flex items-center gap-1.5 mt-2 px-2 py-1 text-xs font-mono rounded-sm text-white"
          style={{ background: qColor }}
        >
          <span>{country.quadrant}</span>
          <span>—</span>
          <span>{qInfo?.label}</span>
        </div>
        <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">{qInfo?.description}</p>
      </div>

      {/* Two big scores */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="border border-[var(--border)] p-3">
          <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1">Prevalence (P)</p>
          <p className="font-mono text-3xl font-bold" style={{ color: qColor }}>{country.p_score.toFixed(1)}</p>
          <p className="text-xs text-[var(--muted)] mt-1">Higher = more cheating estimated</p>
        </div>
        <div className="border border-[var(--border)] p-3">
          <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1">Response (R)</p>
          <p className="font-mono text-3xl font-bold text-ink">{country.r_score.toFixed(1)}</p>
          <p className="text-xs text-[var(--muted)] mt-1">Higher = stronger action taken</p>
        </div>
      </div>

      {/* Dimension breakdown */}
      <div className="mb-5">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-3">Prevalence by dimension</p>
        <div className="space-y-2.5">
          {DIMENSIONS.map(d => (
            <div key={d.key}>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-ink">{d.label}</span>
              </div>
              <Bar value={(country as unknown as Record<string, number>)[d.key]} color={qColor} />
            </div>
          ))}
        </div>
      </div>

      {/* R-Score breakdown */}
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-3">Response components</p>
        <div className="space-y-2.5">
          {R_COMPONENTS.map(r => (
            <div key={r.key}>
              <span className="text-xs text-ink block mb-1">{r.label}</span>
              <Bar value={(country as unknown as Record<string, number>)[r.key]} color="#0F0F0F" />
            </div>
          ))}
        </div>
      </div>

      {/* Data quality */}
      <div className="mt-5 pt-4 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--muted)]">
          Data quality: <span className="font-mono font-medium text-ink">{country.data_quality}</span>
          {" "}({country.live_dimensions}/6 dimensions from live sources)
        </p>
      </div>
    </div>
  );
}
