export interface AuthenticationResponse {
  isAuthenticated: boolean;
  token?: string;
}

export interface RegistrationResponse {
  isAuthenticated: boolean;
  token?: string;
}

export interface IRegistrationForm {
  name: string;
  email: string;
  password: string;
  password_check: string;
}
