
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* World Map Background */}
      <div className="absolute inset-0 overflow-hidden z-0 top-80">
        <iframe 
          src='https://my.spline.design/worldplanet-oVtHQzla0LptJ10bukCnzgyQ/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="Interactive World Map"
          className="absolute top-80 inset-0 left-1/2 transform -translate-x-1/2 scale-150 "
        ></iframe>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-lumo-900/50"></div>
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 relative z-10 transition-opacity duration-1000 opacity-0 transform translate-y-4"
      >
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6">
            Drive Growth with  <span className="text-gradient font-normal">Digital Marketing & Innovative Software</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl">
            We combine data-driven digital marketing strategies with expert software development to scale your business and achieve real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
