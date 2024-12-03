import type { Studio } from '../types';

export const studios: Studio[] = [
  {
    id: 'studio1',
    name: 'Studio Rossi & Associati',
    description: 'Studio professionale specializzato in consulenza fiscale e societaria dal 1990.',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=200',
    address: {
      street: 'Via Roma 123',
      city: 'Milano',
      state: 'MI',
      zipCode: '20121',
      coordinates: { lat: 45.4642, lng: 9.1900 }
    },
    contact: {
      phone: '+39 02 1234567',
      email: 'info@studiorossi.it',
      website: 'https://studiorossi.it'
    }
  },
  {
    id: 'studio2',
    name: 'Studio Bianchi e Partners',
    description: 'Consulenza aziendale e tributaria per imprese e professionisti.',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200&h=200',
    address: {
      street: 'Via Dante 45',
      city: 'Roma',
      state: 'RM',
      zipCode: '00187',
      coordinates: { lat: 41.9028, lng: 12.4964 }
    },
    contact: {
      phone: '+39 06 7654321',
      email: 'info@studiobianchi.it',
      website: 'https://studiobianchi.it'
    }
  }
];