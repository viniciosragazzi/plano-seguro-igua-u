import HeroSection from "@/components/sections/HeroSection";
import NetworkSection from "@/components/sections/NetworkSection";
import SimulatorSection from "@/components/sections/SimulatorSection";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NetworkSection />
      <SimulatorSection />
      <TrustSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
