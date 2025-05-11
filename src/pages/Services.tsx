
import { useEffect, useRef, useState } from 'react';

const servicesData = {
  digitalMarketing: [
    {
      title: "Social Media Management",
      description: "Build and engage your community across relevant social media platforms.",
      keyFeatures: [
        "Content Creation & Curation",
        "Community Management",
        "Social Media Advertising",
        "Analytics & Reporting",
        "Platform Strategy"
      ],
      icon: "📱"
    },
    {
      title: "Performance Marketing",
      description: "Drive conversions and maximize ROI with data-driven campaigns.",
      keyFeatures: [
        "PPC Advertising",
        "Conversion Rate Optimization",
        "Marketing Funnel Optimization",
        "Retargeting Campaigns",
        "Budget Management"
      ],
      icon: "📊"
    },
    {
      title: "Influencer Marketing & PR",
      description: "Amplify your brand message through strategic partnerships and media coverage.",
      keyFeatures: [
        "Influencer Identification & Outreach",
        "Campaign Strategy & Management",
        "Media Relations",
        "Press Release Distribution",
        "Brand Messaging"
      ],
      icon: "🌟"
    },
    {
      title: "Content Marketing",
      description: "Create valuable content that attracts and engages your target audience.",
      keyFeatures: [
        "Content Strategy Development",
        "Blog & Article Creation",
        "SEO-Optimized Content",
        "Content Distribution",
        "Performance Analysis"
      ],
      icon: "📝"
    },
    {
      title: "Email Marketing",
      description: "Build relationships and drive conversions with personalized email strategies.",
      keyFeatures: [
        "Email Campaign Strategy",
        "List Segmentation & Management",
        "Newsletter Design",
        "Automation Workflows",
        "Performance Tracking"
      ],
      icon: "📧"
    },
    {
      title: "SEO & ASO",
      description: "Improve visibility in search engines and app stores to drive organic traffic.",
      keyFeatures: [
        "Keyword Research",
        "Technical SEO",
        "Content Optimization",
        "Link Building",
        "App Store Optimization"
      ],
      icon: "🔍"
    },
    {
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive performance tracking.",
      keyFeatures: [
        "Analytics Setup & Integration",
        "Custom Dashboard Creation",
        "Key Performance Metrics",
        "Regular Reporting",
        "Insights & Recommendations"
      ],
      icon: "📈"
    }
  ],
  softwareDevelopment: [
    {
      title: "Fullstack Web Apps",
      description: "Build powerful, scalable web applications that drive business growth.",
      keyFeatures: [
        "End-to-end Development",
        "Responsive Design",
        "Performance Optimization",
        "Security Implementation",
        "Scalable Architecture"
      ],
      icon: "🌐"
    },
    {
      title: "Frontend Development",
      description: "Create beautiful, intuitive user interfaces that delight your users.",
      keyFeatures: [
        "React & Next.js Development",
        "UI/UX Implementation",
        "Responsive Design",
        "Animation & Interactivity",
        "Performance Optimization"
      ],
      icon: "💻"
    },
    {
      title: "Backend Development",
      description: "Develop robust server-side architecture to power your applications.",
      keyFeatures: [
        "Node.js & Express Development",
        "API Design & Development",
        "Database Management",
        "Authentication & Authorization",
        "Server Configuration"
      ],
      icon: "⚙️"
    },
    {
      title: "Database Design & Management",
      description: "Structure data efficiently to support your business operations.",
      keyFeatures: [
        "Schema Design",
        "Query Optimization",
        "Data Migration",
        "Backup & Recovery",
        "Performance Tuning"
      ],
      icon: "🗄️"
    },
    {
      title: "API Development & Integration",
      description: "Connect systems and services to create unified digital experiences.",
      keyFeatures: [
        "RESTful API Design",
        "GraphQL Implementation",
        "Third-party API Integration",
        "Authentication & Security",
        "API Documentation"
      ],
      icon: "🔄"
    },
    {
      title: "Cloud Deployment",
      description: "Deploy your applications on secure, scalable cloud infrastructure.",
      keyFeatures: [
        "AWS/Azure/GCP Deployment",
        "Container Orchestration",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Logging"
      ],
      icon: "☁️"
    }
  ]
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="glass-card-hover p-8 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-3xl mr-4">{service.icon}</div>
          <h3 className="text-2xl font-medium">{service.title}</h3>
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isExpanded && (
        <div className="mt-6 animate-fade-in">
          <p className="text-white/80 mb-6">{service.description}</p>
          
          <div>
            <h4 className="text-sm uppercase text-lumo-300 tracking-wider mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {service.keyFeatures.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <span className="text-lumo-300 mr-2">•</span>
                  <span className="text-white/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const marketingRef = useRef<HTMLDivElement>(null);
  const developmentRef = useRef<HTMLDivElement>(null);
  
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
    if (marketingRef.current) observer.observe(marketingRef.current);
    if (developmentRef.current) observer.observe(developmentRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (marketingRef.current) observer.unobserve(marketingRef.current);
      if (developmentRef.current) observer.unobserve(developmentRef.current);
    };
  }, []);

  return (
    <div className="pt-32 pb-20 bg-lumo-900 min-h-screen">
      <div 
        ref={headingRef}
        className="container mx-auto px-4 mb-20 opacity-0"
      >
        <h1 className="text-4xl md:text-6xl mb-6 text-center">
          Our <span className="text-gradient">Services</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto text-center">
          Comprehensive digital solutions tailored to drive growth and transform your business in today's competitive landscape.
        </p>
      </div>

      {/* Digital Marketing Services */}
      <section id="digital-marketing" className="py-16 bg-lumo-800/30">
        <div 
          ref={marketingRef}
          className="container mx-auto px-4 opacity-0"
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl mb-6">
              Digital <span className="text-gradient">Marketing</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl">
              Strategic digital marketing solutions that drive visibility, engagement, and conversion for sustainable business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.digitalMarketing.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Software Development Services */}
      <section id="software-development" className="py-16">
        <div 
          ref={developmentRef}
          className="container mx-auto px-4 opacity-0"
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl mb-6">
              Software <span className="text-gradient">Development</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl">
              Custom software solutions built with cutting-edge technologies to solve complex business challenges and drive efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.softwareDevelopment.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lumo-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
