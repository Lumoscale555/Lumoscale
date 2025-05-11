
import { useEffect, useRef } from 'react';

const clients = [
  { name: "GREEN CYCLE", logo: "" },
  { name: "Namoona Group", logo: "" },
  { name: "InternForage", logo: "" },
  { name: "Lucido Interiors", logo: "" }
];

const TrustedBy = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-lumo-800/20 backdrop-blur-sm">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl mb-4">Trusted By <span className="text-gradient">Industry Leaders</span></h3>
          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            We're proud to work with these forward-thinking companies
          </p>
          <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-lumo-300/60 to-transparent"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-44 h-36 glass-card-hover flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-xl font-semibold text-white/70 transition-all duration-300 group-hover:text-gradient">
                    {client.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
