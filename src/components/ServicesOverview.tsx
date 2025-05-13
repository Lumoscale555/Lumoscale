
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    category: "Digital Marketing",
    description: "Data-driven strategies to expand your digital footprint and drive meaningful engagement.",
    items: [
      "Social Media Management",
      "Performance Marketing",
      "Influencer Marketing & PR",
      "Content Marketing"
    ],
    gradient: "from-lumo-500/80 to-lumo-300/80",
    delay: "0"
  },
  {
    category: "Software Development",
    description: "Custom software solutions built with cutting-edge technology to solve complex business challenges.",
    items: [
      "Fullstack Web Apps",
      "Frontend Development",
      "Backend Development",
      "API Development & Integration"
    ],
    gradient: "from-lumo-300/80 to-lumo-200/80",
    delay: "200"
  }
];

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    serviceRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      serviceRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-lumo-800/30">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive solutions tailored to drive growth and transform your business in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="glass-card relative overflow-hidden group opacity-0"
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10" style={{padding: '1px'}}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}></div>
              </div>
              
              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-3xl font-medium mb-4">{service.category}</h3>
                <p className="text-white/90 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-lumo-300 mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-lumo-200 hover:text-lumo-100 transition-colors"
                  >
                    <span>Explore {service.category}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-lumo-300/10 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
