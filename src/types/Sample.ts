export interface SampleImage {
  technique: string;
  url: string;
  thumbnail: string;
}

export interface Sample {
  id: string;
  name: string;
  images: SampleImage[];
  description: string;
  reference: string;
  tags: string[];
}

export interface SamplesData {
  samples: Sample[];
}