export interface Studio {
  id: string;
  name: string;
  description: string;
  logo?: string;
  address: Address;
  contact: Contact;
  website?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Contact {
  phone: string;
  email: string;
  website?: string;
}

export interface Accountant {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  studio: Studio;
  services: string[];
  specializations: string[];
  industries: string[];
  contact: Contact;
  address: Address;
  officeHours: {
    [key: string]: string;
  };
  certifications: string[];
  rating: number;
  reviewCount: number;
  isPremium: boolean;
}

export interface Review {
  id: string;
  accountantId: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
  metrics: {
    professionalism: number;
    responsiveness: number;
    expertise: number;
  };
}