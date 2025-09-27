import { useState, useEffect } from 'react';
import { SamplesData } from '@/types/Sample';

export const useSamples = () => {
  const [samplesData, setSamplesData] = useState<SamplesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const response = await fetch('/samples.json');
        if (!response.ok) {
          throw new Error('Failed to fetch samples data');
        }
        const data: SamplesData = await response.json();
        setSamplesData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load samples');
      } finally {
        setLoading(false);
      }
    };

    fetchSamples();
  }, []);

  return { samplesData, loading, error };
};