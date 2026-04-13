import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import ServicesSection from '@/components/ServicesSection';
import CasesSection from '@/components/CasesSection';
import ProcessSection from '@/components/ProcessSection';
import TechStackSection from '@/components/TechStackSection';
import EngagementSection from '@/components/EngagementSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <CasesSection />
      <ProcessSection />
      <TechStackSection />
      <EngagementSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
