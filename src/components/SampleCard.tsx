import { Sample } from '@/types/Sample';
import { resolveImageUrl } from '@/utils/imageLoader';

interface SampleCardProps {
  sample: Sample;
  onClick: () => void;
}

const SampleCard = ({ sample, onClick }: SampleCardProps) => {

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
        <h3 className="font-bold text-foreground text-xl group-hover:text-primary transition-colors leading-tight">
          {sample.name}
        </h3>
      </div>
    </div>
  );
};

export default SampleCard;