// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { trustBarItems } from "@/lib/data";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative min-h-screen flex flex-col justify-end overflow-hidden"
//       aria-label="Hero"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-[#1a1208]">
//         <Image
//           src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=1600&h=1000&fit=crop&auto=format"
//           alt="Elegant aesthetic clinic treatment room in Lahore"
//           fill
//           priority
//           className="object-cover opacity-40"
//           sizes="100vw"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] via-[#1a1208]/60 to-[#1a1208]/30" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#1a1208]/50 to-transparent" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-24 pt-32">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//         >
//           <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#d4991f] mb-8">
//             Physician-Led Aesthetic Clinic · Lahore
//           </p>

//           <h1
//             style={{ fontFamily: "var(--font-serif)" }}
//             className="text-5xl md:text-7xl lg:text-8xl font-light text-[#f7ede0] leading-[1.05] mb-6 max-w-3xl"
//           >
//             Results That Look<br />
//             <em className="italic text-[#d4991f]">Like You.</em><br />
//             <span className="text-[#f7ede0]/80">Just More Rested.</span>
//           </h1>

//           <p className="text-base md:text-lg font-light text-[#f7ede0]/60 max-w-xl mb-12 leading-relaxed">
//             Physician-administered treatments in Lahore. 2,847 transformations. Zero pressure. Your definition of natural, always.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <a
//               href="#booking"
//               className="inline-flex items-center justify-center gap-2 bg-[#CB8530] text-white font-medium px-8 py-4 rounded-full text-sm hover:bg-[#CB8530]/90 transition-all hover:gap-3"
//             >
//               Book Your Free Consultation <ArrowRight size={15} aria-hidden="true" />
//             </a>
//             <a
//               href="#results"
//               className="inline-flex items-center justify-center gap-2 border border-[#f7ede0]/30 text-[#f7ede0] font-light px-8 py-4 rounded-full text-sm hover:border-[#f7ede0]/60 transition-colors"
//             >
//               View Before &amp; After Results
//             </a>
//           </div>
//         </motion.div>

//         {/* Trust Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
//           aria-label="Clinic credentials"
//         >
//           {trustBarItems.map((item) => (
//             <div key={item.label}>
//               <p className="text-[10px] tracking-widest uppercase text-[#f7ede0]/35 mb-1.5">{item.label}</p>
//               <p style={{ fontFamily: "var(--font-serif)" }} className="text-xl font-light text-[#f7ede0]/85">
//                 {item.value}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { trustBarItems } from "@/lib/data";

// export default function HeroSection() {
//   return (
//     <section
//       aria-label="Hero"
//       style={{ minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}
//     >
//       {/* Background layer */}
//       <div style={{ position: "absolute", inset: 0, backgroundColor: "#1a1208" }}>
//         <Image
//           src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=1600&h=1000&fit=crop&auto=format"
//           alt="Elegant aesthetic clinic treatment room in Lahore"
//           fill
//           priority
//           style={{ objectFit: "cover", opacity: 0.4 }}
//           sizes="100vw"
//         />
//         {/* Gradient overlays */}
//         <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #1a1208 0%, rgba(26,18,8,0.6) 50%, rgba(26,18,8,0.3) 100%)" }} />
//         <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,18,8,0.5) 0%, transparent 100%)" }} />
//       </div>

//       {/* Content */}
//       <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "8rem 1.5rem 6rem", width: "100%" }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//         >
//           <p style={{
//             fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em",
//             textTransform: "uppercase", color: "#d4991f", marginBottom: "2rem"
//           }}>
//             Physician-Led Aesthetic Clinic · Lahore
//           </p>

//           <h1 style={{
//             fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 8vw, 7rem)",
//             fontWeight: 300, color: "#f7ede0", lineHeight: 1.05,
//             marginBottom: "1.5rem", maxWidth: "44rem"
//           }}>
//             Results That Look<br />
//             <em style={{ fontStyle: "italic", color: "#d4991f" }}>Like You.</em><br />
//             <span style={{ color: "rgba(247,237,224,0.8)" }}>Just More Rested.</span>
//           </h1>

//           <p style={{
//             fontSize: "1.1rem", fontWeight: 300, color: "rgba(247,237,224,0.6)",
//             maxWidth: "36rem", marginBottom: "3rem", lineHeight: 1.7
//           }}>
//             Physician-administered treatments in Lahore. 1,452 transformations. Zero pressure. Your definition of natural, always.
//           </p>

//           <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
//             <a
//               href="#booking"
//               style={{
//                 display: "inline-flex", alignItems: "center", gap: "0.5rem",
//                 backgroundColor: "#CB8530", color: "white", fontWeight: 500,
//                 padding: "1rem 2rem", borderRadius: "9999px", fontSize: "0.875rem",
//                 textDecoration: "none", transition: "background 0.2s"
//               }}
//             >
//               Book Your Free Consultation <ArrowRight size={15} />
//             </a>
//             <a
//               href="#results"
//               style={{
//                 display: "inline-flex", alignItems: "center", gap: "0.5rem",
//                 border: "1px solid rgba(247,237,224,0.3)", color: "#f7ede0",
//                 fontWeight: 300, padding: "1rem 2rem", borderRadius: "9999px",
//                 fontSize: "0.875rem", textDecoration: "none", transition: "border 0.2s"
//               }}
//             >
//               View Before &amp; After Results
//             </a>
//           </div>
//         </motion.div>

//         {/* Trust Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           style={{
//             marginTop: "5rem", paddingTop: "2rem",
//             borderTop: "1px solid rgba(255,255,255,0.1)",
//             display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "1.5rem"
//           }}
//         >
//           {trustBarItems.map((item) => (
//             <div key={item.label}>
//               <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(247,237,224,0.35)", marginBottom: "0.375rem" }}>
//                 {item.label}
//               </p>
//               <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 300, color: "rgba(247,237,224,0.85)" }}>
//                 {item.value}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { trustBarItems } from "@/lib/data";

function AnimatedLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      const path = pathRef.current;
      if (!path) return;

      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 5,
        ease: "sine.out",
        delay: 0.8,
      });
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
        opacity: 0.12,
      }}
    >
      <svg
        viewBox="-90 0 1500 1150"
        fill="none"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M -98.4648 409.141 C -64.9882 200.932 153.873 359.924 319.588 314.158 C 485.302 268.392 350.182 108.888 257.017 282.207 C 163.852 455.527 245.788 671.396 427.421 746.824 C 609.053 822.252 810.3 788.867 982.564 746.824 C 1202.58 693.126 1436.36 696.234 1463.16 837.351 C 1489.95 978.467 1345.53 1019.63 1267.46 926.546 C 1189.38 833.459 1208.4 508.3 1296 288 C 1575 -328 1629 -102 1745 33"
          stroke="#f7ede0"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        paddingTop: "60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#1a1208",
          zIndex: 0,
        }}
      >
        <Image
          className="hero-desktop"
          src="/images/hero-image.jpg"
          alt="Elegant aesthetic clinic treatment room in Lahore"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: 0.4,
          }}
        />

        <Image
          className="hero-mobile"
          src="/images/hero-mobile.jpg"
          alt="Elegant aesthetic clinic treatment room in Lahore"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "left center",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #1a1208 0%, rgba(26,18,8,0.6) 50%, rgba(26,18,8,0.3) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(26,18,8,0.5) 0%, transparent 100%)",
          }}
        />
      </div>

      <AnimatedLine />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "8rem 1.5rem 6rem",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#d4991f",
              marginBottom: "2rem",
            }}
          >
            {/* Aesthetic & Dermatology Clinic · Lahore */}
            Aesthetic & Dermatology Clinic
          </p>

          <h1
            className="hero-text"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.2rem, 5vw, 7rem)",
              fontWeight: 300,
              color: "#f7ede0",
              marginBottom: "1.5rem",
              maxWidth: "44rem",
            }}
          >
            Results That Look
            <br />
            <em style={{ fontStyle: "italic", color: "#d4991f" }}>Like You.</em>
            <br />
            <span style={{ color: "rgba(247,237,224,0.8)" }}>
              Just More Refreshed.
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "rgba(247,237,224,0.6)",
              maxWidth: "36rem",
              marginBottom: "3rem",
              lineHeight: 1.7,
            }}
          >
            Physician-administered treatments. 1,450+ transformations. Zero
            pressure. Your definition of natural, always.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#booking"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#CB8530",
                color: "white",
                fontWeight: 500,
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Get My Treatment Plan{" "}
              <ArrowRight
                style={{
                  width: "clamp(30px, 2vw, 18px)",
                  height: "clamp(20px, 2vw, 18px)",
                }}
              />
            </a>
            <a
              href="#results"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid rgba(247,237,224,0.3)",
                color: "#f7ede0",
                fontWeight: 500,
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              View Before &amp; After Results
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            marginTop: "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {trustBarItems.map((item) => (
            <div key={item.label}>
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(247,237,224,0.35)",
                  marginBottom: "0.375rem",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.75rem",
                  fontWeight: 300,
                  color: "rgba(247,237,224,0.85)",
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
