import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-lumo-900/60 backdrop-blur-md border-b border-lumo-700/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative group text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-lumo-200"
                  : "text-white/80 hover:text-cyan-300"
              }`}
            >
              <span className="inline-block relative">
                {link.name}
                <span className="absolute left-0 -bottom-3 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}

          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-80 bg-gradient-to-b from-lumo-800 to-lumo-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-lumo-700/30">
            <img src="/image/logo.png" alt="Logo" className="h-8 w-auto" />
            <button onClick={toggleMenu} className="text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4 p-5">
            {NavLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium p-3 rounded-md transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-lumo-200 bg-lumo-700/30 shadow-purple-glow-sm"
                    : "text-white/80 hover:text-white hover:bg-lumo-800/50"
                }`}
                style={{
                  animationDelay: `${(index + 1) * 50}ms`,
                  opacity: isOpen ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto p-5 border-t border-lumo-700/30">
            <Link to="/contact" className="btn-primary block text-center">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
