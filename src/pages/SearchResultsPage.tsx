import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { accountants, standardAccountants } from '../data/accountants';
import AccountantGrid from '../components/AccountantGrid';
import SearchBar from '../components/SearchBar';
import PageTitle from '../components/PageTitle';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const location = searchParams.get('location')?.toLowerCase() || '';
  const service = searchParams.get('service')?.toLowerCase() || '';
  const industry = searchParams.get('industry')?.toLowerCase() || '';

  const filterAccountant = (accountant: typeof accountants[0]) => {
    const matchesQuery = !query || 
      accountant.name.toLowerCase().includes(query) ||
      accountant.services.some(s => s.toLowerCase().includes(query)) ||
      accountant.specializations.some(s => s.toLowerCase().includes(query));

    const matchesLocation = !location ||
      accountant.address.city.toLowerCase().includes(location) ||
      accountant.address.zipCode.includes(location);

    const matchesService = !service ||
      accountant.services.some(s => s.toLowerCase().includes(service));

    const matchesIndustry = !industry ||
      accountant.industries.some(i => i.toLowerCase().includes(industry));

    return matchesQuery && matchesLocation && matchesService && matchesIndustry;
  };

  const filteredPremiumAccountants = accountants.filter(filterAccountant);
  const filteredStandardAccountants = standardAccountants.filter(filterAccountant);

  const getPageTitle = () => {
    if (location) return `Commercialisti a ${location}`;
    if (service) return `Commercialisti specializzati in ${service}`;
    if (query) return `Risultati per "${query}"`;
    return 'Tutti i Commercialisti';
  };

  const handleSearch = (newQuery: string, filters: any) => {
    // Handle new search
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageTitle 
          title={getPageTitle()}
          subtitle={`${filteredPremiumAccountants.length + filteredStandardAccountants.length} professionisti trovati`}
        />

        <AccountantGrid
          premiumAccountants={filteredPremiumAccountants}
          standardAccountants={filteredStandardAccountants}
        />
      </main>
    </div>
  );
}