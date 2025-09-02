import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AssessmentBuilder from "@/components/AssessmentBuilder";
import SmartAssessment from "@/components/SmartAssessment";
import CredentialVerification from "@/components/CredentialVerification";
import CandidateExperience from "@/components/CandidateExperience";
import AssessmentCapabilities from "@/components/AssessmentCapabilities";
import HowItWorks from "@/components/HowItWorks";
import InsightsAnalytics from "@/components/InsightsAnalytics";
import Benefits from "@/components/Benefits";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AssessmentBuilder />
      <SmartAssessment />
      <CredentialVerification />
      <CandidateExperience />
      <AssessmentCapabilities />
      <HowItWorks />
      <InsightsAnalytics />
      <Benefits />
      <CustomerTestimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
