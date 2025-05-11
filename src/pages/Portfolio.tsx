
import { useState, useEffect, useRef } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: "GREEN CYCLE Brand Refresh",
    category: "Digital Marketing",
    description: "Complete brand refresh and digital marketing strategy that increased online engagement by 78% and boosted e-commerce sales by 45%.",
    image: "GC",
    results: [
      "78% increase in social media engagement",
      "45% boost in e-commerce sales",
      "32% growth in organic search traffic"
    ]
  },
  {
    id: 2,
    title: "Namoona Group Customer Portal",
    category: "Software Development",
    description: "Custom customer portal with real-time order tracking, inventory management, and personalized dashboards for improved client satisfaction.",
    image: "NG",
    results: [
      "60% reduction in customer service inquiries",
      "89% positive user feedback",
      "35% increase in repeat purchases"
    ]
  },
  {
    id: 3,
    title: "InternForage Mobile App",
    category: "Software Development",
    description: "Cross-platform mobile application connecting students with internship opportunities, featuring AI-powered matching algorithms.",
    image: "IF",
    results: [
      "100,000+ app downloads in first quarter",
      "4.8/5 average app store rating",
      "65% user-to-opportunity match rate"
    ]
  },
  {
    id: 4,
    title: "Lucido Interiors E-commerce",
    category: "E-commerce",
    description: "Luxury furniture e-commerce platform with 3D visualization tools, AR functionality, and seamless payment processing.",
    image: "LI",
    results: [
      "240% increase in average order value",
      "18% reduction in cart abandonment",
      "3.5x ROI on development costs"
    ]
  },
  {
    id: 5,
    title: "TechSolutions AI Chatbot",
    category: "AI Solutions",
    description: "Advanced customer service AI chatbot that handles complex inquiries and integrates with existing CRM systems.",
    image: "TS",
    results: [
      "85% resolution rate without human intervention",
      "24/7 customer support coverage",
      "42% reduction in support costs"
    ]
  },
  {
    id: 6,
    title: "GreenPath Sustainability Campaign",
    category: "Digital Marketing",
    description: "Multi-channel awareness campaign highlighting sustainability initiatives, reaching over 2 million targeted consumers.",
    image: "GP",
    results: [
      "2.3 million campaign impressions",
      "58% increase in brand perception metrics",
      "27% growth in eco-friendly product line sales"
    ]
  }
];

const categories = ["All", "Digital Marketing", "Software Development", "E-commerce", "AI Solutions"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
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
    
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [filteredItems]);
  
  const openModal = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-32 pb-20 bg-lumo-900 min-h-screen">
      <div 
        ref={headingRef}
        className="container mx-auto px-4 mb-16 opacity-0"
      >
        <h1 className="text-4xl md:text-6xl mb-6 text-center">
          Our <span className="text-gradient">Portfolio</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto text-center">
          Explore our successful projects and see how we've helped businesses achieve their digital goals.
        </p>
      </div>
      
      {/* Categories Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-lumo-500 to-lumo-300 text-white shadow-purple-glow-sm' 
                  : 'bg-lumo-800/50 text-white/70 hover:bg-lumo-700/50 hover:text-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Portfolio Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)} 
              className="glass-card-hover overflow-hidden relative group cursor-pointer opacity-0"
              onClick={() => openModal(item)}
            >
              {/* Project Image/Placeholder */}
              <div className="aspect-[16/12] bg-lumo-700/30 flex items-center justify-center text-4xl font-bold text-white/30 group-hover:scale-105 transition-transform duration-500">
                {item.image}
              </div>
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-lumo-900/95 to-transparent">
                <h3 className="text-xl font-medium mb-1 group-hover:text-gradient transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {item.category}
                </p>
              </div>
              
              {/* Subtle Purple Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-lumo-300/5 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-lumo-300/10 rounded-full blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-lumo-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            className="relative bg-lumo-800 max-w-3xl w-full rounded-xl overflow-hidden animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Project Image/Placeholder */}
            <div className="aspect-video bg-lumo-700/50 flex items-center justify-center text-6xl font-bold text-white/30">
              {selectedItem.image}
            </div>
            
            {/* Project Details */}
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-medium">{selectedItem.title}</h3>
                <span className="px-4 py-1 bg-lumo-700/50 rounded-full text-sm">
                  {selectedItem.category}
                </span>
              </div>
              
              <p className="text-white/80 mb-6">
                {selectedItem.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-gradient">
                  Key Results
                </h4>
                <ul className="space-y-2">
                  {selectedItem.results.map((result, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-lumo-300 mr-3"></div>
                      <span className="text-white/80">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-end">
                <button
                  className="btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
