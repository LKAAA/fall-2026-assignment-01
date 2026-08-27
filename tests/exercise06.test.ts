import { describe, it, expect } from 'vitest';
import { Stack } from '../src/exercise06.js';

describe('Exercise 6: Stack', () => {
  it('should maintain LIFO order', () => {
    const stack = new Stack<number>();
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBeUndefined();
    expect(stack.size()).toBe(0);
  });
});
