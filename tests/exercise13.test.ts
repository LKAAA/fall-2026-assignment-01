import { describe, it, expect } from 'vitest';
import { fetchTodoSafe } from '../src/exercise13.js';

describe('Exercise 13: fetchTodoSafe', () => {
  it('should fetch a real todo item', async () => {
    const todo = await fetchTodoSafe(1);
    expect(todo).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
  });

  it('should handle non-existent todos by returning null', async () => {
    const todo = await fetchTodoSafe(9999);
    expect(todo).toBeNull();
  });
});
