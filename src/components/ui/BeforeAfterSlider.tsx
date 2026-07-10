"use client";

import { useRef, useState } from "react";
import type { beforeAfterCases } from "@/lib/data";

type BeforeAfterCase = (typeof beforeAfterCases)[number];

export function BeforeAfterSlider({ name, treatment, sessions, before, after }: BeforeAfterCase) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  };

  return (
    <div style={{ borderRadius: "0.5rem", overflow: "hidden", border: "1px solid rgba(0,0,0,0.1)", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
      <div
        ref={containerRef}
        style={{ position: "relative", height: "18rem", cursor: "ew-resize", userSelect: "none", backgroundColor: "#f2e5d4" }}
        onMouseDown={() => { dragging.current = true; }}
        onMouseMove={(e) => { if (dragging.current) handleMove(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* After — base layer */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt={`${name} after ${treatment}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Before — clipped overlay */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", width: `${position}%` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={before}
            alt={`${name} before ${treatment}`}
            style={{
              position: "absolute", inset: 0, objectFit: "cover",
              width: `${100 / (position / 100 || 0.01)}%`, height: "100%",
            }}
          />
        </div>

        {/* Divider + handle */}
        <div style={{ position: "absolute", top: 0, bottom: 0, width: "2px", backgroundColor: "white", boxShadow: "0 0 6px rgba(0,0,0,0.3)", left: `${position}%` }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "2rem", height: "2rem", borderRadius: "50%",
            backgroundColor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ display: "flex", gap: "2px" }}>
              <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderRight: "4px solid #9ca3af" }} />
              <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "4px solid #9ca3af" }} />
            </div>
          </div>
        </div>

        {/* Labels */}
        <span style={{ position: "absolute", top: "0.75rem", left: "0.75rem", fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "white", backgroundColor: "rgba(0,0,0,0.4)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>
          Before
        </span>
        <span style={{ position: "absolute", top: "0.75rem", right: "0.75rem", fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "white", backgroundColor: "rgba(0,0,0,0.4)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>
          After
        </span>
      </div>

      {/* Card footer */}
      <div style={{ padding: "1.25rem 1.5rem", backgroundColor: "#fdf6ee" }}>
        <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CB8530", marginBottom: "0.5rem" }}>
          {treatment} · {sessions}
        </p>
        <p style={{ fontSize: "0.875rem", color: "#777777" }}>{name}</p>
      </div>
    </div>
  );
}