import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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

    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section className="py-28 bg-lumo-800/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lumo-300/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lumo-200/5 rounded-full blur-3xl"></div>
      
      <div 
        ref={ctaRef}
        className="container mx-auto px-4 text-center relative z-10 opacity-0"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Decorative element */}
          <div className="w-16 h-16 mb-10 relative">
            <div className="w-full h-full border border-lumo-300/20 rounded-full absolute"></div>
            <div className="w-10 h-10 border border-lumo-300/40 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-4 h-4 bg-lumo-300/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl xl:text-6xl mb-8 font-light">
            Ready to <span className="text-gradient font-medium">Transform</span> Your Business?
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Contact us today to discuss how our services can help you achieve your business goals and stay ahead of the competition.
          </p>
          
<Link
  to="/contact"
  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full border border-lumo-300/30 bg-gradient-to-br from-lumo-800 to-lumo-900 transition-all duration-500 hover:opacity-100 overflow-hidden"
>
  {/* Background Blur Glow on Hover */}
  <span className="absolute inset-0 bg-gradient-to-br from-lumo-300/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>

  {/* Button Text with Animated Underline */}
  <span className="relative z-10 text-lumo-200 group-hover:text-lumo-100 tracking-wide transition-colors duration-500">
    Get in Touch
    <span className="absolute left-0 -bottom-1 h-[2px] bg-lumo-100 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
  </span>
</Link>


        </div>
      </div>
    </section>
  );
};

export default CTASection;