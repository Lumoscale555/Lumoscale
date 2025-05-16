import { useEffect, useRef } from 'react';

const Contact = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
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

    if (headingRef.current) observer.observe(headingRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <div className="pt-32 pb-20 bg-lumo-900 min-h-screen">
      <div 
        ref={headingRef}
        className="container mx-auto px-4 mb-16 opacity-0"
      >
        <h1 className="text-4xl md:text-6xl mb-6 text-center">
          Contact <span className="text-gradient">Us</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto text-center">
          Ready to take your business to the next level? Get in touch with our team today.
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div 
            className="lg:col-span-2"
            ref={formRef}
          >
            <div className="glass-card p-8 opacity-0">
              <h2 className="text-2xl mb-6">Send us a message</h2>
              <div 
                className="visme_d" 
                data-title="Blog Contact Form" 
                data-url="vdz9g383-blog-contact-form" 
                data-domain="forms" 
                data-full-page="false" 
                data-min-height="500px" 
                data-form-id="127382"
              ></div>
              <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
            </div>
          </div>
          
          {/* Contact Information */}
          <div 
            ref={infoRef}
            className="opacity-0"
          >
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl mb-6">Contact Information</h2>
              
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
            
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl mb-6">Business Hours</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Sunday</span>
                  <span className="text-white/50">Closed</span>
                </div>
              </div>
              
              <div className="h-px bg-lumo-700/30 my-6"></div>
              
              <p className="text-white/70">
                We're based in India (IST), but work with clients globally.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <h2 className="text-2xl mb-6">Connect With Us</h2>
              
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social} 
                    href={`https://www.${social}.com`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-lumo-800 flex items-center justify-center hover:bg-lumo-700 hover:shadow-purple-glow-sm transition-all"
                    aria-label={`Visit our ${social} page`}
                  >
                    <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {social === 'facebook' && (
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      )}
                      {social === 'twitter' && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      )}
                      {social === 'instagram' && (
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      )}
                      {social === 'linkedin' && (
                        <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;