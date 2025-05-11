
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "Working with LumoScale completely transformed our digital presence. Their marketing strategies increased our conversion rates by 45% in just three months.",
    name: "Sarah Johnson",
    position: "CEO",
    company: "GREEN CYCLE"
  },
  {
    quote: "The custom software solution delivered by LumoScale streamlined our operations and reduced processing time by 60%. Their team understood our needs perfectly.",
    name: "Michael Chen",
    position: "CTO",
    company: "Namoona Group"
  },
  {
    quote: "LumoScale's innovative approach to our digital marketing campaign generated unprecedented engagement. They truly understand how to connect with audiences.",
    name: "Alexia Rivera",
    position: "Marketing Director",
    company: "InternForage"
  },
  {
    quote: "The e-commerce platform developed by LumoScale increased our online sales by 72% within the first quarter. Their attention to detail is unmatched.",
    name: "Daniel Patel",
    position: "Founder",
    company: "Lucido Interiors"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            See what our clients have to say about their experience working with LumoScale.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  ref={(el) => (testimonialsRef.current[index] = el)}
                  className="min-w-full px-4"
                >
                  <div className="glass-card p-8 md:p-10">
                    <div className="mb-6">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-lumo-300/60">
                        <path d="M12 28H20L16 44H8L12 28ZM28 28H36L32 44H24L28 28Z" fill="currentColor"/>
                        <path d="M16 4V16C16 20.4183 19.5817 24 24 24V16C24 11.5817 20.4183 8 16 8V4ZM32 4V16C32 20.4183 35.5817 24 40 24V16C40 11.5817 36.4183 8 32 8V4Z" fill="currentColor"/>
                      </svg>
                    </div>
                    
                    <p className="text-xl md:text-2xl leading-relaxed mb-8 italic text-white/90">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-lumo-500/30 flex items-center justify-center overflow-hidden mr-4">
                        <div className="text-xl font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-white/70">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-lumo-700/50 hover:border-lumo-300/50 hover:shadow-purple-glow-sm transition-all"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'bg-lumo-300 shadow-purple-glow-sm' 
                      : 'bg-lumo-700/50 hover:bg-lumo-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-lumo-700/50 hover:border-lumo-300/50 hover:shadow-purple-glow-sm transition-all"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
