
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
            At Lumoscale, we combine data-driven strategies with innovative technology to transform your business vision into measurable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Growth Partner",
              description: "You're not just hiring an agency — you're gaining a strategic growth partner, offering you 360° support across digital marketing, branding, and deep business strategy. ",
              delay: "0"
            },
            {
              title: "Focus on Real Results",
              description: "What sets you apart? You get real results—more leads, sales, and growth. We study your industry, craft custom strategies, and partner closely with you.",
              delay: "100"
            },
            {
              title: "Psychology-Driven Marketing",
              description: "You benefit from strategies crafted by marketing psychologists who understand what truly motivates your customers—so your marketing connects, convinces, and converts.",
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
