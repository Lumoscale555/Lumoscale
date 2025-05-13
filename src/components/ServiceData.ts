export interface ServiceType {
  title: string;
  description: string;
  keyFeatures: string[];
  iconName: string;
}

export const servicesData = {
  digitalMarketing: [
    {
      title: "Social Media Management",
      description: "Build and engage your community across relevant social media platforms.",
      keyFeatures: [
        "Content Creation & Curation",
        "Community Management",
        "Social Media Advertising",
        "Analytics & Reporting",
        "Platform Strategy"
      ],
      iconName: "smartphone"
    },
    {
      title: "Performance Marketing",
      description: "Drive conversions and maximize ROI with data-driven campaigns.",
      keyFeatures: [
        "PPC Advertising",
        "Conversion Rate Optimization",
        "Marketing Funnel Optimization",
        "Retargeting Campaigns",
        "Budget Management"
      ],
      iconName: "barChart"
    },
    {
      title: "Influencer Marketing & PR",
      description: "Amplify your brand message through strategic partnerships and media coverage.",
      keyFeatures: [
        "Influencer Identification & Outreach",
        "Campaign Strategy & Management",
        "Media Relations",
        "Press Release Distribution",
        "Brand Messaging"
      ],
      iconName: "sparkles"
    },
    {
      title: "Content Marketing",
      description: "Create valuable content that attracts and engages your target audience.",
      keyFeatures: [
        "Content Strategy Development",
        "Blog & Article Creation",
        "SEO-Optimized Content",
        "Content Distribution",
        "Performance Analysis"
      ],
      iconName: "fileText"
    },
    {
      title: "Email Marketing",
      description: "Build relationships and drive conversions with personalized email strategies.",
      keyFeatures: [
        "Email Campaign Strategy",
        "List Segmentation & Management",
        "Newsletter Design",
        "Automation Workflows",
        "Performance Tracking"
      ],
      iconName: "mail"
    },
    {
      title: "SEO & ASO",
      description: "Improve visibility in search engines and app stores to drive organic traffic.",
      keyFeatures: [
        "Keyword Research",
        "Technical SEO",
        "Content Optimization",
        "Link Building",
        "App Store Optimization"
      ],
      iconName: "search"
    },
    {
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive performance tracking.",
      keyFeatures: [
        "Analytics Setup & Integration",
        "Custom Dashboard Creation",
        "Key Performance Metrics",
        "Regular Reporting",
        "Insights & Recommendations"
      ],
      iconName: "lineChart"
    }
  ],
  softwareDevelopment: [
    {
      title: "Fullstack Web Apps",
      description: "Build powerful, scalable web applications that drive business growth.",
      keyFeatures: [
        "End-to-end Development",
        "Responsive Design",
        "Performance Optimization",
        "Security Implementation",
        "Scalable Architecture"
      ],
      iconName: "globe"
    },
    {
      title: "Frontend Development",
      description: "Create beautiful, intuitive user interfaces that delight your users.",
      keyFeatures: [
        "React & Next.js Development",
        "UI/UX Implementation",
        "Responsive Design",
        "Animation & Interactivity",
        "Performance Optimization"
      ],
      iconName: "layout"
    },
    {
      title: "Backend Development",
      description: "Develop robust server-side architecture to power your applications.",
      keyFeatures: [
        "Node.js & Express Development",
        "API Design & Development",
        "Database Management",
        "Authentication & Authorization",
        "Server Configuration"
      ],
      iconName: "server"
    },
    {
      title: "Database Design & Management",
      description: "Structure data efficiently to support your business operations.",
      keyFeatures: [
        "Schema Design",
        "Query Optimization",
        "Data Migration",
        "Backup & Recovery",
        "Performance Tuning"
      ],
      iconName: "database"
    },
    {
      title: "API Development & Integration",
      description: "Connect systems and services to create unified digital experiences.",
      keyFeatures: [
        "RESTful API Design",
        "GraphQL Implementation",
        "Third-party API Integration",
        "Authentication & Security",
        "API Documentation"
      ],
      iconName: "refresh"
    },
    {
      title: "Cloud Deployment",
      description: "Deploy your applications on secure, scalable cloud infrastructure.",
      keyFeatures: [
        "AWS/Azure/GCP Deployment",
        "Container Orchestration",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Logging"
      ],
      iconName: "cloud"
    }
  ]
};