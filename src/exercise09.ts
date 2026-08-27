export type AdminUser = {};

export type GuestUser = {};

export function isAdmin(user: AdminUser | GuestUser): user is AdminUser {
  return false;
}

export function extractAdmins(
  users: Array<AdminUser | GuestUser>,
): AdminUser[] {
  return [];
}
