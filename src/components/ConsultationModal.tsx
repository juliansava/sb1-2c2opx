import React from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import type { Accountant } from '../types';
import "react-datepicker/dist/react-datepicker.css";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  accountant: Accountant;
}

interface ConsultationForm {
  name: string;
  email: string;
  phone: string;
  date: Date;
  message: string;
}

export default function ConsultationModal({ isOpen, onClose, accountant }: ConsultationModalProps) {
  const { register, handleSubmit, setValue, watch } = useForm<ConsultationForm>();
  const selectedDate = watch('date');

  const onSubmit = (data: ConsultationForm) => {
    console.log('Consultation request:', data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Richiedi Consulenza con {accountant.name}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                {...register('name', { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register('email', { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefono
              </label>
              <input
                type="tel"
                {...register('phone', { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Preferita
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setValue('date', date as Date)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Seleziona una data"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Messaggio
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Descrivi brevemente le tue esigenze..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Invia Richiesta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}