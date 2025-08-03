import { Badge } from "@/components/ui/badge";

interface LogoBadgeProps {
  institution: string;
  logoSrc?: string;
}

const LogoBadge = ({ institution, logoSrc }: LogoBadgeProps) => {
  return (
    <Badge 
      variant="outline" 
      className="collaboration-badge bg-muted/50 text-muted-foreground border-border font-academic text-xs px-2 py-1 border flex items-center gap-1"
    >
      {logoSrc && (
        <img 
          src={logoSrc} 
          alt={`${institution} logo`} 
          className="w-4 h-4 object-contain"
        />
      )}
      {institution}
    </Badge>
  );
};

export default LogoBadge;