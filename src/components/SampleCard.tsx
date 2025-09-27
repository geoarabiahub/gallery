import { Sample } from '@/types/Sample';
import { resolveImageUrl } from '@/utils/imageLoader';

interface SampleCardProps {
  sample: Sample;
  onClick: () => void;
}

const SampleCard = ({ sample, onClick }: SampleCardProps) => {
  const [technique1, technique2] = sample.images;

  return (
    <div 
      className="group bg-card rounded-lg overflow-hidden shadow-gallery hover:shadow-hover transition-all duration-300 cursor-pointer border border-border"
      onClick={onClick}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={resolveImageUrl(technique1.thumbnail)}
          alt={`${sample.name} - ${technique1.technique}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-scientific-blue transition-colors">
          {sample.name}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="bg-secondary/50 px-2 py-1 rounded-md font-medium">
            {technique1.technique}
          </span>
          <span className="text-scientific-gray">vs</span>
          <span className="bg-secondary/50 px-2 py-1 rounded-md font-medium">
            {technique2.technique}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;