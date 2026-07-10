import { Star, UserRound } from "lucide-react";
import { deepTestimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "6rem 1.5rem", backgroundColor: "#f7ede0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Pull quote */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#CB8530",
              marginBottom: "1.5rem",
            }}
          >
            In Their Own Words
          </p>
          <blockquote
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#111111",
              maxWidth: "52rem",
              margin: "0 auto",
              lineHeight: 1.4,
            }}
          >
            &quot;I booked the consultation just to ask questions. I left having
            done the treatment — because I finally{" "}
            <span style={{ color: "#CB8530" }}>trusted someone.</span>&quot;
          </blockquote>
        </div>

        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {deepTestimonials.map((t) => (
            <article
              key={t.name}
              style={{
                backgroundColor: "#fdf6ee",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "0.75rem",
                padding: "2rem",
              }}
            >
              <div
                style={{ display: "flex", gap: "2px", marginBottom: "1.25rem" }}
              >
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      style={{ fill: "#CB8530", color: "#CB8530" }}
                    />
                  ))}
              </div>
              <blockquote
                style={{
                  color: "#777777",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  fontSize: "0.9rem",
                }}
              >
                {t.text}
              </blockquote>
              <footer
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <UserRound
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#111111",
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ fontSize: "11px", color: "#777777" }}>
                    {t.treatment} · {t.months}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Rating bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            backgroundColor: "#fdf6ee",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "0.75rem",
            padding: "1.25rem",
          }}
        >
          <div style={{ display: "flex", gap: "2px" }}>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  style={{ fill: "#CB8530", color: "#CB8530" }}
                />
              ))}
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.25rem",
              fontWeight: 300,
              color: "#111111",
            }}
          >
            5/5
          </span>
          {/* <span style={{ fontSize: "0.875rem", color: "#777777" }}>· 312 verified Google Reviews</span> */}
          <span style={{ fontSize: "0.875rem", color: "#777777" }}>
            verified Google Reviews
          </span>
        </div>
      </div>
    </section>
  );
}
