import { describe, it, expect } from 'vitest';
import { initializeConfig } from '../src/exercise05.js';

describe('Exercise 5: initializeConfig', () => {
  it('should merge partial overrides with defaults', () => {
    const config = initializeConfig({ port: 9000 });
    expect(config).toEqual({
      serverUrl: 'http://localhost',
      port: 9000,
      environment: 'dev',
      timeout: 3000,
    });
  });

  it('should use all defaults when no overrides are provided', () => {
    expect(initializeConfig({})).toEqual({
      serverUrl: 'http://localhost',
      port: 8080,
      environment: 'dev',
      timeout: 3000,
    });
  });
});
