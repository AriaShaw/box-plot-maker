'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { BoxPlotController, BoxAndWiskers } from '@sgratzl/chartjs-chart-boxplot';
import ExportButtons from './ExportButtons';
import type { BoxPlotData } from '@/types';

// Register Chart.js components
Chart.register(...registerables, BoxPlotController, BoxAndWiskers);

interface ChartDisplayProps {
  data: number[];
  stats: BoxPlotData | null;
}

export default function ChartDisplay({ data, stats }: ChartDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current || data.length === 0) {
      // Destroy chart if no data
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
      return;
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new chart
    chartRef.current = new Chart(ctx, {
      type: 'boxplot',
      data: {
        labels: ['Dataset'],
        datasets: [
          {
            label: 'Box Plot',
            data: [data],
            backgroundColor: 'rgba(59, 130, 246, 0.5)', // blue-600 with opacity
            borderColor: 'rgb(59, 130, 246)', // blue-600
            borderWidth: 2,
            outlierBackgroundColor: 'rgb(239, 68, 68)', // red-500
            outlierBorderColor: 'rgb(239, 68, 68)',
            outlierRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(17, 24, 39, 0.95)', // gray-900
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgb(59, 130, 246)',
            borderWidth: 1,
            padding: 12,
            displayColors: false,
            callbacks: {
              title: () => 'Box Plot Values',
              label: (context: any) => {
                const raw = context.parsed;
                if (raw && typeof raw === 'object') {
                  const lines = [];
                  if (raw.min !== undefined) lines.push(`Min: ${raw.min.toFixed(2)}`);
                  if (raw.q1 !== undefined) lines.push(`Q1: ${raw.q1.toFixed(2)}`);
                  if (raw.median !== undefined) lines.push(`Median: ${raw.median.toFixed(2)}`);
                  if (raw.q3 !== undefined) lines.push(`Q3: ${raw.q3.toFixed(2)}`);
                  if (raw.max !== undefined) lines.push(`Max: ${raw.max.toFixed(2)}`);
                  return lines;
                }
                return '';
              },
            },
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Values',
              font: {
                size: 14,
                weight: 'bold',
              },
              color: '#374151', // gray-700
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)',
            },
            ticks: {
              color: '#4b5563', // gray-600
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#4b5563', // gray-600
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, stats]);

  if (data.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-label="Chart placeholder icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <p className="text-gray-500 font-medium">
            Enter data to generate your box plot
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Your visualization will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Chart */}
      <div className="w-full h-[400px] bg-white rounded-lg border border-gray-200 p-4">
        <canvas ref={canvasRef} />
      </div>

      {/* Export Buttons */}
      <ExportButtons canvasRef={canvasRef} data={data} stats={stats} />
    </div>
  );
}
