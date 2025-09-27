export interface SampleImage {
  technique: string;
  url: string;
  thumbnail: string;
}

export interface ScanParameters {
  pointSpacing: string;
  fieldScanSize: string;
  dwellTime: string;
  acceleratingVoltage: string;
  workingDistance: string;
  magnification: string;
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