import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PersonalInfoStep from '../components/RegistrationSteps/PersonalInfoStep';
import ProfessionalInfoStep from '../components/RegistrationSteps/ProfessionalInfoStep';
import StudioSelectionStep from '../components/RegistrationSteps/StudioSelectionStep';
import type { RegisterAccountantData } from '../types/auth';

type RegistrationStep = 'personal' | 'professional' | 'studio';

export default function RegisterAccountantPage() {
  const navigate = useNavigate();
  const { signUpWithEmail, signInWithGoogle } = useAuth();
  const [currentStep, setCurrentStep] = useState<RegistrationStep>('personal');
  const [formData, setFormData] = useState<Partial<RegisterAccountantData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handlePersonalInfoSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await signUpWithEmail(data.email, data.password);
      setFormData(prev => ({ ...prev, ...data }));
      setCurrentStep('professional');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle();
      setCurrentStep('professional');
    } catch (error) {
      console.error('Google signup error:', error);
    }
  };

  const handleProfessionalInfoSubmit = (data: any) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep('studio');
  };

  const handleStudioSubmit = (studio: any) => {
    const finalData: RegisterAccountantData = {
      ...formData,
      studio,
    } as RegisterAccountantData;

    // In a real app, this would make an API call to save the additional profile data
    console.log('Registration data:', finalData);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Registra il Tuo Profilo</h1>
          <p className="mt-2 text-gray-600">
            Raggiungi nuovi clienti e fai crescere la tua attività
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-12">
              <div className={`flex flex-col items-center ${currentStep === 'personal' ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep === 'personal' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                  1
                </div>
                <span className="mt-2 text-sm">Dati Personali</span>
              </div>
              <div className={`flex flex-col items-center ${currentStep === 'professional' ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep === 'professional' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                  2
                </div>
                <span className="mt-2 text-sm">Info Professionali</span>
              </div>
              <div className={`flex flex-col items-center ${currentStep === 'studio' ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep === 'studio' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                  3
                </div>
                <span className="mt-2 text-sm">Studio</span>
              </div>
            </div>
          </div>

          {currentStep === 'personal' && (
            <PersonalInfoStep 
              onNext={handlePersonalInfoSubmit} 
              onGoogleSignup={handleGoogleSignup}
              isLoading={isLoading}
            />
          )}
          {currentStep === 'professional' && (
            <ProfessionalInfoStep
              onBack={() => setCurrentStep('personal')}
              onNext={handleProfessionalInfoSubmit}
            />
          )}
          {currentStep === 'studio' && (
            <StudioSelectionStep
              onBack={() => setCurrentStep('professional')}
              onComplete={handleStudioSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}