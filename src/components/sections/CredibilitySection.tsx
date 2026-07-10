import Image from "next/image";
import { Shield, Leaf, Heart, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    icon: Shield,
    title: "Physician Led, Always",
    desc: "Every treatment is designed and performed by Dr. Nour Al-Hassan, MBBS MRCS. No delegation, no exceptions.",
  },
  {
    icon: Leaf,
    title: "Natural Results, Always",
    desc: "We turn away requests we believe will compromise your natural appearance. That refusal has built our reputation.",
  },
  {
    icon: Heart,
    title: "No Upselling, Ever",
    desc: "Your consultation ends with a plan for what you actually need — not what we want to sell.",
  },
];

export default function CredibilitySection() {
  return (
    <section
      style={{ padding: "6rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <SectionLabel>
            Why <i style={{ fontWeight: "black" }}>Aesthetics</i>, Not Any
            Clinic
          </SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#111111",
              lineHeight: 1.2,
              marginBottom: "2rem",
            }}
          >
            Not Every Clinic Thinks About What You will Look Like{" "}
            <em style={{ fontStyle: "italic", color: "#CB8530" }}>
              in Ten Years.
            </em>
          </h2>
          <p
            style={{
              color: "#777777",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              fontSize: "0.95rem",
            }}
          >
            We do. Every recommendation Dr. Nour makes considers not just
            today&apos;s result, but how your face will continue to look
            natural, proportionate, and unmistakably you — through every season
            of life.
          </p>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
            }}
          >
            {pillars.map(({ icon: Icon, title, desc }) => (
              <li key={title} style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#f2e5d4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Icon size={15} style={{ color: "#CB8530" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#111111",
                      marginBottom: "0.25rem",
                      letterSpacing: "0.07rem",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#777777",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#team"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2.5rem",
              fontSize: "0.875rem",
              color: "#CB8530",
              textDecoration: "none",
              fontWeight: 500,
              transition: "gap 0.2s",
            }}
          >
            Meet Dr. Nour Al-Hassan{" "}
            <ArrowRight
              style={{
                width: "clamp(30px, 2vw, 18px)",
                height: "clamp(20px, 2vw, 18px)",
              }}
            />
          </a>
        </div>

        {/* Right */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: "0.5rem",
              overflow: "hidden",
              aspectRatio: "4/5",
              position: "relative",
            }}
          >
            <Image
              src="/images/doctor5.jpg"
              alt="Dr. Nour Al-Hassan, Lead Physician"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          {/* Quote card — sits below image on mobile, overlaps on desktop */}
          <blockquote
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              left: "-1.5rem",
              backgroundColor: "rgba(26, 18, 8)",
              color: "#f7ede0",
              borderRadius: "0.5rem",
              padding: "1.25rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              maxWidth: "22rem",
            }}
            className="credibility-quote"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.2rem",
                fontStyle: "italic",
                lineHeight: 1.5,
                letterSpacing: 1,
                color: "white",
              }}
            >
              &ldquo;My job is to make you look like the best version of
              yourself — not someone else&apos;s idea of perfect.&ldquo;
            </p>
            <footer
              style={{
                marginTop: "0.75rem",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#CB8530",
              }}
            >
              Dr. Nour Al-Hassan · Lead Physician
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
