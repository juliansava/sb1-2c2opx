import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Clock, Award } from 'lucide-react';
import { accountants, standardAccountants } from '../data/accountants';
import ReviewSection from '../components/ReviewSection';
import ConsultationModal from '../components/ConsultationModal';

export default function AccountantDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [showConsultation, setShowConsultation] = React.useState(false);

  const accountant = [...accountants, ...standardAccountants].find(a => a.id === id);

  if (!accountant) {
    return <div>Accountant not found</div>;
  }

  const mockReviews = [
    {
      id: '1',
      accountantId: accountant.id,
      userId: 'user1',
      rating: 5,
      comment: 'Eccellente professionista, molto preparato e disponibile.',
      date: '2024-03-15',
      metrics: {
        professionalism: 5,
        responsiveness: 5,
        expertise: 5,
      },
    },
    // Add more mock reviews as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-start gap-8">
            <img
              src={accountant.photoUrl}
              alt={accountant.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">{accountant.name}</h1>
                {accountant.isPremium && (
                  <span className="px-4 py-1.5 text-sm font-medium text-amber-700 bg-amber-50 rounded-full">
                    Premium
                  </span>
                )}
              </div>
              <p className="mt-2 text-lg text-gray-600">{accountant.bio}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {accountant.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{accountant.address.street}, {accountant.address.city}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{accountant.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{accountant.contact.email}</span>
                </div>
                {accountant.contact.website && (
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-3 text-gray-400" />
                    <a href={accountant.contact.website} className="text-blue-600 hover:underline">
                      Website
                    </a>
                  </div>
                )}
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gray-400" />
                  <span>
                    {Object.entries(accountant.officeHours).map(([days, hours]) => (
                      `${days}: ${hours}`
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Services</h2>
              <ul className="space-y-2">
                {accountant.services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => setShowConsultation(true)}
              className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Richiedi Consulenza
            </button>
          </div>

          <div className="mt-12">
            <ReviewSection reviews={mockReviews} />
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={showConsultation}
        onClose={() => setShowConsultation(false)}
        accountant={accountant}
      />
    </div>
  );
}