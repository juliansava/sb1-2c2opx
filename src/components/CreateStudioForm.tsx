import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Studio } from '../types';

const studioSchema = z.object({
  name: z.string().min(1, 'Nome richiesto'),
  description: z.string().optional(),
  address: z.object({
    street: z.string().min(1, 'Indirizzo richiesto'),
    city: z.string().min(1, 'Città richiesta'),
    state: z.string().min(1, 'Provincia richiesta'),
    zipCode: z.string().min(5, 'CAP non valido'),
  }),
  contact: z.object({
    phone: z.string().min(1, 'Telefono richiesto'),
    email: z.string().email('Email non valida'),
    website: z.string().optional(),
  }),
});

type StudioFormData = z.infer<typeof studioSchema>;

interface CreateStudioFormProps {
  onSubmit: (data: StudioFormData) => void;
  onCancel: () => void;
}

export default function CreateStudioForm({ onSubmit, onCancel }: CreateStudioFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<StudioFormData>({
    resolver: zodResolver(studioSchema),
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Crea Nuovo Studio
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome Studio
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
              Descrizione
            </label>
            <textarea
              {...register('description')}
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Indirizzo
              </label>
              <input
                type="text"
                {...register('address.street')}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.address?.street && (
                <p className="mt-1 text-sm text-red-600">{errors.address.street.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Città
              </label>
              <input
                type="text"
                {...register('address.city')}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.address?.city && (
                <p className="mt-1 text-sm text-red-600">{errors.address.city.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Provincia
              </label>
              <input
                type="text"
                {...register('address.state')}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.address?.state && (
                <p className="mt-1 text-sm text-red-600">{errors.address.state.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CAP
              </label>
              <input
                type="text"
                {...register('address.zipCode')}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.address?.zipCode && (
                <p className="mt-1 text-sm text-red-600">{errors.address.zipCode.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefono
              </label>
              <input
                type="tel"
                {...register('contact.phone')}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.contact?.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.contact.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register('contact.email')}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.contact?.email && (
                <p className="mt-1 text-sm text-red-600">{errors.contact.email.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sito Web (opzionale)
              </label>
              <input
                type="url"
                {...register('contact.website')}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Annulla
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Crea Studio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}