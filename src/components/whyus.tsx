import React, { useRef, useEffect } from 'react';

const differentiators = [
  {
    title: "Real Growth, Not Just Numbers",
    description: "We focus on meaningful metrics that directly impact your business growth, not vanity statistics.",
    icon: "📈"
  },
  {
    title: "Budget-Friendly & Scalable",
    description: "Our solutions are designed to maximize your ROI with flexible plans that grow with your business.",
    icon: "💰"
  },
  {
    title: "Always Adapting to New Trends",
    description: "We continuously research and implement emerging technologies and marketing strategies.",
    icon: "🔄"
  },
  {
    title: "Data-Driven Creativity",
    description: "We blend analytical insights with creative innovation to deliver solutions that perform and impress.",
    icon: "🎯"
  },
  {
    title: "Hands-On Support",
    description: "Our dedicated team provides personalized attention and responsive communication throughout your project.",
    icon: "🤝"
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
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            What sets LumoScale apart from other digital agencies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="glass-card-hover p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
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
