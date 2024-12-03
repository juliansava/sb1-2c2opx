import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SocialLogin from '../LoginForm/SocialLogin';

const personalInfoSchema = z.object({
  email: z.string().email('Email non valida'),
  password: z.string().min(6, 'La password deve essere di almeno 6 caratteri'),
  confirmPassword: z.string(),
  name: z.string().min(1, 'Nome richiesto'),
  bio: z.string().min(50, 'La bio deve essere di almeno 50 caratteri'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Le password non coincidono",
  path: ["confirmPassword"],
});

type PersonalInfoData = z.infer<typeof personalInfoSchema>;

interface PersonalInfoStepProps {
  onNext: (data: PersonalInfoData) => void;
  onGoogleSignup: () => void;
  isLoading?: boolean;
}

export default function PersonalInfoStep({ onNext, onGoogleSignup, isLoading = false }: PersonalInfoStepProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
  });

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onNext)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            {...register('password')}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Conferma Password
          </label>
          <input
            type="password"
            {...register('confirmPassword')}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome e Cognome
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bio Professionale
          </label>
          <textarea
            {...register('bio')}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Descrivi la tua esperienza e specializzazioni..."
          />
          {errors.bio && (
            <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Registrazione in corso...' : 'Continua'}
        </button>
      </form>

      <div className="mt-6">
        <SocialLogin onGoogleLogin={onGoogleSignup} />
      </div>
    </div>
  );
}