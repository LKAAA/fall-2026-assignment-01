interface UserProfile {
  id: number;
  name: string;
  email: string;
}

export async function fetchUserEmails(): Promise<string[]> {

  const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const users: UserProfile[] = await response.json() as UserProfile[];

  const emails: string[] = users.map((user) => user.email);

  return emails;
}
