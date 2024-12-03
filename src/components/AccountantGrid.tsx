import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccountantCard from './AccountantCard';
import { Accountant } from '../types';

interface AccountantGridProps {
  premiumAccountants: Accountant[];
  standardAccountants: Accountant[];
}

export default function AccountantGrid({ premiumAccountants, standardAccountants }: AccountantGridProps) {
  const navigate = useNavigate();

  const handleSpecializationClick = (specialization: string) => {
    navigate(`/specialization/${encodeURIComponent(specialization.toLowerCase())}`);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {premiumAccountants.map((accountant) => (
          <AccountantCard
            key={accountant.id}
            accountant={accountant}
            onSpecializationClick={handleSpecializationClick}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {standardAccountants.map((accountant) => (
          <AccountantCard
            key={accountant.id}
            accountant={accountant}
            onSpecializationClick={handleSpecializationClick}
          />
        ))}
      </div>
    </div>
  );
}