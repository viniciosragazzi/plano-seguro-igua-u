import HeroSection from "@/components/sections/HeroSection";
import NetworkSection from "@/components/sections/NetworkSection";
import TrustSection from "@/components/sections/TrustSection";
import SimulatorSection from "@/components/sections/SimulatorSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NetworkSection />
      <TrustSection />
      <SimulatorSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
