
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import ServicesOverview from '../components/ServicesOverview';
import TrustedBy from '../components/TrustedBy';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-lumo-900">
      <Hero />
      <WhoWeAre />
      <ServicesOverview />
      <TrustedBy />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Index;
