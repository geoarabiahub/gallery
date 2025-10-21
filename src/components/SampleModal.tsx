import { X } from 'lucide-react';
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
      <div className="bg-card rounded-lg shadow-hover border border-border max-w-7xl w-full h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
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

        {/* Content - Responsive Layout */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-0">
          {/* Image Display */}
          <div className="flex-1 bg-muted/20 relative flex items-center justify-center min-h-[300px] lg:min-h-0">
            {sample.images.length > 1 ? (
              <ImageSlider
                image1={sample.images[0]}
                image2={sample.images[1]}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4 lg:p-8">
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

          {/* Sample Details - Sidebar on desktop, stacked on mobile */}
          <div className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-border bg-background overflow-y-auto flex-shrink-0">
            <div className="p-4 lg:p-6">
              <SampleDetails
                description={sample.description}
                reference={sample.reference}
                tags={sample.tags}
                onTagClick={handleTagClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleModal;