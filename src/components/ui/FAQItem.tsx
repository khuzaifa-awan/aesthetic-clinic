// "use client";
// import * as Accordion from "@radix-ui/react-accordion";
// import { ChevronDown } from "lucide-react";

// interface FAQItemProps {
//   q: string;
//   a: string;
//   value: string;
// }

// export default function FAQItem({ q, a, value }: FAQItemProps) {
//   return (
//     <Accordion.Item value={value} className="border-b border-black/10">
//       <Accordion.Trigger className="w-full flex items-start justify-between gap-4 py-5 text-left group cursor-pointer">
//         <span
//           style={{ fontFamily: "var(--font-serif)" }}
//           className="text-lg font-normal text-[#111111] group-data-[state=open]:text-[#CB8530] transition-colors"
//         >
//           {q}
//         </span>
//         <ChevronDown
//           size={16}
//           className="shrink-0 mt-1.5 text-[#777777] transition-transform duration-300 group-data-[state=open]:rotate-180"
//         />
//       </Accordion.Trigger>
//       <Accordion.Content
//         className="overflow-hidden data-[state=open]:[animation:accordion-down_0.2s_ease] data-[state=closed]:[animation:accordion-up_0.2s_ease]"
//       >
//         <p className="text-[#777777] text-sm leading-relaxed pb-5">{a}</p>
//       </Accordion.Content>
//     </Accordion.Item>
//   );
// }



// chrome

// "use client";

// import * as Accordion from "@radix-ui/react-accordion";
// import { ChevronDown } from "lucide-react";

// export function FaqItem({ q, a, value }: { q: string; a: string; value: string }) {
//   return (
//     <Accordion.Item value={value} className="border-b border-border">
//       <Accordion.Trigger className="w-full flex items-start justify-between gap-4 py-5 text-left group">
//         <span className="font-serif text-lg font-normal text-foreground group-data-[state=open]:text-accent transition-colors">
//           {q}
//         </span>
//         <ChevronDown
//           size={16}
//           className="shrink-0 mt-1.5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180"
//         />
//       </Accordion.Trigger>
//       <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_0.2s_ease] data-[state=closed]:animate-[accordion-up_0.2s_ease]">
//         <p className="text-muted-foreground text-sm leading-relaxed pb-5">{a}</p>
//       </Accordion.Content>
//     </Accordion.Item>
//   );
// }

"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  q: string;
  a: string;
  value: string;
}

export  function FAQItem({ q, a, value }: FAQItemProps) {
  return (
    <Accordion.Item
      value={value}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
    >
      <Accordion.Trigger
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1.5rem",
          padding: "1.75rem 0",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        className="faq-trigger"
      >
        <span
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "1.2rem",
            fontWeight: 600,
            letterSpacing: 0.7,
            color: "#111111",
            lineHeight: 1.4,
          }}
          className="faq-question"
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          style={{ flexShrink: 0, marginTop: "3px", color: "#777777", transition: "transform 0.3s ease" }}
          className="faq-chevron"
        />
      </Accordion.Trigger>

      <Accordion.Content
        style={{ overflow: "hidden" }}
        className="faq-content"
      >
        <p
          style={{
            color: "#777777",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            paddingBottom: "1.75rem",
            maxWidth: "90%",
          }}
        >
          {a}
        </p>
      </Accordion.Content>
    </Accordion.Item>
  );
}