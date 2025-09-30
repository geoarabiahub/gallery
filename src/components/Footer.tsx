import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { usePartners } from '@/hooks/usePartners';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { partners, loading } = usePartners();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">GeoGallery</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional geological photography and imaging showcase featuring advanced analytical techniques for earth science research and education.
            </p>
          </div>

          {/* Techniques Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Imaging Techniques</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>BSE - Backscattered Electron Imaging</li>
              <li>EDS - Energy Dispersive Spectroscopy</li>
              <li>QEMSCAN - Quantitative Evaluation of Minerals</li>
              <li>Stereo - Stereoscopic Microscopy</li>
            </ul>
          </div>

          {/* Contact/Info Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Geological Research</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advanced geological imaging and analysis supporting earth science research, mineral exploration, and educational initiatives.
            </p>
          </div>
        </div>

        {/* Research Partners Section */}
        <div className="border-t border-border mt-8 pt-8">
          <h3 className="font-semibold text-foreground text-center mb-6">Research Partners</h3>
          {loading ? (
            <div className="flex justify-center">
              <div className="text-muted-foreground text-sm">Loading partners...</div>
            </div>
          ) : (
            <div className="relative max-w-4xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {partners.map((partner) => (
                    <CarouselItem key={partner.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-center justify-center w-full h-16 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-200 hover:scale-105">
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
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
          )}
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} GeoGallery. Developed and maintained by{' '}
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