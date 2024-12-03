import React from 'react';
import AccountantCard from '../AccountantCard';
import { accountants } from '../../data/accountants';
import { MapPin } from 'lucide-react';

export default function NearbyAccountants() {
  // In a real app, this would use geolocation and filter by distance
  const nearbyAccountants = accountants.slice(0, 3);

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Commercialisti Vicino a Te</h2>
          <p className="mt-2 text-gray-600">Professionisti nella tua zona pronti ad aiutarti</p>
        </div>
        <MapPin className="w-8 h-8 text-blue-600" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {nearbyAccountants.map((accountant) => (
          <AccountantCard
            key={accountant.id}
            accountant={accountant}
            onSpecializationClick={() => {}}
          />
        ))}
      </div>
    </section>
  );
}