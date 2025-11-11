// Export utilities for box plot chart and data

/**
 * Export chart as PNG image
 * @param canvas - HTMLCanvasElement from Chart.js
 * @param filename - Optional filename (default: box-plot.png)
 */
export function exportPNG(canvas: HTMLCanvasElement, filename: string = 'box-plot.png'): void {
  try {
    // Convert canvas to data URL (2x resolution for better quality)
    const dataURL = canvas.toDataURL('image/png', 1.0);

    // Create download link
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Failed to export PNG:', error);
    throw new Error('Failed to export PNG image');
  }
}

/**
 * Export data and statistics as CSV
 * @param data - Raw data array
 * @param stats - Box plot statistics
 * @param filename - Optional filename (default: box-plot-data.csv)
 */
export function exportCSV(
  data: number[],
  stats: {
    min: number;
    q1: number;
    median: number;
    q3: number;
    max: number;
    iqr: number;
    outliers: number[];
  },
  filename: string = 'box-plot-data.csv'
): void {
  try {
    // Build CSV content
    const csvLines: string[] = [];

    // Metadata
    csvLines.push('# Box Plot Data Export');
    csvLines.push(`# Generated: ${new Date().toISOString()}`);
    csvLines.push(`# Data Points: ${data.length}`);
    csvLines.push('');

    // Statistics section
    csvLines.push('# Five-Number Summary');
    csvLines.push('Statistic,Value');
    csvLines.push(`Minimum,${stats.min}`);
    csvLines.push(`Q1 (25th percentile),${stats.q1}`);
    csvLines.push(`Median (Q2),${stats.median}`);
    csvLines.push(`Q3 (75th percentile),${stats.q3}`);
    csvLines.push(`Maximum,${stats.max}`);
    csvLines.push(`IQR,${stats.iqr}`);
    csvLines.push(`Outliers Count,${stats.outliers.length}`);
    csvLines.push('');

    // Outliers section
    if (stats.outliers.length > 0) {
      csvLines.push('# Outliers');
      csvLines.push('Value');
      stats.outliers.forEach((outlier) => {
        csvLines.push(outlier.toString());
      });
      csvLines.push('');
    }

    // Raw data section
    csvLines.push('# Raw Data');
    csvLines.push('Value');
    data.forEach((value) => {
      csvLines.push(value.toString());
    });

    // Create Blob and download
    const csvContent = csvLines.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to export CSV:', error);
    throw new Error('Failed to export CSV file');
  }
}
