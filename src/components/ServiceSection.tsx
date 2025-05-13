import { useRef, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { ServiceType } from './ServiceData';

interface ServiceSectionProps {
  id: string;
  title: string;
  accentTitle: string;
  description: string;
  services: ServiceType[];
  hasBackground: boolean;
}

const ServiceSection = ({ 
  id, 
  title, 
  accentTitle, 
  description, 
  services, 
  hasBackground 
}: ServiceSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id={id} 
      className={`relative ${hasBackground ? 'bg-lumo-800/30' : ''}`}
    >
      {/* Decorative accent */}
      <div className="absolute left-0 h-full w-1 top-0">
        <div className="h-1/3 w-full bg-gradient-to-b from-transparent to-lumo-300/30"></div>
      </div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 relative z-10"
      >
        <div className="mb-16 relative">
          <div className="w-12 h-[1px] bg-lumo-300/50 mb-6"></div>
          <h2 className="text-3xl md:text-5xl xl:text-6xl mb-6 font-light flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <span>{title}</span> 
            <span className="text-gradient font-medium">{accentTitle}</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
            {description}
          </p>
          
          {/* Decorative element */}
          <div className="absolute -right-4 top-4 w-20 h-20 opacity-10">
            <div className="w-full h-full border border-lumo-300/30 rounded-full"></div>
            <div className="w-3/4 h-3/4 border border-lumo-300/50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;