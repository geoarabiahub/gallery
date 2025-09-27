// Import all test images
import quartzBSE from '@/assets/quartz-feldspar-bse.jpg';
import quartzEDS from '@/assets/quartz-feldspar-eds.jpg';
import quartzBSEThumb from '@/assets/quartz-feldspar-bse-thumb.jpg';
import quartzEDSThumb from '@/assets/quartz-feldspar-eds-thumb.jpg';
import pyriteQEMSCAN from '@/assets/pyrite-qemscan.jpg';
import pyriteStereo from '@/assets/pyrite-stereo.jpg';
import pyriteQEMSCANThumb from '@/assets/pyrite-qemscan-thumb.jpg';
import pyriteStereoThumb from '@/assets/pyrite-stereo-thumb.jpg';

// Image mapping for local imports
export const imageMap: Record<string, string> = {
  '/src/assets/quartz-feldspar-bse.jpg': quartzBSE,
  '/src/assets/quartz-feldspar-eds.jpg': quartzEDS,
  '/src/assets/quartz-feldspar-bse-thumb.jpg': quartzBSEThumb,
  '/src/assets/quartz-feldspar-eds-thumb.jpg': quartzEDSThumb,
  '/src/assets/pyrite-qemscan.jpg': pyriteQEMSCAN,
  '/src/assets/pyrite-stereo.jpg': pyriteStereo,
  '/src/assets/pyrite-qemscan-thumb.jpg': pyriteQEMSCANThumb,
  '/src/assets/pyrite-stereo-thumb.jpg': pyriteStereoThumb,
};

// Helper function to resolve image URLs
export const resolveImageUrl = (url: string): string => {
  return imageMap[url] || url;
};