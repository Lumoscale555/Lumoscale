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
      objective: "Generate walk-in bookings and demo session appointments for the gym, especially targeting people looking to start their fitness journey or switch gyms.",
      strategy: {
  Targeting: [
    "7–10 km radius around Basha Gym, Vizag",

    "Audience: Working professionals, college students, fitness enthusiasts",

    "Age: 20–38 years",

    "Interests: Fitness, bodybuilding, gym motivation, healthy lifestyle"
  ],
  CreativesUsed: [
    "Client transformation static",
    "Gym walk-through reel",
    "Offer-based posters (“Free First Demo”)",
    "Motivational carousel"

  ],
  FunnelSetup: [
    "Meta Lead Form Ads with simple, focused questions",
    "WhatsApp automation to immediately confirm interest and book free demo",
    "Manual follow-up by gym manager after 1st message confirmation",
  ],
},

      results: {
        AdSpend: "₹16,500",
LeadsGenerated: "48",
EstimatedWalkinsDemoAttendees: "14",
Reach: "13,500+",
AverageCostPerLead: "343",
ROI: "~3.9x",


      }
    }
  },
  {
    id: 2,
    type: 'social',
    title: "Fitness Fuel – Case Study",
    category: "Ads",
    clientName: "Fitness Fuel",
    description: "Meta Ads campaign that increased trial sign-ups and memberships in Gachibowli, Hyderabad",
campaignDesc: "Targeted 2-day free trial offer with bonus diet plan that boosted monthly & quarterly membership conversions by 55%",
    image: "/Images/performance/gym.jpg",
    galleryImages: ["/Images/socialmedia/Fitness/Fitness1.png", "/Images/socialmedia/Fitness/Fitness2.png"],
    campaignDetails: { 
      objective: "Drive consistent gym footfall and paid membership sign-ups by targeting local professionals and college students with a 2-day free trial offer and bonus diet plan — aimed at converting trials into monthly and quarterly packages.",
      strategy: {
       Targeting:[
        "Radius: 5 km around Gachibowli IT corridor",
        "Audience: Working professionals (especially IT), college students, and beginners",
        "Age Group: 21–35",
        "Interests: Fitness Motivation, Weight Loss, Gym Routines, Bodybuilding, Health & Wellness"
 ],

CreativesUsed:[
  "Before/After Transformation Posters (real client results)",
  "Gym Tour Reel – Walkthrough of machines, ambience, and trainers",
  "Offer Static Poster – “Get 2-Day Free Access + Diet Plan Worth '₹999' ",
  "Motivational Quote Carousel (used for retargeting and engagement)",
],


FunnelSetup:[

"Meta Lead Form Ads with 3-step questions: Name, Phone, Preferred Workout Time",

"WhatsApp Automation: Instant message with offer details + location",

"Daily Manual Follow-up: Gym manager sent personalised messages every evening",

"Walk-in Slot Confirmation: Done via WhatsApp post-interest"
],
      },


      results: {
        AdSpend: "₹15,263",
OrdersGenerated: "119",
Revenue: "₹58,620",
WebsiteVisitors: "15,400+",
CostPerPurchase: "107.14",
ROIAchieved: "4.6x",
ManualWorkloadCut: "35%+",
AutomationCoverage: "70%",

      }
    }
  },
{
  id: 3,
  type: "social",
  title: "Real Estate Campaign Case Study",
  category: "Ads",
  clientName: "Confidential Real Estate Developer",
  description: "A multi-month Meta Ads campaign that generated high-intent real estate leads through creative optimization and precise audience segmentation in India.",
campaignDesc: "Targeted Meta Ads campaign driving 10.5x ROI with high-quality leads and conversions.",

  image: "",
  galleryImages: [],
  campaignDetails: {
    objective: "Generate high-intent real estate leads using Meta Ads while testing different creatives, hooks, and audiences in a short trial window.",
    strategy: {
      FunnelObjective: [
        "Drive Meta form submissions from buyers actively looking for residential property.",
        "Test 4 ad creatives to identify the best-performing asset for scale-up."
      ],
      TargetingStrategy: [
        "Location: City-specific targeting within India",
        "Segments: Home buyers, real estate investors, NRI interest groups",
        "Age Group: 28–50 years",
        "Interests: Real estate, home loans, property portals",
        "Custom Audience: Website visitors & engagement retargeting"
      ],
      CreativeTesting: [
        "4 creatives tested (2 original + 2 variations)",
        "Mixed format: static and carousel",
        "Copy variations: emotional urgency, pricing hook, and project highlights"
      ],
      OptimizationFocus: [
        "CTR & cost per result used to identify best creatives",
        "Eliminated low-performing assets after 3-day cycle"
      ]
    },
    results: {
      AdSpend: "₹2,12,000",
QualifiedLeads: "800+",
LiveSiteVisitsOrConversions: "70+",
Reach: "1,20,000+",
ROIAchieved: "10.3x",
ManualWorkloadCut: "60%+",
AutomationCoverage: "100%",

    }
  }
},
  {
  id: 4,
  type: "social",
  title: "Real Estate Trial Campaign Case Study",
  category: "Ads",
  clientName: "Confidential Real Estate Developer",
  description: "Meta Ads campaign that generated high-intent real estate leads through creative and audience testing in India",
  campaignDesc: "Targeted 4 creatives and segmented audiences to boost qualified leads and appointments within a 3-day trial window",
  image: "",
  galleryImages: [],
  campaignDetails: {
    objective: "Generate high-intent real estate leads using Meta Ads while testing different creatives, hooks, and audiences in a short trial window.",
    strategy: {
      FunnelObjective: [
        "Drive Meta form submissions from buyers actively looking for residential property.",
        "Test 4 ad creatives to identify the best-performing asset for scale-up."
      ],
      TargetingStrategy: [
        "Location: City-specific targeting within India",
        "Segments: Home buyers, real estate investors, NRI interest groups",
        "Age Group: 28–50 years",
        "Interests: Real estate, home loans, property portals",
        "Custom Audience: Website visitors & engagement retargeting"
      ],
      CreativeTesting: [
        "4 creatives tested (2 original + 2 variations)",
        "Mixed format: static and carousel",
        "Copy variations: emotional urgency, pricing hook, and project highlights"
      ],
      OptimizationFocus: [
        "CTR & cost per result used to identify best creatives",
        "Eliminated low-performing assets after 3-day cycle"
      ]
    },
    results: {
      AdSpend: "₹1,271.18",
QualifiedLeads: "56",
Reach: "24,000+",
LiveVisitsConversions: "10",
ROIAchieved: "4.8x",
ManualWorkloadCut: "40%+",
AutomationCoverage: "65%",

    }
  }
},
{
  id: 5,
  type: "social",
  title: "eCommerce Cosmetics Brand Trial Campaign Case Study",
  category: "Ads",
  clientName: "Confidential D2C Skincare Brand",
  description: "Meta Ads campaign that boosted direct purchases and ROAS for a D2C skincare brand in India with backend automation",
campaignDesc: "Tested 3 creatives targeting skincare enthusiasts and used automation to improve retargeting and increase lifetime value over 30 days",
  image: "",
  galleryImages: [],
  campaignDetails: {
    objective: "Generate direct purchases and increase ROAS for a cosmetic product line using Meta Ads, while building backend automation to reduce manual operations and improve LTV.",
    strategy: {
      FunnelObjective: [
        "Drive cold traffic to product landing pages with optimized product offers.",
        "Use automation to retarget abandoned carts and upsell customers post-purchase."
      ],
      TargetingStrategy: [
         "Location: Tier 1 & Tier 2 cities in India",
  "Segments: Skincare buyers, beauty enthusiasts, impulse shoppers",
  "Age Group: 22–38 years",
  "Interests: Cosmetics, skincare routines, beauty influencers, self-care",
  "Custom Audience: Add-to-cart users, past purchasers, and video viewers"
      ],
      CreativeTesting: [
        "3 creatives tested (1 testimonial reel, 2 product explainer carousels)",
  "Copy variations: skin concern triggers, influencer voiceover, time-limited discount",
  "Visual angles: before-after skin glow, minimalist packaging, UGC-style demo"
      ],
      OptimizationFocus: [
        "Tracked cost per purchase & add-to-cart to identify friction points",
  "Improved landing page speed & mobile layout after initial traffic data",
  "Retargeting with WhatsApp automation for checkout recovery and COD confirmations"
      ]
    },
    results: {
    AdSpend: "₹12,750",
OrdersGenerated: "119",
Revenue: "58,620",
WebsiteVisitors: "15,400+",
CostPerPurchase: "107.14",
ROIAchieved: "4.6x",
ManualWorkloadCut: "35%+",
AutomationCoverage: "70%",

    }
  }
}
]
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
    title: 'Watch how Dreamwick Candles transform every space — real scents, real moods, real feels',
    category: 'Influencer Marketing',
    description: '',
    image: ' ', // Thumbnail for video
    videoUrl: 'videos/IMG_3168.mp4',
  },
  {
    id: 4,
    type: 'video',
    title: 'Bringing the vibe of LaCasa Café to life — real food, real feels, real moments',
    category: 'Influencer Marketing',
    description: '',
    image: ' ', // Thumbnail for video
    videoUrl: 'videos/IMG_6833.mp4',
  },
  {
    id: 5,
    type: 'video',
    title: 'Rayalaseema Ruchulu like never before — real taste, real culture, real memories',
    category: 'Influencer Marketing',
    description: '',
    image: ' ', // Thumbnail for video
    videoUrl: 'videos/WhatsApp Video 2025-07-15 at 13.23.42_b2c59542.mp4',
  },
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
    title: "Product Launch",
    category: "Social Media Marketing",
    clientName: "Clg_buzz",
    description: "Grew a street-interview page using viral hooks and high-visual snippets—some videos crossed 10M+ views",
    campaignDesc: "Grew a street-interview page using viral hooks and high-visual snippets—some videos crossed 10M+ views",
    image: "/Images/socialmedia/clgbuzz/thumb.jpg",
    galleryImages: ["/Images/socialmedia/clgbuzz/clg1.png"]
  },
  {
    id: 3,
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
    id: 4,
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
    title: "Brand Commercial",
    category: "Video Editing",
    description: "Fashion meets storytelling. A sharp, cinematic brand reel for Zara — crafted with style, pace, and vibe.",
    image: "",
    videoUrl: "videos/New Project 12 [FCA0D94].mp4"
  },
  {
    id: 4,
    type: 'video',
    title: "App Commercial",
    category: "Video Editing",
    description: "High-energy, fast-cut promo for the bidding app WonByBid. Designed to capture clicks, wins",
    image: "",
    videoUrl: "videos/Final Wonbybid [69B7C02].mp4"
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
const categories = ["Website Development", "Performance Marketing", "Influencer Marketing", "Social Media Marketing", "Video Editing", "Graphic Design", "SEO Marketing" ];

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