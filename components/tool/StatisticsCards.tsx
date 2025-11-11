'use client';

import type { BoxPlotData } from '@/types';
import { Info } from 'lucide-react';

interface StatisticsCardsProps {
  stats: BoxPlotData | null;
}

interface StatCardProps {
  label: string;
  value: number;
  tooltip: string;
}

function StatCard({ label, value, tooltip }: StatCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-600">{label}</span>
        <div className="group relative">
          <Info size={16} className="text-gray-400 hover:text-blue-600 cursor-help" />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-10">
            {tooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900">
        {value.toFixed(2)}
      </div>
    </div>
  );
}

export default function StatisticsCards({ stats }: StatisticsCardsProps) {
  if (!stats) {
    return null;
  }

  const statsData = [
    {
      label: 'Minimum',
      value: stats.min,
      tooltip: 'The smallest value in your dataset',
    },
    {
      label: 'Q1 (25th %ile)',
      value: stats.q1,
      tooltip: 'First Quartile - 25% of data falls below this value',
    },
    {
      label: 'Median (Q2)',
      value: stats.median,
      tooltip: 'The middle value when data is sorted. Note: This is NOT the mean',
    },
    {
      label: 'Q3 (75th %ile)',
      value: stats.q3,
      tooltip: 'Third Quartile - 75% of data falls below this value',
    },
    {
      label: 'Maximum',
      value: stats.max,
      tooltip: 'The largest value in your dataset',
    },
    {
      label: 'IQR',
      value: stats.iqr,
      tooltip: 'Interquartile Range (Q3 - Q1). Measures the spread of the middle 50% of data',
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Five-Number Summary</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {statsData.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            tooltip={stat.tooltip}
          />
        ))}
      </div>

      {stats.outliers.length > 0 && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-red-800">Outliers Detected</span>
            <div className="group relative">
              <Info size={16} className="text-red-600 cursor-help" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-10">
                Outliers are values beyond 1.5×IQR from the quartiles. They represent unusual observations.
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
          <div className="text-red-700">
            <span className="font-bold">{stats.outliers.length}</span> outlier(s): {stats.outliers.map(o => o.toFixed(2)).join(', ')}
          </div>
        </div>
      )}
    </div>
  );
}
