export interface Usuario {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
