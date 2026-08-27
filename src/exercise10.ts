type UserAccount = {
  id: string,
  createdAt: Date,
  email: string,
  passwordHash: string,
  profile: {
    bio: string,
    avatarUrl: string,
  },
};

// UserAccount containing the following fields: id (string), 
// createdAt (Date), email (string), passwordHash (string), 
// and a nested profile object containing a bio (string) and avatarUrl (string).

export class UserRegistry {

private users: UserAccount[] = [];

public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    const newUser: UserAccount = {
      ...data,
      id: generateRandomString(10),
      createdAt: new Date(),
    };

    this.users.push(newUser);

    return newUser;
  }

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    const foundUser = this.users.find(user => user.id == id);

    return foundUser ? 
    Object.freeze({id: foundUser.id, email: foundUser.email, profile: Object.freeze(foundUser.profile)}) 
    : undefined;
  }
}

function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  
  return result;
}