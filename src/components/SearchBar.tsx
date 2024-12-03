import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, filters: any) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    specialization: '',
    industry: '',
    onlineAvailable: false,
  });

  const handleSearch = () => {
    onSearch(query, filters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            placeholder="Cerca commercialisti per nome, servizio o parola chiave..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <Filter className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Cerca
        </button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg border border-gray-200">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Località</label>
            <div className="relative">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Città o CAP"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
              <MapPin className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Specializzazione</label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={filters.specialization}
              onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
            >
              <option value="">Tutte le Specializzazioni</option>
              <option value="tax">Fiscale</option>
              <option value="forensic">Forense</option>
              <option value="audit">Revisione Contabile</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Settore</label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={filters.industry}
              onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
            >
              <option value="">Tutti i Settori</option>
              <option value="small-business">Piccole Imprese</option>
              <option value="freelancer">Liberi Professionisti</option>
              <option value="corporate">Aziende</option>
            </select>
          </div>
          <div className="md:col-span-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.onlineAvailable}
                onChange={(e) => setFilters({ ...filters, onlineAvailable: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                Disponibile per consulenze online
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}