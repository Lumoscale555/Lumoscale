
import { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically connect to a backend API for form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    // Show success message (in a real app, this would be a toast notification)
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <section id="contact" className="section-padding bg-lumo-800/30">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your digital presence? Contact us today to discuss how we can help your business grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-lumo-800/50 border border-lumo-700/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lumo-300/50 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-lumo-800/50 border border-lumo-700/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lumo-300/50 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-lumo-800/50 border border-lumo-700/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lumo-300/50 focus:border-transparent transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-lumo-800/50 border border-lumo-700/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lumo-300/50 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-lumo-800/50 border border-lumo-700/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lumo-300/50 focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="software-development">Software Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-lumo-800/50 border border-lumo-700/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lumo-300/50 focus:border-transparent transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="glass-card p-8 mb-6">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-lumo-800/70 p-3 rounded-md mr-4">
                    <svg className="w-5 h-5 text-lumo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Email</p>
                    <a href="mailto:contact@lumoscale.com" className="text-lumo-200 hover:text-lumo-100 transition-colors">
                      contact@lumoscale.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lumo-800/70 p-3 rounded-md mr-4">
                    <svg className="w-5 h-5 text-lumo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Phone</p>
                    <a href="tel:+918919053970" className="text-lumo-200 hover:text-lumo-100 transition-colors">
                      +91 8919053970
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="glass-card p-8">
              <h3 className="text-xl font-medium mb-6">Connect With us</h3>
              <p className="text-white/70 mb-4">
                We're available Monday through Friday, from 9:00 AM to 6:00 PM (IST).
              </p>
              <p className="text-white/70">
                For urgent inquiries outside of business hours, please email us and we'll respond as soon as possible.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
