import { SamplesData } from '@/types/Sample';
import { useFetch } from './useFetch';

export const useSamples = () => {
  const { data, loading, error } = useFetch<SamplesData>('/samples.json');
  return { samplesData: data, loading, error };
};