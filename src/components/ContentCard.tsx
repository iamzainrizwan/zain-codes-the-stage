import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface ContentCardProps {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  onClick: () => void;
}

const ContentCard = ({ title, date, description, tags, onClick }: ContentCardProps) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 bg-card"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">{date}</CardDescription>
          </div>
          <ChevronRight className="text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs px-2 py-1 rounded bg-secondary text-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentCard;
