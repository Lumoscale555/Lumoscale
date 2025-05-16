import { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';

// Expanded testimonial data with more entries to enable continuous scrolling
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
  },
  {
    quote: "LumoScale's SEO strategies helped us rank on the first page for our target keywords in just two months. Our organic traffic has doubled since then.",
    name: "Jennifer Lopez",
    position: "Marketing Manager",
    company: "TechVista"
  },
  {
    quote: "The mobile app LumoScale developed for us has a 4.9 star rating and over 50,000 downloads in the first month. We couldn't be happier with the results.",
    name: "Robert Kim",
    position: "Product Manager",
    company: "MobiConnect"
  },
  {
    quote: "LumoScale's team went above and beyond to meet our tight deadline. Their dedication and expertise made our product launch a huge success.",
    name: "Emily Watson",
    position: "Operations Director",
    company: "LaunchPad Inc"
  },
  {
    quote: "The analytics dashboard LumoScale created gives us insights we never had before. Our decision-making is now data-driven and much more effective.",
    name: "Thomas Garcia",
    position: "Data Analyst",
    company: "MetricsMatter"
  },
  {
    quote: "Working with LumoScale has been the best business decision we've made. Their strategic approach to digital transformation has revolutionized our company.",
    name: "Laura Chen",
    position: "COO",
    company: "InnovateNow"
  }
];

// Duplicate testimonials to create seamless scrolling effect
const column1Testimonials = [...testimonials, ...testimonials];
const column2Testimonials = [...testimonials, ...testimonials];
const column3Testimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
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
    <section className="section-padding overflow-hidden">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Real stories from real people who have achieved amazing results working with LumoScale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* First column - scrolls upward */}
          <div className="overflow-hidden relative h-[700px]">
            <div className="absolute w-full animate-scroll-up" style={{
              animation: 'scroll-up 40s linear infinite',
            }}>
              {column1Testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`col1-${index}`}
                  testimonial={testimonial}
                  className="mb-6"
                />
              ))}
            </div>
          </div>

          {/* Second column - scrolls downward */}
          <div className="overflow-hidden relative h-[700px] mt-12 md:mt-24">
            <div className="absolute w-full animate-scroll-down" style={{
              animation: 'scroll-down 40s linear infinite',
            }}>
              {column2Testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`col2-${index}`}
                  testimonial={testimonial}
                  className="mb-6"
                />
              ))}
            </div>
          </div>

          {/* Third column - scrolls upward */}
          <div className="overflow-hidden relative h-[700px]">
            <div className="absolute w-full animate-scroll-up" style={{
              animation: 'scroll-up 45s linear infinite',  // Slightly different speed for visual interest
            }}>
              {column3Testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`col3-${index}`}
                  testimonial={testimonial}
                  className="mb-6"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    name: string;
    position: string;
    company: string;
  };
  className?: string;
}

const TestimonialCard = ({ testimonial, className = "" }: TestimonialCardProps) => {
  return (
    <Card className={`glass-card border border-primary/10 hover:border-primary/30 transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
       
        
        <p className="text-white/80 mb-5 text-sm leading-relaxed">
          {testimonial.quote}
        </p>
        
        <div className="flex items-center">
          <Avatar className="h-10 w-10 border border-primary/30">
            <AvatarFallback className="bg-primary/10 text-primary">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div className="ml-3">
            <h4 className="font-medium text-sm">{testimonial.name}</h4>
            <p className="text-xs text-white/60">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;