import { useState, useMemo } from 'react';
import { useSamples } from '@/hooks/useSamples';
import { Sample } from '@/types/Sample';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SampleCard from '@/components/SampleCard';
import SampleModal from '@/components/SampleModal';
import TagFilter from '@/components/TagFilter';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';

const Index = () => {
  const { samplesData, loading, error } = useSamples();
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from samples
  const allTags = useMemo(() => {
    if (!samplesData) return [];
    const tags = new Set<string>();
    samplesData.samples.forEach(sample => {
      sample.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [samplesData]);

  // Filter samples based on selected tags
  const filteredSamples = useMemo(() => {
    if (!samplesData || selectedTags.length === 0) {
      return samplesData?.samples || [];
    }
    return samplesData.samples.filter(sample =>
      selectedTags.every(tag => sample.tags.includes(tag))
    );
  }, [samplesData, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearAllTags = () => {
    setSelectedTags([]);
  };

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
              <h2 className="text-3xl font-bold text-foreground mb-4">Geological Analysis Gallery</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our collection of {samplesData.samples.length} geological samples analyzed using advanced imaging techniques. 
                Click on any sample to view detailed analysis and imaging results.
              </p>
            </div>
            
            <TagFilter
              allTags={allTags}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              onClearAll={handleClearAllTags}
            />
            
            <div className="mb-4 text-center">
              <p className="text-muted-foreground text-sm">
                Showing {filteredSamples.length} of {samplesData.samples.length} samples
                {selectedTags.length > 0 && (
                  <span className="ml-1">
                    (filtered by: {selectedTags.join(', ')})
                  </span>
                )}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSamples.map((sample) => (
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
