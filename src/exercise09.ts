export type AdminUser = {
  adminId: string,
  permissions: string[],
};

export type GuestUser = {
  guestToken: string,
  expiresAt: Date,
};

//AdminUser: Contains an adminId (string) and an array of permissions (strings).

//GuestUser: Contains a guestToken (string) and an expiration timestamp expiresAt (Date).

export function isAdmin(user: AdminUser | GuestUser): user is AdminUser {
  return 'adminId' in user;
}

// Takes in an array of users that are either AdminUsers, or GuestUsers
// Returns an Array of just AdminUsers
export function extractAdmins(users: Array<AdminUser | GuestUser>,): AdminUser[] {
  console.log("Users List: " + users);
  const adminUsers: AdminUser[] = users.filter(isAdmin);
  console.log("Admin Users List: " + adminUsers);
  return adminUsers;
}
