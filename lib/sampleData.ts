// Sample datasets for demonstration
import { SampleDataset } from '@/types';

export const sampleDatasets: SampleDataset[] = [
  {
    name: 'Student Test Scores',
    description: 'Math test results from 30 students',
    data: [
      78, 85, 92, 88, 76, 95, 82, 79, 91, 87,
      83, 89, 77, 94, 81, 86, 90, 84, 88, 93,
      75, 96, 80, 85, 89, 92, 78, 87, 91, 45
    ],
  },
  {
    name: 'Sales Data',
    description: 'Monthly sales figures across regions',
    data: [
      4500, 4800, 5200, 4900, 5100, 5400, 4700, 5000, 5300,
      4600, 5500, 4800, 5100, 4900, 5200, 4700, 5000, 5400,
      4800, 5100, 8200
    ],
  },
  {
    name: 'Simple Numbers',
    description: 'Basic dataset for quick testing',
    data: [
      5, 7, 8, 10, 12, 14, 15, 18, 20, 22,
      25, 28, 30, 32, 35, 38, 40, 42, 45, 50
    ],
  },
];

export function getSampleData(index: number): number[] {
  if (index >= 0 && index < sampleDatasets.length) {
    return sampleDatasets[index].data;
  }
  return sampleDatasets[0].data;
}
