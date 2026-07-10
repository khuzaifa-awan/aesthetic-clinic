// import { ArrowRight } from "lucide-react";
// import { processSteps } from "@/lib/data";
// import SectionLabel from "@/components/ui/SectionLabel";

// export default function ProcessSection() {
//   return (
//     <section style={{ backgroundColor: "#1a1208", padding: "6rem 1.5rem" }}>
//       <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "4rem" }}>
//           <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CB8530", marginBottom: "1rem" }}>
//             The Process
//           </div>
//           <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#f7ede0", lineHeight: 1.2 }}>
//             From First Message to<br />
//             <em style={{ fontStyle: "italic", color: "#d4991f" }}>Glowing Results</em>
//           </h2>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", position: "relative" }}>
//           {processSteps.map((step, i) => (
//             <div key={step.num} style={{ textAlign: "center", padding: "0 1rem" }}>
//               <div style={{
//                 fontFamily: "var(--font-serif)", fontSize: "2.5rem", fontWeight: 300,
//                 fontStyle: "italic", color: "#d4991f", marginBottom: "1rem",
//               }}>
//                 {step.num}
//               </div>
//               <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 400, color: "#f7ede0", marginBottom: "0.5rem" }}>
//                 {step.title}
//               </h3>
//               <p style={{ fontSize: "12px", color: "rgba(247,237,224,0.45)", lineHeight: 1.6 }}>{step.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div style={{ marginTop: "4rem", textAlign: "center" }}>
//           <a href="#booking" style={{
//             display: "inline-flex", alignItems: "center", gap: "0.5rem",
//             border: "1px solid #CB8530", color: "#CB8530",
//             padding: "1rem 2rem", borderRadius: "9999px", fontSize: "0.875rem",
//             fontWeight: 500, textDecoration: "none", transition: "all 0.2s",
//           }}>
//             Start with a Free Consultation — No Commitment Required <ArrowRight size={15} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { ArrowRight } from "lucide-react";
// import { processSteps } from "@/lib/data";

// export function ProcessSection() {
//   return (
//     <section aria-label="Our process" className="bg-[#1a1208] py-24 md:py-32 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 md:px-12">
//         <div className="text-center mb-16">
//           <div className="text-[10px] font-semibold tracking-widest uppercase text-[#d4991f] mb-4">
//             The Process
//           </div>
//           <h2 className="font-serif text-4xl md:text-5xl font-light text-[#f7ede0] leading-tight max-w-2xl mx-auto">
//             From First Message to<br /><em className="italic text-[#d4991f]">Glowing Results</em>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
//           <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-white/10" />
//           {processSteps.map((step, i) => (
//             <div key={step.num} className="relative flex flex-col md:items-center text-center px-4 py-6 md:py-0">
//               <div className="font-serif text-4xl font-light italic text-[#d4991f] mb-4 relative z-10 bg-[#1a1208] md:px-2">
//                 {step.num}
//               </div>
//               <div className="font-serif text-lg font-normal text-[#f7ede0] mb-2">{step.title}</div>
//               <p className="text-xs text-[#f7ede0]/45 leading-relaxed">{step.desc}</p>
//               {i < processSteps.length - 1 && (
//                 <div className="md:hidden w-px h-6 bg-white/10 mx-auto mt-4" />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//         <a
//             href="#booking"
//             className="inline-flex items-center gap-2 border border-[#CB8530] text-[#CB8530] font-medium px-8 py-4 rounded-full text-sm hover:bg-[#CB8530] hover:text-white transition-all hover:gap-3"
//           >
//             Start with a Free Consultation — No Commitment Required <ArrowRight size={15} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


// -----------3:00
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section style={{ backgroundColor: "#1a1208", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CB8530", marginBottom: "1rem" }}>
            The Process
          </p>
          <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#f7ede0", lineHeight: 1.2 }}>
            From First Message to<br />
            <em style={{ fontStyle: "italic", color: "#d4991f" }}>Glowing Results</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "5.5rem" }}>
          {processSteps.map((step) => (
            <div key={step.num} style={{ textAlign: "center", padding: "0 0.5rem" }}>
              <p style={{ fontFamily: "var(--font-accent)", fontSize: "2.5rem", fontWeight: 300, fontStyle: "italic", color: "#d4991f", marginBottom: "0.75rem" }}>
                {step.num}
              </p>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "2.05rem", fontWeight: 400, color: "#f7ede0", marginBottom: "0.5rem", }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "12px", color: "rgba(247,237,224,0.45)", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <a href="#booking" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            border: "1px solid #CB8530", color: "#CB8530",
            padding: "1rem 2rem", borderRadius: "9999px", fontSize: "1rem",
            fontWeight: 500, textDecoration: "none",
          }}>
            Start with a Free Consultation —  No Commitment Required <ArrowRight style={{ width: "clamp(30px, 2vw, 18px)", height: "clamp(20px, 2vw, 18px)",}} />
          </a>
        </div>
      </div>
    </section>
  );
}