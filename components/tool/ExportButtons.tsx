'use client';

import { Download } from 'lucide-react';
import { exportPNG, exportCSV } from '@/lib/exporters';
import type { BoxPlotData } from '@/types';
import { useState } from 'react';

interface ExportButtonsProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  data: number[];
  stats: BoxPlotData | null;
}

export default function ExportButtons({ canvasRef, data, stats }: ExportButtonsProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState('');

  const handleExportPNG = async () => {
    if (!canvasRef.current || !stats) return;

    setIsExporting(true);
    setExportMessage('');

    try {
      // Get the Chart.js canvas element
      const canvas = canvasRef.current;
      exportPNG(canvas, 'box-plot.png');

      setExportMessage('PNG exported successfully');
      setTimeout(() => setExportMessage(''), 3000);
    } catch (error) {
      setExportMessage('Failed to export PNG');
      setTimeout(() => setExportMessage(''), 3000);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportCSV = () => {
    if (!stats || data.length === 0) return;

    setIsExporting(true);
    setExportMessage('');

    try {
      exportCSV(data, stats, 'box-plot-data.csv');

      setExportMessage('CSV exported successfully');
      setTimeout(() => setExportMessage(''), 3000);
    } catch (error) {
      setExportMessage('Failed to export CSV');
      setTimeout(() => setExportMessage(''), 3000);
    } finally {
      setIsExporting(false);
    }
  };

  if (!stats || data.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        {/* Export PNG Button - 按照文档 2.4 Primary Button 规范 */}
        <button
          onClick={handleExportPNG}
          disabled={isExporting}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
        >
          <Download size={20} />
          {isExporting ? 'Exporting...' : 'Export PNG'}
        </button>

        {/* Export CSV Button - 按照文档 2.4 Secondary Button 规范 */}
        <button
          onClick={handleExportCSV}
          disabled={isExporting}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
        >
          <Download size={20} />
          {isExporting ? 'Exporting...' : 'Export CSV'}
        </button>
      </div>

      {/* Export message */}
      {exportMessage && (
        <div
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            exportMessage.startsWith('✓')
              ? 'bg-green-50 border-2 border-green-500 text-green-700'
              : 'bg-red-50 border-2 border-red-500 text-red-700'
          }`}
        >
          {exportMessage}
        </div>
      )}
    </div>
  );
}
