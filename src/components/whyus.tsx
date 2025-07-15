import React, { useRef, useEffect } from 'react';

const differentiators = [
  {
    title: "1) We Build Machines, Not Campaigns",
    description: "You don’t need “likes” — you need predictable, qualified leads. We create AI-powered systems that turn strangers into buyers on autopilot",
  },
  {
    title: "2) Our Strategy Is Psychology-Driven",
    description: "We don’t follow trends. We follow human behavior.Every word, hook, and creative is built to persuade, convert, and scale.",
  },
  {
    title: "3) 100% Done-For-You Automation",
    description: "From AI calls to WhatsApp flows to CRM handover — we handle it all. No chasing leads. No leaky funnels. No wasted time.",
  },
  {
    title: "4) Obsessed With ROI, Not Vanity Metrics",
    description: "We don’t celebrate impressions. We celebrate results. 10x ROI, 800+ leads, 60% workload reduction — and we’re just getting started.",
  },
  {
    title: "5) We Act Like Partners, Not Vendors",
    description: "We’re not here to deliver files and disappear. We work like an extension of your team — with one goal: your growth.",
  }
];

const WhyUs = () => {
  const differentiatorRef = useRef<HTMLDivElement>(null);

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

    if (differentiatorRef.current) {
      observer.observe(differentiatorRef.current);
    }

    return () => {
      if (differentiatorRef.current) {
        observer.unobserve(differentiatorRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-lumo-800/30">
      <div 
        ref={differentiatorRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 font-serif">
            Why <span className="text-gradient">You Desevre Us</span >
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            You’re not looking for an agency.
            You’re looking for a weapon — built to scale your brand, automate your growth, and multiply your revenue with precision.
            Here’s why you deserve to work with us:

          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="glass-card-hover p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl mb-4 font-medium">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
