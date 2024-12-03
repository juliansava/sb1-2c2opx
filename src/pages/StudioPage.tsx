import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { accountants, standardAccountants } from '../data/accountants';
import AccountantGrid from '../components/AccountantGrid';
import PageTitle from '../components/PageTitle';

export default function StudioPage() {
  const { studioId } = useParams<{ studioId: string }>();
  
  const allAccountants = [...accountants, ...standardAccountants];
  const studioAccountants = allAccountants.filter(acc => acc.studio.id === studioId);
  
  if (studioAccountants.length === 0) {
    return <div>Studio not found</div>;
  }

  const studio = studioAccountants[0].studio;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start gap-6">
            {studio.logo && (
              <img
                src={studio.logo}
                alt={studio.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
            )}
            <div className="flex-1">
              <PageTitle
                title={studio.name}
                subtitle={studio.description}
              />
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                  <span>{studio.address.city}, {studio.address.state}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-gray-400" />
                  <a href={`tel:${studio.contact.phone}`} className="hover:text-blue-600">
                    {studio.contact.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2 text-gray-400" />
                  <a href={`mailto:${studio.contact.email}`} className="hover:text-blue-600">
                    {studio.contact.email}
                  </a>
                </div>
                {studio.website && (
                  <div className="flex items-center text-gray-600">
                    <Globe className="w-5 h-5 mr-2 text-gray-400" />
                    <a
                      href={studio.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >
                      Visita il sito
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          I Nostri Professionisti
        </h2>
        
        <AccountantGrid
          premiumAccountants={studioAccountants.filter(acc => acc.isPremium)}
          standardAccountants={studioAccountants.filter(acc => !acc.isPremium)}
        />
      </main>
    </div>
  );
}