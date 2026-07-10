"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";

const filters = ["all", "face", "skin"];

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? services : services.filter((s) => s.category === activeFilter);

  return (
    <section id="services" style={{ backgroundColor: "#fdf6ee", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <SectionLabel>Every Treatment. One Goal.</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#111111", lineHeight: 1.2 }}>
              You, at Your <em style={{ fontStyle: "italic", color: "#CB8530" }}>Best.</em>
            </h2>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {filters.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} style={{
                  padding: "0.5rem 1rem", borderRadius: "9999px", fontSize: "12px",
                  fontWeight: 500, cursor: "pointer", border: "none", transition: "all 0.2s",
                  backgroundColor: activeFilter === f ? "#1a1208" : "#f7ede0",
                  color: activeFilter === f ? "#f7ede0" : "#777777",
                  textTransform: "capitalize",
                }}>
                  {f === "all" ? "All Treatments" : f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((service) => (
            <article key={service.id} style={{
              backgroundColor: "#f7ede0", borderRadius: "0.5rem",
              overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)",
              transition: "box-shadow 0.2s",
            }}>
              <div style={{ position: "relative", height: "12rem", backgroundColor: "#f2e5d4" }}>
                <Image
                  src={service.img}
                  alt={`${service.name} treatment`}
                  fill style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {service.popular && (
                  <span style={{
                    position: "absolute", top: "0.75rem", left: "0.75rem",
                    backgroundColor: "#CB8530", color: "white", fontSize: "9px",
                    fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "0.25rem 0.625rem", borderRadius: "9999px",
                  }}>Popular</span>
                )}
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-accent)", fontSize: "1.25rem", fontWeight: 400, color: "#111111", marginBottom: "0.5rem" }}>
                  {service.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#777777", lineHeight: 1.6, marginBottom: "1rem" }}>{service.outcome}</p>
                <a href="#booking" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.91rem", fontWeight: 500, color: "#CB8530", textDecoration: "none" }}
                >
                  Book a Consultation <ArrowRight style={{ width: "clamp(30px, 2vw, 18px)", height: "clamp(20px, 2vw, 18px)",}}/>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem", fontStyle: "italic", color: "#777777" }}>
            Not sure which treatment? Don&apos;t worry - Our consultation is free and comes with zero pressure.
          </p>
        </div>
      </div>
    </section>
  );
}