export interface Partner {
  id: string;
  name: string;
  logo?: string | null;
  website: string;
  type: 'academic' | 'research' | 'technology' | 'equipment' | 'industry';
}