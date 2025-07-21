import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, BarChart, Search, TrendingUp, Users } from "lucide-react";

export type PortfolioItemBase = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
};

export type WebDevProject = PortfolioItemBase & {
  type: "webdev";
  technologies: string[];
  liveLink?: string;
  detailedDescription: string;
  testimonial?: {
    text: string;
    author: string;
  };
  challenges?: string[];
};

export type SocialMediaClient = PortfolioItemBase & {
  type: "social";
  clientName: string;
  campaignDesc: string;
  galleryImages: string[];
  campaignDetails?: {
    objective: string;
    strategy: {
      Targeting?: string[]; 
      AudienceTargeting?: string[];             // 🎯 Audience Targeting
      CreativesUsed?: string[];         // 🎨 Creatives Used
      FunnelSetup?: string[];                // 🧭 Funnel Setup
      Triggers?: string[];              // 🧠 Psychological Triggers (optional, if still used)
      Formats?: string[];
      FunnelObjective?: string[];
      TargetingStrategy?: string[]; 
      CreativeTesting?: string[];
      OptimizationFocus?: string[];          // 🖼️ Ad Formats & Placements
    };

    
    results: {
  AdSpend: string;
  LeadsGenerated?: string;
  EstimatedWalkinsDemoAttendees?: string;
  Reach?: string;
  AverageCostPerLead?: string;
  ROI?: string;
  OrdersGenerated?: string;
  Revenue?: string;
  WebsiteVisitors?: string;
  CostPerPurchase?: string;
  ROIAchieved?: string;
  ManualWorkloadCut?: string;
  AutomationCoverage?: string;
  QualifiedLeads?: string;
  LiveSiteVisitsOrConversions?: string;
  LiveVisitsConversions?: string;

    };
  };
};

export type SEOProject = PortfolioItemBase & {
  id: number;
  type: "seo";
  clientName: string;
  industry: string;
  targetAudience: string;
  mainGoal: string;
  description: string;
  image?: string;
  objectives: string[];
  toolsUsed: string[];
  auditFindings: {
    technicalSEO: string;
    onPageSEO: string;
    offPageSEO: string;
  };
  implementation: {
    keywordStrategy: string;
    onPage: string;
    content: string;
    technicalFixes: string;
    offPage: string;
  };
  results: {
    organicTraffic: { before: string; after: string; growth: string };
    top10Keywords: { before: number; after: number; growth: string };
    bounceRate: { before: string; after: string };
    sessionDuration: { before: string; after: string };
    newLeads: { before: string; after: string; growth: string };
  };
 
};

export type VideoProject = PortfolioItemBase & {
  type: "video";
  videoUrl: string;
};

export type GraphicDesignProject = PortfolioItemBase & {
  type: "graphic";
  subCategory: "logo" | "instagram";
  detailedDescription: string;
  projectInfo?: {
    client?: string;
    duration?: string;
    tools?: string[];
  };
};

export type PortfolioItem =
  | WebDevProject
  | SocialMediaClient
  | VideoProject
  | GraphicDesignProject
  | SEOProject;
  

interface WebDevCardProps {
  project: WebDevProject;
}
interface SEOCardProps {
  project: SEOProject;
}
export const SEOCard = ({ project }: SEOCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="glass-card-hover overflow-hidden relative group cursor-pointer h-full flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        {/* Client Image/Placeholder */}
        <div className="aspect-[5/5] bg-dark-800/30 flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.clientName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-4xl font-bold text-white/30">
              {project.clientName.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Client Info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-medium mb-2 group-hover:text-gradient transition-all duration-300">
            {project.clientName}
          </h3>
          <p className="text-white/70 text-sm mb-4 flex-grow">
            {project.description}
          </p>

          {/* View Case Study */}
          <div className="flex justify-end">
            <button className="text-sm text-primary flex items-center gap-1 group-hover:text-gradient transition-colors">
              View Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Expanded Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-dark-800 border-dark-700 max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium">
              {project.clientName} SEO Case Study
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-8">
            {/* Case Study Header */}
            <div>
              <h2 className="text-xl font-semibold text-gradient">
                {project.industry} SEO Campaign
              </h2>
              <p className="text-white/70 mt-2 text-sm">{project.description}</p>
            </div>

            {/* Objectives */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Objectives</h3>
              <ul className="space-y-2">
                {project.objectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-dark-700/50 rounded-md text-sm text-white/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Audit Findings */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Audit Findings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-2">
                    Technical SEO
                  </h4>
                  <p className="text-white/70 text-sm">
                    {project.auditFindings.technicalSEO}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-2">
                    On-Page SEO
                  </h4>
                  <p className="text-white/70 text-sm">
                    {project.auditFindings.onPageSEO}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-2">
                    Off-Page SEO
                  </h4>
                  <p className="text-white/70 text-sm">
                    {project.auditFindings.offPageSEO}
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Implementation</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-1">
                    Keyword Strategy
                  </h4>
                  <p className="text-white/70 text-sm">
                    {project.implementation.keywordStrategy}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-1">
                    On-Page Optimization
                  </h4>
                  <p className="text-white/70 text-sm">
                    {project.implementation.onPage}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-1">
                    Content Strategy
                  </h4>
                  <p className="text-white/70 text-sm">
                    {project.implementation.content}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-1">
                    Technical Fixes
                  </h4>
                  <p className="text-white/70 text-sm">
                    {project.implementation.technicalFixes}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-1">
                    Off-Page Strategy
                  </h4>
                  <p className="text-white/70 text-sm">
                    {project.implementation.offPage}
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <BarChart className="text-primary" size={20} />
                Results (6 Months)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs text-white/50 mb-1">Organic Traffic</p>
                  <p className="text-xl font-semibold text-white">
                    {project.results.organicTraffic.after}
                  </p>
                  <p className="text-xs text-primary">
                    {project.results.organicTraffic.growth}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs text-white/50 mb-1">Top 10 Keywords</p>
                  <p className="text-xl font-semibold text-white">
                    {project.results.top10Keywords.after}
                  </p>
                  <p className="text-xs text-primary">
                    {project.results.top10Keywords.growth}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs text-white/50 mb-1">Bounce Rate</p>
                  <p className="text-xl font-semibold text-white">
                    {project.results.bounceRate.after}
                  </p>
                  <p className="text-xs text-primary">
                    From {project.results.bounceRate.before}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs text-white/50 mb-1">Session Duration</p>
                  <p className="text-xl font-semibold text-white">
                    {project.results.sessionDuration.after}
                  </p>
                  <p className="text-xs text-primary">
                    From {project.results.sessionDuration.before}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs text-white/50 mb-1">New Leads</p>
                  <p className="text-xl font-semibold text-white flex items-center justify-center">
                    <Search size={16} className="mr-1 text-primary" />
                    {project.results.newLeads.after}
                  </p>
                  <p className="text-xs text-primary">
                    {project.results.newLeads.growth}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
export const WebDevCard = ({ project }: WebDevCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="glass-card-hover overflow-hidden relative group cursor-pointer h-full flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        {/* Project Image */}
        <div className="aspect-[16/9] bg-dark-800/30 flex items-center justify-center overflow-hidden rounded-md">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-4xl font-bold text-white/30">
              {project.title.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-medium mb-2 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm mb-4 flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-dark-800/50 rounded-md text-xs text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live Link Button */}
          {project.liveLink && (
            <div className="flex justify-end">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm gap-1 text-primary hover:text-gradient transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live Link <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Expanded Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-dark-800 border-dark-700 max-w-4xl ">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Project Image */}
          <div className="aspect-video bg-dark-800/50 overflow-hidden rounded-md mb-6">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white/30">
                {project.title.substring(0, 2).toUpperCase()}
              </div>
            )}
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-gradient">
              About the Project
            </h4>
            <p className="text-white/80">{project.detailedDescription}</p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-gradient">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-dark-700/50 rounded-md text-sm text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-gradient">
                Challenges Overcome
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/80">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mb-6 p-4 border border-dark-700 rounded-md bg-dark-900/50">
              <p className="text-white/80 italic mb-2">
                "{project.testimonial.text}"
              </p>
              <p className="text-right text-sm text-primary">
                — {project.testimonial.author}
              </p>
            </div>
          )}

          {/* Live Link */}
          {project.liveLink && (
            <div className="flex justify-end mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                Visit Website <ArrowRight size={16} />
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

interface SocialMediaCardProps {
  client: SocialMediaClient;
}

export const SocialMediaCard = ({ client }: SocialMediaCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="glass-card-hover overflow-hidden relative group cursor-pointer h-full flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        {/* Client Image/Placeholder */}
        <div className="aspect-[5/5] bg-dark-800/30 flex items-center justify-center overflow-hidden">
          {client.image ? (
            <img
              src={client.image}
              alt={client.clientName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-4xl font-bold text-white/30">
              {client.clientName.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Client Info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-medium mb-2 group-hover:text-gradient transition-all duration-300">
            {client.clientName}
          </h3>
          <p className="text-white/70 text-sm flex-grow">
            {client.campaignDesc}
          </p>

          {/* View Case Study */}
          <div className="flex justify-end mt-3">
            <button className="text-sm text-primary flex items-center gap-1 group-hover:text-gradient transition-colors">
              View Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Expanded Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-dark-800 border-dark-700 max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium">
              {client.clientName}
            </DialogTitle>
          </DialogHeader>

          {client.campaignDetails ? (
            <div className="space-y-8">
              {/* Case Study Header */}
              <div>
                <h2 className="text-xl font-semibold text-gradient">
                  Meta Ads Campaign Case Study
                </h2>
                <p className="text-white/70 mt-2 text-sm">
                  {client.description}
                </p>
              </div>

              {/* Objective Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Objective</h3>
                <p className="text-white/80 text-sm">
                  {client.campaignDetails.objective}
                </p>
              </div>

              {/* Strategy & Execution Section */}
             <div className="space-y-4">
  <h3 className="text-lg font-medium text-white">Strategy & Execution</h3>

  {/* 🎯 Audience Targeting */}
  {client.campaignDetails.strategy.Targeting?.length > 0 && (
    <div>
      <h4 className="text-sm font-medium text-white mb-2">1. Audience Targeting</h4>
      <ul className="space-y-2">
        {client.campaignDetails.strategy.Targeting.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3" />
            <span className="text-white/80 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* 🎨 Creatives Used */}
  {client.campaignDetails.strategy.CreativesUsed?.length > 0 && (
    <div>
      <h4 className="text-sm font-medium text-white mb-2">2. Creatives Used</h4>
      <ul className="space-y-2">
        {client.campaignDetails.strategy.CreativesUsed.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3" />
            <span className="text-white/80 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* 🧭 Funnel Setup */}
  {client.campaignDetails.strategy.FunnelSetup?.length > 0 && (
    <div>
      <h4 className="text-sm font-medium text-white mb-2">3. Funnel Setup</h4>
      <ul className="space-y-2">
        {client.campaignDetails.strategy.FunnelSetup.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3" />
            <span className="text-white/80 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* 🧠 Optional: Psychological Triggers */}
  {client.campaignDetails.strategy.Triggers?.length > 0 && (
    <div>
      <h4 className="text-sm font-medium text-white mb-2">4. Psychological Triggers</h4>
      <ul className="space-y-2">
        {client.campaignDetails.strategy.Triggers.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3" />
            <span className="text-white/80 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )}
{/* 🎯 Audience Targeting */}
{client.campaignDetails.strategy.AudienceTargeting?.length > 0 && (
  <div>
    <h4 className="text-sm font-medium text-white mb-2">
      1. Audience Targeting
    </h4>
    <ul className="space-y-2">
      {client.campaignDetails.strategy.AudienceTargeting.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
          <span className="text-white/80 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
)}

  {/* 🖼️ Ad Formats & Placements */}
  {client.campaignDetails.strategy.Formats?.length > 0 && (
    <div>
      <h4 className="text-sm font-medium text-white mb-2">5. Ad Formats & Placements</h4>
      <ul className="space-y-2">
        {client.campaignDetails.strategy.Formats.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3" />
            <span className="text-white/80 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
{/* 🎯 Funnel Objective */}
{client.campaignDetails.strategy.FunnelObjective?.length > 0 && (
  <div>
    <h4 className="text-sm font-medium text-white mb-2">
      1. Funnel Objective
    </h4>
    <ul className="space-y-2">
      {client.campaignDetails.strategy.FunnelObjective.map((point, index) => (
        <li key={index} className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
          <span className="text-white/80 text-sm">{point}</span>
        </li>
      ))}
    </ul>
  </div>
)}


{/* 🎯 Targeting Strategy */}
{client.campaignDetails.strategy.TargetingStrategy?.length > 0 && (
  <div>
    <h4 className="text-sm font-medium text-white mb-2">
      2. Targeting Strategy
    </h4>
    <ul className="space-y-2">
      {client.campaignDetails.strategy.TargetingStrategy.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
          <span className="text-white/80 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
)}

{/* 🧪 Creative Testing */}
{client.campaignDetails.strategy.CreativeTesting?.length > 0 && (
  <div>
    <h4 className="text-sm font-medium text-white mb-2">
      3. Creative Testing
    </h4>
    <ul className="space-y-2">
      {client.campaignDetails.strategy.CreativeTesting.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
          <span className="text-white/80 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
)}

{/* ⚙️ Optimization Focus */}
{client.campaignDetails.strategy.OptimizationFocus?.length > 0 && (
  <div>
    <h4 className="text-sm font-medium text-white mb-2">
      4. Optimization Focus
    </h4>
    <ul className="space-y-2">
      {client.campaignDetails.strategy.OptimizationFocus.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
          <span className="text-white/80 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
)}




              {/* Results Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <TrendingUp className="text-primary" size={20} />
                  Results (30 day campaign)
                </h3>

                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

   {client.campaignDetails.results.AdSpend?.trim().length > 0 && (
  <div className="flex flex-col items-center text-center">
    <p className="text-xs text-white/50 mb-1">Ad Spend</p>
    <p className="text-xl font-semibold text-white">
      {client.campaignDetails.results.AdSpend}
    </p>
  </div>
)}

{client.campaignDetails.results.Reach?.trim().length > 0 && (
  <div className="flex flex-col items-center text-center">
    <p className="text-xs text-white/50 mb-1">Reach</p>
    <p className="text-xl font-semibold text-white">
      {client.campaignDetails.results.Reach}
    </p>
  </div>
)}


    {client.campaignDetails.results.LeadsGenerated?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Leads Generated</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.LeadsGenerated}
        </p>
      </div>
    )}

    {client.campaignDetails.results.EstimatedWalkinsDemoAttendees?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Estimated Walk-ins/Demo Attendees</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.EstimatedWalkinsDemoAttendees}
        </p>
      </div>
    )}

    {client.campaignDetails.results.AverageCostPerLead?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Average Cost per Lead</p>
        <p className="text-xl font-semibold text-white">
          ₹{client.campaignDetails.results.AverageCostPerLead}
        </p>
      </div>
    )}

    {client.campaignDetails.results.ROI?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">ROI</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.ROI}
        </p>
      </div>
    )}

    {client.campaignDetails.results.OrdersGenerated?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Orders Generated</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.OrdersGenerated}
        </p>
      </div>
    )}

    {client.campaignDetails.results.Revenue?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Revenue</p>
        <p className="text-xl font-semibold text-white">
          ₹{client.campaignDetails.results.Revenue}
        </p>
      </div>
    )}

    {client.campaignDetails.results.WebsiteVisitors?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Website Visitors</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.WebsiteVisitors}
        </p>
      </div>
    )}

    {client.campaignDetails.results.CostPerPurchase?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Cost per Purchase</p>
        <p className="text-xl font-semibold text-white">
          ₹{client.campaignDetails.results.CostPerPurchase}
        </p>
      </div>
    )}

    {client.campaignDetails.results.ROIAchieved?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">ROI Achieved</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.ROIAchieved}
        </p>
      </div>
    )}

    {client.campaignDetails.results.ManualWorkloadCut?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Manual Workload Cut</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.ManualWorkloadCut}
        </p>
      </div>
    )}

    {client.campaignDetails.results.AutomationCoverage?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Automation Coverage</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.AutomationCoverage}
        </p>
      </div>
    )}

    {client.campaignDetails.results.QualifiedLeads?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Qualified Leads</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.QualifiedLeads}
        </p>
      </div>
    )}

    {client.campaignDetails.results.LiveSiteVisitsOrConversions?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Live Site Visits / Conversions</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.LiveSiteVisitsOrConversions}
        </p>
      </div>
    )}

    {client.campaignDetails.results.LiveVisitsConversions?.trim().length > 0 && (
      <div className="flex flex-col items-center text-center">
        <p className="text-xs text-white/50 mb-1">Live Visits/Conversions</p>
        <p className="text-xl font-semibold text-white">
          {client.campaignDetails.results.LiveVisitsConversions}
        </p>
      </div>
    )}



                </div>
              </div>
            </div>
          ) : (
            <>
              <p className="text-white/80 mb-6">{client.description}</p>

              {/* Client Gallery */}
            <div className="grid grid-cols-1 gap-4">
            {client.galleryImages.map((img, idx) => (
              <div key={idx}>
                {img ? (
                  <img
                    src={img}
                    alt={`...`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/30">
                    Image {idx + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

interface VideoCardProps {
  video: VideoProject;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="glass-card-hover overflow-hidden relative h-full flex flex-col">
      {/* Video Player */}
      <div className="aspect-[5/5] bg-dark-800/30 flex items-center justify-center overflow-hidden">
        {video.videoUrl ? (
          <video
            src={video.videoUrl}
            controls
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-4xl font-bold text-white/30">VIDEO</div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-medium mb-2 group-hover:text-gradient transition-all duration-300">
          {video.title}
        </h3>
        <p className="text-white/70 text-sm">{video.description}</p>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

interface GraphicDesignCardProps {
  project: GraphicDesignProject;
}

export const GraphicDesignCard = ({ project }: GraphicDesignCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="glass-card-hover overflow-hidden relative group cursor-pointer h-full"
        onClick={() => setIsOpen(true)}
      >
        {/* Design Image */}
        <div className="aspect-square bg-dark-800/30 flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-4xl font-bold text-white/30">
              {project.title.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Design Info */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-2 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm">{project.description}</p>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Detailed Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-dark-800 border-dark-700 max-w-3xl max-h-[80vh] h-[80vh] overflow-y-auto flex flex-col">
      <DialogHeader>
            <DialogTitle className="text-2xl font-medium">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Design Image */}
          <div className="aspect-square max-h-[500px] bg-dark-800/50 overflow-hidden rounded-md mb-6">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white/30">
                {project.title.substring(0, 2).toUpperCase()}
              </div>
            )}
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-gradient">
              About this Design
            </h4>
            <p className="text-white/80">{project.detailedDescription}</p>
          </div>

          {/* Project Info */}
          {project.projectInfo && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {project.projectInfo.client && (
                <div>
                  <h5 className="text-sm text-white/50 mb-1">Client</h5>
                  <p className="text-white/80">{project.projectInfo.client}</p>
                </div>
              )}

              {project.projectInfo.duration && (
                <div>
                  <h5 className="text-sm text-white/50 mb-1">Duration</h5>
                  <p className="text-white/80">
                    {project.projectInfo.duration}
                  </p>
                </div>
              )}

              {project.projectInfo.tools && (
                <div>
                  <h5 className="text-sm text-white/50 mb-1">Tools</h5>
                  <p className="text-white/80">
                    {project.projectInfo.tools.join(", ")}
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};