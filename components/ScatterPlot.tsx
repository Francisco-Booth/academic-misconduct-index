"use client";
import { useState, useCallback } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from "recharts";
import { COUNTRIES, QUADRANT_DESCRIPTIONS, Country } from "@/lib/data";

const Q_COLORS: Record<string, string> = {
  Q1: "#0F6E56",
  Q2: "#1A5FA8",
  Q3: "#B22B2B",
  Q4: "#6B6B6B",
};

interface DotProps {
  cx?: number;
  cy?: number;
  payload?: Country;
  selected?: string | null;
  onSelect?: (iso2: string) => void;
}

function CustomDot({ cx = 0, cy = 0, payload, selected, onSelect }: DotProps) {
  if (!payload) return null;
  const isSelected = selected === payload.iso2;
  const color = Q_COLORS[payload.quadrant] || "#888";
  const liveDims = payload.live_dimensions ?? 0;
  const hollow = liveDims < 4;
  const r = isSelected ? 10 : 7;

  const circleProps = hollow
    ? {
        fill: color,
        fillOpacity: 0,
        stroke: color,
        strokeWidth: isSelected ? 3 : 2,
        strokeOpacity: 1,
      }
    : {
        fill: color,
        fillOpacity: 0.85,
        stroke: isSelected ? color : "transparent",
        strokeWidth: isSelected ? 3 : 0,
        strokeOpacity: 0.3,
      };

  return (
    <g
      onClick={() => onSelect?.(payload.iso2)}
      style={{ cursor: "pointer" }}
    >
      <circle cx={cx} cy={cy} r={r} {...circleProps} />
      <text
        x={cx + 10}
        y={cy + 4}
        fontSize={10}
        fill={color}
        fontFamily="DM Mono, monospace"
        fontWeight={isSelected ? "600" : "400"}
      >
        {payload.iso2}
      </text>
    </g>
  );
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: Country }> }) {
  if (!active || !payload?.length) return null;
  const c = payload[0].payload;
  return (
    <div className="bg-ink text-paper text-xs p-3 rounded shadow-xl max-w-[180px]">
      <p className="font-serif font-semibold text-sm mb-1">{c.name}</p>
      <p className="font-mono">P-Score: <span className="text-[var(--amber-light)]">{c.p_score.toFixed(1)}</span></p>
      <p className="font-mono">R-Score: <span className="text-[var(--amber-light)]">{c.r_score.toFixed(1)}</span></p>
      <p className="mt-1 text-[10px] opacity-70" style={{ color: Q_COLORS[c.quadrant] }}>
        {QUADRANT_DESCRIPTIONS[c.quadrant]?.label}
      </p>
    </div>
  );
}

interface ScatterPlotProps {
  onSelect: (country: Country | null) => void;
  selected: string | null;
}

export default function ScatterPlot({ onSelect, selected }: ScatterPlotProps) {
  const handleClick = useCallback((data: { activePayload?: Array<{ payload: Country }> }) => {
    if (data?.activePayload?.[0]) {
      const c = data.activePayload[0].payload;
      onSelect(selected === c.iso2 ? null : c);
    }
  }, [onSelect, selected]);

  return (
    <div className="w-full">
      {/* Quadrant labels */}
      <div className="relative w-full" style={{ paddingBottom: "60%" }}>
        <div className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{ top: 20, right: 40, bottom: 40, left: 40 }}
              onClick={handleClick}
            >
              <CartesianGrid strokeDasharray="2 4" stroke="#DDD8CE" strokeOpacity={0.6} />
              <XAxis
                type="number"
                dataKey="p_score"
                domain={[0, 100]}
                label={{ value: "Prevalence Score (P) →", position: "insideBottom", offset: -10, fontSize: 11, fill: "#6B6560", fontFamily: "DM Mono, monospace" }}
                tick={{ fontSize: 10, fontFamily: "DM Mono, monospace", fill: "#6B6560" }}
                tickLine={false}
                axisLine={{ stroke: "#DDD8CE" }}
              />
              <YAxis
                type="number"
                dataKey="r_score"
                domain={[0, 100]}
                label={{ value: "Response Quality (R) →", angle: -90, position: "insideLeft", offset: 15, fontSize: 11, fill: "#6B6560", fontFamily: "DM Mono, monospace" }}
                tick={{ fontSize: 10, fontFamily: "DM Mono, monospace", fill: "#6B6560" }}
                tickLine={false}
                axisLine={{ stroke: "#DDD8CE" }}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <ReferenceLine x={50} stroke="#DDD8CE" strokeDasharray="4 4" strokeWidth={1.5} />
              <ReferenceLine y={50} stroke="#DDD8CE" strokeDasharray="4 4" strokeWidth={1.5} />
              <Scatter
                data={COUNTRIES}
                shape={(props: DotProps) => (
                  <CustomDot
                    {...props}
                    selected={selected}
                    onSelect={(iso2) => {
                      const c = COUNTRIES.find(x => x.iso2 === iso2);
                      onSelect(selected === iso2 ? null : (c || null));
                    }}
                  />
                )}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-2 px-2 space-y-2">
        <div className="flex flex-wrap gap-4">
          {Object.entries(QUADRANT_DESCRIPTIONS).map(([q, v]) => (
            <div key={q} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: Q_COLORS[q] }} />
              <span className="text-xs text-[var(--muted)] font-mono">{q} — {v.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <svg width={12} height={12} viewBox="0 0 12 12" aria-hidden className="shrink-0 text-[var(--muted)]">
            <circle cx={6} cy={6} r={4} fill="none" stroke="currentColor" strokeWidth={2} />
          </svg>
          <span className="text-xs text-[var(--muted)] font-mono">Open circles = fewer live data sources</span>
        </div>
      </div>
    </div>
  );
}
