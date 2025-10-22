import { useState } from 'react';
import { Sample } from '@/types/Sample';
import { Badge } from '@/components/ui/badge';
import { resolveImageUrl } from '@/utils/imageLoader';
import { ChevronDown, ChevronUp, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SampleCardProps {
  sample: Sample;
  onClick: () => void;
}

const SampleCard = ({ sample, onClick }: SampleCardProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showTags, setShowTags] = useState(false);

  const handleToggleDescription = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDescription(!showDescription);
  };

  const handleToggleTags = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTags(!showTags);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div
      className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border/50 hover:border-primary/30"
      onClick={onClick}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        <img
          src={resolveImageUrl(sample.images[0].thumbnail)}
          alt={`${sample.name} - ${sample.images[0].technique}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border shadow-md">
          <span className="text-xs font-medium text-foreground">
            {sample.images.length > 1
              ? `${sample.images[0].technique} • ${sample.images[1].technique}`
              : sample.images[0].technique
            }
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors leading-tight">
          {sample.name}
        </h3>

        <div className="space-y-3">
          <div className="border-t border-border/50 pt-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Description</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleToggleDescription}
                className="h-6 px-2 hover:bg-muted/50"
              >
                {showDescription ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </Button>
            </div>
            <p className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${
              showDescription ? 'line-clamp-none' : 'line-clamp-2'
            }`}>
              {sample.description}
            </p>
          </div>

          <div className="border-t border-border/50 pt-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Tags</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleToggleTags}
                className="h-6 px-2 hover:bg-muted/50"
              >
                {showTags ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </Button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(showTags ? sample.tags : sample.tags.slice(0, 3)).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-2.5 py-0.5 font-medium hover:bg-primary/10 transition-colors">
                  {tag}
                </Badge>
              ))}
              {!showTags && sample.tags.length > 3 && (
                <Badge variant="outline" className="text-xs px-2.5 py-0.5 font-medium">
                  +{sample.tags.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;