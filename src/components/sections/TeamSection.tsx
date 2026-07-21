// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import SectionLabel from "@/components/ui/SectionLabel";

// const credentials = ["MBBS", "MRCS", "Aesthetic Medicine Fellow"];
// const badges = ["DHA License #AE12847", "BCAM Member", "FACE Certified", "Featured: Vogue Arabia"];

// export default function TeamSection() {
//   return (
//     <section id="team" className="bg-[#fdf6ee] py-24 md:py-32" aria-labelledby="team-heading">
//       <div className="max-w-6xl mx-auto px-6 md:px-12">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="order-2 md:order-1">
//             <SectionLabel>The Hands Behind the Results</SectionLabel>
//             <h2
//               id="team-heading"
//               style={{ fontFamily: "var(--font-serif)" }}
//               className="text-4xl md:text-5xl font-light text-[#111111] leading-tight mb-6"
//             >
//               Dr. Nour<br /><em className="italic text-[#CB8530]">Al-Hassan</em>
//             </h2>

//             <div className="flex flex-wrap gap-3 mb-6" aria-label="Medical credentials">
//               {credentials.map((cred) => (
//                 <span key={cred} className="text-[10px] tracking-widest uppercase border border-black/10 px-3 py-1.5 rounded-full text-[#777777]">
//                   {cred}
//                 </span>
//               ))}
//             </div>

//             <p className="text-[#777777] leading-relaxed mb-8 text-sm">
//               11 years of specialist experience. 2,847 treatments performed since 2013. Dr. Nour trained at leading institutions in the UK and UAE, and has been a DHA-licensed aesthetic physician for over a decade.
//             </p>

//             <blockquote
//               style={{ fontFamily: "var(--font-serif)" }}
//               className="text-xl font-light italic text-[#111111] border-l-2 border-[#CB8530] pl-5 mb-10 leading-snug"
//             >
//               "I became a physician because I believe in the power of looking in the mirror and recognising yourself — just refreshed."
//             </blockquote>

//             <div className="flex flex-wrap gap-3 mb-10">
//               {badges.map((badge) => (
//                 <span key={badge} className="text-[10px] font-medium bg-[#f2e5d4] px-3 py-1.5 rounded text-[#777777]">{badge}</span>
//               ))}
//             </div>

//             <a href="#booking" className="inline-flex items-center gap-2 bg-[#CB8530] text-white font-medium px-7 py-3.5 rounded-full text-sm hover:bg-[#CB8530]/90 transition-all hover:gap-3">
//               Book Directly with Dr. Nour <ArrowRight size={14} aria-hidden="true" />
//             </a>
//           </div>

//           <div className="order-1 md:order-2">
//             <div className="rounded-lg overflow-hidden aspect-[3/4] relative">
//               <Image
//                 src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=800&fit=crop&auto=format"
//                 alt="Dr. Nour Al-Hassan, Lead Physician at Aesthetics Lahore"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { business } from "@/lib/data";
// import SectionLabel  from "@/components/ui/SectionLabel";

// export function TeamSection() {
//   return (
//     <section id="team" aria-label="Meet the doctor" className="bg-[#fdf6ee] py-24 md:py-32">
//       <div className="max-w-6xl mx-auto px-6 md:px-12">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="order-2 md:order-1">
//             <SectionLabel>The Hands Behind the Results</SectionLabel>
//             <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mb-6">
//               Dr. Nour<br /><em className="italic text-accent">Al-Hassan</em>
//             </h2>
//             <div className="flex flex-wrap gap-3 mb-6">
//               {business.doctor.credentials.map((cred) => (
//                 <span
//                   key={cred}
//                   className="text-[10px] tracking-widest uppercase border border-border px-3 py-1.5 rounded-full text-muted-foreground"
//                 >
//                   {cred}
//                 </span>
//               ))}
//             </div>
//             <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
//               11 years of specialist experience. 2,847 treatments performed since 2013. Dr. Nour trained at leading
//               institutions in the UK and UAE, and has been a DHA-licensed aesthetic physician for over a decade.
//             </p>
//             <blockquote className="font-serif text-xl font-light italic text-foreground border-l-2 border-accent pl-5 mb-10 leading-snug">
//               &ldquo;I became a physician because I believe in the power of looking in the mirror and recognising
//               yourself — just refreshed.&rdquo;
//             </blockquote>
//             <div className="flex flex-wrap gap-3 mb-10">
//               {["DHA License #AE12847", "BCAM Member", "FACE Certified", "Featured: Vogue Arabia"].map((badge) => (
//                 <span key={badge} className="text-[10px] font-medium bg-secondary px-3 py-1.5 rounded text-muted-foreground">
//                   {badge}
//                 </span>
//               ))}
//             </div>
//             <a
//               href="#booking"
//               className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full text-sm hover:bg-accent/90 transition-all hover:gap-3"
//             >
//               Book Directly with Dr. Nour <ArrowRight size={14} />
//             </a>
//           </div>

//           <div className="order-1 md:order-2">
//             <div className="relative rounded-lg overflow-hidden aspect-[3/4] bg-secondary">
//               <Image
//                 src={business.doctor.photo}
//                 alt={business.doctor.name}
//                 fill
//                 sizes="(min-width: 768px) 50vw, 100vw"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// 3

// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// const credentials = ["MBBS", "MRCS", "Aesthetic Medicine Fellow"];
// const badges = [
//   "DHA License #AE12847",
//   "BCAM Member",
//   "FACE Certified",
//   "Featured: Vogue Arabia",
// ];

// export default function TeamSection() {
//   return (
//     <section
//       id="team"
//       style={{ backgroundColor: "#fdf6ee", padding: "6rem 1.5rem" }}
//     >
//       <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "4rem",
//             alignItems: "center",
//           }}
//         >
//           {/* Left — text */}
//           <div>
//             <p
//               style={{
//                 fontSize: "10px",
//                 fontWeight: 600,
//                 letterSpacing: "0.15em",
//                 textTransform: "uppercase",
//                 color: "#CB8530",
//                 marginBottom: "1rem",
//               }}
//             >
//               The Hands Behind the Results
//             </p>
//             <h2
//               style={{
//                 fontFamily: "var(--font-serif)",
//                 fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
//                 fontWeight: 300,
//                 color: "#111111",
//                 lineHeight: 1.1,
//                 marginBottom: "1.5rem",
//               }}
//             >
//               Dr. Nour
//               <br />
//               <em style={{ fontStyle: "italic", color: "#CB8530" }}>
//                 Al-Hassan
//               </em>
//             </h2>

//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "0.5rem",
//                 marginBottom: "1.5rem",
//               }}
//             >
//               {credentials.map((c) => (
//                 <span
//                   key={c}
//                   style={{
//                     fontSize: "10px",
//                     letterSpacing: "0.1em",
//                     textTransform: "uppercase",
//                     border: "1px solid rgba(0,0,0,0.12)",
//                     padding: "0.25rem 0.75rem",
//                     borderRadius: "9999px",
//                     color: "#777777",
//                   }}
//                 >
//                   {c}
//                 </span>
//               ))}
//             </div>

//             <p
//               style={{
//                 color: "#777777",
//                 fontSize: "1.25rem",
//                 lineHeight: 1.7,
//                 marginBottom: "2rem",
//               }}
//             >
//               11 years of specialist experience. 1,452 treatments performed
//               since 2013. Dr. Nour trained at leading institutions in the UK and
//               UAE, and has been a DHA-licensed aesthetic physician for over a
//               decade.
//             </p>

//             <blockquote
//               style={{
//                 fontFamily: "var(--font-serif)",
//                 fontSize: "1.35rem",
//                 fontStyle: "italic",
//                 fontWeight: 300,
//                 color: "#111111",
//                 borderLeft: "2px solid #CB8530",
//                 paddingLeft: "1.25rem",
//                 marginBottom: "2rem",
//                 lineHeight: 1.5,
//               }}
//             >
//               "I became a physician because I believe in the power of looking in
//               the mirror and recognising yourself — just refreshed."
//             </blockquote>

//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "0.5rem",
//                 marginBottom: "2.5rem",
//               }}
//             >
//               {badges.map((b) => (
//                 <span
//                   key={b}
//                   style={{
//                     fontSize: "0.71rem",
//                     fontWeight: 500,
//                     backgroundColor: "#f2e5d4",
//                     padding: "0.35rem 0.9rem",
//                     borderRadius: "0.25rem",
//                     color: "#777777",
//                   }}
//                 >
//                   {b}
//                 </span>
//               ))}
//             </div>

//             <a
//               href="#booking"
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "0.5rem",
//                 backgroundColor: "#CB8530",
//                 color: "white",
//                 fontWeight: 500,
//                 padding: "0.875rem 1.75rem",
//                 borderRadius: "9999px",
//                 textDecoration: "none",
//                 textAlign: "center",
//                 justifyContent: "center",
//                 width: "100%",
//                 fontSize: "1.2rem",
//               }}
//             >
//               Book Directly with Dr. Nour <ArrowRight size={14} />
//             </a>
//           </div>

//           {/* Right — image */}
//           <div
//             style={{
//               position: "relative",
//               aspectRatio: "3/4",
//               borderRadius: "0.5rem",
//               overflow: "hidden",
//             }}
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=800&fit=crop&auto=format"
//               alt="Dr. Nour Al-Hassan"
//               fill
//               style={{ objectFit: "cover" }}
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// gsap old

"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Dr. Nour Al-Hassan",
    role: "Lead Physician · Founder",
    img: "/images/doctor5.jpg",
  },
  {
    name: "Dr. Sara Khalil",
    role: "Aesthetic Medicine Fellow",
    img: "/images/doctor2.jpg",
  },
  {
    name: "Layla Hassan",
    role: "Patient Experience Lead",
    img: "/images/doctor3.jpg",
  },
  {
    name: "Fatima Al-Mansoori",
    role: "Senior Nurse Practitioner",
    img: "/images/doctor4.jpg",
  },
  {
    name: "Rania Youssef",
    role: "Skincare Specialist",
    img: "/images/doctor1.jpg",
  },
  {
    name: "Hana Malik",
    role: "Clinic Coordinator",
    img: "/images/doctor6.jpg",
  },
];

const stats = [
  { count: 1452, suffix: "+", label: "Treatments Performed" },
  { count: 11, suffix: "yrs", label: "Years of Excellence" },
  { count: 4, suffix: ".8", label: "Google Rating" },
  { count: 95, suffix: "%", label: "Repeat Patients" },
];

function TeamCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: cardRef });

  const rotations = [-3, -1, 2, -2, 1, -4];
  const restRot = rotations[index % rotations.length];

  // eslint-disable-next-line react-hooks/refs
  const handleMouseEnter = contextSafe(() => {
    gsap.to(cardRef.current, {
      y: -10,
      rotation: 0,
      scale: 1.04,
      zIndex: 20,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(metaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power2.out",
    });
  });

  // eslint-disable-next-line react-hooks/refs
  const handleMouseLeave = contextSafe(() => {
    gsap.to(cardRef.current, {
      y: 0,
      rotation: restRot,
      scale: 1,
      zIndex: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.6)",
    });
    gsap.to(metaRef.current, {
      opacity: 0,
      y: 8,
      duration: 0.3,
      ease: "power2.in",
    });
  });

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        aspectRatio: "3/4",
        borderRadius: "1.375rem",
        overflow: "hidden",
        cursor: "pointer",
        willChange: "transform",
        transform: `rotate(${restRot}deg)`,
        boxShadow:
          "0 24px 40px -16px rgba(0,0,0,0.18), 0 10px 22px -6px rgba(0,0,0,0.1)",
      }}
    >
      <Image
        src={member.img}
        alt={member.name}
        fill
        style={{ objectFit: "cover", objectPosition: "center top" }}
        sizes="(max-width: 768px) 50vw, 25vw"
      />

      {/* Overlay meta — hidden until hover */}
      <div
        ref={metaRef}
        style={{
          position: "absolute",
          left: "0.875rem",
          right: "0.875rem",
          bottom: "0.875rem",
          backgroundColor: "rgba(20,10,6,0.72)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "#fafaf7",
          padding: "0.75rem 1rem",
          borderRadius: "0.875rem",
          border: "1px solid rgba(255,255,255,0.12)",
          opacity: 0,
          transform: "translateY(8px)",
          zIndex: 3,
        }}
      >
        <p style={{ fontWeight: 700, fontSize: "13px" }}>{member.name}</p>
        <p
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "2px",
            letterSpacing: "0.03em",
          }}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Head elements fade up — same as template
      gsap.from(".team-eyebrow, .team-h2, .team-desc", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
        },
      });

      // Cards reveal with stagger + scale + rotation — same as template
      gsap.from(".t-card-wrap", {
        opacity: 0,
        y: 80,
        scale: 0.9,
        duration: 1,
        stagger: 0.08,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });

      // Stats bar reveal — same as template
      gsap.from(statsInnerRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.97,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      });

      // Counter animation — same as template
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          document.querySelectorAll(".stat-num-span").forEach((el) => {
            const target = parseFloat(el.getAttribute("data-count") || "0");
            const counter = { v: 0 };

            gsap.to(counter, {
              v: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.floor(counter.v).toLocaleString();
              },
            });
          });
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="team"
      ref={sectionRef}
      style={{ backgroundColor: "#fdf6ee", padding: "0 0 6rem" }}
    >
      {/* ── SECTION 2: TEAM GRID ── */}
      <div style={{ padding: "6rem 2.5rem 3rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          {/* Head */}
          <div
            ref={headRef}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "2.5rem",
              marginBottom: "3.5rem",
            }}
          >
            <div>
              {/* Eyebrow with dot */}
              <div
                className="team-eyebrow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  fontSize: "11px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#8b847a",
                  fontWeight: 500,
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#CB8530",
                    boxShadow: "0 0 0 3px rgba(203,133,48,0.2)",
                    flexShrink: 0,
                  }}
                />
                The Crew · Six Strong
              </div>

              <h2
                className="team-h2"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  color: "#111111",
                  lineHeight: 1.05,
                  maxWidth: "32rem",
                }}
              >
                Physicians, specialists
                <br />
                and the{" "}
                <em style={{ fontStyle: "italic", color: "#CB8530" }}>
                  quietly brilliant.
                </em>
              </h2>
            </div>

            <p
              className="team-desc"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#555550",
                maxWidth: "22rem",
              }}
            >
              Every person you see here is involved in your care. No handoffs,
              no strangers — direct attention from the people who trained for
              this.
            </p>
          </div>

          {/* Grid — 4 columns like template, wraps on mobile */}
          <div ref={gridRef} className="team-grid">
            {teamMembers.map((member, i) => (
              <div key={member.name} className="t-card-wrap">
                <TeamCard member={member} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 3: STATS ── */}
      <div ref={statsRef} style={{ padding: "2rem 2.5rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div
            ref={statsInnerRef}
            className="stats-grid"
            style={{
              backgroundColor: "#1a1208",
              borderRadius: "2.25rem",
              padding: "5rem 3.75rem",
              // display: "grid",
              // gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
              // gap: "2.5rem",
              // alignItems: "end",
              boxShadow:
                "0 40px 80px -30px rgba(20,8,0,0.45), 0 16px 32px -12px rgba(20,8,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow orbs — same as template ::before ::after */}
            <div
              style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(203,133,48,0.3), transparent 65%)",
                top: "-200px",
                right: "-100px",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(212,153,31,0.15), transparent 65%)",
                bottom: "-150px",
                left: "20%",
                filter: "blur(30px)",
                pointerEvents: "none",
              }}
            />

            {/* Heading */}
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 300,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
                color: "#f4edde",
                position: "relative",
                zIndex: 1,
              }}
            >
              Physician-led.
              <br />
              <em style={{ fontStyle: "italic", color: "#d4991f" }}>
                Every time.
              </em>
            </h3>

            {/* Stat blocks */}
            {stats.map((stat) => (
              <div key={stat.label} style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "3px",
                    fontWeight: 700,
                    fontSize: "clamp(2.75rem, 4.5vw, 4.25rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "#f4edde",
                  }}
                >
                  <span className="stat-num-span" data-count={stat.count}>
                    0
                  </span>
                  <small
                    style={{
                      fontSize: "0.42em",
                      color: "#8b847a",
                      fontWeight: 500,
                    }}
                  >
                    {stat.suffix}
                  </small>
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "#8b847a",
                    marginTop: "0.875rem",
                    paddingTop: "0.875rem",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const teamMembers = [
//   {
//     name: "Lauren",
//     role: "Lead Physician · Founder",
//     img: "/images/doctor5.jpg",
//   },
//   {
//     name: "Veronica",
//     role: "Aesthetic Medicine Fellow",
//     img: "/images/doctor2.jpg",
//   },
//   {
//     name: "Amy",
//     role: "Patient Experience Lead",
//     img: "/images/doctor3.jpg",
//   },
//   {
//     name: "Haejin",
//     role: "Senior Nurse Practitioner",
//     img: "/images/doctor4.jpg",
//   },
//   {
//     name: "Chloe",
//     role: "Skincare Specialist",
//     img: "/images/doctor1.jpg",
//   },
//   {
//     name: "Nancy",
//     role: "Clinic Coordinator",
//     img: "/images/doctor6.jpg",
//   },
// ];

// const stats = [
//   { count: 1452, suffix: "+", label: "Treatments Performed" },
//   { count: 11, suffix: "yrs", label: "Years of Excellence" },
//   { count: 4, suffix: ".8", label: "Google Rating" },
//   { count: 95, suffix: "%", label: "Repeat Patients" },
// ];

// function TeamCard({
//   member,
//   index,
// }: {
//   member: (typeof teamMembers)[0];
//   index: number;
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const metaRef = useRef<HTMLDivElement>(null);

//   const { contextSafe } = useGSAP({ scope: cardRef });

//   const rotations = [-3, -1, 2, -2, 1, -4];
//   const restRot = rotations[index % rotations.length];

//   // eslint-disable-next-line react-hooks/refs
//   const handleMouseEnter = contextSafe(() => {
//     gsap.to(cardRef.current, {
//       y: -10,
//       rotation: 0,
//       scale: 1.04,
//       zIndex: 20,
//       duration: 0.4,
//       ease: "power2.out",
//     });
//     gsap.to(metaRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.35,
//       ease: "power2.out",
//     });
//   });

//   // eslint-disable-next-line react-hooks/refs
//   const handleMouseLeave = contextSafe(() => {
//     gsap.to(cardRef.current, {
//       y: 0,
//       rotation: restRot,
//       scale: 1,
//       zIndex: 1,
//       duration: 0.8,
//       ease: "elastic.out(1, 0.6)",
//     });
//     gsap.to(metaRef.current, {
//       opacity: 0,
//       y: 8,
//       duration: 0.3,
//       ease: "power2.in",
//     });
//   });

//   return (
//     <div
//       ref={cardRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         position: "relative",
//         aspectRatio: "3/4",
//         borderRadius: "1.375rem",
//         overflow: "hidden",
//         cursor: "pointer",
//         willChange: "transform",
//         transform: `rotate(${restRot}deg)`,
//         boxShadow:
//           "0 24px 40px -16px rgba(0,0,0,0.18), 0 10px 22px -6px rgba(0,0,0,0.1)",
//       }}
//     >
//       <Image
//         src={member.img}
//         alt={member.name}
//         fill
//         style={{ objectFit: "cover", objectPosition: "center top" }}
//         sizes="(max-width: 768px) 50vw, 25vw"
//       />

//       {/* Overlay meta — hidden until hover */}
//       <div
//         ref={metaRef}
//         style={{
//           position: "absolute",
//           left: "0.875rem",
//           right: "0.875rem",
//           bottom: "0.875rem",
//           backgroundColor: "rgba(20,10,6,0.72)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)",
//           color: "#fafaf7",
//           padding: "0.75rem 1rem",
//           borderRadius: "0.875rem",
//           border: "1px solid rgba(255,255,255,0.12)",
//           opacity: 0,
//           transform: "translateY(8px)",
//           zIndex: 3,
//         }}
//       >
//         <p style={{ fontWeight: 700, fontSize: "13px" }}>{member.name}</p>
//         <p
//           style={{
//             fontSize: "11px",
//             color: "rgba(255,255,255,0.6)",
//             marginTop: "2px",
//             letterSpacing: "0.03em",
//           }}
//         >
//           {member.role}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function TeamSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const headRef = useRef<HTMLDivElement>(null);
//   const gridRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);
//   const statsInnerRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       // 1. Set initial states FIRST — before any animations
//       gsap.set(".t-card-wrap, .team-eyebrow, .team-h2, .team-desc", {
//         opacity: 0,
//       });
//       gsap.set(statsInnerRef.current, { opacity: 0 });

//       gsap.fromTo(
//         ".team-eyebrow, .team-h2, .team-desc",
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.9,
//           stagger: 0.1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: headRef.current,
//             start: "top 85%",
//           },
//         },
//       );

//       gsap.fromTo(
//         ".t-card-wrap",
//         { opacity: 0, y: 80, scale: 0.9 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           stagger: 0.08,
//           ease: "back.out(1.3)",
//           scrollTrigger: {
//             trigger: gridRef.current,
//             start: "top 85%",
//             invalidateOnRefresh: true, // ← recalculates on resize/refresh
//             refreshPriority: 1, // ← runs before other triggers
//           },
//         },
//       );

//       gsap.fromTo(
//         statsInnerRef.current,
//         { opacity: 0, y: 60, scale: 0.97 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: statsRef.current,
//             start: "top 85%",
//           },
//         },
//       );

//       ScrollTrigger.create({
//         trigger: statsRef.current,
//         start: "top 80%",
//         once: true,
//         onEnter: () => {
//           document.querySelectorAll(".stat-num-span").forEach((el) => {
//             const counter = { v: 0 };
//             const target = parseFloat(el.getAttribute("data-count") || "0");
//             gsap.to(counter, {
//               v: target,
//               duration: 2,
//               ease: "power2.out",
//               onUpdate: () => {
//                 el.textContent = Math.floor(counter.v).toLocaleString();
//               },
//             });
//           });
//         },
//       });

//       // Refresh after fonts + images settle on mobile
//       ScrollTrigger.refresh();

//       const handleLoad = () => ScrollTrigger.refresh();
//       window.addEventListener("load", handleLoad);
//       return () => window.removeEventListener("load", handleLoad);
//     },
//     { scope: sectionRef },
//   );

//   return (
//     <section
//       id="team"
//       ref={sectionRef}
//       style={{ backgroundColor: "#fdf6ee", padding: "0 0 6rem" }}
//     >
//       {/* ── SECTION 2: TEAM GRID ── */}
//       <div style={{ padding: "6rem 2.5rem 3rem" }}>
//         <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
//           {/* Head */}
//           <div
//             ref={headRef}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//               flexWrap: "wrap",
//               gap: "2.5rem",
//               marginBottom: "3.5rem",
//             }}
//           >
//             <div>
//               {/* Eyebrow with dot */}
//               <div
//                 className="team-eyebrow"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "0.625rem",
//                   fontSize: "11px",
//                   letterSpacing: "0.28em",
//                   textTransform: "uppercase",
//                   color: "#8b847a",
//                   fontWeight: 500,
//                   marginBottom: "1rem",
//                 }}
//               >
//                 <span
//                   style={{
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     backgroundColor: "#CB8530",
//                     boxShadow: "0 0 0 3px rgba(203,133,48,0.2)",
//                     flexShrink: 0,
//                   }}
//                 />
//                 The Crew · Six Strong
//               </div>

//               <h2
//                 className="team-h2"
//                 style={{
//                   fontFamily: "var(--font-mono)",
//                   fontSize: "clamp(2rem, 4vw, 3.5rem)",
//                   fontWeight: 300,
//                   color: "#111111",
//                   lineHeight: 1.05,
//                   maxWidth: "32rem",
//                 }}
//               >
//                 Physicians, specialists
//                 <br />
//                 and the{" "}
//                 <em style={{ fontStyle: "italic", color: "#CB8530" }}>
//                   quietly brilliant.
//                 </em>
//               </h2>
//             </div>

//             <p
//               className="team-desc"
//               style={{
//                 fontSize: "15px",
//                 lineHeight: 1.65,
//                 color: "#555550",
//                 maxWidth: "22rem",
//               }}
//             >
//               Every person you see here is involved in your care. No handoffs,
//               no strangers — direct attention from the people who trained for
//               this.
//             </p>
//           </div>

//           {/* Grid — 4 columns like template, wraps on mobile */}
//           <div ref={gridRef} className="team-grid">
//             {teamMembers.map((member, i) => (
//               <div key={member.name} className="t-card-wrap">
//                 <TeamCard member={member} index={i} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION 3: STATS ── */}
//       <div ref={statsRef} style={{ padding: "2rem 2.5rem 0" }}>
//         <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
//           <div
//             ref={statsInnerRef}
//             className="stats-grid"
//             style={{
//               backgroundColor: "#1a1208",
//               borderRadius: "2.25rem",
//               padding: "5rem 3.75rem",
//               // display: "grid",
//               // gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
//               // gap: "2.5rem",
//               // alignItems: "end",
//               boxShadow:
//                 "0 40px 80px -30px rgba(20,8,0,0.45), 0 16px 32px -12px rgba(20,8,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             {/* Glow orbs — same as template ::before ::after */}
//             <div
//               style={{
//                 position: "absolute",
//                 width: "500px",
//                 height: "500px",
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle, rgba(203,133,48,0.3), transparent 65%)",
//                 top: "-200px",
//                 right: "-100px",
//                 filter: "blur(40px)",
//                 pointerEvents: "none",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 width: "350px",
//                 height: "350px",
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle, rgba(212,153,31,0.15), transparent 65%)",
//                 bottom: "-150px",
//                 left: "20%",
//                 filter: "blur(30px)",
//                 pointerEvents: "none",
//               }}
//             />

//             {/* Heading */}
//             <h3
//               style={{
//                 fontFamily: "var(--font-mono)",
//                 fontWeight: 300,
//                 fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
//                 lineHeight: 1.1,
//                 color: "#f4edde",
//                 position: "relative",
//                 zIndex: 1,
//               }}
//             >
//               Physician-led.
//               <br />
//               <em style={{ fontStyle: "italic", color: "#d4991f" }}>
//                 Every time.
//               </em>
//             </h3>

//             {/* Stat blocks */}
//             {stats.map((stat) => (
//               <div key={stat.label} style={{ position: "relative", zIndex: 1 }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "baseline",
//                     gap: "3px",
//                     fontWeight: 700,
//                     fontSize: "clamp(2.75rem, 4.5vw, 4.25rem)",
//                     lineHeight: 1,
//                     letterSpacing: "-0.04em",
//                     color: "#f4edde",
//                   }}
//                 >
//                   <span className="stat-num-span" data-count={stat.count}>
//                     0
//                   </span>
//                   <small
//                     style={{
//                       fontSize: "0.42em",
//                       color: "#8b847a",
//                       fontWeight: 500,
//                     }}
//                   >
//                     {stat.suffix}
//                   </small>
//                 </div>
//                 <p
//                   style={{
//                     fontSize: "11px",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.16em",
//                     color: "#8b847a",
//                     marginTop: "0.875rem",
//                     paddingTop: "0.875rem",
//                     borderTop: "1px solid rgba(255,255,255,0.1)",
//                   }}
//                 >
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ---after issue -----

// "use client";

// import Image from "next/image";
// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const teamMembers = [
//   {
//     name: "Dr. Nour Al-Hassan",
//     role: "Lead Physician · Founder",
//     img: "/images/doctor5.jpg",
//   },
//   {
//     name: "Dr. Sara Khalil",
//     role: "Aesthetic Medicine Fellow",
//     img: "/images/doctor2.jpg",
//   },
//   {
//     name: "Layla Hassan",
//     role: "Patient Experience Lead",
//     img: "/images/doctor3.jpg",
//   },
//   {
//     name: "Fatima Al-Mansoori",
//     role: "Senior Nurse Practitioner",
//     img: "/images/doctor4.jpg",
//   },
//   {
//     name: "Rania Youssef",
//     role: "Skincare Specialist",
//     img: "/images/doctor1.jpg",
//   },
//   {
//     name: "Hana Malik",
//     role: "Clinic Coordinator",
//     img: "/images/doctor6.jpg",
//   },
// ];

// const stats = [
//   { count: 1452, suffix: "+", label: "Treatments Performed" },
//   { count: 11, suffix: "yrs", label: "Years of Excellence" },
//   { count: 5, suffix: ".0", label: "Google Rating" },
//   { count: 95, suffix: "%", label: "Repeat Patients" },
// ];

// function TeamCard({
//   member,
//   index,
// }: {
//   member: (typeof teamMembers)[0];
//   index: number;
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const metaRef = useRef<HTMLDivElement>(null);

//   const { contextSafe } = useGSAP({ scope: cardRef });

//   const rotations = [-3, -1, 2, -2, 1, -4];
//   const restRot = rotations[index % rotations.length];

//   // eslint-disable-next-line react-hooks/refs
//   const handleMouseEnter = contextSafe(() => {
//     gsap.to(cardRef.current, {
//       y: -10,
//       rotation: 0,
//       scale: 1.04,
//       zIndex: 20,
//       duration: 0.4,
//       ease: "power2.out",
//     });
//     gsap.to(metaRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.35,
//       ease: "power2.out",
//     });
//   });

//   // eslint-disable-next-line react-hooks/refs
//   const handleMouseLeave = contextSafe(() => {
//     gsap.to(cardRef.current, {
//       y: 0,
//       rotation: restRot,
//       scale: 1,
//       zIndex: 1,
//       duration: 0.8,
//       ease: "elastic.out(1, 0.6)",
//     });
//     gsap.to(metaRef.current, {
//       opacity: 0,
//       y: 8,
//       duration: 0.3,
//       ease: "power2.in",
//     });
//   });

//   return (
//     <div
//       ref={cardRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         position: "relative",
//         aspectRatio: "3/4",
//         borderRadius: "1.375rem",
//         overflow: "hidden",
//         cursor: "pointer",
//         willChange: "transform",
//         transform: `rotate(${restRot}deg)`,
//         boxShadow:
//           "0 24px 40px -16px rgba(0,0,0,0.18), 0 10px 22px -6px rgba(0,0,0,0.1)",
//       }}
//     >
//       <Image
//         src={member.img}
//         alt={member.name}
//         fill
//         style={{ objectFit: "cover", objectPosition: "center top" }}
//         sizes="(max-width: 768px) 50vw, 20vw"
//       />

//       {/* Overlay meta — hidden until hover */}
//       <div
//         ref={metaRef}
//         style={{
//           position: "absolute",
//           left: "0.875rem",
//           right: "0.875rem",
//           bottom: "0.875rem",
//           backgroundColor: "rgba(20,10,6,0.72)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)",
//           color: "#fafaf7",
//           padding: "0.75rem 1rem",
//           borderRadius: "0.875rem",
//           border: "1px solid rgba(255,255,255,0.12)",
//           opacity: 0,
//           transform: "translateY(8px)",
//           zIndex: 3,
//         }}
//       >
//         <p style={{ fontWeight: 700, fontSize: "13px" }}>{member.name}</p>
//         <p
//           style={{
//             fontSize: "11px",
//             color: "rgba(255,255,255,0.6)",
//             marginTop: "2px",
//             letterSpacing: "0.03em",
//           }}
//         >
//           {member.role}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function TeamSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const headRef = useRef<HTMLDivElement>(null);
//   const gridRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);
//   const statsInnerRef = useRef<HTMLDivElement>(null);

//   // Refresh ScrollTrigger after all images and fonts have loaded
//   // This fixes the "fires too early / large delay" issue caused by
//   // layout shift from images loading after ScrollTrigger measured positions
//   useEffect(() => {
//     const handleLoad = () => ScrollTrigger.refresh();
//     window.addEventListener("load", handleLoad);
//     return () => window.removeEventListener("load", handleLoad);
//   }, []);

//   useGSAP(
//     () => {
//       // Head elements fade up
//       gsap.from(".team-eyebrow, .team-h2, .team-desc", {
//         opacity: 0,
//         y: 30,
//         duration: 0.9,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: headRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });

//       // Cards reveal with stagger + scale + rotation
//       gsap.from(".t-card-wrap", {
//         opacity: 0,
//         y: 80,
//         scale: 0.9,
//         duration: 1,
//         stagger: 0.08,
//         ease: "back.out(1.3)",
//         scrollTrigger: {
//           trigger: gridRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });

//       // Stats bar reveal
//       gsap.from(statsInnerRef.current, {
//         opacity: 0,
//         y: 60,
//         scale: 0.97,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: statsRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });

//       // Counter animation
//       ScrollTrigger.create({
//         trigger: statsRef.current,
//         start: "top 75%",
//         once: true,
//         onEnter: () => {
//           document.querySelectorAll(".stat-num-span").forEach((el) => {
//             const target = parseFloat(el.getAttribute("data-count") || "0");
//             const counter = { v: 0 };

//             gsap.to(counter, {
//               v: target,
//               duration: 2,
//               ease: "power2.out",
//               onUpdate: () => {
//                 el.textContent = Math.floor(counter.v).toLocaleString();
//               },
//             });
//           });
//         },
//       });

//       // Refresh after mount so any layout shifts from fonts/images are accounted for
//       ScrollTrigger.refresh();
//     },
//     { scope: sectionRef },
//   );

//   return (
//     <section
//       id="team"
//       ref={sectionRef}
//       style={{ backgroundColor: "#fdf6ee", padding: "0 0 6rem" }}
//     >
//       {/* ── SECTION 2: TEAM GRID ── */}
//       <div style={{ padding: "6rem 2.5rem 3rem" }}>
//         <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
//           {/* Head */}
//           <div
//             ref={headRef}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//               flexWrap: "wrap",
//               gap: "2.5rem",
//               marginBottom: "3.5rem",
//             }}
//           >
//             <div>
//               {/* Eyebrow with dot */}
//               <div
//                 className="team-eyebrow"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "0.625rem",
//                   fontSize: "11px",
//                   letterSpacing: "0.28em",
//                   textTransform: "uppercase",
//                   color: "#8b847a",
//                   fontWeight: 500,
//                   marginBottom: "1rem",
//                 }}
//               >
//                 <span
//                   style={{
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     backgroundColor: "#CB8530",
//                     boxShadow: "0 0 0 3px rgba(203,133,48,0.2)",
//                     flexShrink: 0,
//                   }}
//                 />
//                 The Crew · Six Strong
//               </div>

//               <h2
//                 className="team-h2"
//                 style={{
//                   fontFamily: "var(--font-mono)",
//                   fontSize: "clamp(2rem, 4vw, 3.5rem)",
//                   fontWeight: 300,
//                   color: "#111111",
//                   lineHeight: 1.05,
//                   maxWidth: "32rem",
//                 }}
//               >
//                 Physicians, specialists
//                 <br />
//                 and the{" "}
//                 <em style={{ fontStyle: "italic", color: "#CB8530" }}>
//                   quietly brilliant.
//                 </em>
//               </h2>
//             </div>

//             <p
//               className="team-desc"
//               style={{
//                 fontSize: "15px",
//                 lineHeight: 1.65,
//                 color: "#555550",
//                 maxWidth: "22rem",
//               }}
//             >
//               Every person you see here is involved in your care. No handoffs,
//               no strangers — direct attention from the people who trained for
//               this.
//             </p>
//           </div>

//           {/* Grid */}
//           <div ref={gridRef} className="team-grid">
//             {teamMembers.map((member, i) => (
//               <div key={member.name} className="t-card-wrap">
//                 <TeamCard member={member} index={i} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION 3: STATS ── */}
//       <div ref={statsRef} style={{ padding: "2rem 2.5rem 0" }}>
//         <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
//           <div
//             ref={statsInnerRef}
//             className="stats-grid"
//             style={{
//               backgroundColor: "#1a1208",
//               borderRadius: "2.25rem",
//               padding: "5rem 3.75rem",
//               boxShadow:
//                 "0 40px 80px -30px rgba(20,8,0,0.45), 0 16px 32px -12px rgba(20,8,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             {/* Glow orbs */}
//             <div
//               style={{
//                 position: "absolute",
//                 width: "500px",
//                 height: "500px",
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle, rgba(203,133,48,0.3), transparent 65%)",
//                 top: "-200px",
//                 right: "-100px",
//                 filter: "blur(40px)",
//                 pointerEvents: "none",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 width: "350px",
//                 height: "350px",
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle, rgba(212,153,31,0.15), transparent 65%)",
//                 bottom: "-150px",
//                 left: "20%",
//                 filter: "blur(30px)",
//                 pointerEvents: "none",
//               }}
//             />

//             {/* Heading */}
//             <h3
//               style={{
//                 fontFamily: "var(--font-mono)",
//                 fontWeight: 300,
//                 fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
//                 lineHeight: 1.1,
//                 color: "#f4edde",
//                 position: "relative",
//                 zIndex: 1,
//               }}
//             >
//               Physician-led.
//               <br />
//               <em style={{ fontStyle: "italic", color: "#d4991f" }}>
//                 Every time.
//               </em>
//             </h3>

//             {/* Stat blocks */}
//             {stats.map((stat) => (
//               <div key={stat.label} style={{ position: "relative", zIndex: 1 }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "baseline",
//                     gap: "3px",
//                     fontWeight: 700,
//                     fontSize: "clamp(2.75rem, 4.5vw, 4.25rem)",
//                     lineHeight: 1,
//                     letterSpacing: "-0.04em",
//                     color: "#f4edde",
//                   }}
//                 >
//                   <span className="stat-num-span" data-count={stat.count}>
//                     0
//                   </span>
//                   <small
//                     style={{
//                       fontSize: "0.42em",
//                       color: "#8b847a",
//                       fontWeight: 500,
//                     }}
//                   >
//                     {stat.suffix}
//                   </small>
//                 </div>
//                 <p
//                   style={{
//                     fontSize: "11px",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.16em",
//                     color: "#8b847a",
//                     marginTop: "0.875rem",
//                     paddingTop: "0.875rem",
//                     borderTop: "1px solid rgba(255,255,255,0.1)",
//                   }}
//                 >
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// vnew

// "use client";

// import Image from "next/image";
// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const teamMembers = [
//   {
//     name: "Lauren",
//     role: "Lead Physician · Founder",
//     img: "/images/doctor5.jpg",
//   },
//   {
//     name: "Veronica",
//     role: "Aesthetic Medicine Fellow",
//     img: "/images/doctor2.jpg",
//   },
//   {
//     name: "Amy",
//     role: "Patient Experience Lead",
//     img: "/images/doctor3.jpg",
//   },
//   {
//     name: "Haejin",
//     role: "Senior Nurse Practitioner",
//     img: "/images/doctor4.jpg",
//   },
//   {
//     name: "Chloe",
//     role: "Skincare Specialist",
//     img: "/images/doctor1.jpg",
//   },
//   {
//     name: "Nancy",
//     role: "Clinic Coordinator",
//     img: "/images/doctor6.jpg",
//   },
// ];

// const stats = [
//   { count: 1452, suffix: "+", label: "Treatments Performed" },
//   { count: 11, suffix: "yrs", label: "Years of Excellence" },
//   { count: 4, suffix: ".8", label: "Google Rating" },
//   { count: 95, suffix: "%", label: "Repeat Patients" },
// ];

// function TeamCard({
//   member,
//   index,
// }: {
//   member: (typeof teamMembers)[0];
//   index: number;
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const metaRef = useRef<HTMLDivElement>(null);

//   const { contextSafe } = useGSAP({ scope: cardRef });

//   const rotations = [-3, -1, 2, -2, 1, -4];
//   const restRot = rotations[index % rotations.length];

//   const handleMouseEnter = contextSafe(() => {
//     gsap.to(cardRef.current, {
//       y: -10,
//       rotation: 0,
//       scale: 1.04,
//       zIndex: 20,
//       duration: 0.4,
//       ease: "power2.out",
//     });
//     gsap.to(metaRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.35,
//       ease: "power2.out",
//     });
//   });

//   const handleMouseLeave = contextSafe(() => {
//     gsap.to(cardRef.current, {
//       y: 0,
//       rotation: restRot,
//       scale: 1,
//       zIndex: 1,
//       duration: 0.8,
//       ease: "elastic.out(1, 0.6)",
//     });
//     gsap.to(metaRef.current, {
//       opacity: 0,
//       y: 8,
//       duration: 0.3,
//       ease: "power2.in",
//     });
//   });

//   return (
//     <div
//       ref={cardRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         position: "relative",
//         aspectRatio: "3/4",
//         borderRadius: "1.375rem",
//         overflow: "hidden",
//         cursor: "pointer",
//         willChange: "transform",
//         transform: `rotate(${restRot}deg)`,
//         background:
//           "linear-gradient(180deg, #B8752B 0%, #CB8530 35%, #DDA85C 70%, #F0D2A0 100%)",
//         boxShadow:
//           "0 24px 40px -16px rgba(150,100,30,0.32), 0 10px 22px -6px rgba(120,80,20,0.2), inset 0 2px 0 rgba(255,235,200,0.4), inset 0 -3px 6px rgba(90,55,10,0.25)",
//       }}
//     >
//       {/* Sheen overlay — matches template's .t-card::before */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(155deg, rgba(255,255,255,0.2) 0%, transparent 30%, transparent 70%, rgba(80,45,5,0.2) 100%)",
//           zIndex: 2,
//           pointerEvents: "none",
//         }}
//       />

//       <Image
//         src={member.img}
//         alt={member.name}
//         fill
//         style={{ objectFit: "cover", objectPosition: "center top" }}
//         sizes="(max-width: 768px) 50vw, 33vw"
//       />

//       {/* Overlay meta — hidden until hover */}
//       <div
//         ref={metaRef}
//         style={{
//           position: "absolute",
//           left: "0.875rem",
//           right: "0.875rem",
//           bottom: "0.875rem",
//           backgroundColor: "rgba(20,10,6,0.72)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)",
//           color: "#fafaf7",
//           padding: "0.75rem 1rem",
//           borderRadius: "0.875rem",
//           border: "1px solid rgba(255,255,255,0.12)",
//           opacity: 0,
//           transform: "translateY(8px)",
//           zIndex: 3,
//         }}
//       >
//         <p style={{ fontWeight: 700, fontSize: "13px" }}>{member.name}</p>
//         <p
//           style={{
//             fontSize: "11px",
//             color: "rgba(255,255,255,0.6)",
//             marginTop: "2px",
//             letterSpacing: "0.03em",
//           }}
//         >
//           {member.role}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function TeamSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const headRef = useRef<HTMLDivElement>(null);
//   const gridRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);
//   const statsInnerRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       gsap.from(".team-eyebrow, .team-h2, .team-desc", {
//         opacity: 0,
//         y: 30,
//         duration: 0.9,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: headRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(".t-card-wrap", {
//         opacity: 0,
//         y: 80,
//         scale: 0.9,
//         duration: 1,
//         stagger: 0.08,
//         ease: "back.out(1.3)",
//         scrollTrigger: {
//           trigger: gridRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(statsInnerRef.current, {
//         opacity: 0,
//         y: 60,
//         scale: 0.97,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: statsRef.current,
//           start: "top 80%",
//         },
//       });

//       ScrollTrigger.create({
//         trigger: statsRef.current,
//         start: "top 75%",
//         once: true,
//         onEnter: () => {
//           document.querySelectorAll(".stat-num-span").forEach((el) => {
//             const target = parseFloat(el.getAttribute("data-count") || "0");
//             const counter = { v: 0 };

//             gsap.to(counter, {
//               v: target,
//               duration: 2,
//               ease: "power2.out",
//               onUpdate: () => {
//                 el.textContent = Math.floor(counter.v).toLocaleString();
//               },
//             });
//           });
//         },
//       });

//       // real-device layout shift safety
//       const onLoad = () => ScrollTrigger.refresh();
//       window.addEventListener("load", onLoad);
//       return () => window.removeEventListener("load", onLoad);
//     },
//     { scope: sectionRef },
//   );

//   return (
//     <section
//       id="team"
//       ref={sectionRef}
//       style={{ backgroundColor: "#fdf6ee", padding: "0 0 6rem" }}
//     >
//       {/* ── SECTION 2: TEAM GRID ── */}
//       <div style={{ padding: "6rem 2.5rem 3rem" }}>
//         <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
//           {/* Head */}
//           <div
//             ref={headRef}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//               flexWrap: "wrap",
//               gap: "2.5rem",
//               marginBottom: "3.5rem",
//             }}
//           >
//             <div>
//               <div
//                 className="team-eyebrow"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "0.625rem",
//                   fontSize: "11px",
//                   letterSpacing: "0.28em",
//                   textTransform: "uppercase",
//                   color: "#8b847a",
//                   fontWeight: 500,
//                   marginBottom: "1rem",
//                 }}
//               >
//                 <span
//                   style={{
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     backgroundColor: "#CB8530",
//                     boxShadow: "0 0 0 3px rgba(203,133,48,0.2)",
//                     flexShrink: 0,
//                   }}
//                 />
//                 The Crew · Six Strong
//               </div>

//               <h2
//                 className="team-h2"
//                 style={{
//                   fontFamily: "var(--font-mono)",
//                   fontSize: "clamp(2rem, 4vw, 3.5rem)",
//                   fontWeight: 300,
//                   color: "#111111",
//                   lineHeight: 1.05,
//                   maxWidth: "32rem",
//                 }}
//               >
//                 Physicians, specialists
//                 <br />
//                 and the{" "}
//                 <em style={{ fontStyle: "italic", color: "#CB8530" }}>
//                   quietly brilliant.
//                 </em>
//               </h2>
//             </div>

//             <p
//               className="team-desc"
//               style={{
//                 fontSize: "15px",
//                 lineHeight: 1.65,
//                 color: "#555550",
//                 maxWidth: "22rem",
//               }}
//             >
//               Every person you see here is involved in your care. No handoffs,
//               no strangers — direct attention from the people who trained for
//               this.
//             </p>
//           </div>

//           {/* Grid — 3 columns, wraps on mobile */}
//           <div ref={gridRef} className="team-grid">
//             {teamMembers.map((member, i) => (
//               <div key={member.name} className="t-card-wrap">
//                 <TeamCard member={member} index={i} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── SECTION 3: STATS ── */}
//       <div ref={statsRef} style={{ padding: "2rem 2.5rem 0" }}>
//         <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
//           <div
//             ref={statsInnerRef}
//             className="stats-grid"
//             style={{
//               backgroundColor: "#1a1208",
//               borderRadius: "2.25rem",
//               padding: "5rem 3.75rem",
//               boxShadow:
//                 "0 40px 80px -30px rgba(20,8,0,0.45), 0 16px 32px -12px rgba(20,8,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 width: "500px",
//                 height: "500px",
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle, rgba(203,133,48,0.3), transparent 65%)",
//                 top: "-200px",
//                 right: "-100px",
//                 filter: "blur(40px)",
//                 pointerEvents: "none",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 width: "350px",
//                 height: "350px",
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle, rgba(212,153,31,0.15), transparent 65%)",
//                 bottom: "-150px",
//                 left: "20%",
//                 filter: "blur(30px)",
//                 pointerEvents: "none",
//               }}
//             />

//             <h3
//               style={{
//                 fontFamily: "var(--font-mono)",
//                 fontWeight: 300,
//                 fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
//                 lineHeight: 1.1,
//                 color: "#f4edde",
//                 position: "relative",
//                 zIndex: 1,
//               }}
//             >
//               Physician-led.
//               <br />
//               <em style={{ fontStyle: "italic", color: "#d4991f" }}>
//                 Every time.
//               </em>
//             </h3>

//             {stats.map((stat) => (
//               <div key={stat.label} style={{ position: "relative", zIndex: 1 }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "baseline",
//                     gap: "3px",
//                     fontWeight: 700,
//                     fontSize: "clamp(2.75rem, 4.5vw, 4.25rem)",
//                     lineHeight: 1,
//                     letterSpacing: "-0.04em",
//                     color: "#f4edde",
//                   }}
//                 >
//                   <span className="stat-num-span" data-count={stat.count}>
//                     0
//                   </span>
//                   <small
//                     style={{
//                       fontSize: "0.42em",
//                       color: "#8b847a",
//                       fontWeight: 500,
//                     }}
//                   >
//                     {stat.suffix}
//                   </small>
//                 </div>
//                 <p
//                   style={{
//                     fontSize: "11px",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.16em",
//                     color: "#8b847a",
//                     marginTop: "0.875rem",
//                     paddingTop: "0.875rem",
//                     borderTop: "1px solid rgba(255,255,255,0.1)",
//                   }}
//                 >
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .team-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 1.5rem;
//         }
//         .stats-grid {
//           display: grid;
//           grid-template-columns: 1.3fr repeat(4, 1fr);
//           gap: 2rem;
//           align-items: end;
//         }
//         @media (max-width: 1100px) {
//           .team-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//           .stats-grid {
//             grid-template-columns: repeat(2, 1fr);
//             padding: 3.5rem 2rem !important;
//           }
//         }
//         @media (max-width: 640px) {
//           .team-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 0.875rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
