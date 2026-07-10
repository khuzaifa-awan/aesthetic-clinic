import { ArrowRight } from "lucide-react";
import { beforeAfterCases } from "@/lib/data";
import {BeforeAfterSlider} from "@/components/ui/BeforeAfterSlider";

export default function ResultsSection() {
  return (
    <section id="results" style={{ padding: "6rem 1.5rem", backgroundColor: "#f7ede0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CB8530", marginBottom: "1rem" }}>
            Real Patients. Real Results. No Filters.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem" }}>
            <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(3rem, 4vw, 3rem)", fontWeight: 300, color: "#111111", lineHeight: 1.2 }}>
              520+ Transformations<br />
              <em style={{ fontStyle: "italic", color: "#CB8530" }}>and Counting</em>
            </h1>
            <p style={{ fontSize: "0.875rem", color: "#777777", maxWidth: "18rem", lineHeight: 1.6 }}>
              Drag the slider to reveal. All photos are real patients with consent. Individual results may vary.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem", paddingTop:"10px" }}>
          {beforeAfterCases.map((c) => (
            <BeforeAfterSlider key={c.name} {...c} />
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <a href="#booking" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "#CB8530", color: "white", fontWeight: 500,
            padding: "1rem 2rem", borderRadius: "9999px", fontSize: "1rem",
            textDecoration: "none",
          }}>
            See What&apos;s Possible for You <ArrowRight style={{ width: "clamp(30px, 2vw, 18px)", height: "clamp(20px, 2vw, 18px)",}}/>
          </a>
        </div>
      </div>
    </section>
  );
}