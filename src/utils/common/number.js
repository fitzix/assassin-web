const NUM_FORMAT_SUFFIX = [
  { value: 1, symbol: '' },
  { value: 1e3, symbol: 'k' },
  { value: 1e6, symbol: 'M' },
  { value: 1e9, symbol: 'G' },
  { value: 1e12, symbol: 'T' },
  { value: 1e15, symbol: 'P' },
  { value: 1e18, symbol: 'E' },
];

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(num, digits = 0) {
  for (let i = 0; i < NUM_FORMAT_SUFFIX.length; i++) {
    if (num >= NUM_FORMAT_SUFFIX[i].value) {
      return (num / NUM_FORMAT_SUFFIX[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + NUM_FORMAT_SUFFIX[i].symbol;
    }
  }
  return num.toString();
}
