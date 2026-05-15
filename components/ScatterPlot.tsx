"use client";
import { useCallback, useRef, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";
import { COUNTRIES, QUADRANT_DESCRIPTIONS, Country } from "@/lib/data";

const Q_COLORS: Record<string, string> = {
  Q1: "#0F6E56",
  Q2: "#1A5FA8",
  Q3: "#B22B2B",
  Q4: "#6B6B6B",
};

const CHART_MARGIN = { top: 20, right: 40, bottom: 40, left: 40 };
const FULL_DOMAIN: [number, number] = [0, 100];
const MIN_DRAG_PX = 10;

type ChartMouseEvent = {
  chartX?: number;
  chartY?: number;
  activePayload?: Array<{ payload: Country }>;
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
  return (
    <g
      onClick={() => onSelect?.(payload.iso2)}
      style={{ cursor: "pointer" }}
    >
      <circle
        cx={cx}
        cy={cy}
        r={isSelected ? 10 : 7}
        fill={color}
        fillOpacity={0.85}
        stroke={isSelected ? color : "transparent"}
        strokeWidth={isSelected ? 3 : 0}
        strokeOpacity={0.3}
      />
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

function chartPixelToData(
  chartX: number,
  chartY: number,
  width: number,
  height: number,
  xDom: [number, number],
  yDom: [number, number],
): { x: number; y: number } {
  const innerW = width - CHART_MARGIN.left - CHART_MARGIN.right;
  const innerH = height - CHART_MARGIN.top - CHART_MARGIN.bottom;
  const x = xDom[0] + ((chartX - CHART_MARGIN.left) / innerW) * (xDom[1] - xDom[0]);
  const y = yDom[1] - ((chartY - CHART_MARGIN.top) / innerH) * (yDom[1] - yDom[0]);
  return {
    x: Math.min(xDom[1], Math.max(xDom[0], x)),
    y: Math.min(yDom[1], Math.max(yDom[0], y)),
  };
}

function domainsEqual(a: [number, number], b: [number, number]) {
  return a[0] === b[0] && a[1] === b[1];
}

interface ScatterPlotProps {
  onSelect: (country: Country | null) => void;
  selected: string | null;
}

export default function ScatterPlot({ onSelect, selected }: ScatterPlotProps) {
  const chartWrapRef = useRef<HTMLDivElement>(null);
  const skipClickRef = useRef(false);

  const [xDomain, setXDomain] = useState<[number, number]>(FULL_DOMAIN);
  const [yDomain, setYDomain] = useState<[number, number]>(FULL_DOMAIN);

  const [selecting, setSelecting] = useState(false);
  const [selectStart, setSelectStart] = useState<{ x: number; y: number } | null>(null);
  const [refArea, setRefArea] = useState<{
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  } | null>(null);

  const [panning, setPanning] = useState(false);
  const [panStart, setPanStart] = useState<{
    chartX: number;
    chartY: number;
    xDomain: [number, number];
    yDomain: [number, number];
  } | null>(null);

  const isZoomed =
    !domainsEqual(xDomain, FULL_DOMAIN) || !domainsEqual(yDomain, FULL_DOMAIN);

  const getChartSize = () => {
    const el = chartWrapRef.current;
    if (!el) return null;
    return { width: el.clientWidth, height: el.clientHeight };
  };

  const updateRefArea = useCallback(
    (start: { x: number; y: number }, end: { x: number; y: number }) => {
      const size = getChartSize();
      if (!size) return;
      const d1 = chartPixelToData(start.x, start.y, size.width, size.height, xDomain, yDomain);
      const d2 = chartPixelToData(end.x, end.y, size.width, size.height, xDomain, yDomain);
      setRefArea({
        x1: Math.min(d1.x, d2.x),
        x2: Math.max(d1.x, d2.x),
        y1: Math.min(d1.y, d2.y),
        y2: Math.max(d1.y, d2.y),
      });
    },
    [xDomain, yDomain],
  );

  const handleMouseDown = useCallback(
    (e: ChartMouseEvent) => {
      if (e.chartX == null || e.chartY == null) return;

      if (isZoomed && (e as ChartMouseEvent & { nativeEvent?: MouseEvent }).nativeEvent?.shiftKey) {
        setPanning(true);
        setPanStart({
          chartX: e.chartX,
          chartY: e.chartY,
          xDomain: [...xDomain] as [number, number],
          yDomain: [...yDomain] as [number, number],
        });
        return;
      }

      setSelecting(true);
      setSelectStart({ x: e.chartX, y: e.chartY });
      updateRefArea({ x: e.chartX, y: e.chartY }, { x: e.chartX, y: e.chartY });
    },
    [isZoomed, xDomain, yDomain, updateRefArea],
  );

  const handleMouseMove = useCallback(
    (e: ChartMouseEvent) => {
      if (e.chartX == null || e.chartY == null) return;

      if (panning && panStart) {
        const size = getChartSize();
        if (!size) return;
        const innerW = size.width - CHART_MARGIN.left - CHART_MARGIN.right;
        const innerH = size.height - CHART_MARGIN.top - CHART_MARGIN.bottom;
        const dx =
          ((e.chartX - panStart.chartX) / innerW) *
          (panStart.xDomain[1] - panStart.xDomain[0]);
        const dy =
          ((e.chartY - panStart.chartY) / innerH) *
          (panStart.yDomain[1] - panStart.yDomain[0]);

        setXDomain([panStart.xDomain[0] - dx, panStart.xDomain[1] - dx]);
        setYDomain([panStart.yDomain[0] + dy, panStart.yDomain[1] + dy]);
        return;
      }

      if (selecting && selectStart) {
        updateRefArea(selectStart, { x: e.chartX, y: e.chartY });
      }
    },
    [panning, panStart, selecting, selectStart, updateRefArea],
  );

  const endInteraction = useCallback(
    (e?: ChartMouseEvent) => {
      if (panning) {
        const moved =
          panStart &&
          e?.chartX != null &&
          e?.chartY != null &&
          Math.hypot(e.chartX - panStart.chartX, e.chartY - panStart.chartY) > MIN_DRAG_PX;
        if (moved) skipClickRef.current = true;
        setPanning(false);
        setPanStart(null);
        return;
      }

      if (!selecting || !selectStart) {
        setSelecting(false);
        setRefArea(null);
        return;
      }

      const endX = e?.chartX ?? selectStart.x;
      const endY = e?.chartY ?? selectStart.y;
      const dragged = Math.hypot(endX - selectStart.x, endY - selectStart.y) > MIN_DRAG_PX;

      if (dragged && refArea) {
        const xSpan = refArea.x2 - refArea.x1;
        const ySpan = refArea.y2 - refArea.y1;
        if (xSpan > 0.5 && ySpan > 0.5) {
          setXDomain([refArea.x1, refArea.x2]);
          setYDomain([refArea.y1, refArea.y2]);
          skipClickRef.current = true;
        }
      }

      setSelecting(false);
      setSelectStart(null);
      setRefArea(null);
    },
    [panning, panStart, selecting, selectStart, refArea],
  );

  const resetZoom = useCallback(() => {
    setXDomain(FULL_DOMAIN);
    setYDomain(FULL_DOMAIN);
    setSelecting(false);
    setSelectStart(null);
    setRefArea(null);
    setPanning(false);
    setPanStart(null);
  }, []);

  const handleClick = useCallback(
    (data: ChartMouseEvent) => {
      if (skipClickRef.current) {
        skipClickRef.current = false;
        return;
      }
      if (data?.activePayload?.[0]) {
        const c = data.activePayload[0].payload;
        onSelect(selected === c.iso2 ? null : c);
      }
    },
    [onSelect, selected],
  );

  return (
    <div className="w-full">
      <div className="relative w-full" style={{ paddingBottom: "75%" }}>
        {isZoomed && (
          <button
            type="button"
            onClick={resetZoom}
            className="absolute top-2 right-2 z-10 text-xs font-mono bg-paper border border-[var(--border)] text-ink px-2 py-1 hover:bg-[var(--amber)]/10 transition-colors shadow-sm"
          >
            Reset zoom
          </button>
        )}
        <div ref={chartWrapRef} className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={CHART_MARGIN}
              onClick={handleClick}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={endInteraction}
              onMouseLeave={() => endInteraction()}
              style={{ cursor: selecting || panning ? "crosshair" : "default" }}
            >
              <CartesianGrid strokeDasharray="2 4" stroke="#DDD8CE" strokeOpacity={0.6} />
              <XAxis
                type="number"
                dataKey="p_score"
                domain={xDomain}
                allowDataOverflow
                label={{
                  value: "Prevalence Score (P) →",
                  position: "insideBottom",
                  offset: -10,
                  fontSize: 11,
                  fill: "#6B6560",
                  fontFamily: "DM Mono, monospace",
                }}
                tick={{ fontSize: 10, fontFamily: "DM Mono, monospace", fill: "#6B6560" }}
                tickLine={false}
                axisLine={{ stroke: "#DDD8CE" }}
              />
              <YAxis
                type="number"
                dataKey="r_score"
                domain={yDomain}
                allowDataOverflow
                label={{
                  value: "Response Quality (R) →",
                  angle: -90,
                  position: "insideLeft",
                  offset: 15,
                  fontSize: 11,
                  fill: "#6B6560",
                  fontFamily: "DM Mono, monospace",
                }}
                tick={{ fontSize: 10, fontFamily: "DM Mono, monospace", fill: "#6B6560" }}
                tickLine={false}
                axisLine={{ stroke: "#DDD8CE" }}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              {!isZoomed && (
                <>
                  <ReferenceLine x={50} stroke="#DDD8CE" strokeDasharray="4 4" strokeWidth={1.5} />
                  <ReferenceLine y={50} stroke="#DDD8CE" strokeDasharray="4 4" strokeWidth={1.5} />
                </>
              )}
              {refArea && (
                <ReferenceArea
                  x1={refArea.x1}
                  x2={refArea.x2}
                  y1={refArea.y1}
                  y2={refArea.y2}
                  stroke="#6B6560"
                  strokeOpacity={0.6}
                  fill="#6B6560"
                  fillOpacity={0.12}
                />
              )}
              <Scatter
                data={COUNTRIES}
                shape={(props: DotProps) => (
                  <CustomDot
                    {...props}
                    selected={selected}
                    onSelect={(iso2) => {
                      const c = COUNTRIES.find((x) => x.iso2 === iso2);
                      onSelect(selected === iso2 ? null : c || null);
                    }}
                  />
                )}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-2 px-2">
        {Object.entries(QUADRANT_DESCRIPTIONS).map(([q, v]) => (
          <div key={q} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: Q_COLORS[q] }} />
            <span className="text-xs text-[var(--muted)] font-mono">{q} — {v.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
