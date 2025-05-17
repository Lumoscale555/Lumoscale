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
    quote: "From design to development, everything was on point. We now have a site that works as hard as we do.",
    name: "M. Sundeep Reddy",
    position: "Founder",
    company: "Lucido Interiors"
  },
  {
    quote: "We saw a major boost in speed, SEO rankings, and user engagement after LumoScale's revamp. Highly recommended.",
    name: "Aditya Singaraju",
    position: "Founder",
    company: "StrategicEdge Research"
  },
  {
    quote: "LumoScale turned our outdated site into a fast, mobile-friendly, lead-generating machine. The difference was instant.",
    name: "N. Lokeswara Rao",
    position: "Founder",
    company: "InternForage"
  },
  {
    quote: "Their team built a modern, responsive website that not only looks great but performs even better. Smooth process throughout.",
    name: "Guntireddi Ritendra Kumar",
    position: "Founder",
    company: "Green Cycle"
  },
  {
    quote: "LumoScale nailed our vision with a dynamic, scalable website that helped us attract better clients and build trust.",
    name: "Aditya Singaraju",
    position: "Founder",
    company: "Absolead Solutions"
  },
  {
    quote: "They brought consistency, creativity, and conversions. Best decision we made for our socials.",
    name: "Aniket Gurav",
    position: "",
    company: "O2 Fitness Gym"
  },
  {
    quote: "From zero DMs to daily inquiries. That's the LumoScale effect.",
    name: "Hastimal Niranjan",
    position: "",
    company: ""
  },
  {
    quote: "Our socials finally reflect our brand. Consistent, on-brand, and engaging — LumoScale made it effortless.",
    name: "Rajesh",
    position: "",
    company: "The Food Town"
  },
  {
    quote: "We were wasting hours trying to figure out trends. LumoScale stepped in and gave us clarity.",
    name: "Suraj",
    position: "",
    company: "AspectSports"
  },
  {
    quote: "They turned our Instagram from a ghost town to a brand asset. The results speak for themselves.",
    name: "Samreen",
    position: "",
    company: "CLGBuzz"
  }
];

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

  // Duplicate testimonials for seamless horizontal scroll
  const horizontalTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section-padding overflow-hidden">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 font-serif">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Real stories from real people who have achieved amazing results working with LumoScale.
          </p>
        </div>
        {/* Horizontal infinite scroll */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-6 animate-horizontal-scroll"
            style={{
              animation: 'horizontal-scroll 60s linear infinite',
              width: `${horizontalTestimonials.length * 350}px`, // 350px per card (approx)
            }}
          >
            {horizontalTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`horizontal-${index}`}
                testimonial={testimonial}
                className="min-w-[320px] max-w-[350px] w-full"
              />
            ))}
          </div>
        </div>
        {/* Add keyframes for horizontal-scroll in global CSS or tailwind config */}
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
          {/* Avatar removed as per request */}
          <div className="ml-0">
            <h4 className="font-medium text-sm">{testimonial.name}</h4>
            <p className="text-xs text-white/60">
              {testimonial.position}{testimonial.position && testimonial.company ? ', ' : ''}{testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;