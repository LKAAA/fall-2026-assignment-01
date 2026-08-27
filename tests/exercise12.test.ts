import { describe, it, expect } from 'vitest';
import { fetchUserEmails } from '../src/exercise12.js';

describe('Exercise 12: fetchUserEmails', () => {
  it('should fetch real user emails from JSONPlaceholder', async () => {
    const emails = await fetchUserEmails();

    // Based on real API discovery
    expect(emails).toContain('Sincere@april.biz');
    expect(emails).toContain('Rey.Padberg@karina.biz');
    expect(emails.length).toBeGreaterThanOrEqual(10);
  });
});
