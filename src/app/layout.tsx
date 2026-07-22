import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saesthetics.ae"),
  title: {
    default: "Aesthetics | Physician-Led Aesthetic Clinic in Lahore",
    template: "%s | Aesthetics Lahore",
  },
  description:
    "Lahore's trusted physician-led aesthetic clinic. Natural anti-wrinkle, dermal fillers, skin rejuvenation & PRP treatments. DHA licensed. Book your free consultation today.",
  keywords: [
    "aesthetic clinic Lahore",
    "botox Lahore",
    "dermal fillers Lahore",
    "skin rejuvenation Lahore",
    "aesthetic doctor Lahore",
    "DHA licensed clinic Lahore",
    "PRP treatment Lahore",
    "thread lift Lahore",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.saesthetics.ae",
    siteName: "Aesthetics",
    title: "Aesthetics | Physician-Led Aesthetic Clinic in Lahore",
    description:
      "Natural results, always. 2,847+ treatments performed. Book your free consultation with Dr. Nour Al-Hassan.",
  },
  robots: { index: true, follow: true },
};

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        name: "Aesthetics",
        description:
          "Physician-led aesthetic clinic in Lahore offering natural anti-wrinkle, dermal fillers, skin rejuvenation, and PRP treatments.",
        url: "https://www.aesthetics.ae",
        telephone: "+97140000000",
        priceRange: "AED 650–5500",
        medicalSpecialty: "Aesthetic Medicine",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jumeirah Road",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "312",
          bestRating: "5",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        /> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Montserrat:wght@300;400;500;600&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body style={{ backgroundColor: "#f7ede0", margin: 0, padding: 0 }}>
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
