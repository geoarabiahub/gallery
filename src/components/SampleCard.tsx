import { Sample } from '@/types/Sample';
import { Badge } from '@/components/ui/badge';
import { resolveImageUrl } from '@/utils/imageLoader';

interface SampleCardProps {
  sample: Sample;
  onClick: () => void;
}

const SampleCard = ({ sample, onClick }: SampleCardProps) => {
  return (
    <div 
      className="group bg-card rounded-lg overflow-hidden shadow-gallery hover:shadow-hover transition-all duration-300 cursor-pointer border border-border"
      onClick={onClick}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={resolveImageUrl(sample.images[0].thumbnail)}
          alt={`${sample.name} - ${sample.images[0].technique}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-scientific-blue transition-colors">
          {sample.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {sample.images.length > 1 
            ? `${sample.images[0].technique} vs ${sample.images[1].technique}`
            : sample.images[0].technique
          }
        </p>
        <div className="flex flex-wrap gap-1">
          {sample.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {sample.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{sample.tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default SampleCard;