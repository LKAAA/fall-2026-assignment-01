import { describe, it, expect } from 'vitest';
import { UserRegistry } from '../src/exercise10.js';

describe('Exercise 10: UserRegistry', () => {
  it('should manage a collection of users and return read-only views', () => {
    const registry = new UserRegistry();
    const newUser = {
      email: 'prof@uncc.edu',
      passwordHash: 'SECRET',
      profile: {
        bio: 'TypeScript Expert',
        avatarUrl: 'http://example.com/me.png',
      },
    };

    const registered = registry.registerUser(newUser);
    expect(registered.id).toBeDefined();
    expect(registered.createdAt).toBeInstanceOf(Date);
    expect(registered.passwordHash).toBe('SECRET');

    const view = registry.getUserView(registered.id);
    expect(view?.id).toBe(registered.id);
    expect(view?.email).toBe(newUser.email);
    expect(view?.profile).toEqual(newUser.profile);

    // Check that passwordHash is omitted from the view
    expect((view as any).passwordHash).toBeUndefined();

    // Verify immutability (strictly read-only)
    expect(Object.isFrozen(view)).toBe(true);
  });
});
