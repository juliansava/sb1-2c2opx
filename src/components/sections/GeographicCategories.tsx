import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const regions = {
  'Nord Italia': [
    'Milano',
    'Torino',
    'Venezia',
    'Bologna',
  ],
  'Centro Italia': [
    'Roma',
    'Firenze',
    'Perugia',
    'Ancona',
  ],
  'Sud Italia': [
    'Napoli',
    'Bari',
    'Palermo',
    'Catania',
  ],
};

export default function GeographicCategories() {
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cerca per Zona</h2>
          <p className="mt-2 text-gray-600">Trova professionisti nella tua regione</p>
        </div>
        <MapPin className="w-8 h-8 text-blue-600" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(regions).map(([region, cities]) => (
          <div key={region} className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{region}</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city}>
                  <Link
                    to={`/search?location=${encodeURIComponent(city)}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}