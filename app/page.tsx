import HeroSection from "@/components/HeroSection";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import ProductHighlights from "@/components/ProductHighlights";
import TrustTeaser from "@/components/TrustTeaser";
import PricingPreview from "@/components/PricingPreview";
import UseCases from "@/components/UseCases";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoItsFor />
      <HowItWorks />
      <ProductHighlights />
      <TrustTeaser />
      <PricingPreview />
      <UseCases />
      <FinalCTA />
    </>
  );
}

