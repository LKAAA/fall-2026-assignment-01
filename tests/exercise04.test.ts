import { describe, it, expect } from 'vitest';
import { calculateArea } from '../src/exercise04.js';

describe('Exercise 4: calculateArea', () => {
  it('should calculate area for all supported shapes', () => {
    expect(calculateArea({ kind: 'circle', radius: 10 })).toBeCloseTo(
      314.159,
      2,
    );
    expect(calculateArea({ kind: 'rectangle', width: 10, height: 5 })).toBe(50);
    expect(calculateArea({ kind: 'square', sideLength: 5 })).toBe(25);
  });
});
