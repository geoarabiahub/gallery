import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SampleDetailsProps {
  description: string;
  reference: string;
  tags: string[];
  onTagClick?: (tag: string) => void;
}

const SampleDetails = ({ description, reference, tags, onTagClick }: SampleDetailsProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-muted/30 rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-2 text-lg">Description</h3>
        <p className="text-foreground leading-relaxed">{description}</p>
      </div>
      
      {tags && tags.length > 0 && (
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="font-semibold text-foreground mb-2 text-lg">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary"
                className={onTagClick ? "cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" : ""}
                onClick={() => onTagClick?.(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-muted/30 rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-2 text-lg">Reference</h3>
        <p className="text-foreground leading-relaxed">{reference}</p>
      </div>
    </div>
  );
};

export default SampleDetails;