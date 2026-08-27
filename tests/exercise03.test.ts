import { describe, it, expect } from 'vitest';
import { getInventoryValue } from '../src/exercise03.js';

describe('Exercise 3: getInventoryValue', () => {
  it('should calculate total value only for items with quantity > 5', () => {
    const inventory: Array<[string, number, number]> = [
      ['Apple', 10, 1.5], // 10 * 1.5 = 15
      ['Banana', 5, 0.5], // Ignored
      ['Cherry', 20, 2.0], // 20 * 2.0 = 40
      ['Date', 6, 1.0], // 6 * 1.0 = 6
    ];
    expect(getInventoryValue(inventory)).toBe(61);
  });

  it('should return 0 for empty inventory or no eligible items', () => {
    expect(getInventoryValue([])).toBe(0);
    expect(getInventoryValue([['Apple', 5, 1.0]])).toBe(0);
  });
});
