import { useEffect, useRef } from "react";
import TrustedBy from "../components/TrustedBy";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in digital marketing and software development, Sarah leads our strategic vision and client relationships.",
    initial: "SJ",
  },
  {
    name: "Michael Chen",
    position: "CTO",
    bio: "A technology innovator with expertise in full-stack development, AI solutions, and cloud architecture for enterprise applications.",
    initial: "MC",
  },
  {
    name: "Alexia Rivera",
    position: "Marketing Director",
    bio: "Digital marketing strategist specializing in performance marketing, content creation, and building meaningful brand experiences.",
    initial: "AR",
  },
  {
    name: "Daniel Patel",
    position: "Creative Director",
    bio: "Award-winning designer with a passion for creating immersive digital experiences and memorable brand identities.",
    initial: "DP",
  },
];

const differentiators = [
  {
    title: "Real Growth, Not Just Numbers",
    description:
      "We focus on meaningful metrics that directly impact your business growth, not vanity statistics.",
    icon: "📈",
  },
  {
    title: "Budget-Friendly & Scalable",
    description:
      "Our solutions are designed to maximize your ROI with flexible plans that grow with your business.",
    icon: "💰",
  },
  {
    title: "Always Adapting to New Trends",
    description:
      "We continuously research and implement emerging technologies and marketing strategies.",
    icon: "🔄",
  },
  {
    title: "Data-Driven Creativity",
    description:
      "We blend analytical insights with creative innovation to deliver solutions that perform and impress.",
    icon: "🎯",
  },
  {
    title: "Hands-On Support",
    description:
      "Our dedicated team provides personalized attention and responsive communication throughout your project.",
    icon: "🤝",
  },
];

const About = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const differentiatorRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (storyRef.current) observer.observe(storyRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (differentiatorRef.current) observer.observe(differentiatorRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (storyRef.current) observer.unobserve(storyRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
      if (differentiatorRef.current)
        observer.unobserve(differentiatorRef.current);
    };
  }, []);

  return (
    <div className="pt-32 pb-20 bg-lumo-900 min-h-screen">
      {/* Hero Section */}
      <div ref={headingRef} className="container mx-auto px-4 mb-20 opacity-0">
        <h1 className="text-4xl md:text-6xl mb-6 text-center">
          About <span className="text-gradient">LumoScale</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto text-center">
          We are a team of digital innovators committed to transforming
          businesses through strategic marketing and cutting-edge technology.
        </p>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-lumo-800/30">
        <div ref={storyRef} className="container mx-auto px-4 opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-white/80 mb-4">
                We started in 2024 with a simple idea — to help businesses cut
                through the digital noise and grow with clarity, creativity, and
                heart.
              </p>
              <p className="text-white/80 mb-4">
                What began as a small group of creators, dreamers, and
                problem-solvers quickly turned into a space where ideas turn
                into stories, strategies turn into results, and brands find
                their voice. Today, LumoScale isn’t just a digital agency. We’re
                your growth partners, storytellers, and behind-the-scenes crew
                making sure your brand shines in a world full of clutter.
              </p>
              <p className="text-white/80">
                We don’t do boring. We don’t do copy-paste. We build bold,
                smart, and meaningful work that actually moves people. Because
                at the end of the day, it’s not about us — it’s about what we
                can help you become.
              </p>
            </div>

            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl mb-6 text-gradient">Our Mission</h3>
                <p className="text-white/80 mb-4">
                  At Lumoscale, we help businesses tell their story in a way
                  that connects with people and brings real results. We use
                  creativity and smart ideas now — and plan to use AI in the
                  future to make our work even better.
                </p>
                <h3 className="text-2xl mb-6 mt-8 text-gradient">Our Vision</h3>
                <p className="text-white/80">
                  We want a future where every business can grow and shine with
                  the help of creativity and technology. Lumoscale will combine
                  the best of human ideas and AI tools to help brands succeed,
                  today and tomorrow.
                </p>
              </div>

              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lumo-300/5 rounded-full blur-3xl group-hover:bg-lumo-300/10 transition-colors duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-lumo-500/5 rounded-full blur-2xl group-hover:bg-lumo-500/10 transition-colors duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Why Choose Us */}
      <section className="py-16 bg-lumo-800/30">
        <div
          ref={differentiatorRef}
          className="container mx-auto px-4 opacity-0"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-6">
            Ready to <span className="text-gradient">Grow</span> Together?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Let's discuss how LumoScale can help you achieve your business goals
            through strategic digital solutions.
          </p>

          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
