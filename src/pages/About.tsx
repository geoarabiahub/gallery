import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">About Geoscience Gallery</h1>
          
          <div className="space-y-6 text-foreground leading-relaxed">
            <p className="text-lg">
              Geoscience Gallery is a comprehensive digital platform showcasing high-resolution mineral imaging 
              and analysis techniques used in modern geological research and mineral characterization.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              We aim to bridge the gap between advanced geological analysis techniques and accessible 
              scientific education by providing a curated collection of mineral samples analyzed using 
              state-of-the-art imaging technologies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Imaging Techniques</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2">BSE (Backscattered Electron)</h3>
                <p className="text-sm">
                  Provides compositional contrast based on atomic number differences, 
                  revealing mineral phases and chemical variations.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2">EDS (Energy Dispersive Spectroscopy)</h3>
                <p className="text-sm">
                  Chemical analysis technique that identifies elemental composition 
                  and creates detailed mineral maps.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2">QEMSCAN</h3>
                <p className="text-sm">
                  Automated quantitative evaluation system providing rapid mineral 
                  identification and quantification.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Stereomicroscopy</h3>
                <p className="text-sm">
                  Three-dimensional surface imaging revealing texture, structure, 
                  and morphological characteristics.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Educational Value</h2>
            <p>
              This gallery serves researchers, students, and professionals in geology, mineralogy, 
              and materials science by providing real-world examples of how different analytical 
              techniques reveal various aspects of mineral structure and composition.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;