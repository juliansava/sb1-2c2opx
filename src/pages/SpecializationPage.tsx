import React from 'react';
import { useParams } from 'react-router-dom';
import AccountantGrid from '../components/AccountantGrid';
import PageTitle from '../components/PageTitle';
import { accountants, standardAccountants } from '../data/accountants';

export default function SpecializationPage() {
  const { specialization } = useParams<{ specialization: string }>();
  
  const filteredPremiumAccountants = accountants.filter(acc => 
    acc.specializations.some(spec => 
      spec.toLowerCase() === specialization?.toLowerCase()
    )
  );
  
  const filteredStandardAccountants = standardAccountants.filter(acc => 
    acc.specializations.some(spec => 
      spec.toLowerCase() === specialization?.toLowerCase()
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageTitle
          title={`Commercialisti specializzati in ${specialization}`}
          subtitle="Trova il professionista più adatto alle tue esigenze"
        />

        <AccountantGrid
          premiumAccountants={filteredPremiumAccountants}
          standardAccountants={filteredStandardAccountants}
        />
      </main>
    </div>
  );
}