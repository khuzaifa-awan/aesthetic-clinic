"use client";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const navLinks = ["Services", "Results", "Team", "FAQ", "Pricing"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Mobile drawer refs
  const drawerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const drawerCtaRef = useRef<HTMLAnchorElement>(null);

  // ── Entrance animation (logo → nav → cta) ──
  useGSAP(() => {
    gsap.set([logoRef.current, navRef.current, ctaRef.current], {
      opacity: 0,
      y: -12,
    });

    const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power3.out" } });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7 })
      .to(navRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
  }, []);

  // ── Drawer open animation ──
  const { contextSafe } = useGSAP({ scope: headerRef });

  // eslint-disable-next-line react-hooks/refs
  const openDrawer = contextSafe(() => {
    setMobileOpen(true);

    // Drawer slides in from right
    gsap.fromTo(
      drawerRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" },
    );

    // Nav links stagger in from right with opacity 0 → 1
    gsap.fromTo(
      linkRefs.current,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2,
      },
    );

    // CTA fades in last
    gsap.fromTo(
      drawerCtaRef.current,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, ease: "power3.out", delay: 0.6 },
    );
  });

  // ── Drawer close animation ──
  // eslint-disable-next-line react-hooks/refs
  const closeDrawer = contextSafe(() => {
    gsap.to(linkRefs.current, {
      x: 30,
      opacity: 0,
      duration: 0.25,
      stagger: 0.04,
      ease: "power2.in",
    });

    gsap.to(drawerCtaRef.current, {
      x: 20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(drawerRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      delay: 0.15,
      onComplete: () => setMobileOpen(false),
    });
  });

  // eslint-disable-next-line react-hooks/refs
  const handleLinkClick = contextSafe((href: string) => {
    gsap.to(drawerRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.35,
      ease: "power3.in",
      onComplete: () => {
        setMobileOpen(false);
        // Smooth scroll to section
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    });
  });

  return (
    <header
      ref={headerRef}
      style={{
        position: "absolute",
        top: "50px",
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "90rem",
          margin: "0 auto",
          padding: "0 2.5rem",
          height: "5.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div ref={logoRef} style={{ flexShrink: 0, opacity: 0, zIndex: 60 }}>
          <Image
            src="/images/37.png"
            alt="Aesthetics"
            width={140}
            height={68}
            className="logo-img"
            style={{ objectFit: "contain", display: "block" }}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden-mobile"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "5.75rem",
            opacity: 0,
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: "1rem",
                letterSpacing: "0.06em",
                color: "rgba(247,237,224,0.75)",
                textDecoration: "none",
                fontWeight: 400,
                transition: "color 0.25s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f7ede0")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(247,237,224,0.75)")
              }
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          ref={ctaRef}
          href="#booking"
          className="hidden-mobile"
          style={{
            opacity: 0,
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid rgba(247,237,224,0.45)",
            color: "#f7ede0",
            fontSize: "1rem",
            fontWeight: 400,
            letterSpacing: "0.08em",
            padding: "0.55rem 1.4rem",
            borderRadius: "9999px",
            textDecoration: "none",
            transition: "border-color 0.25s, color 0.25s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#f7ede0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(247,237,224,0.45)";
          }}
        >
          Reserve Your Appointment
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={mobileOpen ? closeDrawer : openDrawer}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#f7ede0",
            padding: "0.5rem",
            lineHeight: 1,
            zIndex: 60,
            position: "relative",
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <RiMenu3Fill size={26} />}
        </button>
      </div>

      {/* ── Mobile drawer — full height, 40% width from right ── */}
      {/*
        Rendered always so GSAP can target it,
        but pointer-events none when closed
      */}
      <div
        ref={drawerRef}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "60%",
          height: "100vh",
          backgroundColor: "rgba(20, 14, 6, 0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          zIndex: 55,
          display: mobileOpen ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "center",
          padding: "3rem 2.5rem",
          borderLeft: "1px solid rgba(247,237,224,0.08)",
          transform: "translateX(100%)",
          opacity: 0,
        }}
      >
        {/* Close button inside drawer */}
        {/* <button
          onClick={closeDrawer}
          style={{
            position: "absolute",
            top: "2rem",
            right: "1.75rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(247,237,224,0.6)",
            padding: "0.25rem",
            lineHeight: 1,
          }}
          aria-label="Close menu"
        >
          <X size={20} />
        </button> */}

        {/* Nav links — stagger in from right */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {navLinks.map((item, i) => (
            <a
              key={item}
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(`#${item.toLowerCase()}`);
              }}
              style={{
                fontSize: "1.75rem",
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                color: "rgba(247,237,224,0.85)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                opacity: 0,
                transition: "color 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#CB8530")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(247,237,224,0.85)")
              }
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div
          style={{
            width: "2rem",
            height: "1px",
            backgroundColor: "rgba(247,237,224,0.15)",
            marginBottom: "2rem",
          }}
        />

        {/* CTA */}
        <a
          ref={drawerCtaRef}
          href="#booking"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#booking");
          }}
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            backgroundColor: "#CB8530",
            color: "white",
            fontSize: "0.875rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            padding: "0.75rem 1.75rem",
            borderRadius: "9999px",
            textDecoration: "none",
            opacity: 0,
          }}
        >
          Reserve Your Appointment
        </a>

        {/* Bottom tagline */}
        <p
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "2.5rem",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(247,237,224,0.2)",
          }}
        >
          Aesthetics
        </p>
      </div>

      {/* Backdrop overlay — clicking closes drawer */}
      {mobileOpen && (
        <div
          onClick={closeDrawer}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 54,
            backdropFilter: "blur(2px)",
          }}
        />
      )}
    </header>
  );
}
