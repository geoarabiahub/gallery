import { Partner } from '@/types/Partner';
import { useFetch } from './useFetch';

export const usePartners = () => {
  const { data, loading, error } = useFetch<Partner[]>('/partners.json');
  return { partners: data || [], loading, error };
};