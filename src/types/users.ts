type UserType = {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
};

interface IUsers {
  users: UserType[];
  total_pages: number;
  total_users: number;
}

export type { IUsers, UserType };
