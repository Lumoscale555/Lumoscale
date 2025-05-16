export interface ServiceType {
  title: string;
  description: string;
  keyFeatures: string[];
  iconName: string;
}

export const servicesData = {
  digitalMarketing: [
    {
      title: "Performance Marketing",
      description:
        "Drive conversions and maximize ROI with data-driven campaigns.",
      keyFeatures: [
        "Google & Meta Ads Management",
        "Conversion Rate Optimization",
        "A/B Testing",
        "Analytics & Reporting",
        "Ad Budget Optimization",
      ],
      iconName: "barChart",
    },
    {
      title: "Social Media Management",
      description:
        "Build and engage your community across relevant social media platforms.",
      keyFeatures: [
        "Social Media Strategy",
        "Content Creation (Posts, Stories, Reels)",
        "Community Engagement",
        "Analytics & Reporting",
        "Brand Consistency",
      ],
      iconName: "smartphone",
    },
    {
      title: "Creative & Branding Services",
      description:
        "Craft visually compelling and consistent brand experiences across digital and physical platforms.",
      keyFeatures: [
        "Logo & Brand Identity Design",
        "Social Media Graphics",
        "Video Production & Editing",
        "Brand Guidelines",
        "Product & Packaging Design",
      ],
      iconName: "palette",
    },
    {
      title: "Influencer Marketing",
      description:
        "Leverage influencer partnerships to boost brand awareness and engagement.",
      keyFeatures: [
        "Influencer Research & Outreach",
        "Campaign Strategy & Execution",
        "Content Collaboration",
        "Campaign Performance Tracking",
        "Influencer Giveaways",
      ],
      iconName: "users",
    },
    {
      title: "SEO",
      description:
        "Improve your website's visibility with comprehensive SEO strategies.",
      keyFeatures: [
        "Keyword Research and Strategy",
        "On-Page SEO",
        "Off-Page SEO",
        "Technical SEO",
        "Local SEO",
        "SEO Performance Analytics and Reporting",
      ],
      iconName: "search",
    },
  ],
    softwareDevelopment: [
  {
    title: "Website Development",
    description:
      "Design and develop responsive, SEO-optimized websites tailored to your needs.",
    keyFeatures: [
      "Static & Dynamic Website Design",
      "Mobile Responsive Design",
      "UI/UX Design Integration",
      "Landing Page Development",
      "SEO Optimization",
    ],
    iconName: "globe",
  },
  {
    title: "WordPress Development",
    description:
      "Build customizable and secure WordPress sites with optimized performance.",
    keyFeatures: [
      "WordPress Website Setup",
      "Theme Customization",
      "Plugin Integration",
      "Blog & Portfolio Websites",
      "Speed & Security Optimization",
    ],
    iconName: "wordpress",
  },
  {
    title: "E-commerce Development",
    description:
      "Create mobile-friendly online stores with seamless product and order management.",
    keyFeatures: [
      "E-commerce Store Design",
      "Payment Gateway Integration",
      "Product Management System",
      "Order & Inventory Management",
      "Mobile-Friendly Design",
    ],
    iconName: "cart-shopping",
  },
],
};
