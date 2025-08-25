import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AssessmentCapabilities from "@/components/AssessmentCapabilities";
import HowItWorks from "@/components/HowItWorks";
import InsightsAnalytics from "@/components/InsightsAnalytics";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AssessmentCapabilities />
      <HowItWorks />
      <InsightsAnalytics />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
