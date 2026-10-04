import axios from "axios";
import type { AuthUser, SignInResponse } from "../types/auth";

const API_BASE_URL = "http://localhost:3001";

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await axios.post<SignInResponse>(
    `${API_BASE_URL}/auth/login`,
    {
      email,
      password,
    },
  );

  return response.data;
}

export async function signUp({
  email,
  nickname,
  password,
  passwordConfirmation,
}: {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}) {
  const response = await axios.post<AuthUser>(`${API_BASE_URL}/auth/signup`, {
    email,
    nickname,
    password,
    passwordConfirmation,
  });
  return response.data;
}
