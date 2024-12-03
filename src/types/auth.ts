export interface User {
  id: string;
  email: string;
  name: string;
  role: 'accountant' | 'admin';
  studioId?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterAccountantData {
  email: string;
  password: string;
  name: string;
  bio: string;
  services: string[];
  specializations: string[];
  industries: string[];
  certifications: string[];
  studio: {
    id?: string;
    name: string;
    description?: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    contact: {
      phone: string;
      email: string;
      website?: string;
    };
  };
}