import { useEffect } from 'react';
import { usePartners } from '@/hooks/usePartners';
import useEmblaCarousel from 'embla-carousel-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { partners, loading } = usePartners();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">

        {/* Sponsors Section */}
        <div className="mt-4 pt-4">
          <h3 className="font-semibold text-foreground text-center mb-4">Sponsors</h3>
          {loading ? (
            <div className="flex justify-center">
              <div className="text-muted-foreground text-sm">Loading partners...</div>
            </div>
          ) : (
            <div className="relative max-w-4xl mx-auto">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {partners.map((partner) => (
                    <div key={partner.id} className="embla__slide flex-[0_0_50%] md:flex-[0_0_25%] pl-2 md:pl-4">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-center justify-center w-full h-16 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-200 hover:scale-105 mx-2">
                          {partner.logo ? (
                            <img
                              src={partner.logo}
                              alt={partner.name}
                              className="max-h-8 max-w-full object-contain"
                            />
                          ) : (
                            <span className="text-xs text-muted-foreground font-medium text-center px-2">
                              {partner.name}
                            </span>
                          )}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Geoscience Gallery. Developed and maintained by{' '}
            <a 
              href="https://digitalgeosciences.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 underline"
            >
              Digital Geosciences
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;