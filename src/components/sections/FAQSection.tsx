"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { FaWhatsapp } from "react-icons/fa";
import { faqs, WHATSAPP_URL } from "@/lib/data";
import { FAQItem } from "@/components/ui/FAQItem";

export default function FAQSection() {
  return (
    <section id="faq" style={{ padding: "6rem 1.5rem", backgroundColor: "#f7ede0" }}>
      <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CB8530", marginBottom: "1rem" }}>
            Every Question Answered
          </p>
          <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#111111", lineHeight: 1.2 }}>
            Removing the Last<br />
            <em style={{ fontStyle: "italic", color: "#CB8530" }}>Objections</em>
          </h2>
        </div>

        <Accordion.Root type="single" collapsible style={{ width: "100%" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} value={`item-${i}`} />
          ))}
        </Accordion.Root>

        {/* WhatsApp CTA */}
        <div style={{
          marginTop: "3rem", backgroundColor: "#1a1208", borderRadius: "0.75rem",
          padding: "1.75rem 2rem", display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: "1rem",
        }}>
          <div>
            <p style={{ fontFamily: "var(--font-accent)", fontSize: "1.7rem", fontWeight: 300, color: "#f7ede0", marginBottom: "0.25rem" }}>
              Still have questions?
            </p>
            <p style={{ fontSize: "12px", color: "rgba(239, 239, 239, 0.83)", letterSpacing: "1px"}}>
              We respond on WhatsApp within minutes.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "#25D366", color: "white", fontSize: "0.875rem",
            fontWeight: 500, padding: "0.75rem 1.5rem", borderRadius: "9999px",
            textDecoration: "none", whiteSpace: "nowrap",
          }}>
            <FaWhatsapp size={15} /> Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}