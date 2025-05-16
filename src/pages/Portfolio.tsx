
import { useState, useEffect, useRef } from 'react';
import { 
  WebDevCard, 
  SocialMediaCard, 
  VideoCard, 
  GraphicDesignCard,
  PortfolioItem,
  WebDevProject,
  SocialMediaClient,
  VideoProject,
  GraphicDesignProject 
} from '../components/Portfolio/PortfolioCard';
import {  Film, Folder, Users, Image } from 'lucide-react';

// Sample portfolio data - this will be replaced with your actual content
const webdevProjects: WebDevProject[] = [
  {
    id: 1,
    type: 'webdev',
    title: "Absolead",
    category: "Website Development",
    description: "Absolead delivers customized recruitment solutions that connect businesses with the right talent, driving growth locally and globally",
    image: "/Images/Website/absolead.png",
    technologies: ["React", "Vite", "Tailwind"],
    liveLink: "https://www.absolead.io/",
    detailedDescription: "Absolead offers end-to-end hiring solutions tailored to your business needs, from recruitment outsourcing to blue-collar and offshore hiring.We partner with companies across industries, providing strategic workforce insights and pre-vetted talent.Our approach combines speed, reliability, and deep market expertise to help you build winning teams.With Absolead, scale your business confidently through smart and effective recruitment strategies.",
    testimonial: {
      text: "The website exceeded our expectations. Sales increased by 40% within the first month after launch.",
      author: ""
    },
    
  },
  {
    id: 2,
    type: 'webdev',
    title: "Lucido Interiors",
    category: "Website Development",
    description: "Lucido Interiors transforms homes and offices in Hyderabad with modern, functional, and personalized design solutions.",
    image: "/Images/Website/lucido.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://lucidointeriors.in/",
    detailedDescription: "Lucido Interiors is a Hyderabad-based interior design company that creates stylish and functional living and workspaces. They specialize in personalized designs for homes and offices, blending modern aesthetics with practical solutions.",
    
  },
  {
    id: 3,
    type: 'webdev',
    title: "GreenCycle",
    category: "Website Development",
    description: "GreenCycle drives eco-innovation through hydrogen energy, fuel cells, and green transport for a sustainable future.",
    image: "/Images/Website/GreenCycle.png",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://greenocycle-murex.vercel.app/",
    detailedDescription: "GreenCycle is an eco-innovation platform focused on advancing hydrogen energy solutions. It develops fuel cell technologies, sustainable infrastructure, and green transportation systems to promote a cleaner, hydrogen-powered future.",
    
  },
    {
    id: 4,
    type: 'webdev',
    title: "Strategic Edge",
    category: "Website Development",
    description: "Strategic Edge Research empowers travel businesses with market insights and strategic planning for smarter growth.",
    image: "/Images/Website/Strategic.png",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://www.strategicedgeresearch.com/",
    detailedDescription: "Strategic Edge Research is a consulting company that helps travel businesses grow using market research and smart business strategies. They provide insights, planning, and data solutions to help companies make better decisions and stay ahead in the travel industry.",
    
  },
  {
    id: 5,
    type: 'webdev',
    title: "InternForage",
    category: "Website Development",
    description: "InternForage is an EdTech platform offering hands-on tech training and internships to build real-world, career-ready skills.",
    image: "/Images/Website/intern.png",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://internforage.com/",
    detailedDescription: "InternForage is an EdTech platform that helps students and professionals build real-world tech skills through hands-on courses, internships, and mentorship. It offers training in areas like AWS, full-stack development, AI, and more, with a focus on career readiness and industry-aligned learning.",
  }
];




const socialMediaClients: SocialMediaClient[] = [
  {
    id: 1,
    type: 'social',
    title: "o2 Fitness Club",
    category: "Social Media Marketing",
    clientName: "FitLife Gym",
    description: "Comprehensive social media campaign for a fitness brand",
    campaignDesc: "Instagram and Facebook campaign that increased engagement by 65%",
    image: "/Images/socialmedia/Fitness/thumb.png",
    galleryImages: ["/Images/socialmedia/Fitness/Fitness1.png","/Images/socialmedia/Fitness/Fitness2.png"]
  },
  {
    id: 2,
    type: 'social',
    title: "Restaurant Promotion",
    category: "Social Media Marketing",
    clientName: "Niranjan",
    description: "Food photography and promotional campaign for an upscale restaurant",
    campaignDesc: "Food photography and promotional campaign that boosted reservations",
    image: "/Images/socialmedia/Niranjan/thumb.png",
    galleryImages: ["/Images/socialmedia/Niranjan/n1.png","/Images/socialmedia/Niranjan/n2.png","/Images/socialmedia/Niranjan/n3.png"]
  },
  {
    id: 3,
    type: 'social',
    title: "Product Launch",
    category: "Social Media Marketing",
    clientName: "Clg_buzz",
    description: "Product launch campaign across multiple social media platforms",
    campaignDesc: "Multi-platform product launch that generated 10,000+ pre-orders",
    image: "/Images/socialmedia/clgbuzz/thumb.jpg",
    galleryImages: ["/Images/socialmedia/clgbuzz/clg1.png"]
  },
  {
    id: 4,
    type: 'social',
    title: "Fashion Brand",
    category: "Social Media Marketing",
    clientName: "batman",
    description: "Ongoing social media management for a fashion brand",
    campaignDesc: "Content creation and community management for a trendy fashion brand",
    image: "/Images/socialmedia/batman/thumb.jpg",
    galleryImages: ["/Images/socialmedia/batman/batman1.png"]
  },
  {
    id: 5,
    type: 'social',
    title: "Real Estate Agency",
    category: "Social Media Marketing",
    clientName: "FoodTown",
    description: "Property showcases and lead generation campaign",
    campaignDesc: "Virtual tours and property highlights that increased inquiries by 45%",
    image: "/Images/socialmedia/Foodtown/thumb.png",
    galleryImages: ["/Images/socialmedia/Foodtown/food1.png","/Images/socialmedia/Foodtown/food2.png","/Images/socialmedia/Foodtown/food3.png"]
  },
  {
    id: 6,
    type: 'social',
    title: "Health Products",
    category: "Social Media Marketing",
    clientName: "nimantran",
    description: "Educational content and product promotion for health supplements",
    campaignDesc: "Educational content strategy that positioned the brand as an industry leader",
    image: "/Images/socialmedia/nimantran/thumb.png",
    galleryImages: ["/Images/socialmedia/nimantran/n1.png","/Images/socialmedia/nimantran/n2.png","/Images/socialmedia/nimantran/n3.png"]
  },
  {
    id: 7,
    type: 'social',
    title: "Coffee Shop Chain",
    category: "Social Media Marketing",
    clientName: "Audumber",
    description: "Local marketing and community engagement for multiple locations",
    campaignDesc: "Location-based marketing that increased foot traffic across all stores",
    image: "/Images/socialmedia/Audumber/thumb.png",
    galleryImages: ["/Images/socialmedia/Audumber/a1.png","/Images/socialmedia/Audumber/a2.png"]
  },
  {
    id: 8,
    type: 'social',
    title: "Music Festival",
    category: "Social Media Marketing",
    clientName: "Aspectsportsindia",
    description: "Event promotion and ticket sales campaign",
    campaignDesc: "Viral campaign that led to a sold-out event three weeks before the date",
    image: "/Images/socialmedia/sports/thumb.png",
    galleryImages: ["/Images/socialmedia/sports/sports1.png","/Images/socialmedia/sports/sports2.png"]
  },
  {
    id: 9,
    type: 'social',
    title: "Skincare Line",
    category: "Social Media Marketing",
    clientName: "Dr.rituubhatia_cardiologist",
    description: "Influencer partnerships and product education campaign",
    campaignDesc: "Influencer collaborations that reached over 2 million potential customers",
    image: "/Images/socialmedia/cardiologist/thumb.png",
    galleryImages: ["/Images/socialmedia/cardiologist/dr1.png"]
  }
];

const videoProjects: VideoProject[] = [
  {
    id: 1,
    type: 'video',
    title: "Brand Commercial",
    category: "Video Editing",
    description: "30-second commercial for a sportswear brand",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    videoUrl: "/videos/video1.mp4"
  },
  {
    id: 2,
    type: 'video',
    title: "Product Showcase",
    category: "Video Editing",
    description: "Detailed product demonstration video with motion graphics",
    image: "",
    videoUrl: "/videos/video2.mp4"
  },
  {
    id: 3,
    type: 'video',
    title: "Event Highlights",
    category: "Video Editing",
    description: "Compilation of key moments from a corporate event",
    image: "",
    videoUrl: "/videos/video3.mp4"
  },
   {
    id: 4,
    type: 'video',
    title: "Event Highlights",
    category: "Video Editing",
    description: "Compilation of key moments from a corporate event",
    image: "",
    videoUrl: "/videos/video4.mp4"
  },
  {
    id: 4,
    type: 'video',
    title: "Event Highlights",
    category: "Video Editing",
    description: "Compilation of key moments from a corporate event",
    image: "",
    videoUrl: "/videos/video5.mp4"
  },
  {
    id: 4,
    type: 'video',
    title: "Event Highlights",
    category: "Video Editing",
    description: "Compilation of key moments from a corporate event",
    image: "",
    videoUrl: "/videos/video6.mp4"
  }
];

const graphicDesignProjects: GraphicDesignProject[] = [
  // Logo Design
  {
    id: 1,
    type: 'graphic',
    subCategory: 'logo',
    title: "Absolead",
    category: "Graphic Design",
    description: "Modern, minimalist logo design for a technology startup",
    image: "/Images/Logos/abs.png",
    detailedDescription: "A clean, forward-thinking logo design created for a tech startup in the AI space. The design uses simple geometric shapes to convey innovation and reliability.",
    projectInfo: {
      client: "NexTech AI",
      duration: "2 weeks",
      tools: ["Adobe Illustrator", "Figma"]
    }
  },
  {
    id: 2,
    type: 'graphic',
    subCategory: 'logo',
    title: "LumoScale",
    category: "Graphic Design",
    description: "Complete logo redesign for an established restaurant",
    image: "/Images/Logos/lumoscale.jpg",
    detailedDescription: "A warm, inviting logo redesign that honors the restaurant's 25-year heritage while modernizing their visual identity. The new design maintains the recognizable elements that customers associate with the brand.",
    projectInfo: {
      client: "Bella Cucina",
      duration: "3 weeks",
      tools: ["Adobe Illustrator", "Adobe Photoshop"]
    }
  },
  {
    id: 3,
    type: 'graphic',
    subCategory: 'logo',
    title: "AngelArena",
    category: "Graphic Design",
    description: "Complete logo redesign for an established restaurant",
    image: "/Images/Logos/anglearena.jpg",
    detailedDescription: "A warm, inviting logo redesign that honors the restaurant's 25-year heritage while modernizing their visual identity. The new design maintains the recognizable elements that customers associate with the brand.",
    projectInfo: {
      client: "Bella Cucina",
      duration: "3 weeks",
      tools: ["Adobe Illustrator", "Adobe Photoshop"]
    }
  },
  {
    id: 2,
    type: 'graphic',
    subCategory: 'logo',
    title: "RichVibes",
    category: "Graphic Design",
    description: "Complete logo redesign for an established restaurant",
    image: "/Images/Logos/richvibes.jpg",
    detailedDescription: "A warm, inviting logo redesign that honors the restaurant's 25-year heritage while modernizing their visual identity. The new design maintains the recognizable elements that customers associate with the brand.",
    projectInfo: {
      client: "Bella Cucina",
      duration: "3 weeks",
      tools: ["Adobe Illustrator", "Adobe Photoshop"]
    }
  },
  {
    id: 2,
    type: 'graphic',
    subCategory: 'logo',
    title: "Trishul",
    category: "Graphic Design",
    description: "Complete logo redesign for an established restaurant",
    image: "/Images/Logos/trishul.jpg",
    detailedDescription: "A warm, inviting logo redesign that honors the restaurant's 25-year heritage while modernizing their visual identity. The new design maintains the recognizable elements that customers associate with the brand.",
    projectInfo: {
      client: "Bella Cucina",
      duration: "3 weeks",
      tools: ["Adobe Illustrator", "Adobe Photoshop"]
    }
  },
  {
    id: 2,
    type: 'graphic',
    subCategory: 'logo',
    title: "Manam",
    category: "Graphic Design",
    description: "Complete logo redesign for an established restaurant",
    image: "/Images/Logos/manam.jpg",
    detailedDescription: "A warm, inviting logo redesign that honors the restaurant's 25-year heritage while modernizing their visual identity. The new design maintains the recognizable elements that customers associate with the brand.",
    projectInfo: {
      client: "Bella Cucina",
      duration: "3 weeks",
      tools: ["Adobe Illustrator", "Adobe Photoshop"]
    }
  },
  
];

const categories = ["Website Development", "Social Media Marketing", "Video Editing", "Graphic Design"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Website Development");
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([
    ...webdevProjects, 
    ...socialMediaClients, 
    ...videoProjects, 
    ...graphicDesignProjects
  ]);
  
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Filter items based on active category
     if (activeCategory === "Website Development") {
      setFilteredItems(webdevProjects);
    } else if (activeCategory === "Social Media Marketing") {
      setFilteredItems(socialMediaClients);
    } else if (activeCategory === "Video Editing") {
      setFilteredItems(videoProjects);
    } else if (activeCategory === "Graphic Design") {
      setFilteredItems(graphicDesignProjects);
    }
  }, [activeCategory]);
  
  useEffect(() => {
    // Animation observer
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
    
    sectionRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      sectionRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [filteredItems]);
  
  // Function to get subcategory items
  const getSubcategoryItems = (items: GraphicDesignProject[], subcategory: 'logo' | 'instagram') => {
    return items.filter(item => item.type === 'graphic' && item.subCategory === subcategory);
  };

  // Render appropriate card based on item type
  const renderPortfolioItem = (item: PortfolioItem) => {
    switch (item.type) {
      case 'webdev':
        return <WebDevCard key={item.id} project={item} />;
      case 'social':
        return <SocialMediaCard key={item.id} client={item} />;
      case 'video':
        return <VideoCard key={item.id} video={item} />;
      case 'graphic':
        return <GraphicDesignCard key={item.id} project={item} />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
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
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-turquoise-glow-sm' 
                  : 'bg-dark-800/50 text-white/70 hover:bg-dark-700/50 hover:text-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Portfolio Content */}
      <div className="container mx-auto px-4">
        {/* Website Development Section */}
        {( activeCategory === "Website Development") && (
          <div 
            ref={(el) => (sectionRefs.current[0] = el)}
            className="mb-20 opacity-0"
          >
            {  (
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl md:text-3xl font-medium">Website Development</h2>
                <div className="h-px bg-primary/30 flex-grow"></div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webdevProjects.map(project => (
                <WebDevCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
        
        {/* Social Media Marketing Section */}
        {(activeCategory === "Social Media Marketing") && (
          <div 
            ref={(el) => (sectionRefs.current[1] = el)}
            className="mb-20 opacity-0"
          >
            {(
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                  Social Media Marketing
                  <Users size={20} className="text-primary" />
                </h2>
                <div className="h-px bg-primary/30 flex-grow"></div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialMediaClients.map(client => (
                <SocialMediaCard key={client.id} client={client} />
              ))}
            </div>
          </div>
        )}
        
        {/* Video Editing Section */}
        {(activeCategory === "Video Editing") && (
          <div 
            ref={(el) => (sectionRefs.current[2] = el)}
            className="mb-20 opacity-0"
          >
            { (
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                  Video Editing
                  <Film size={20} className="text-primary" />
                </h2>
                <div className="h-px bg-primary/30 flex-grow"></div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {videoProjects.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://drive.google.com/drive/folders/166GPH-DU9kq4raR2B-23eVLYPdiyA8Cp" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Folder size={18} />
                View More Videos
              </a>
            </div>
          </div>
        )}
        
        {/* Graphic Design Section */}
        {(activeCategory === "Graphic Design") && (
          <div 
            ref={(el) => (sectionRefs.current[3] = el)}
            className="opacity-0"
          >
            { (
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                  Graphic Design
                  <Image size={20} className="text-primary" />
                </h2>
                <div className="h-px bg-primary/30 flex-grow"></div>
              </div>
            )}
            
            {/* Logo Design Subsection */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getSubcategoryItems(graphicDesignProjects as GraphicDesignProject[], 'logo').map(project => (
                  <GraphicDesignCard key={project.id} project={project} />
                ))}
              </div>
            </div>
            
            {/* Instagram Posts Subsection */}
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;