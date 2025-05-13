import { useEffect, useRef } from 'react';
import ServiceSection from '../components/ServiceSection';
import CTASection from '../components/CTASection';
import { servicesData } from '../components/ServiceData';
import '../styles/animations.css';

const Services = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <div className="pt-32 pb-20 bg-lumo-900 min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-lumo-300/5 blur-[120px]"></div>
        <div className="absolute top-[60%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-lumo-200/5 blur-[100px]"></div>
      </div>

      <div 
        ref={headingRef}
        className="container mx-auto px-4 mb-24 opacity-0 relative z-10"
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-lumo-300 to-transparent mb-8"></div>
          <h1 className="text-4xl md:text-6xl xl:text-7xl mb-6 text-center font-light">
            Our <span className="text-gradient font-medium">Services</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-center leading-relaxed">
            Comprehensive digital solutions tailored to drive growth and transform your business in today's competitive landscape.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-lumo-300/50 to-transparent mt-12"></div>
        </div>
      </div>

      <ServiceSection 
        id="digital-marketing"
        title="Digital"
        accentTitle="Marketing"
        description="Strategic digital marketing solutions that drive visibility, engagement, and conversion for sustainable business growth."
        services={servicesData.digitalMarketing}
        hasBackground={true}
      />

      <ServiceSection 
        id="software-development"
        title="Software"
        accentTitle="Development"
        description="Custom software solutions built with cutting-edge technologies to solve complex business challenges and drive efficiency."
        services={servicesData.softwareDevelopment}
        hasBackground={false}
      />

      <CTASection />
    </div>
  );
};

export default Services;