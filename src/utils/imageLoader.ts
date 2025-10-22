// Helper function to resolve image URLs with proper base path
export const resolveImageUrl = (url: string): string => {
  // If it's already an absolute URL or data URL, return as is
  if (url.startsWith('http') || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }

  // For relative paths, ensure they work with the base path
  // Remove leading slash if present
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;

  // Get the base path from the document
  const base = document.querySelector('base')?.getAttribute('href') || '/';

  // Combine base path with the URL
  return `${base}${cleanUrl}`;
};