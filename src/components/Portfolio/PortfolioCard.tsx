import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

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
  | GraphicDesignProject;

interface WebDevCardProps {
  project: WebDevProject;
}

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
        className="glass-card-hover overflow-hidden relative group cursor-pointer h-full min-h-[400px]"
        onClick={() => setIsOpen(true)}
      >
        {/* Client Image/Placeholder */}
        <div className="aspect-[5/6] bg-dark-800/30 flex items-center justify-center overflow-hidden">
          {client.image ? (
            <img
              src={client.image}
              alt={client.clientName}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-4xl font-bold text-white/30">
              {client.clientName.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Client Info */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-2 group-hover:text-gradient transition-all duration-300">
            {client.clientName}
          </h3>
          <p className="text-white/70 text-sm">{client.campaignDesc}</p>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Gallery Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-dark-800 border-dark-700 max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium">
              {client.clientName}
            </DialogTitle>
          </DialogHeader>

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
        <DialogContent className="bg-dark-800 border-dark-700 max-w-3xl">
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
