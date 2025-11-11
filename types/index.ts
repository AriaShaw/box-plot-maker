// Core data types for Box Plot Calculator

export interface BoxPlotData {
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  iqr: number;
  lowerBound: number;
  upperBound: number;
  outliers: number[];
  whiskerMin: number;
  whiskerMax: number;
}

export interface DataInputProps {
  onDataChange: (data: number[]) => void;
}

export interface ChartDisplayProps {
  data: number[];
  stats: BoxPlotData | null;
}

export interface StatisticsCardsProps {
  stats: BoxPlotData | null;
}

export interface SampleDataset {
  name: string;
  description: string;
  data: number[];
}
