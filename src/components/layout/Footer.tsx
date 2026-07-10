// import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";
// import { FaInstagram } from "react-icons/fa";
// import { WHATSAPP_URL } from "@/lib/data";

// export default function Footer() {
//   const treatments = ["Anti-Wrinkle", "Dermal Fillers", "Skin Rejuvenation", "Laser Resurfacing", "PRP Therapy", "Thread Lift"];

//   return (
//     <footer className="bg-[#111009] py-16" role="contentinfo">
//       <div className="max-w-6xl mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
//           <div className="md:col-span-2">
//             <p style={{ fontFamily: "var(--font-serif)" }} className="text-2xl font-light italic text-[#f7ede0] mb-3">
//               Aesthetics
//             </p>
//             <p className="text-xs text-[#f7ede0]/40 leading-relaxed max-w-xs mb-5">
//               Physician-led aesthetic medicine in Lahore. Natural results, always. DHA Licensed Clinic.
//             </p>
//             <div className="flex gap-3">
//               <a href="https://www.instagram.com/saesthetics" target="_blank" rel="noopener noreferrer" aria-label="Aesthetics on Instagram" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
//                 <FaInstagram size={14} />
//               </a>
//               <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Aesthetics on WhatsApp" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
//                 <MessageCircle size={14} />
//               </a>
//             </div>
//           </div>

//           <nav aria-label="Treatment links">
//             <p className="text-[10px] font-semibold tracking-widest uppercase text-[#CB8530] mb-4">Treatments</p>
//             <ul className="space-y-2">
//               {treatments.map((t) => (
//                 <li key={t}>
//                   <a href="#services" className="text-xs text-[#f7ede0]/40 hover:text-[#f7ede0]/70 transition-colors">{t}</a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <address className="not-italic">
//             <p className="text-[10px] font-semibold tracking-widest uppercase text-[#CB8530] mb-4">Contact</p>
//             <div className="space-y-3">
//               <div className="flex items-start gap-2 text-xs text-[#f7ede0]/40">
//                 <MapPin size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
//                 <span>Jumeirah Road, Lahore<br />UAE</span>
//               </div>
//               <div className="flex items-center gap-2 text-xs text-[#f7ede0]/40">
//                 <Phone size={12} aria-hidden="true" />
//                 <a href="tel:+97140000000" className="hover:text-[#f7ede0]/70 transition-colors">+971 4 000 0000</a>
//               </div>
//               <div className="flex items-center gap-2 text-xs text-[#f7ede0]/40">
//                 <Clock size={12} aria-hidden="true" />
//                 <span>Mon–Sat 9AM–7PM</span>
//               </div>
//             </div>
//             <p className="mt-5 text-[10px] text-[#f7ede0]/25">
//               DHA License No. AE12847<br />Regulated by Lahore Health Authority
//             </p>
//           </address>
//         </div>

//         <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-[10px] text-[#f7ede0]/25">© 2024 Aesthetics. All rights reserved.</p>
//           <div className="flex gap-6">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
//               <a key={link} href="#" className="text-[10px] text-[#f7ede0]/25 hover:text-[#f7ede0]/50 transition-colors">{link}</a>
//             ))}
//           </div>
//           <a href="#booking" className="text-[10px] font-medium text-[#CB8530] hover:text-[#d4991f] transition-colors">
//             Ready to Begin? Book Today →
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// chrome

// import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
// import { FaInstagram } from "react-icons/fa";
// import { business } from "@/lib/data";

// const treatments = ["Anti-Wrinkle", "Dermal Fillers", "Skin Rejuvenation", "Laser Resurfacing", "PRP Therapy", "Thread Lift"];
// const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

// export function Footer() {
//   return (
//     <footer className="bg-[#111009] py-16">
//       <div className="max-w-6xl mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
//           <div className="md:col-span-2">
//             <div className="font-serif text-2xl font-light italic text-[#f7ede0] mb-3">{business.name}</div>
//             <p className="text-xs text-[#f7ede0]/40 leading-relaxed max-w-xs mb-5">
//               Physician-led aesthetic medicine in Lahore. Natural results, always. DHA Licensed Clinic.
//             </p>
//             <div className="flex gap-3">
//               <a
//                 href={business.social.instagram}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`${business.name} on Instagram`}
//                 className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
//               >
//                 <FaInstagram size={14} />
//               </a>
//               <a
//                 href={`https://wa.me/${business.whatsapp}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`Chat with ${business.name} on WhatsApp`}
//                 className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
//               >
//                 <MessageCircle size={14} />
//               </a>
//             </div>
//           </div>

//           <div>
//             <div className="text-[10px] font-semibold tracking-widest uppercase text-[#CB8530] mb-4">Treatments</div>
//             <ul className="space-y-2">
//               {treatments.map((t) => (
//                 <li key={t}>
//                   <a href="#services" className="text-xs text-[#f7ede0]/40 hover:text-[#f7ede0]/70 transition-colors">
//                     {t}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <div className="text-[10px] font-semibold tracking-widest uppercase text-[#CB8530] mb-4">Contact</div>
//             <div className="space-y-3">
//               <div className="flex items-start gap-2 text-xs text-[#f7ede0]/40">
//                 <MapPin size={12} className="mt-0.5 shrink-0" />
//                 <span>{business.address.street}, {business.address.city}<br />{business.address.countryName}</span>
//               </div>
//               <div className="flex items-center gap-2 text-xs text-[#f7ede0]/40">
//                 <Phone size={12} />
//                 <a href={`tel:${business.phone}`} className="hover:text-[#f7ede0]/70 transition-colors">
//                   {business.phoneDisplay}
//                 </a>
//               </div>
//               <div className="flex items-center gap-2 text-xs text-[#f7ede0]/40">
//                 <Clock size={12} />
//                 <span>{business.hours}</span>
//               </div>
//             </div>
//             <div className="mt-5 text-[10px] text-[#f7ede0]/25">
//               {business.license}<br />
//               Regulated by Lahore Health Authority
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div className="text-[10px] text-[#f7ede0]/25">
//             © {new Date().getFullYear()} {business.name}. All rights reserved.
//           </div>
//           <div className="flex gap-6">
//             {legalLinks.map((link) => (
//               <a key={link} href="#" className="text-[10px] text-[#f7ede0]/25 hover:text-[#f7ede0]/50 transition-colors">
//                 {link}
//               </a>
//             ))}
//           </div>
//           <a href="#booking" className="text-[10px] font-medium text-[#CB8530] hover:text-[#d4991f] transition-colors">
//             Ready to Begin? Book Today →
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// 3

import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/data";
import Image from "next/image";

const treatments = [
  "Anti-Wrinkle",
  "Dermal Fillers",
  "Skin Rejuvenation",
  "Laser Resurfacing",
  "PRP Therapy",
  "Thread Lift",
];

export default function Footer() {
  //  const [showIcon, setShowIcon] = useState(false);
  return (
    <footer style={{ backgroundColor: "#111009", padding: "5rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }} className="footer-brand">
            <div style={{ marginBottom: "0.75rem" }}>
              <Image
                src="/images/4.png"
                alt="Aesthetics"
                width={120}
                height={45}
                // style={{
                //   width: "180px",
                //   height: "auto",
                //   display: "block",
                // }}
                priority
              />
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(247,237,224,0.8)",
                lineHeight: 1.7,
                maxWidth: "20rem",
                marginBottom: "1.25rem",
              }}
            >
              Physician-led aesthetic medicine in Lahore. Natural results,
              always.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                {
                  href: "#",
                  label: "Instagram",
                  icon: <FaInstagram size={20} />,
                },
                {
                  href: WHATSAPP_URL,
                  label: "WhatsApp",
                  icon: <FaWhatsapp size={20} />,
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <nav>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#CB8530",
                marginBottom: "1rem",
              }}
            >
              Treatments
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {treatments.map((t) => (
                <li key={t}>
                  <a
                    href="#services"
                    style={{
                      fontSize: "12px",
                      color: "rgba(247,237,224,0.8)",
                      textDecoration: "none",
                    }}
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address style={{ fontStyle: "normal" }}>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#CB8530",
                marginBottom: "1rem",
              }}
            >
              Contact
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontSize: "12px",
                  color: "rgba(247,237,224,0.8)",
                }}
              >
                <MapPin size={12} style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>
                  Lake City, Lahore
                  <br />
                  Pakistan
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "12px",
                  color: "rgba(247,237,224,0.8)",
                }}
              >
                <Phone size={12} />
                <a
                  href="tel:+97140000000"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +971 4 000 0000
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "12px",
                  color: "rgba(247,237,224,0.8)",
                }}
              >
                <Clock size={12} />
                <span>Mon–Sat 9AM–7PM</span>
              </div>
            </div>
            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "10px",
                color: "rgba(247,237,224,0.8)",
                lineHeight: 1.6,
              }}
            >
              DHA License No. AE12847
              <br />
              Regulated by Pakistan Health Authority
            </p>
          </address>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.81rem", color: "rgba(247,237,224,0.95)" }}>
            © {new Date().getFullYear()} Aesthetics · All rights reserved ·
            Designed and Developed by{" "}
            <a
              href="https://wa.me/923215745745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1  hover:text-[#CB8530] hover:underline transition-colors"
            >
              Creavox
              <ArrowUpRight size={16} />
            </a>
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "0.81rem",
                  color: "rgba(247,237,224,0.95)",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
