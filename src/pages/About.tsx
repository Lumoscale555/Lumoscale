
import { useEffect, useRef } from 'react';
import TrustedBy from '../components/TrustedBy';

const team = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in digital marketing and software development, Sarah leads our strategic vision and client relationships.",
    initial: "SJ"
  },
  {
    name: "Michael Chen",
    position: "CTO",
    bio: "A technology innovator with expertise in full-stack development, AI solutions, and cloud architecture for enterprise applications.",
    initial: "MC"
  },
  {
    name: "Alexia Rivera",
    position: "Marketing Director",
    bio: "Digital marketing strategist specializing in performance marketing, content creation, and building meaningful brand experiences.",
    initial: "AR"
  },
  {
    name: "Daniel Patel",
    position: "Creative Director",
    bio: "Award-winning designer with a passion for creating immersive digital experiences and memorable brand identities.",
    initial: "DP"
  }
];

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
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (storyRef.current) observer.observe(storyRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (differentiatorRef.current) observer.observe(differentiatorRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (storyRef.current) observer.unobserve(storyRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
      if (differentiatorRef.current) observer.unobserve(differentiatorRef.current);
    };
  }, []);

  return (
    <div className="pt-32 pb-20 bg-lumo-900 min-h-screen">
      {/* Hero Section */}
      <div 
        ref={headingRef}
        className="container mx-auto px-4 mb-20 opacity-0"
      >
        <h1 className="text-4xl md:text-6xl mb-6 text-center">
          About <span className="text-gradient">LumoScale</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto text-center">
          We are a team of digital innovators committed to transforming businesses through strategic marketing and cutting-edge technology.
        </p>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-lumo-800/30">
        <div 
          ref={storyRef}
          className="container mx-auto px-4 opacity-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-white/80 mb-4">
                Founded in 2018, LumoScale began with a simple mission: to help businesses navigate the increasingly complex digital landscape with clarity and purpose.
              </p>
              <p className="text-white/80 mb-4">
                What started as a small team of passionate digital marketers and developers has grown into a comprehensive agency that bridges the gap between marketing innovation and technological excellence.
              </p>
              <p className="text-white/80">
                Today, we work with businesses of all sizes across multiple industries, delivering tailored digital solutions that drive measurable growth and lasting success.
              </p>
            </div>
            
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl mb-6 text-gradient">Our Mission</h3>
                <p className="text-white/80 mb-4">
                  To empower businesses with innovative digital strategies and technologies that drive sustainable growth and meaningful connections with their audiences.
                </p>
                <h3 className="text-2xl mb-6 mt-8 text-gradient">Our Vision</h3>
                <p className="text-white/80">
                  To be the leading growth partner for forward-thinking businesses, setting new standards in digital marketing and software development through innovation, integrity, and measurable results.
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
      <section className="py-16">
        <div 
          ref={teamRef}
          className="container mx-auto px-4 opacity-0"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">
              Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Meet the talented professionals behind LumoScale's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="glass-card-hover p-8 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto bg-lumo-500/30 rounded-full flex items-center justify-center mb-6 group-hover:shadow-purple-glow transition-all">
                  <span className="text-2xl font-bold text-white/90">{member.initial}</span>
                </div>
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-lumo-200 mb-4">{member.position}</p>
                <p className="text-white/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Let's discuss how LumoScale can help you achieve your business goals through strategic digital solutions.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
