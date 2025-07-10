import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';

// Expanded testimonial data with more entries to enable continuous scrolling
const testimonials = [

 

 
  {
    quote: "From design to development, everything was on point. We now have a site that works as hard as we do.",
    name: "M. Sundeep Reddy",
    position: "Founder",
    company: "Lucido Interiors"
  },
  {
    quote: "We saw a major boost in speed, SEO rankings, and user engagement after Lumoscale's revamp. Highly recommended.",
    name: "Aditya Singaraju",
    position: "Founder",
    company: "StrategicEdge Research"
  },
  {
    quote: "Lumoscale turned our outdated site into a fast, mobile-friendly, lead-generating machine. The difference was instant.",
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
    quote: "Lumoscale nailed our vision with a dynamic, scalable website that helped us attract better clients and build trust.",
    name: "Aditya Singaraju",
    position: "Founder",
    company: "Absolead Solutions"
  },
  {
    quote: "They brought consistency, creativity, and conversions. Best decision we made for our socials.",
    name: "Aniket Gurav",
    position: "Founder",
    company: "O2 Fitness Gym"
  },
  {
    quote: "From zero DMs to daily inquiries. That's the Lumoscale effect.",
    name: "Hastimal Niranjan",
    position: "Founder ",
    company: "Niranjan"
  },
  {
    quote: "Our socials finally reflect our brand. Consistent, on-brand, and engaging — Lumoscale made it effortless.",
    name: "Rajesh",
    position: "Owner",
    company: "The Food Town"
  },
  {
    quote: "We were wasting hours trying to figure out trends. Lumoscale stepped in and gave us clarity.",
    name: "Suraj",
    position: "Owner",
    company: "AspectSports"
  },
  {
    quote: "They turned our Instagram from a ghost town to a brand asset. The results speak for themselves.",
    name: "Samreen",
    position: "Manager ",
    company: "CLGBuzz"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const testimonialCount = testimonials.length;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonialCount);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, testimonialCount]);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 font-serif">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Real stories from real people who have achieved amazing results working with Lumoscale.
          </p>
        </div>
        <div className="flex justify-center items-center min-h-[660px] mt-[-320px]">
          <div className="relative w-full max-w-xl h-full">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                  idx === current ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-10 pointer-events-none z-0'
                }`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: { quote: string; name: string; position: string; company: string; } }) => {
  return (
    <Card className="glass-card border border-primary/10 shadow-turquoise-glow p-6 flex flex-col items-center justify-center">
      <CardContent className="flex flex-col items-center justify-center">
        <p className="italic text-center text-lg text-dark-100 mb-6">"{testimonial.quote}"</p>
        <div className="text-center mt-2">
          <span className="font-bold text-lg text-white-900">
            {testimonial.name}
            {testimonial.position && `, ${testimonial.position}`}
            {testimonial.company && ` of ${testimonial.company}`}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;