import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ArrowRight } from "lucide-react";

const services = [
  {
    category: "Digital Marketing",
    description:
      "Data-driven strategies to expand your digital footprint and drive meaningful engagement.",
    items: [
      "Social Media Management",
      "Performance Marketing",
      "Influencer Marketing & PR",
      "Content Marketing",
    ],
    gradient: "from-primary to-secondary",
    delay: "0",
  },
  {
    category: "Software Development",
    description:
      "Custom software solutions built with cutting-edge technology to solve complex business challenges.",
    items: [
      "Fullstack Web Apps",
      "Frontend Development",
      "Backend Development",
      "API Development & Integration",
    ],
    gradient: "from-secondary to-primary",
    delay: "200",
  },
];

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
    window.scrollTo(0, 0); // forces top scroll
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    serviceRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      serviceRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-dark-800/30">
      <div ref={sectionRef} className="container mx-auto px-4 opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 font-serif">
            Our <span className="text-gradient font-serif">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive solutions tailored to drive growth and transform your
            business in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="relative group opacity-0 transition-all duration-500"
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              {/* Glow elements - absolute and visible */}

              {/* Inner card with overflow-hidden for rounded corners */}
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-dark-800/80 to-dark-900/95 backdrop-blur-md border border-dark-700/30 shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300">
                <div
                  className={`h-2 w-full bg-gradient-to-r ${service.gradient}`}
                ></div>

                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-medium mb-4 text-gradient font-serif">
                    {service.category}
                  </h3>
                  <p className="text-white/80 mb-8 text-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary mr-3"></div>
                        <span className="text-white/90 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      ref={(el) => (buttonRefs.current[index] = el)}
                      to="/services"
                      className="inline-flex items-center justify-between px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/30 rounded-lg text-primary hover:text-white group-hover:shadow-primary/20 transition-all duration-300 hover:animate-[button-pulse_1.5s_infinite]"
                    >
                      <span className="font-medium">
                        Explore {service.category}
                      </span>
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Decorative design elements */}
                <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
      <button
        onClick={handleClick}
        className="btn-primary inline-flex items-center gap-2 px-8 py-4 hover:animate-[button-pulse_1.0s_infinite]"
      >
        View All Services
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
