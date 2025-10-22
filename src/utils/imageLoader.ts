// Helper function to resolve image URLs with proper base path
export const resolveImageUrl = (url: string): string => {
  // If it's already an absolute URL or data URL, return as is
  if (url.startsWith('http') || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }

  // Get the base path from Vite's import.meta.env
  const base = import.meta.env.BASE_URL || '/';

  // Remove leading slash from url if present
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;

  // Combine base path with the URL, ensuring no double slashes
  const fullPath = base.endsWith('/') ? `${base}${cleanUrl}` : `${base}/${cleanUrl}`;

  return fullPath;
};