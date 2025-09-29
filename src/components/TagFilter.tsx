import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Filter } from 'lucide-react';

interface TagFilterProps {
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
}

const TagFilter = ({ allTags, selectedTags, onTagToggle, onClearAll }: TagFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filter by Tags
          {selectedTags.length > 0 && (
            <Badge variant="secondary" className="ml-1">
              {selectedTags.length}
            </Badge>
          )}
        </Button>
        
        {selectedTags.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all
            <X className="h-4 w-4 ml-1" />
          </Button>
        )}
      </div>

      {isExpanded && (
        <div className="animate-fade-in">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors duration-200"
                onClick={() => onTagToggle(tag)}
              >
                {tag}
                {selectedTags.includes(tag) && (
                  <X className="h-3 w-3 ml-1" />
                )}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {selectedTags.length > 0 && !isExpanded && (
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedTags.map((tag) => (
            <Badge
              key={tag}
              variant="default"
              className="cursor-pointer"
              onClick={() => onTagToggle(tag)}
            >
              {tag}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagFilter;