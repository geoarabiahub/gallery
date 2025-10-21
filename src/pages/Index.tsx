import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSamples } from '@/hooks/useSamples';
import { Sample } from '@/types/Sample';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SampleCard from '@/components/SampleCard';
import SampleModal from '@/components/SampleModal';
import TagFilter from '@/components/TagFilter';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { samplesData, loading, error } = useSamples();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [displayCount, setDisplayCount] = useState(12);

  const ITEMS_PER_LOAD = 12;

  // Get all unique tags from samples
  const allTags = useMemo(() => {
    if (!samplesData) return [];
    const tags = new Set<string>();
    samplesData.samples.forEach(sample => {
      sample.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [samplesData]);

  // Filter samples based on selected tags and search query
  const filteredSamples = useMemo(() => {
    if (!samplesData) return [];
    
    let filtered = samplesData.samples;
    
    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(sample =>
        selectedTags.every(tag => sample.tags.includes(tag))
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(sample =>
        sample.name.toLowerCase().includes(query) ||
        sample.description.toLowerCase().includes(query) ||
        sample.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [samplesData, selectedTags, searchQuery]);

  // Samples to display based on load more count
  const displayedSamples = useMemo(() => {
    return filteredSamples.slice(0, displayCount);
  }, [filteredSamples, displayCount]);

  const hasMoreSamples = filteredSamples.length > displayCount;

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setDisplayCount(ITEMS_PER_LOAD); // Reset display count when filters change
  };

  const handleClearAllTags = () => {
    setSelectedTags([]);
    setDisplayCount(ITEMS_PER_LOAD); // Reset display count when clearing filters
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + ITEMS_PER_LOAD);
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to Geoscience Gallery</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our collection of {samplesData.samples.length} of Earth’s materials at the microscale.. 
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
                Showing {displayedSamples.length} of {filteredSamples.length} samples
                {filteredSamples.length !== samplesData.samples.length && (
                  <span className="ml-1">
                    ({filteredSamples.length} filtered from {samplesData.samples.length} total)
                  </span>
                )}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedSamples.map((sample) => (
                <SampleCard
                  key={sample.id}
                  sample={sample}
                  onClick={() => handleSampleClick(sample)}
                />
              ))}
            </div>

            {hasMoreSamples && (
              <div className="mt-8 text-center">
                <Button 
                  onClick={handleLoadMore}
                  variant="outline"
                  size="lg"
                >
                  Load More ({filteredSamples.length - displayCount} remaining)
                </Button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />

      <SampleModal
        sample={selectedSample}
        onClose={handleCloseModal}
        onTagClick={handleTagToggle}
      />
    </div>
  );
};

export default Index;
