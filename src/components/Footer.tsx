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