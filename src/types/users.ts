type UserType = {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
};

type Inputs = {
  name: string;
  email: string;
  phone: string;
  position: string;
  files: any;
};

type Token = {
  data: { token: string };
};

interface IUsers {
  users: UserType[];
  total_pages: number;
  total_users: number;
}

export type { IUsers, UserType, Inputs, Token };
