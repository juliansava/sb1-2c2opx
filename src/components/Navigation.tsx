import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const cities = [
  'Roma', 'Milano', 'Napoli', 'Torino', 'Palermo', 'Genova', 'Bologna',
  'Firenze', 'Bari', 'Catania', 'Venezia', 'Verona', 'Messina', 'Padova',
  'Trieste', 'Brescia', 'Parma', 'Taranto', 'Prato', 'Modena'
];

const services = [
  'Contabilità Aziendale',
  'Dichiarazione dei Redditi',
  'Consulenza Fiscale',
  'Pianificazione Fiscale',
  'Revisione Contabile',
  'Consulenza Societaria',
  'Gestione Paghe',
  'Contenzioso Tributario'
];

const blogTopics = [
  'Novità Fiscali',
  'Guide Pratiche',
  'Casi Studio',
  'Approfondimenti'
];

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <nav className="flex items-center space-x-6">
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter('location')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          Cerca per città
          <ChevronDown className="w-4 h-4 ml-1" />
        </button>
        {activeDropdown === 'location' && (
          <div 
            className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            onMouseEnter={() => handleMouseEnter('location')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-2 gap-2 p-4">
              {cities.map((city) => (
                <Link
                  key={city}
                  to={`/search?location=${encodeURIComponent(city)}`}
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter('practice')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          Cerca per servizio
          <ChevronDown className="w-4 h-4 ml-1" />
        </button>
        {activeDropdown === 'practice' && (
          <div 
            className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            onMouseEnter={() => handleMouseEnter('practice')}
            onMouseLeave={handleMouseLeave}
          >
            {services.map((service) => (
              <Link
                key={service}
                to={`/search?service=${encodeURIComponent(service)}`}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm"
              >
                {service}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter('blog')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          Blog e Domande
          <ChevronDown className="w-4 h-4 ml-1" />
        </button>
        {activeDropdown === 'blog' && (
          <div 
            className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            onMouseEnter={() => handleMouseEnter('blog')}
            onMouseLeave={handleMouseLeave}
          >
            {blogTopics.map((topic) => (
              <Link
                key={topic}
                to={`/blog/topic/${encodeURIComponent(topic.toLowerCase())}`}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm"
              >
                {topic}
              </Link>
            ))}
            <div className="border-t border-gray-100 mt-2 pt-2">
              <Link
                to="/qa"
                className="block px-4 py-2 text-blue-600 hover:bg-gray-50 text-sm font-medium"
              >
                Fai una Domanda
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}