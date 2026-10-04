export type AuthUser = {
  id: string;
  email: string;
  nickname: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
};

export type SignInResponse = {
  accessToken: string;
  user: AuthUser;
};
