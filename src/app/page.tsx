import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofMarquee from "@/components/sections/SocialProofMarquee";
import CredibilitySection from "@/components/sections/CredibilitySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import BookingSection from "@/components/sections/BookingSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SocialProofMarquee />
      <CredibilitySection />
      <ServicesSection />
      <ResultsSection />
      <ProcessSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

