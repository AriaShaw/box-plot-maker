// Core statistical calculations for box plots
import { BoxPlotData } from '@/types';

/**
 * Calculate median of a sorted array
 */
function calculateMedian(arr: number[]): number {
  const n = arr.length;
  if (n === 0) return 0;

  if (n % 2 === 0) {
    return (arr[n / 2 - 1] + arr[n / 2]) / 2;
  }
  return arr[Math.floor(n / 2)];
}

/**
 * Calculate box plot statistics from raw data
 * @param data - Array of numbers
 * @returns BoxPlotData object with all statistics
 * @throws Error if data has less than 4 points
 */
export function calculateBoxPlot(data: number[]): BoxPlotData {
  // Validate input
  if (data.length < 4) {
    throw new Error('At least 4 data points required for box plot');
  }

  // 1. Sort data in ascending order
  const sorted = [...data].sort((a, b) => a - b);
  const n = sorted.length;

  // 2. Calculate median (Q2)
  const median = calculateMedian(sorted);

  // 3. Calculate Q1 and Q3
  const lowerHalf = sorted.slice(0, Math.floor(n / 2));
  const upperHalf = sorted.slice(Math.ceil(n / 2));
  const q1 = calculateMedian(lowerHalf);
  const q3 = calculateMedian(upperHalf);

  // 4. Calculate IQR (Interquartile Range)
  const iqr = q3 - q1;

  // 5. Calculate bounds for outlier detection
  const lowerBound = q1 - 1.5 * iqr;
  const upperBound = q3 + 1.5 * iqr;

  // 6. Detect outliers
  const outliers = sorted.filter(
    (x) => x < lowerBound || x > upperBound
  );

  // 7. Calculate whiskers (furthest points within bounds)
  const dataWithoutOutliers = sorted.filter(
    (x) => x >= lowerBound && x <= upperBound
  );

  const whiskerMin = dataWithoutOutliers.length > 0
    ? Math.min(...dataWithoutOutliers)
    : sorted[0];
  const whiskerMax = dataWithoutOutliers.length > 0
    ? Math.max(...dataWithoutOutliers)
    : sorted[n - 1];

  return {
    min: sorted[0],
    q1,
    median,
    q3,
    max: sorted[n - 1],
    iqr,
    lowerBound,
    upperBound,
    outliers,
    whiskerMin,
    whiskerMax,
  };
}

/**
 * Format number to specified decimal places
 */
export function formatNumber(num: number, decimals: number = 2): string {
  return num.toFixed(decimals);
}
