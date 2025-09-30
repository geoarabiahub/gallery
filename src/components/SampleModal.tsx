import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Sample } from '@/types/Sample';
import ImageSlider from './ImageSlider';
import SampleDetails from './SampleDetails';
import { resolveImageUrl } from '@/utils/imageLoader';

interface SampleModalProps {
  sample: Sample | null;
  onClose: () => void;
  onTagClick: (tag: string) => void;
}

const SampleModal = ({ sample, onClose, onTagClick }: SampleModalProps) => {
  if (!sample) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTagClick = (tag: string) => {
    onTagClick(tag);
    onClose(); // Close modal after selecting tag
  };

  return (
    <div 
      className="fixed inset-0 bg-background/80 backdrop-blur-overlay z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-lg shadow-hover border border-border max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{sample.name}</h2>
            <p className="text-muted-foreground mt-1">
              {sample.images.length > 1 
                ? `Comparing ${sample.images[0].technique} and ${sample.images[1].technique} techniques`
                : `${sample.images[0].technique} analysis`
              }
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Display */}
          <div className="aspect-[4/3] bg-muted/20 rounded-lg overflow-hidden mb-6 relative">
            {sample.images.length > 1 ? (
              <ImageSlider 
                image1={sample.images[0]} 
                image2={sample.images[1]} 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={resolveImageUrl(sample.images[0].url)} 
                  alt={`${sample.name} - ${sample.images[0].technique}`}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
                  {sample.images[0].technique}
                </div>
              </div>
            )}
          </div>

          {/* Sample Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground">{sample.description}</p>
            </div>
            
            {/* Tags */}
            {sample.tags && sample.tags.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {sample.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <SampleDetails 
              description=""
              reference={sample.reference}
              tags={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleModal;