import { describe, it, expect } from 'vitest';
import { calculateSubjectAverage } from '../src/exercise07.js';

describe('Exercise 7: calculateSubjectAverage', () => {
  it('should calculate average for Math correctly from generated data', () => {
    expect(calculateSubjectAverage('Math')).toBeCloseTo(76.2, 1);
  });

  it('should calculate average for Science correctly from generated data', () => {
    expect(calculateSubjectAverage('Science')).toBeCloseTo(73.0, 1);
  });

  it('should return 0 or handle missing subjects gracefully', () => {
    expect(calculateSubjectAverage('NonExistentSubject')).toBe(0);
  });
});
