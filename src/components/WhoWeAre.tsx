
import { useEffect, useRef } from 'react';

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="who-we-are" className="section-padding ">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 font-serif">
            Who <span className="text-gradient font-serif">We Are</span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
          We don’t run ads. We build automated growth systems that attract, qualify, and convert — powered by AI, psychology, and precision strategy.
If you're here to dominate, not dabble — you're in the right place.                                                                                                                

          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Precision Over Guesswork",
              description: "We don’t experiment with your budget. Every ad, funnel, and automation is backed by data, psychology, and proven frameworks that drive real profit. ",
              delay: "0"
            },
            {
              title: "Systems That Scale",
              description: "We build end-to-end client acquisition machines. From AI-powered follow-ups to CRM handover, everything runs while you focus on growth.",
              delay: "100"
            },
            {
              title: "Real Partnership, Real Results",
              description: "We don’t just deliver tasks — we embed into your mission. Our success is measured in ROI, not reports. If you grow, we grow.",
              delay: "200"
            },
            // {
            //   title: "Dedicated Partnership",
            //   description: "With Lumoscale, you don’t just get a service — you get a dedicated partner committed to your success, working like an extension of your team.",
            //   delay: "300"
            // }

          ].map((item, index) => (
            <div 
              key={index} 
              ref={(el) => (itemsRef.current[index] = el)}
              className="glass-card-hover p-8 opacity-0 border-l-4 border-lumo-300 group hover:translate-y-[-5px]"
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <h3 className="text-2xl mb-4 font-medium text-white group-hover:text-gradient">{item.title}</h3>
              <div className="h-[1px] w-16 bg-gradient-to-r from-lumo-300 to-transparent mb-4"></div>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
