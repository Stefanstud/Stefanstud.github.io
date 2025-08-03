import { Github, Calendar, FileText, Globe } from "lucide-react";
import { SiHuggingface } from "react-icons/si";
import LazyImage from "./LazyImage";

interface ProjectCardProps {
  title: string;
  description: string;
  period: string;
  collaborations: string[];
  keywords?: string[];
  githubLink?: string;
  reportLink?: string;
  websiteLink?: string;
  huggingfaceLink?: string;
  image?: string;
  index: number;
}

const logoMap: Record<string, string> = {
  "EPFL": "/logos/universities/epfl.png",
  "Stanford": "/logos/universities/stanford.png",
  "Yale University": "/logos/universities/yale.svg",
  "Ss. Cyril and Methodius University": "/logos/universities/ukim.png",
};

const urlMap: Record<string, string> = {
  "EPFL": "https://www.epfl.ch",
  "Stanford": "https://www.stanford.edu",
  "Yale University": "https://www.yale.edu",
  "Ss. Cyril and Methodius University": "https://www.ukim.edu.mk",
};

const ProjectCard = ({
  title,
  description,
  period,
  collaborations,
  keywords,
  githubLink,
  reportLink,
  websiteLink,
  huggingfaceLink,
  image,
  index
}: ProjectCardProps) => {
  const placeholderLogo = "https://via.placeholder.com/32x32?text=Logo";

  return (
    <div className="border-l-2 border-accent-green pl-4" style={{ marginLeft: '-1px' }}>
      <div className="bg-card rounded-lg shadow-sm border border-border/40 hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="flex">
          {/* Text Content - Left Half */}
          <div className="w-1/2 p-4 flex flex-col">
            <div className="mb-2">
              <h4 className="text-xl font-semibold font-academic text-foreground leading-tight">
                {title}
              </h4>
            </div>
            <p className="text-base font-academic text-muted-foreground leading-relaxed mb-3 flex-1">
              {description}
            </p>

            {/* Keywords Section - Now at bottom */}
            {keywords && keywords.length > 0 && (
              <div className="mt-auto">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Keywords:</p>
                <div className="flex flex-wrap gap-1">
                  {keywords.map((keyword, keywordIndex) => (
                    <span
                      key={keywordIndex}
                      className="px-2 py-1 bg-muted text-xs font-academic text-muted-foreground rounded border"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image - Right Half */}
          {image && (
            <div className="w-1/2 p-4 flex items-center justify-center relative">
              {/* Date positioned in top-right corner with background */}
              <div className="absolute top-2 right-2 flex items-center gap-2 text-base text-muted-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm z-10 border border-border/40">
                <Calendar className="w-4 h-4" />
                {period}
              </div>
              <LazyImage
                src={image}
                alt={`${title} preview`}
                className="w-full h-auto rounded opacity-40 hover:opacity-60 transition-opacity"
              />
            </div>
          )}
        </div>

        {/* Links Section - Always at Bottom */}
        <div className="flex flex-wrap gap-3 p-4 pt-3 border-t border-border/50">
          {reportLink && (
            <a
              href={reportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-academic text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText className="w-4 h-4" />
              PDF
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-academic text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-academic text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              Website
            </a>
          )}
          {huggingfaceLink && (
            <a
              href={huggingfaceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-academic text-muted-foreground hover:text-primary transition-colors"
            >
              <SiHuggingface className="w-4 h-4" />
              HuggingFace
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;