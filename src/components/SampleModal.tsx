import { X } from 'lucide-react';
import { Sample } from '@/types/Sample';
import ImageSlider from './ImageSlider';
import ParametersTable from './ParametersTable';

interface SampleModalProps {
  sample: Sample | null;
  isOpen: boolean;
  onClose: () => void;
}

const SampleModal = ({ sample, isOpen, onClose }: SampleModalProps) => {
  if (!isOpen || !sample) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
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
              Comparing {sample.images[0].technique} and {sample.images[1].technique} techniques
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
          {/* Image Slider */}
          <div className="aspect-[4/3] bg-muted/20 rounded-lg overflow-hidden mb-6">
            <ImageSlider 
              image1={sample.images[0]} 
              image2={sample.images[1]} 
            />
          </div>

          {/* Parameters */}
          <ParametersTable parameters={sample.scanParameters} />
        </div>
      </div>
    </div>
  );
};

export default SampleModal;