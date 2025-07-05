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
  GraphicDesignProject, 
  SEOCard,
  SEOProject
} from '../components/Portfolio/PortfolioCard';
import { ArrowRight, Film, Folder, Users, Image, Search } from 'lucide-react';

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
    technologies: ["React js",   "Tailwind CSS"],
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
    technologies: ["Vue.js",  "Tailwind CSS"],
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
    technologies: ["TypeScript",  "Tailwind CSS"],
    liveLink: "https://internforage.com/",
    detailedDescription: "InternForage is an EdTech platform that helps students and professionals build real-world tech skills through hands-on courses, internships, and mentorship. It offers training in areas like AWS, full-stack development, AI, and more, with a focus on career readiness and industry-aligned learning.",
  }
];
// New Ads case studies array
const adsCaseStudies: SocialMediaClient[] = [
  {
    id: 1,
    type: 'social',
    title: "Basha Body Care Case Study",
    category: "Ads",
    clientName: "Basha Body Care Gym",
    description: "Meta Ads campaign that increased membership sign-ups and trial bookings in Vishakhapatnam",
    campaignDesc: "Targeted Meta Ads campaign that increased membership revenue by 60%",
    image: "/Images/performance/Fitness.jpg",
    galleryImages: ["/Images/socialmedia/Fitness/Fitness1.png", "/Images/socialmedia/Fitness/Fitness2.png"],
    campaignDetails: { 
      objective: "Increase membership sign-ups and trial class bookings through a targeted Meta Ads campaign that leverages data-driven audience insights and consumer psychology.",
      strategy: {
        targeting: [
          "Location: Vishakhapatnam city and nearby suburbs (10 km radius)",
          "Age Group: 18-45 years (focus on young adults & working professionals)",
          "Interests: Fitness & wellness, weight training, yoga, CrossFit, healthy living",
          "Behaviors: Frequent gym visitors, online shoppers of fitness gear",
          "Custom Audience: Past website visitors, Facebook page engagers",
          "Lookalike Audience: 1% lookalike based on existing members"
        ],
        triggers: [
          "Social Proof: Member testimonials and transformation stories",
          "FOMO: Limited-time offers for discounted trial memberships",
          "Commitment & Consistency: Free trial classes to increase chances of full membership",
          "Authority: Highlighted certified trainers and expert-led classes",
          "Visual Motivation: High-energy, aspirational images and videos"
        ],
        formats: [
          "Carousel ads for showcasing facilities and trainers",
          "Video ads highlighting a day at the gym",
          "Stories ads with quick CTAs for trial sign-up",
          "Placements: Facebook Feed, Instagram Feed, Instagram Stories"
        ]
      },
      results: {
        adSpend: "₹18,000",
        impressions: "60,000+",
        reach: "15,000+",
        leads: "54",
        newMemberships: "17 (31.5% conversion)",
        costPerLead: "₹333",
        costPerMembership: "₹1,059",
        revenueGrowth: "60% increase from prior month",
        clickThroughRate: "",
        estimatedRevenue: "",
        ROAS: "",
        leadToMembershipConversionRate: ""
      }
    }
  },
  {
    id: 2,
    type: 'social',
    title: "Fitness Fuel Case Study",
    category: "Ads",
    clientName: "Fitness Fuel Gym",
    description: "Meta Leads campaign to drive trial sign-ups and convert to paying members at a Gachibowli gym.",
    campaignDesc: "Hooked fitness enthusiasts with precision-targeted Meta ads—drove 35 new memberships in record time.",
    image: "/Images/performance/gym.jpg",
    galleryImages: [],
    campaignDetails: {
      objective: "Drive high-quality trial sign-ups and convert them into full-paying members using a psychology-first, data-backed Meta Leads campaign.",
      strategy: {
        targeting: [
          "Location: Gachibowli + 8 km radius",
          "Age Group: 18–40 years",
          "Profession Focus: IT professionals, college students, remote workers",
          "Interests: Muscle building, home workouts, fitness influencers, protein supplements, Zumba, body transformation",
          "Behaviors: Gym app users, purchase behavior for fitness gear, page engagement with fitness brands",
          "Custom Audiences: Past gym visitors, Facebook/Instagram page engagers",
          "Lookalike Audience: Based on existing membership CRM list"
        ],
        triggers: [
          "Social Proof: Before/after transformations, real member reviews",
          "FOMO: “50 trial spots only — Get yours before it’s gone”",
          "Commitment Trigger: Free 1-day VIP pass",
          "Authority: Showcased certified trainers and modern equipment",
          "Identity Appeal: “You don’t have to be extreme, just consistent. Start here.”",
          "Ease & Speed: Instant lead forms (Name, Number, Preferred Time Slot)"
        ],
        formats: [
          "Video Ads: Quick gym tour with upbeat background music",
          "Carousel Ads: Different programs – weight loss, strength, group classes",
          "Stories + Reels: Limited-time offer graphics with swipe-up lead forms",
          "Placements: Facebook Feed, Instagram Feed, Stories, Instagram Explore"
        ]
      },
      results: {
        adSpend: "₹35,000",
        impressions: "110,000+",
        reach: "30,000+",
        leads: "92",
        newMemberships: "35",
        costPerLead: "₹380",
        costPerMembership: "₹1,000",
        clickThroughRate: "~1.8%",
        estimatedRevenue: "₹52,500 (35 × ₹1,500)",
        ROAS: "1.5x",
        leadToMembershipConversionRate: "38%",
        revenueGrowth:"60%"
      }
    }
  }
];
// Influencer Marketing Data
const influencerMarketing: (SocialMediaClient | VideoProject)[] = [
  {
    id: 1,
    type: 'video',
    title: 'Watch Ayesha Khan bring the magic of the resort to life — real stories, real vibes, real impact ',
    category: 'Influencer Marketing',
    description: '',
    image: '/Images/influencer/ayesha-thumb.jpg', // Thumbnail for video
    videoUrl: '/videos/video1.mp4',
  },
  {
    id: 2,
    type: 'social',
    title: 'Vishal Prajapati Influencer ',
    category: 'Influencer Marketing',
    clientName: 'Vishal Prajapati',
    description: '',
    campaignDesc: 'Instagram influencer campaign with high engagement.',
    image: '/Images/influencer/vishal.png',
    galleryImages: ['/Images/influencer/vishal1.png', '/Images/influencer/vishal2.png'],
  },
  {
    id: 3,
    type: 'video',
    title: 'Feel the warmth, flavours, and stories that make La Casa a local favourite. ',
    category: 'Influencer Marketing',
    description: '',
    image: '/Images/influencer/New thumb.jpg', // Thumbnail for video
    videoUrl: '/videos/IMG_6833.mp4',
  },
  {
    id: 3,
    type: 'video',
    title: 'Watch the magic of Dream Wicks Candles come alive — real moments, real warmth, real stories. ',
    category: 'Influencer Marketing',
    description: '',
    image: '/Images/influencer/Newthumb1.jpg', // Thumbnail for video
    videoUrl: '/videos/IMG_3168.mp4',
  }
];

const socialMediaClients: SocialMediaClient[] = [
  {
    id: 1,
    type: 'social',
    title: "o2 Fitness Club",
    category: "Social Media Marketing",
    clientName: "O2 Fitness GYM",
    description: "Comprehensive social media campaign for a fitness brand",
    campaignDesc: "Comprehensive social media campaign for a fitness brand",
    image: "/Images/socialmedia/Fitness/thumb.png",
    galleryImages: ["/Images/socialmedia/Fitness/Fitness1.png","/Images/socialmedia/Fitness/Fitness2.png"]
  },
  {
    id: 2,
    type: 'social',
    title: "Restaurant Promotion",
    category: "Social Media Marketing",
    clientName: "Niranjan",
    description: "Elevated this jewellery brand’s presence using high-visual content and strategic engagement.",
    campaignDesc: "Elevated this jewellery brand’s presence using high-visual content and strategic engagement.",
    image: "/Images/socialmedia/Niranjan/thumb.png", 
    galleryImages: ["/Images/socialmedia/Niranjan/n1.png","/Images/socialmedia/Niranjan/n2.png","/Images/socialmedia/Niranjan/n3.png"]
  },
  {
    id: 3,
    type: 'social',
    title: "Product Launch",
    category: "Social Media Marketing",
    clientName: "Clg_buzz",
    description: "Grew a street-interview page using viral hooks and high-visual snippets—some videos crossed 10M+ views",
    campaignDesc: "Grew a street-interview page using viral hooks and high-visual snippets—some videos crossed 10M+ views",
    image: "/Images/socialmedia/clgbuzz/thumb.jpg",
    galleryImages: ["/Images/socialmedia/clgbuzz/clg1.png"]
  },
  {
    id: 4,
    type: 'social',
    title: "Fashion Brand",
    category: "Social Media Marketing",
    clientName: "batman",
    description: "Scaled a niche meme page with relatable content and trend-jacking—some reels crossed 1M+ views",
    campaignDesc: "Scaled a niche meme page with relatable content and trend-jacking—some reels crossed 1M+ views",
    image: "/Images/socialmedia/batman/thumb.jpg",
    galleryImages: ["/Images/socialmedia/batman/batman1.png"]
  },
  {
    id: 5,
    type: 'social',
    title: "Real Estate Agency",
    category: "Social Media Marketing",
    clientName: "FoodTown",
    description: "Boosted customer visits by 40% through high-visual content and strategic posting",
    campaignDesc: "Boosted customer visits by 40% through high-visual content and strategic posting",
    image: "/Images/socialmedia/Foodtown/thumb.png",
    galleryImages: ["/Images/socialmedia/Foodtown/food1.png","/Images/socialmedia/Foodtown/food2.png","/Images/socialmedia/Foodtown/food3.png"]
  },
  {
    id: 6,
    type: 'social',
    title: "Health Products",
    category: "Social Media Marketing",
    clientName: "nimantran",
    description: "Elevated brand presence and boosted engagement by 35% with targeted social media strategies.",
    campaignDesc: "Elevated brand presence and boosted engagement by 35% with targeted social media strategies.",
    image: "/Images/socialmedia/nimantran/thumb.png",
    galleryImages: ["/Images/socialmedia/nimantran/n1.png","/Images/socialmedia/nimantran/n2.png","/Images/socialmedia/nimantran/n3.png"]
  },
  {
    id: 7,
    type: 'social',
    title: "Coffee Shop Chain",
    category: "Social Media Marketing",
    clientName: "Audumber",
    description: "Increased inquiries and visibility by 40% through focused social media management and high-impact visuals",
    campaignDesc: "Increased inquiries and visibility by 40% through focused social media management and high-impact visuals",
    image: "/Images/socialmedia/Audumber/thumb.png",
    galleryImages: ["/Images/socialmedia/Audumber/a1.png","/Images/socialmedia/Audumber/a2.png"]
  },
  {
    id: 8,
    type: 'social',
    title: "Music Festival",
    category: "Social Media Marketing",
    clientName: "Aspectsportsindia",
    description: "Increased fan engagement and brand awareness by 42% with targeted content and dynamic social media strategies",
    campaignDesc: "Increased fan engagement and brand awareness by 42% with targeted content and dynamic social media strategies",
    image: "/Images/socialmedia/sports/thumb.png",
    galleryImages: ["/Images/socialmedia/sports/sports1.png","/Images/socialmedia/sports/sports2.png"]
  },
  {
    id: 9,
    type: 'social',
    title: "Skincare Line",
    category: "Social Media Marketing",
    clientName: "Dr.rituubhatia_cardiologist",
    description: "Boosted patient inquiries by 53% through tailored social media content and expert audience targeting",
    campaignDesc: "Boosted patient inquiries by 53% through tailored social media content and expert audience targeting",
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
    description: "We turned luxury into a story — Nirva Resort promo reel, crafted by us!",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    videoUrl: "/videos/video1.mp4"
  },
  {
    id: 2,
    type: 'video',
    title: "Product Showcase",
    category: "Video Editing",
    description: "Visually hooking short commercial for a cafe",
    image: "",
    videoUrl: "/videos/video2.mp4"
  },
  {
    id: 3,
    type: 'video',
    title: "Sports Highlight",
    category: "Video Editing",
    description: "Every shot, every cheer, captured in action",
    image: "",
    videoUrl: "/videos/video3.mp4"
  },
  {
    id: 4,
    type: 'video',
    title: "Venue Highlight",
    category: "Video Editing",
    description: "Commercial of a restro bar with a complimention of top performing foods",
    image: "",
    videoUrl: "/videos/video4.mp4"
  },
  {
    id: 5,
    type: 'video',
    title: "Realty Tour",
    category: "Video Editing",
    description: "Animated visual commercial for real estate",
    image: "",
    videoUrl: "/videos/video5.mp4"
  },
  {
    id: 6,
    type: 'video',
    title: "Fitness Promo",
    category: "Video Editing",
    description: "Extreme quality commercial of a gym with a complimention of workout routines",
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
      client: "Absolead",
      duration: "2 days",
      tools: ["Adobe Illustrator", "Figma"]
    }
  },
  {
    id: 2,
    type: 'graphic',
    subCategory: 'logo',
    title: "LumoScale",
    category: "Graphic Design",
    description: "Created a dynamic 3D logo that elevated brand perception and instantly communicated the agency’s premium positioning",
    image: "/Images/Logos/lumoscale.jpg",
    detailedDescription: "We designed a premium 3D logo with an award-inspired emblem in radiant blue, symbolizing trust and excellence. Its modern depth and sharp finish make it stand out across digital and print, becoming a powerful anchor for the agency’s identity.",
    projectInfo: {
      client: "Lumoscale",
      duration: "2 Days",
      tools: ["Adobe Photoshop"]
    }
  },
  {
    id: 3,
    type: 'graphic',
    subCategory: 'logo',
    title: "Angel Arna",
    category: "Graphic Design",
    description: "Crafted a stunning 3D influencer setup with aesthetic lighting and modern design to elevate content quality and brand appeal.",
    image: "/Images/Logos/anglearena.jpg",
    detailedDescription: "We created a sleek 3D design of an influencer setup featuring dynamic lighting, a minimalist desk layout, and aesthetic wall panels. The visuals helped the influencer showcase a professional yet relatable vibe—perfect for brand deals and content shoots.",
    projectInfo: {
      client: "Samreen shaik",
      duration: "2 Days",
      tools: ["Adobe Illustrator", "Canva"]
    }
  },
  {
    id: 4,
    type: 'graphic',
    subCategory: 'logo',
    title: "RichVibes",
    category: "Graphic Design",
    description: "Created a bold, flat logo for a car company using sharp lines and a minimalist emblem to convey strength, speed, and modernity.",
    image: "/Images/Logos/richvibes.jpg",
    detailedDescription: "Designed a sleek flat logo featuring a stylized car silhouette with red racing stripes, symbolizing speed, energy, and high performance—perfectly capturing the essence of a modern automotive brand.",
    projectInfo: {
      client: "Richvibes AYI",
      duration: "2 Days",
      tools: ["Adobe Illustrator", " Canva"]
    }
  },
  {
    id: 5,
    type: 'graphic',
    subCategory: 'logo',
    title: "Trishul",
    category: "Graphic Design",
    description: "Designed a sleek 2D logo with rooftops and sharp lines to reflect trust and professionalism in real estate.",
    image: "/Images/Logos/trishul.jpg",
    detailedDescription: "Crafted a clean 2D logo for a real estate brand, featuring minimalist rooftops and sharp lines to convey trust, structure, and sophistication—ideal for building strong buyer confidence.",
    projectInfo: {
      client: "Trishul prime realty",
      duration: "1 Day",
      tools: ["Canva"]
    }
  },
  {
    id: 6,
    type: 'graphic',
    subCategory: 'logo',
    title: "Manam",
    category: "Graphic Design",
    description: "Created a simple, heartfelt 2D logo featuring hands and a heart to symbolize care and community support.",
    image: "/Images/Logos/manam.jpg",
    detailedDescription: "The 2D logo for the charitable trust features a peaceful pigeon in light blue, symbolizing hope and tranquility, combined with gentle design elements that reflect compassion and community care.",
    projectInfo: {
      client: " Manam foundation",
      duration: "1 Day",
      tools: ["Canva"]
    }
  },
];



const seoCaseStudies: SEOProject[] = [
  {
    id: 1,
    type: 'seo',
    clientName: "ITNova",
    title: "ITNova SEO Campaign",         // <-- Add this
    category: "SEO Marketing", 
    industry: "Technology Consulting",
    targetAudience: "Businesses seeking IT solutions and services",
    mainGoal: "Increase organic traffic, keyword rankings, and leads through SEO",
    description: "A comprehensive SEO campaign to boost ITNova's online visibility and lead generation.",
    image: "/Images/seo/IT.png", // Replace with actual image path if available
    objectives: [
      "Increase organic traffic",
      "Improve keyword rankings",
      "Enhance technical SEO",
      "Optimize content for users and search engines",
      "Boost conversion rates via landing pages and CTAs"
    ],
    toolsUsed: [
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
      "PageSpeed Insights",
      "Surfer SEO"
    ],
    auditFindings: {
      technicalSEO: "Needs HTTPS, moderate speed, mobile friendly",
      onPageSEO: "Meta tags present but not optimized; good heading usage",
      offPageSEO: "Limited backlink profile"
    },
    implementation: {
      keywordStrategy: "Researched and mapped long-tail, commercial keywords",
      onPage: "Optimized meta tags, schema markup, improved linking",
      content: "Updated blogs, added SEO-focused content and multimedia",
      technicalFixes: "Added HTTPS, fixed redirects, improved Core Web Vitals",
      offPage: "Built backlinks via guest posts, press, influencers"
    },
    results: {
      organicTraffic: { before: "1,500/mo", after: "9,000/mo", growth: "+500%" },
      top10Keywords: { before: 10, after: 80, growth: "+700%" },
      bounceRate: { before: "65%", after: "50%" },
      sessionDuration: { before: "1:30 min", after: "3:00 min" },
      newLeads: { before: "100/mo", after: "500/mo", growth: "+400%" }
    },
   
  },
  {
    id: 2,
    type: 'seo',
    clientName: "ZerDs",
    title: "ITNova SEO Campaign",         // <-- Add this
    category: "SEO Marketing", 
    industry: "Digital Solutions (Web, Mobile, Cybersecurity)",
    targetAudience: "Businesses needing full-stack digital services",
    mainGoal: "Improve online visibility and lead flow",
    description: "SEO strategy to enhance ZerDs' digital presence and attract more leads.",
    image: "/Images/seo/zerds.png", // Replace with actual image path if available
    objectives: [
      "Grow traffic",
      "Improve keyword rankings",
      "Fix technical SEO",
      "Increase domain authority"
    ],
    toolsUsed: [
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
      "PageSpeed Insights",
      "Surfer SEO"
    ],
    auditFindings: {
      technicalSEO: "Fast load, responsive, uses HTTPS",
      onPageSEO: "Optimized meta tags, weak image alt attributes",
      offPageSEO: "Moderate backlink growth"
    },
    implementation: {
      keywordStrategy: "Clustered digital service keywords by intent",
      onPage: "Added alt attributes, improved content",
      content: "Revamped blogs, created how-to content",
      technicalFixes: "Image optimization, schema markup",
      offPage: "Outreach to tech blogs and partner sites"
    },
    results: {
      organicTraffic: { before: "2,000/mo", after: "10,000/mo", growth: "+400%" },
      top10Keywords: { before: 15, after: 100, growth: "+566%" },
      bounceRate: { before: "60%", after: "45%" },
      sessionDuration: { before: "1:45 min", after: "3:30 min" },
      newLeads: { before: "150/mo", after: "600/mo", growth: "+300%" }
    },
   
  },
  
];


// Updated categories including Ads
const categories = ["Website Development", "Performance Marketing","Influencer Marketing", "Social Media Marketing", "Video Editing", "Graphic Design","SEO Marketing"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Website Development");
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([
    ...webdevProjects, 
    ...socialMediaClients, 
    ...videoProjects, 
    ...graphicDesignProjects,
    ...adsCaseStudies,
    ...seoCaseStudies,
    ...influencerMarketing
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
    } else if (activeCategory === "Performance Marketing") {
      setFilteredItems(adsCaseStudies);
    }
    else if (activeCategory === "SEO Marketing") {
      setFilteredItems(seoCaseStudies);
    } else if (activeCategory === "Influencer Marketing") {
      setFilteredItems(influencerMarketing);
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
      case 'seo':
        return <SEOCard key={item.id} project={item} />;
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
        <h1 className="text-4xl md:text-6xl mb-6 text-center  font-serif">
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
        {(activeCategory === "Website Development") && (
          <div 
            ref={(el) => (sectionRefs.current[0] = el)}
            className="mb-20 opacity-0"
          >
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl md:text-3xl font-medium">Website Development</h2>
              <div className="h-px bg-primary/30 flex-grow"></div>
            </div>
            
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
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                Social Media Marketing
                <Users size={20} className="text-primary" />
              </h2>
              <div className="h-px bg-primary/30 flex-grow"></div>
            </div>
            
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
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                Video Editing
                <Film size={20} className="text-primary" />
              </h2>
              <div className="h-px bg-primary/30 flex-grow"></div>
            </div>
            
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
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                Graphic Design
                <Image size={20} className="text-primary" />
              </h2>
              <div className="h-px bg-primary/30 flex-grow"></div>
            </div>
            
            {/* Logo Design Subsection */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getSubcategoryItems(graphicDesignProjects as GraphicDesignProject[], 'logo').map(project => (
                  <GraphicDesignCard key={project.id} project={project} />
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://drive.google.com/drive/folders/1hvi7RDQvbtorJYQJ3KOqjfT3121JS1bk?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Folder size={18} />
                View More 
              </a>
            </div>
          
          </div>
        )}
        
        {/* Ads Section */}
        {(activeCategory === "Performance Marketing") && (
          <div 
            ref={(el) => (sectionRefs.current[4] = el)}
            className="mb-20 opacity-0"
          >
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                Meta Ads Campaigns
                <ArrowRight size={20} className="text-primary" />
              </h2>
              <div className="h-px bg-primary/30 flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adsCaseStudies.map(caseStudy => (
                <SocialMediaCard key={caseStudy.id} client={caseStudy} />
              ))}
            </div>
          </div>
        )}
        {(activeCategory === "SEO Marketing") && (
          <div 
            ref={(el) => (sectionRefs.current[5] = el)}
            className="mb-20 opacity-0"
          >
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                SEO Marketing
                <Search size={20} className="text-primary" />
              </h2>
              <div className="h-px bg-primary/30 flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoCaseStudies.map(project => (
                <SEOCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
        {(activeCategory === "Influencer Marketing") && (
          <div 
            ref={(el) => (sectionRefs.current[6] = el)}
            className="mb-20 opacity-0"
          >
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                Influencer Marketing
                <Users size={20} className="text-primary" />
              </h2>
              <div className="h-px bg-primary/30 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {influencerMarketing.map(item => (
                item.type === 'video' ? (
                  <VideoCard key={item.id} video={item as VideoProject} />
                ) : (
                  <SocialMediaCard key={item.id} client={item as SocialMediaClient} />
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;