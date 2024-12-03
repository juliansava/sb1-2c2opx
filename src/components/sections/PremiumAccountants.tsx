import React from 'react';
import AccountantCard from '../AccountantCard';
import { accountants } from '../../data/accountants';
import { Award } from 'lucide-react';

export default function PremiumAccountants() {
  const premiumAccountants = accountants.filter(a => a.isPremium).slice(0, 3);

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Professionisti in Evidenza</h2>
          <p className="mt-2 text-gray-600">I migliori commercialisti certificati</p>
        </div>
        <Award className="w-8 h-8 text-blue-600" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {premiumAccountants.map((accountant) => (
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