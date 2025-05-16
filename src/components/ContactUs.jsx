import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  React.useEffect(() => {
    // Dynamically load the Visme Forms script
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full mt-8 px-4"
        id="Contact"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your digital presence? Contact us today to
            discuss how we can help your business grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 flex items-center space-x-4 rounded-lg shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <a
                href="mailto:datascience.sods@kluniveristy.in"
                className="text-white hover:text-blue-700"
              >
                contact@lumoscale.com
              </a>
            </div>
          </div>

          <div className="p-6 flex items-center space-x-4 rounded-lg shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-white hover:text-blue-700"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
        <div
          className="visme_d"
          data-title="Blog Contact Form"
          data-url="vdz9g383-blog-contact-form"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="127382"
        ></div>
      </div>
    </>
  );
};

export default Contact;
