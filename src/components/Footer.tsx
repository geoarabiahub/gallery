const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Automated Mineralogy Gallery</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advanced mineral imaging and analysis techniques for geological research and materials science applications.
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
            <h3 className="font-semibold text-foreground mb-3">Research</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              High-resolution mineral characterization using automated scanning electron microscopy and image analysis.
            </p>
          </div>
        </div>

        {/* Research Partners Section */}
        <div className="border-t border-border mt-8 pt-8">
          <h3 className="font-semibold text-foreground text-center mb-6">Research Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {/* Placeholder sponsor logos - replace with actual logos */}
            <div className="flex items-center justify-center w-32 h-16 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200">
              <span className="text-xs text-muted-foreground font-medium">University Lab</span>
            </div>
            <div className="flex items-center justify-center w-32 h-16 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200">
              <span className="text-xs text-muted-foreground font-medium">Research Institute</span>
            </div>
            <div className="flex items-center justify-center w-32 h-16 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200">
              <span className="text-xs text-muted-foreground font-medium">Tech Partner</span>
            </div>
            <div className="flex items-center justify-center w-32 h-16 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200">
              <span className="text-xs text-muted-foreground font-medium">Equipment Co.</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Automated Mineralogy Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;