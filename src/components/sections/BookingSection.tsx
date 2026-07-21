"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "923000000000";
const CLINIC_NAME = "Aesthetics";
const PHONE = "+92300000000";

const trustPoints = [
  "No commitment required",
  "Physician consultation included",
  "Response within the next few minutes",
  "WhatsApp confirmation sent immediately",
];

const treatmentOptions = [
  "Anti-Wrinkle Treatment",
  "Dermal Fillers",
  "Skin Rejuvenation",
  "Laser Resurfacing",
  "PRP Treatment",
  "Thread Lift",
];

export default function BookingSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
  });
  const [formValid, setFormValid] = useState({ name: false, phone: false });

  const phoneRegex = (phone: string) => {
    const digitsOnly = phone.replace(/[\s\-().+]/g, "");
    return /^\d{11,12}$/.test(digitsOnly);
  };
  const [formErrors, setFormErrors] = useState({ name: "", phone: "" });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "name") {
      const nameRegex = /^[a-zA-Z\s]{3,}$/;
      const valid = nameRegex.test(value.trim());
      setFormValid((prev) => ({ ...prev, name: valid }));
      setFormErrors((prev) => ({
        ...prev,
        name:
          value.length > 0 && !valid
            ? "Name must be at least 3 letters (no numbers or symbols)"
            : "",
      }));
    }

    if (field === "phone") {
      const valid = phoneRegex(value.trim());
      setFormValid((prev) => ({ ...prev, phone: valid }));
      setFormErrors((prev) => ({
        ...prev,
        phone:
          value.length > 4 && !valid ? "Please enter a valid phone number" : "",
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValid.name && formValid.phone) {
      setFormSubmitted(true);
    }
  };

  const whatsappFollowUp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I just submitted a booking request on the ${CLINIC_NAME} website.`)}`;
  const whatsappDirect = `https://wa.me/${WHATSAPP}`;

  const labelStyle: React.CSSProperties = {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#CB8530",
    display: "block",
    marginBottom: "0.5rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: "0.5rem",
    padding: "0.875rem 1rem",
    fontSize: "0.875rem",
    color: "#111111",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  return (
    <section
      id="booking"
      style={{ backgroundColor: "#1a1208", padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* ── Left: info ── */}
          <div>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#d4991f",
                marginBottom: "1rem",
              }}
            >
              Reserve Your Place
            </p>
            <h2
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#f7ede0",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Book Your Free
              <br />
              <em style={{ fontStyle: "italic", color: "#d4991f" }}>
                Consultation
              </em>
            </h2>
            <p
              style={{
                color: "rgba(247,237,224,0.5)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              We&apos;ll handle the rest. No obligation. No pushy calls. We
              respond within a minute to confirm your slot.
            </p>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "2.5rem",
              }}
            >
              {trustPoints.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.875rem",
                    color: "rgba(247,237,224,0.6)",
                  }}
                >
                  <Check
                    size={13}
                    style={{ color: "#d4991f", flexShrink: 0 }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <div style={{ display: "flex", gap: "2px" }}>
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
              {/* <span style={{ fontSize: "0.875rem", color: "rgba(247,237,224,0.5)" }}>
                4.9 · 312 Google Reviews
              </span> */}
              <span
                style={{ fontSize: "0.875rem", color: "rgba(247,237,224,0.5)" }}
              >
                4.8 · 526 Google Reviews
              </span>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div>
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  backgroundColor: "#f7ede0",
                  borderRadius: "0.75rem",
                  padding: "2.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#dcfce7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <Check size={24} style={{ color: "#16a34a" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "#111111",
                    marginBottom: "0.75rem",
                  }}
                >
                  Consultation Reserved
                </h3>
                <p
                  style={{
                    color: "#777777",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  We&apos;ve received your request, {formData.name}. Dr.
                  Nour&apos;s team will contact you in the next few minutes to
                  confirm your slot.
                </p>
                <a
                  href={whatsappFollowUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "#25D366",
                    color: "white",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    padding: "0.75rem 1.5rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                  }}
                >
                  <FaWhatsapp size={15} /> Continue on WhatsApp
                </a>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#f7ede0",
                  borderRadius: "0.75rem",
                  padding: "2rem 2.5rem",
                }}
                noValidate
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {/* {[
                    { field: "name", label: "Your Name", placeholder: "First name is fine", type: "text" },
                    { field: "phone", label: "Phone (WhatsApp Preferred )", placeholder: "+92 300 000 0000", type: "tel" },
                  ].map(({ field, label, placeholder, type }) => (
                    <div key={field}>
                      <label htmlFor={field} style={labelStyle}>{label}</label>
                      <div style={{ position: "relative" }}>
                        <input
                          id={field}
                          type={type}
                          placeholder={placeholder}
                          value={formData[field as keyof typeof formData]}
                          onChange={(e) => handleChange(field, e.target.value)}
                          required
                          style={inputStyle}
                        />
                        {formValid[field as keyof typeof formValid] && (
                          <Check size={14} style={{
                            position: "absolute", right: "1rem", top: "50%",
                            transform: "translateY(-50%)", color: "#16a34a",
                          }} />
                        )}
                      </div>
                    </div>
                  ))} */}

                  {[
                    {
                      field: "name",
                      label: "Your Name",
                      placeholder: "First name is fine",
                      type: "text",
                    },
                    // { field: "phone", label: "Email", placeholder: "+92 300 000 0000", type: "tel" },
                    {
                      field: "phone",
                      label: "Phone (WhatsApp Preferred)",
                      placeholder: "+92 300 000 0000",
                      type: "tel",
                    },
                  ].map(({ field, label, placeholder, type }) => (
                    <div key={field}>
                      <label htmlFor={field} style={labelStyle}>
                        {label}
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          id={field}
                          type={type}
                          placeholder={placeholder}
                          value={formData[field as keyof typeof formData]}
                          onChange={(e) => handleChange(field, e.target.value)}
                          required
                          style={{
                            ...inputStyle,
                            borderColor: formErrors[
                              field as keyof typeof formErrors
                            ]
                              ? "#e53e3e"
                              : "rgba(0,0,0,0.12)",
                          }}
                        />
                        {formValid[field as keyof typeof formValid] && (
                          <Check
                            size={14}
                            style={{
                              position: "absolute",
                              right: "1rem",
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "#16a34a",
                            }}
                          />
                        )}
                      </div>
                      {/* Error message */}
                      {formErrors[field as keyof typeof formErrors] && (
                        <p
                          style={{
                            fontSize: "11px",
                            color: "#e53e3e",
                            marginTop: "0.375rem",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {formErrors[field as keyof typeof formErrors]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="treatment" style={labelStyle}>
                      Preferred Treatment
                    </label>
                    <select
                      id="treatment"
                      value={formData.treatment}
                      onChange={(e) =>
                        handleChange("treatment", e.target.value)
                      }
                      style={{ ...inputStyle, appearance: "none" }}
                    >
                      <option value="">
                        Not sure — I&apos;ll ask in the consultation
                      </option>
                      {treatmentOptions.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: "1.75rem",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    backgroundColor: "#CB8530",
                    color: "white",
                    fontWeight: 500,
                    padding: "1rem",
                    borderRadius: "9999px",
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Reserve My Free Consultation{" "}
                  <ArrowRight
                    style={{
                      width: "clamp(20px, 2vw, 18px)",
                      height: "clamp(17px, 2vw, 18px)",
                    }}
                  />
                </button>

                <p
                  style={{
                    marginTop: "1rem",
                    textAlign: "center",
                    fontSize: "11px",
                    color: "#777777",
                  }}
                >
                  Next available:{" "}
                  <strong style={{ color: "#111111" }}>Tomorrow, 10 AM</strong>
                </p>
              </form>
            )}

            <div
              style={{
                marginTop: "1.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <a
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  border: "1px solid rgba(247,237,224,0.15)",
                  color: "rgba(247,237,224,0.6)",
                  borderRadius: "0.5rem",
                  padding: "0.75rem",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                <FaWhatsapp size={23} /> WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  border: "1px solid rgba(247,237,224,0.15)",
                  color: "rgba(247,237,224,0.6)",
                  borderRadius: "0.5rem",
                  padding: "0.75rem",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                <Phone size={23} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
