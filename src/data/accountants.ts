import { Accountant } from '../types';
import { studios } from './studios';

export const accountants: Accountant[] = [
  {
    id: '1',
    name: 'Marco Rossi',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Specialista in contabilità aziendale con 15+ anni di esperienza nel settore tecnologico.',
    studio: studios[0],
    services: ['Contabilità Aziendale', 'Dichiarazione dei Redditi', 'Consulenza Fiscale'],
    specializations: ['Tech Startup', 'E-commerce', 'Innovazione'],
    industries: ['Tecnologia', 'E-commerce', 'Startup'],
    contact: {
      phone: '+39123456789',
      email: 'marco.rossi@example.com',
      website: 'https://example.com'
    },
    address: {
      street: 'Via Roma 123',
      city: 'Milano',
      state: 'MI',
      zipCode: '20121',
      coordinates: { lat: 45.4642, lng: 9.1900 }
    },
    officeHours: { 'Monday-Friday': '9:00 - 18:00' },
    certifications: ['Dottore Commercialista', 'Revisore Contabile'],
    rating: 4.9,
    reviewCount: 156,
    isPremium: true
  },
  {
    id: '2',
    name: 'Laura Bianchi',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Esperta in fiscalità internazionale e pianificazione tributaria per PMI.',
    studio: studios[1],
    services: ['Fiscalità Internazionale', 'Consulenza Aziendale', 'Pianificazione Fiscale'],
    specializations: ['PMI', 'Internazionalizzazione', 'Consulenza Strategica'],
    industries: ['Manifatturiero', 'Import/Export', 'Servizi'],
    contact: {
      phone: '+39123456790',
      email: 'laura.bianchi@example.com'
    },
    address: {
      street: 'Via Dante 45',
      city: 'Roma',
      state: 'RM',
      zipCode: '00187',
      coordinates: { lat: 41.9028, lng: 12.4964 }
    },
    officeHours: { 'Monday-Friday': '9:00 - 17:00' },
    certifications: ['Dottore Commercialista'],
    rating: 4.8,
    reviewCount: 98,
    isPremium: true
  },
  {
    id: '3',
    name: 'Giuseppe Verdi',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Specializzato in startup e scale-up con focus su innovazione digitale.',
    studio: studios[0],
    services: ['Startup Advisory', 'Digital Transformation', 'Business Planning'],
    specializations: ['Startup', 'Digitale', 'Innovazione'],
    industries: ['Digital', 'Fintech', 'SaaS'],
    contact: {
      phone: '+39123456791',
      email: 'giuseppe.verdi@example.com',
      website: 'https://example.com'
    },
    address: {
      street: 'Via Garibaldi 78',
      city: 'Torino',
      state: 'TO',
      zipCode: '10122',
      coordinates: { lat: 45.0703, lng: 7.6869 }
    },
    officeHours: { 'Monday-Friday': '9:00 - 19:00' },
    certifications: ['Dottore Commercialista', 'Innovation Advisor'],
    rating: 4.7,
    reviewCount: 87,
    isPremium: true
  }
];

export const standardAccountants: Accountant[] = Array.from({ length: 7 }, (_, i) => ({
  id: `${i + 4}`,
  name: `Commercialista ${i + 1}`,
  photoUrl: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=200&h=200`,
  bio: 'Professionista esperto in contabilità e consulenza fiscale.',
  studio: studios[i % 2],
  services: ['Contabilità', 'Dichiarazione dei Redditi', 'Consulenza'],
  specializations: ['PMI', 'Liberi Professionisti'],
  industries: ['Servizi', 'Commercio'],
  contact: {
    phone: `+391234567${92 + i}`,
    email: `commercialista${i + 1}@example.com`
  },
  address: {
    street: `Via Example ${i + 1}`,
    city: 'Milano',
    state: 'MI',
    zipCode: '20121',
    coordinates: { lat: 45.4642, lng: 9.1900 }
  },
  officeHours: { 'Monday-Friday': '9:00 - 18:00' },
  certifications: ['Dottore Commercialista'],
  rating: 4.0 + (Math.random() * 0.9),
  reviewCount: 20 + Math.floor(Math.random() * 50),
  isPremium: false
}));