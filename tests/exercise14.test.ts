import { describe, it, expect } from 'vitest';
import { fetchPostBatch } from '../src/exercise14.js';

describe('Exercise 14: fetchPostBatch', () => {
  it('should fetch a batch of real posts concurrently', async () => {
    const results = await fetchPostBatch([1, 2]);

    expect(results).toHaveLength(2);
    expect(results[0].id).toBe(1);
    expect(results[1].id).toBe(2);
    expect(results[0].title).toBe(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    );
    expect(results[1].title).toBe('qui est esse');
  });
});
