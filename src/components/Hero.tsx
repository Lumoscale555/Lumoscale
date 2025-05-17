import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <iframe
          src="https://my.spline.design/reactiveorb-UaQTcaRZp6cIum1qibuCpiR3/"
          frameBorder="0"
          title="Reactive Orb"
          className="absolute top-0 left-0 w-[200vw] h-[200vh] -translate-x-1/4 -translate-y-1/4 scale-[1.5] sm:scale-[2] -z-10 pointer-events-none filter brightness-[2.2] contrast-[2] saturate-[2] mix-blend-screen opacity-95"
        />

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Foreground Content */}
      <div
        ref={heroRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0 transform translate-y-4 text-center z-10"
      >
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <span className="bg-[#3beded] text-transparent bg-clip-text text-base sm:text-xl font-medium flex items-center mb-2">
            <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-green-400" />
            Ready to Innovate
          </span>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-2 text-white">
  Results-First Digital Marketing
</h1>
<p className="text-lg md:text-xl lg:text-4xl text-cyan-300 font-normal mb-10">
  Data-Driven. Psychology-Led. Results-Focused
</p>



          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl">
            You deserve marketing that’s built on logic, not luck. We use data
            and psychology to help you attract better leads and grow with
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
  <Link
    to="https://calendly.com/lumoscale/30min"
    target="_blank"
    className="btn-primary relative transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white hover:text-black"
  >
    Get Started
  </Link>

  <Link
    to="/services"
    className="btn-secondary relative transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-cyan-300 hover:text-black"
  >
    Explore Services
  </Link>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
