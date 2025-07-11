import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 -z-10">
    <iframe
      //   src="https://my.spline.design/reactiveorb-UaQTcaRZp6cIum1qibuCpiR3/"
      frameBorder="0"
      title="Reactive Orb"
      className="absolute top-0 left-0 w-[200vw] h-[200vh] -translate-x-1/4 -translate-y-1/4 scale-[1.5] sm:scale-[2] -z-10 pointer-events-none filter brightness-[2.2] contrast-[2] saturate-[2] mix-blend-screen opacity-95"
    />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          variants={containerVariants}
        >
          <BackgroundEffect />

          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* Welcome Text */}
              <motion.div
                className="text-center mb-6 sm:mb-8 md:mb-12"
                variants={childVariants}
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-light space-y-2 sm:space-y-4 text-foreground">
                  <div className="mb-2 sm:mb-4">
                    <span
                      data-aos="fade-right"
                      data-aos-delay="200"
                      className="inline-block px-2"
                    >
                      Welcome
                    </span>{" "}
                    <span
                      data-aos="fade-right"
                      data-aos-delay="400"
                      className="inline-block px-2"
                    >
                      to
                    </span>{" "}
                    <span
                      data-aos="fade-right"
                      data-aos-delay="600"
                      className="inline-block px-2"
                    ></span>
                  </div>
                  <div>
                 <span
  data-aos="fade-up"
  data-aos-delay="800"
  className="inline-block px-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 font-extrabold tracking-wider animate-pulse drop-shadow-xl"
>
  Lumoscale
</span>

                  </div>
                </h1>
              </motion.div>

              {/* Website Link */}
              <motion.div
                className="text-center"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <a className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                    <span className="text-gradient">
                      <TypewriterEffect text="Ready to Grow...." />
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
