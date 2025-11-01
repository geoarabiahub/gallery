import { useState } from 'react';
import { X, Info } from 'lucide-react';
import { Sample } from '@/types/Sample';
import ImageSlider from './ImageSlider';
import SampleDetails from './SampleDetails';
import { resolveImageUrl } from '@/utils/imageLoader';
import { Button } from '@/components/ui/button';

interface SampleModalProps {
  sample: Sample | null;
  onClose: () => void;
  onTagClick: (tag: string) => void;
}

const SampleModal = ({ sample, onClose, onTagClick }: SampleModalProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showReference, setShowReference] = useState(false);

  if (!sample) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTagClick = (tag: string) => {
    onTagClick(tag);
    onClose();
  };


  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-overlay z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-lg shadow-hover border border-border w-full max-w-7xl h-[95vh] sm:h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-border flex-shrink-0">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-2xl font-bold text-foreground truncate">{sample.name}</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {sample.images.length > 1
                ? `${sample.images[0].technique} • ${sample.images[1].technique}`
                : sample.images[0].technique
              }
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted/50 transition-colors ml-2 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
          </button>
        </div>

        {/* Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-0">
          {/* Image Display */}
          <div className="flex-1 bg-muted/20 relative flex items-center justify-center min-h-[200px] sm:min-h-[300px] lg:min-h-0">
            {sample.images.length > 1 ? (
              <ImageSlider
                image1={sample.images[0]}
                image2={sample.images[1]}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 lg:p-8">
                <img
                  src={resolveImageUrl(sample.images[0].url)}
                  alt={`${sample.name} - ${sample.images[0].technique}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Sample Details - Sidebar */}
          <div className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-border bg-background overflow-y-auto flex-shrink-0">
            <div className="p-3 sm:p-6 space-y-3">
              {/* Description Section */}
              <div className="border border-border/50 rounded-lg overflow-hidden">
                <Button
                  variant="ghost"
                  className="w-full justify-between h-auto py-3 px-4 hover:bg-muted/50"
                  onClick={() => setShowDescription(!showDescription)}
                >
                  <span className="text-sm font-semibold text-foreground">Description</span>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </Button>
                {showDescription && (
                  <div className="px-4 pb-3">
                    <p className="text-sm text-foreground leading-relaxed">{sample.description}</p>
                  </div>
                )}
              </div>

              {/* Tags Section */}
              <div className="border border-border/50 rounded-lg overflow-hidden">
                <Button
                  variant="ghost"
                  className="w-full justify-between h-auto py-3 px-4 hover:bg-muted/50"
                  onClick={() => setShowTags(!showTags)}
                >
                  <span className="text-sm font-semibold text-foreground">Tags ({sample.tags.length})</span>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </Button>
                {showTags && (
                  <div className="px-4 pb-3">
                    <div className="flex flex-wrap gap-2">
                      {sample.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => handleTagClick(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reference Section */}
              <div className="border border-border/50 rounded-lg overflow-hidden">
                <Button
                  variant="ghost"
                  className="w-full justify-between h-auto py-3 px-4 hover:bg-muted/50"
                  onClick={() => setShowReference(!showReference)}
                >
                  <span className="text-sm font-semibold text-foreground">Reference</span>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </Button>
                {showReference && (
                  <div className="px-4 pb-3">
                    <p className="text-sm text-foreground leading-relaxed">{sample.reference}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleModal;