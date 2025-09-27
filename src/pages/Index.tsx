import { useState } from 'react';
import { useSamples } from '@/hooks/useSamples';
import { Sample } from '@/types/Sample';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SampleCard from '@/components/SampleCard';
import SampleModal from '@/components/SampleModal';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';

const Index = () => {
  const { samplesData, loading, error } = useSamples();
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSampleClick = (sample: Sample) => {
    setSelectedSample(sample);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSample(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
        
        {samplesData && (
          <>
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our collection of {samplesData.samples.length} mineral samples analyzed using advanced imaging techniques. 
                Click on any sample to compare different analytical methods side by side.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {samplesData.samples.map((sample) => (
                <SampleCard
                  key={sample.id}
                  sample={sample}
                  onClick={() => handleSampleClick(sample)}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />

      <SampleModal
        sample={selectedSample}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
