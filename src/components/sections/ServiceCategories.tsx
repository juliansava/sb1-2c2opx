import React from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  'Contabilità Aziendale',
  'Dichiarazione dei Redditi',
  'Consulenza Fiscale',
  'Pianificazione Fiscale',
  'Revisione Contabile',
  'Consulenza Societaria',
  'Gestione Paghe',
  'Contenzioso Tributario',
];

export default function ServiceCategories() {
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Servizi Offerti</h2>
          <p className="mt-2 text-gray-600">Trova il professionista giusto per le tue esigenze</p>
        </div>
        <Briefcase className="w-8 h-8 text-blue-600" />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service) => (
          <Link
            key={service}
            to={`/search?service=${encodeURIComponent(service)}`}
            className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-medium text-gray-900">{service}</h3>
            <p className="mt-1 text-sm text-gray-600">
              Professionisti specializzati
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}