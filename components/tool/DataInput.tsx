'use client';

import { useState, useRef, useEffect } from 'react';
import { Upload } from 'lucide-react';
import { parseTextData, parseCSV, validateData } from '@/lib/parsers';
import { sampleDatasets } from '@/lib/sampleData';

interface DataInputProps {
  onDataChange: (data: number[]) => void;
}

export default function DataInput({ onDataChange }: DataInputProps) {
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 按照文档 5.3 交互设计规范：Debounced update 500ms after last keystroke
  const handleTextChange = (text: string) => {
    setInputText(text);
    setError('');
    setSuccess('');

    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new debounce timer (500ms)
    debounceTimerRef.current = setTimeout(() => {
      if (!text.trim()) {
        onDataChange([]);
        return;
      }

      const numbers = parseTextData(text);
      const validation = validateData(numbers);

      if (!validation.valid) {
        setError(validation.error || '');
        onDataChange([]);
      } else {
        setSuccess(`${numbers.length} data points detected`);
        onDataChange(numbers);
      }
    }, 500);
  };

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError('');
    setSuccess('');

    try {
      const numbers = await parseCSV(file);
      const validation = validateData(numbers);

      if (!validation.valid) {
        setError(validation.error || '');
        onDataChange([]);
      } else {
        setInputText(numbers.join(', '));
        setSuccess(`CSV loaded: ${numbers.length} data points`);
        onDataChange(numbers);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load CSV');
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const loadSampleData = (index: number) => {
    const sample = sampleDatasets[index];
    const text = sample.data.join(', ');
    setInputText(text);
    setSuccess(`Loaded: ${sample.name}`);
    setError('');

    // Immediately trigger data change for sample data (no debounce)
    onDataChange(sample.data);
  };

  const clearData = () => {
    setInputText('');
    setError('');
    setSuccess('');
    onDataChange([]);
  };

  return (
    <div className="space-y-4">
      <div>
        {/* 按照文档 2.4 Input 规范 */}
        <label htmlFor="data-input" className="block text-sm font-semibold text-gray-700 mb-2">
          Enter Your Data
        </label>
        <textarea
          id="data-input"
          value={inputText}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Enter numbers separated by commas, spaces, or line breaks&#10;Example: 5, 7, 8, 10, 12, 15, 18, 20, 25, 30"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 text-base font-mono resize-none"
          rows={6}
          // 按照文档 5.2 移动端优化：inputmode="decimal" for number input
          inputMode="decimal"
        />
      </div>

      {/* Status messages */}
      {error && (
        <div className="px-4 py-3 bg-red-50 border-2 border-red-500 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="px-4 py-3 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 text-sm">
          {success}
        </div>
      )}

      {/* Action buttons row */}
      <div className="flex flex-wrap gap-3">
        {/* File upload button - 按照文档 2.4 Secondary Button 规范 */}
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="hidden"
            id="csv-upload"
          />
          <label
            htmlFor="csv-upload"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer min-h-[48px]"
          >
            <Upload size={20} />
            Upload CSV File
          </label>
        </div>

        {/* Clear button - only show when there's data */}
        {inputText && (
          <button
            onClick={clearData}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200 min-h-[48px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear Data
          </button>
        )}
      </div>

      {/* Sample data buttons */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-2">Or try sample data:</p>
        <div className="flex flex-wrap gap-2">
          {sampleDatasets.map((sample, index) => (
            <button
              key={index}
              id={`sample-${sample.name.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => loadSampleData(index)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors duration-200 min-h-[48px]"
            >
              {sample.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
