import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function SocialProofMarquee() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      style={{
        backgroundColor: "#fdf6ee",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        padding: "3.5rem 0",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#CB8530",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        What Our Patients Say After Their First Visit
      </p>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            animation: "marquee 53s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((t, i) => (
            <article
              key={i}
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#f7ede0",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "0.5rem",
                padding: "1.25rem",
              }}
            >
              <div
                style={{ display: "flex", gap: "2px", marginBottom: "0.75rem" }}
              >
                {Array(t.stars)
                  .fill(0)
                  .map((_, j) => (
                    <Star
                      key={j}
                      size={11}
                      style={{ fill: "#CB8530", color: "#CB8530" }}
                    />
                  ))}
              </div>
              <blockquote
                style={{
                  fontSize: "0.875rem",
                  color: "#777777",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                &ldquo;{t.text}&ldquo;
              </blockquote>
              <footer>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#111111",
                  }}
                >
                  {t.name}
                </p>
                <p style={{ fontSize: "10px", color: "#777777" }}>
                  {t.country}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
