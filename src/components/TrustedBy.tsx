import { useEffect, useRef } from "react";

// Updated clients with more entries to make the scrolling more noticeable
const clients = [
  {
    name: "GREEN CYCLE",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gc-gRUPCEYInUNItIijicx9DdlLP2S5UK.jpeg",
  },
  {
    name: "Namoona Group",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nm-ZbXKSN0nDwZGRC9rNt0e8tlbUUCVBK.jpeg",
  },
  {
    name: "InternForage",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/if-DwDvrleAP55Rc4Vl79nap9szZwvuMk.png",
  },
  {
    name: "Lucido Interiors",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/li.jpg-GXbIeeIAwmAI7Jo5BbzvptsvLqWylv.jpeg",
  },
  { name: "Niranjan", logo: "/Images/socialmedia/Niranjan/thumb.png" },
  { name: "Nimantran", logo: "/Images/socialmedia/nimantran/thumb.png" },
  { name: "Audumber", logo: "/Images/socialmedia/Audumber/thumb.png" },
  { name: "Aspect sports", logo: "/Images/socialmedia/sports/thumb.png" },
  { name: "Dr.ritu Bhatia", logo: "/Images/socialmedia/cardiologist/thumb.png" },
   {name: "the food town", logo: "/Images/socialmedia/Foodtown/thumb.png"},
   {name: "O2 Fitness Gym", logo: "/Images/socialmedia/Fitness/thumb.png" }
];

const TrustedBy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section className="py-16 md:py-24 bg-dark-800/20 backdrop-blur-sm overflow-hidden">
      <div ref={sectionRef} className="container mx-auto px-4 opacity-0">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl mb-4 font-serif">
            Trusted By{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            We're proud to work with these forward-thinking companies
          </p>
          <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
        </div>

        {/* Infinite scrolling container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-[scroll-horizontal_20s_linear_infinite]">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`client-1-${index}`} className="group px-5">
                <div className="w-44 h-36 glass-card-hover flex flex-col items-center justify-center p-8 group-hover:scale-105 transition-transform duration-300">
                  {client.logo ? (
                    <>
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="mt-2 text-white/80 font-semibold text-center text-base">
                        {client.name}
                      </div>
                    </>
                  ) : (
                    <div className="text-xl font-semibold text-white/70 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                      {client.name}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless looping */}
            {clients.map((client, index) => (
              <div key={`client-1-${index}`} className="group px-5">
                <div className="w-44 h-36 glass-card-hover flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
                  {client.logo ? (
                    <>
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="mt-2 text-white/80 font-semibold text-center text-base">
                        {client.name}
                      </div>
                    </>
                  ) : (
                    <div className="text-xl font-semibold text-white/70 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                      {client.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
