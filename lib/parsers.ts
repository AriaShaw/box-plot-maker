// Data parsing utilities for various input formats
import Papa from 'papaparse';

/**
 * Parse text data with comma, space, or newline separators
 * @param text - Raw text input
 * @returns Array of valid numbers
 */
export function parseTextData(text: string): number[] {
  if (!text || text.trim().length === 0) {
    return [];
  }

  // Split by common separators: comma, space, tab, newline
  const numbers: number[] = [];
  const tokens = text.split(/[\s,\t\n]+/);

  for (const token of tokens) {
    const cleaned = token.trim();
    if (cleaned.length === 0) continue;

    const num = parseFloat(cleaned);
    if (!isNaN(num) && isFinite(num)) {
      numbers.push(num);
    }
  }

  return numbers;
}

/**
 * Parse CSV file
 * @param file - File object
 * @returns Promise with array of numbers
 */
export function parseCSV(file: File): Promise<number[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (results) => {
        try {
          const numbers: number[] = [];

          // Extract numbers from CSV data
          if (results.data && Array.isArray(results.data)) {
            for (const row of results.data) {
              if (Array.isArray(row)) {
                for (const cell of row) {
                  const num = parseFloat(String(cell));
                  if (!isNaN(num) && isFinite(num)) {
                    numbers.push(num);
                  }
                }
              }
            }
          }

          if (numbers.length === 0) {
            reject(new Error('No numeric data found in CSV file'));
          } else {
            resolve(numbers);
          }
        } catch (error) {
          reject(new Error('Failed to parse CSV file'));
        }
      },
      error: (error) => {
        reject(new Error(`CSV parsing error: ${error.message}`));
      },
    });
  });
}

/**
 * Validate data array
 * @param data - Array of numbers
 * @returns Validation result with error message if invalid
 */
export function validateData(data: number[]): { valid: boolean; error?: string } {
  if (data.length === 0) {
    return { valid: false, error: 'Please enter at least 4 numbers' };
  }

  if (data.length < 4) {
    return {
      valid: false,
      error: `At least 4 data points required. You have ${data.length}.`,
    };
  }

  // Check for all identical values
  const allSame = data.every((val) => val === data[0]);
  if (allSame) {
    return {
      valid: false,
      error: 'All values are identical. Box plot requires some variation.',
    };
  }

  return { valid: true };
}
