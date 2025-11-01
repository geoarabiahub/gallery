import { useState, useEffect } from 'react';
import { X, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { Sample } from '@/types/Sample';
import ImageSlider from './ImageSlider';
import SampleDetails from './SampleDetails';
import { resolveImageUrl } from '@/utils/imageLoader';
import { Button } from '@/components/ui/button';

interface SampleModalProps {
  sample: Sample | null;
  onClose: () => void;
  onTagClick: (tag: string) => void;
  allSamples?: Sample[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

const SampleModal = ({ sample, onClose, onTagClick, allSamples = [], currentIndex = 0, onNavigate }: SampleModalProps) => {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!onNavigate || allSamples.length === 0) return;
      
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < allSamples.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, allSamples.length, onNavigate]);

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

  const handlePrevious = () => {
    if (onNavigate && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (onNavigate && currentIndex < allSamples.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allSamples.length - 1;


  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-overlay z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-lg shadow-hover border border-border w-full max-w-7xl h-[95vh] sm:h-[90vh] flex flex-col overflow-hidden relative">
        {/* Navigation Arrows */}
        {hasPrevious && (
          <button
            onClick={handlePrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background border border-border rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Previous sample"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>
        )}
        
        {hasNext && (
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background border border-border rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Next sample"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>
        )}

        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-border flex-shrink-0">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-2xl font-bold text-foreground truncate">{sample.name}</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {sample.images.length > 1
                ? `${sample.images[0].technique} • ${sample.images[1].technique}`
                : sample.images[0].technique
              }
              {allSamples.length > 0 && (
                <span className="ml-2 text-muted-foreground/70">
                  ({currentIndex + 1} / {allSamples.length})
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowDetails(!showDetails)}
              className="transition-all"
              aria-label="Toggle details"
            >
              <Info className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-muted/50 transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-0">
          {/* Image Display - Full width when details hidden */}
          <div className={`bg-muted/20 relative flex items-center justify-center min-h-[200px] sm:min-h-[300px] lg:min-h-0 transition-all duration-300 ${
            showDetails ? 'flex-1' : 'w-full'
          }`}>
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

          {/* Sample Details - Sidebar with slide animation */}
          {showDetails && (
            <div className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-border bg-background overflow-y-auto flex-shrink-0 animate-in slide-in-from-right lg:slide-in-from-right-0">
              <div className="p-3 sm:p-6">
                <SampleDetails
                  description={sample.description}
                  reference={sample.reference}
                  tags={sample.tags}
                  onTagClick={handleTagClick}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SampleModal;