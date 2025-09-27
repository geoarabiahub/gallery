export interface SampleImage {
  technique: string;
  url: string;
  thumbnail: string;
}

export interface ScanParameters {
  dimension: string;
  xrayCount: string;
  pointSpacing: string;
  acceleratingVoltage: string;
}

export interface Sample {
  id: string;
  name: string;
  images: [SampleImage, SampleImage];
  scanParameters: ScanParameters;
}

export interface SamplesData {
  samples: Sample[];
}