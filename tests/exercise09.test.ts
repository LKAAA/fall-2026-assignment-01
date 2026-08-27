import { describe, it, expect } from 'vitest';
import { isAdmin, extractAdmins } from '../src/exercise09.js';

describe('Exercise 9: User Roles Type Guard', () => {
  const admin = { adminId: 'A1', permissions: ['root'] };
  const guest = { guestToken: 'G1', expiresAt: new Date() };

  it('should correctly identify admin users', () => {
    expect(isAdmin(admin)).toBe(true);
    expect(isAdmin(guest)).toBe(false);
  });

  it('should filter an array to contain only admins', () => {
    const users = [admin, guest, admin];
    const admins = extractAdmins(users);
    expect(admins).toHaveLength(2);
    expect(admins[0]).toBe(admin);
  });
});
