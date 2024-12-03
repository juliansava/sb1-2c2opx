import React, { useState } from 'react';
import { Star, MapPin, Phone, Mail, Globe, Clock, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Accountant } from '../types';
import ConsultationModal from './ConsultationModal';
import AccountantDetailModal from './AccountantDetailModal';

interface AccountantCardProps {
  accountant: Accountant;
  onSpecializationClick: (specialization: string) => void;
}

export default function AccountantCard({ accountant, onSpecializationClick }: AccountantCardProps) {
  const [showConsultation, setShowConsultation] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setShowDetail(true)}
      >
        <div className="p-6">
          <div className="flex items-start gap-4">
            <img
              src={accountant.photoUrl}
              alt={accountant.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{accountant.name}</h3>
                {accountant.isPremium && (
                  <span className="px-3 py-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full">
                    Premium
                  </span>
                )}
              </div>
              <Link
                to={`/studio/${accountant.studio.id}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-1"
              >
                <Building className="w-4 h-4 mr-1" />
                {accountant.studio.name}
              </Link>
              <div className="flex items-center mt-1 text-sm text-gray-600">
                <Star className="w-4 h-4 text-amber-400 mr-1" />
                <span className="font-medium">{accountant.rating.toFixed(1)}</span>
                <span className="mx-1">·</span>
                <span>{accountant.reviewCount} recensioni</span>
              </div>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{accountant.bio}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              <span>{accountant.address.city}, {accountant.address.state}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-gray-400" />
              <span>Lun-Ven: 9:00-18:00</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {accountant.specializations.map((spec, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  onSpecializationClick(spec);
                }}
                className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
              >
                {spec}
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowConsultation(true);
              }}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Richiedi Consulenza
            </button>
            <a
              href={`tel:${accountant.contact.phone}`}
              onClick={(e) => e.stopPropagation()}
              className="p-2 text-gray-600 hover:text-blue-600 border border-gray-200 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${accountant.contact.email}`}
              onClick={(e) => e.stopPropagation()}
              className="p-2 text-gray-600 hover:text-blue-600 border border-gray-200 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            {accountant.contact.website && (
              <a
                href={accountant.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 text-gray-600 hover:text-blue-600 border border-gray-200 rounded-lg transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={showConsultation}
        onClose={() => setShowConsultation(false)}
        accountant={accountant}
      />

      <AccountantDetailModal
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        accountant={accountant}
        onConsultationClick={() => setShowConsultation(true)}
      />
    </>
  );
}