import React, { useState } from 'react';
import { Building, Plus } from 'lucide-react';
import { studios } from '../data/studios';
import type { Studio } from '../types';

interface StudioComboboxProps {
  onSelect: (studio: Studio | null) => void;
  onCreateNew: () => void;
}

export default function StudioCombobox({ onSelect, onCreateNew }: StudioComboboxProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredStudios = studios.filter(studio =>
    studio.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="Cerca uno studio esistente..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <Building className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          <ul className="py-1">
            {filteredStudios.map(studio => (
              <li
                key={studio.id}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  onSelect(studio);
                  setQuery(studio.name);
                  setIsOpen(false);
                }}
              >
                <div className="font-medium">{studio.name}</div>
                <div className="text-sm text-gray-500">{studio.address.city}</div>
              </li>
            ))}
            <li
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-blue-600 font-medium"
              onClick={() => {
                onCreateNew();
                setIsOpen(false);
              }}
            >
              <div className="flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Crea nuovo studio
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}