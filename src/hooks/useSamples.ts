import { SamplesData } from '@/types/Sample';
import { useFetch } from './useFetch';

export const useSamples = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const { data, loading, error } = useFetch<SamplesData>(`${baseUrl}samples.json`);
  return { samplesData: data, loading, error };
};