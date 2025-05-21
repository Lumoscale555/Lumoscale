
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import ServicesOverview from '../components/ServicesOverview';
import TrustedBy from '../components/TrustedBy';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Portfolio from './Portfolio';
import WhyUs from '@/components/whyus';
import Whatsapp from '@/components/Whatsapp';
import Call from '@/components/Call';

// Add font import
const Index = () => {
  return (
    <div className="min-h-screen bg-lumo-900">
      <Hero />
      <WhoWeAre />
      <ServicesOverview />
      <TrustedBy />
       <WhyUs/>
      <Portfolio/>
      <Testimonials />
      <ContactSection />
      <Call/>
      <Whatsapp/>
    </div>
  );
};

export default Index;
