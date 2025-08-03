import { ExternalLink, Github, FileText, Calendar, Globe } from "lucide-react";
import { SiHuggingface } from "react-icons/si";
import LazyImage from "./LazyImage";

interface PublicationCardProps {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  collaborations: string[];
  authorInstitutions?: Record<string, string | string[]>;
  link?: string;
  githubLink?: string;
  reportLink?: string;
  huggingfaceLink?: string;
  websiteLink?: string;
  index: number;
  isFirstAuthor?: boolean;
  isSharedFirst?: boolean;
  isBestPaper?: boolean;
}

const logoMap: Record<string, string> = {
  "EPFL": "/logos/universities/epfl.png",
  "UKIM": "/logos/universities/ukim.png",
  "Jožef Stefan Institute": "/logos/organizations/ijs.png",
  "Stanford": "/logos/universities/stanford.png",
  "Yale University": "/logos/universities/yale.svg",
  "T.H. Chan School of Public Health, Harvard University": "/logos/universities/harvard.png",
  "Hasso Plattner Institute": "/logos/universities/hpi.png",
};

const urlMap: Record<string, string> = {
  "EPFL": "https://www.epfl.ch",
  "UKIM": "https://www.ukim.edu.mk",
  "Jožef Stefan Institute": "https://www.ijs.si",
  "Stanford": "https://www.stanford.edu",
  "Yale University": "https://www.yale.edu",
  "T.H. Chan School of Public Health, Harvard University": "https://www.hsph.harvard.edu",
  "Hasso Plattner Institute": "https://hpi.de",
};

const tooltipMap: Record<string, string> = {
  "EPFL": "École Polytechnique Fédérale de Lausanne, Switzerland",
  "UKIM": "Ss. Cyril and Methodius University, Skopje, North Macedonia",
  "Jožef Stefan Institute": "Jožef Stefan Institute, Ljubljana, Slovenia",
  "Stanford": "Stanford University, California, USA",
  "Yale University": "Yale University, New Haven, Connecticut, USA",
  "T.H. Chan School of Public Health, Harvard University": "T.H. Chan School of Public Health, Harvard University, Boston, Massachusetts, USA",
  "Hasso Plattner Institute": "Hasso Plattner Institute, Potsdam, Germany",
};

const PublicationCard = ({
  title,
  authors,
  venue,
  year,
  collaborations,
  authorInstitutions = {},
  link,
  githubLink,
  reportLink,
  huggingfaceLink,
  websiteLink,
  index,
  isFirstAuthor,
  isSharedFirst,
  isBestPaper
}: PublicationCardProps) => {
  const placeholderLogo = "/icons/placeholder.svg";

  const formatAuthors = (authors: string[]) => {
    // Create a mapping of institutions to superscript numbers
    const allInstitutions: string[] = [];
    Object.values(authorInstitutions).forEach(inst => {
      if (Array.isArray(inst)) {
        allInstitutions.push(...inst);
      } else {
        allInstitutions.push(inst);
      }
    });
    const uniqueInstitutions = Array.from(new Set(allInstitutions));
    const institutionToNumber: Record<string, number> = {};
    uniqueInstitutions.forEach((inst, idx) => {
      institutionToNumber[inst] = idx + 1;
    });

    return authors.map((author, idx) => {
      const isMyName = author.includes("S. Krsteski") || author.includes("*S. Krsteski");
      const cleanAuthor = author.replace("*", "");
      const institution = authorInstitutions[author] || authorInstitutions[cleanAuthor];

      let superscripts: number[] = [];
      if (institution) {
        if (Array.isArray(institution)) {
          superscripts = institution.map(inst => institutionToNumber[inst]).filter(Boolean);
        } else {
          const num = institutionToNumber[institution];
          if (num) superscripts = [num];
        }
      }

      if (isMyName) {
        return (
          <span key={idx} className="font-semibold text-foreground">
            {cleanAuthor}
            {superscripts.length > 0 && (
              <sup className="text-xs text-slate-600 font-bold ml-0.5 px-1 py-0.5 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 rounded">
                {superscripts.join(',')}
              </sup>
            )}
            {isSharedFirst && author.startsWith("*") && <span className="text-xs text-muted-foreground ml-1">*</span>}
          </span>
        );
      }
      return (
        <span key={idx} className="text-muted-foreground">
          {cleanAuthor}
          {superscripts.length > 0 && (
            <sup className="text-xs text-slate-600 font-bold ml-0.5 px-1 py-0.5 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 rounded">
              {superscripts.join(',')}
            </sup>
          )}
          {isSharedFirst && author.startsWith("*") && <span className="text-xs text-muted-foreground ml-1">*</span>}
        </span>
      );
    }).reduce((prev, curr, idx) => {
      if (idx === 0) return [curr];
      if (idx === authors.length - 1) return [...prev, <span key={`sep-${idx}`} className="text-muted-foreground">, and </span>, curr];
      return [...prev, <span key={`sep-${idx}`} className="text-muted-foreground">, </span>, curr];
    }, [] as React.ReactNode[]);
  };

  return (
    <div className="border-l-2 border-accent-purple pl-4" style={{ marginLeft: '-1px' }}>
      <div className="bg-card rounded-lg shadow-sm border border-border/40 hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 pr-4">
              <h4 className="text-xl font-semibold font-academic text-foreground leading-tight">
                {title}
              </h4>
              {isBestPaper && (
                <div className="inline-flex items-center mt-2 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs font-medium rounded-full border border-yellow-200 dark:border-yellow-800">
                  🏆 Best Paper Award
                </div>
              )}
            </div>
          </div>

          <div className="text-base font-academic mb-3 leading-relaxed">
            {formatAuthors(authors)}
          </div>

          <p className="text-base font-academic italic text-foreground mb-3">
            {venue}
          </p>

          {isSharedFirst && (
            <div className="text-sm text-muted-foreground mb-3 italic">
              * Equal contribution
            </div>
          )}

          <div className="flex flex-wrap gap-3 mb-3">
            {(() => {
              // Create a mapping of institutions to superscript numbers (same as in formatAuthors)
              const allInstitutions: string[] = [];
              Object.values(authorInstitutions).forEach(inst => {
                if (Array.isArray(inst)) {
                  allInstitutions.push(...inst);
                } else {
                  allInstitutions.push(inst);
                }
              });
              const uniqueInstitutions = Array.from(new Set(allInstitutions));
              const institutionToNumber: Record<string, number> = {};
              uniqueInstitutions.forEach((inst, idx) => {
                institutionToNumber[inst] = idx + 1;
              });

              return collaborations.map((collab, idx) => (
                <div key={idx} className="flex items-center relative">
                  <a
                    href={urlMap[collab]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={tooltipMap[collab] || collab}
                  >
                    <LazyImage
                      src={logoMap[collab] || placeholderLogo}
                      alt={`${collab} logo`}
                      className="w-14 h-14 object-contain cursor-pointer"
                    />
                  </a>
                  {institutionToNumber[collab] && (
                    <span className="absolute -bottom-1 -right-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-100 text-[10px] font-medium rounded px-1.5 py-0.5 shadow-sm">
                      {institutionToNumber[collab]}
                    </span>
                  )}
                </div>
              ));
            })()}
          </div>
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
          {githubLink && githubLink !== "" && (
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

export default PublicationCard;