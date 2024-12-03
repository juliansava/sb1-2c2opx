import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock } from 'lucide-react';
import FormInput from './FormInput';
import type { LoginCredentials } from '../../types/auth';

const loginSchema = z.object({
  email: z.string().email('Email non valida'),
  password: z.string().min(6, 'La password deve essere di almeno 6 caratteri'),
});

interface LoginFormProps {
  onSubmit: (data: LoginCredentials) => void;
  isLoading?: boolean;
}

export default function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Email"
        type="email"
        icon={<Mail className="w-5 h-5 text-gray-400" />}
        error={errors.email?.message}
        {...register('email')}
      />

      <FormInput
        label="Password"
        type="password"
        icon={<Lock className="w-5 h-5 text-gray-400" />}
        error={errors.password?.message}
        {...register('password')}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
            Ricordami
          </label>
        </div>

        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
          Password dimenticata?
        </a>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Accesso in corso...' : 'Accedi'}
      </button>
    </form>
  );
}