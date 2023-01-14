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
}

export type { IUsers, UserType };
