import { Badge } from "@/components/ui/badge";

interface CollaborationBadgeProps {
  institution: string;
}

const institutionColors: Record<string, string> = {
  "EPFL": "bg-accent-orange/20 text-accent-orange border-accent-orange/30",
  "Stanford": "bg-red-100 text-red-700 border-red-200",
  "MIT": "bg-accent-purple/20 text-accent-purple border-accent-purple/30",
  "ETH": "bg-blue-100 text-blue-700 border-blue-200",
  "Tech Company": "bg-accent-green/20 text-accent-green border-accent-green/30",
};

const institutionLogos: Record<string, string> = {
  "EPFL": "🏫",
  "Stanford": "🌳", 
  "MIT": "🔬",
  "ETH": "⚙️",
  "Tech Company": "💼",
};

const CollaborationBadge = ({ institution }: CollaborationBadgeProps) => {
  const colorClass = institutionColors[institution] || "bg-muted text-muted-foreground border-border";
  const logo = institutionLogos[institution] || "🏛️";

  return (
    <Badge 
      variant="outline" 
      className={`collaboration-badge ${colorClass} font-academic text-xs px-2 py-1 border`}
    >
      <span className="mr-1">{logo}</span>
      {institution}
    </Badge>
  );
};

export default CollaborationBadge;