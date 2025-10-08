import { Partner } from '@/types/Partner';
import { useFetch } from './useFetch';

export const usePartners = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const { data, loading, error } = useFetch<Partner[]>(`${baseUrl}partners.json`);
  return { partners: data || [], loading, error };
};