import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const professionalInfoSchema = z.object({
  services: z.array(z.string()).min(1, 'Seleziona almeno un servizio'),
  specializations: z.array(z.string()).min(1, 'Seleziona almeno una specializzazione'),
  industries: z.array(z.string()).min(1, 'Seleziona almeno un settore'),
  certifications: z.array(z.string()).min(1, 'Inserisci almeno una certificazione'),
});

type ProfessionalInfoData = z.infer<typeof professionalInfoSchema>;

interface ProfessionalInfoStepProps {
  onBack: () => void;
  onNext: (data: ProfessionalInfoData) => void;
}

export default function ProfessionalInfoStep({ onBack, onNext }: ProfessionalInfoStepProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfessionalInfoData>({
    resolver: zodResolver(professionalInfoSchema),
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Servizi Offerti
        </label>
        <input
          type="text"
          {...register('services')}
          placeholder="Separa i servizi con una virgola"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.services && (
          <p className="mt-1 text-sm text-red-600">{errors.services.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Specializzazioni
        </label>
        <input
          type="text"
          {...register('specializations')}
          placeholder="Separa le specializzazioni con una virgola"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.specializations && (
          <p className="mt-1 text-sm text-red-600">{errors.specializations.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Settori di Competenza
        </label>
        <input
          type="text"
          {...register('industries')}
          placeholder="Separa i settori con una virgola"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.industries && (
          <p className="mt-1 text-sm text-red-600">{errors.industries.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Certificazioni
        </label>
        <input
          type="text"
          {...register('certifications')}
          placeholder="Separa le certificazioni con una virgola"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.certifications && (
          <p className="mt-1 text-sm text-red-600">{errors.certifications.message}</p>
        )}
      </div>

      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
        >
          Indietro
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continua
        </button>
      </div>
    </form>
  );
}