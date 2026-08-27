import { describe, it, expect } from 'vitest';
import { transcribeDNA } from '../src/exercise02.js';

describe('Exercise 2: transcribeDNA', () => {
  it('should transcribe valid DNA sequences to RNA', () => {
    expect(transcribeDNA('ATCG')).toBe('UAGC');
    expect(transcribeDNA('GATTACA')).toBe('CUAAUGU');
  });

  it('should throw an error for invalid nucleotides', () => {
    expect(() => transcribeDNA('ATCX')).toThrow();
    expect(() => transcribeDNA('ATC1')).toThrow();
  });
});
