import React, { useState } from 'react';
import StudioCombobox from '../StudioCombobox';
import CreateStudioForm from '../CreateStudioForm';
import type { Studio } from '../../types';

interface StudioSelectionStepProps {
  onBack: () => void;
  onComplete: (studio: Studio) => void;
}

export default function StudioSelectionStep({ onBack, onComplete }: StudioSelectionStepProps) {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleStudioSelect = (studio: Studio | null) => {
    if (studio) {
      onComplete(studio);
    }
  };

  const handleCreateStudio = (data: Omit<Studio, 'id'>) => {
    // In a real app, this would make an API call to create the studio
    const newStudio: Studio = {
      ...data,
      id: `studio-${Date.now()}`, // Temporary ID generation
    };
    onComplete(newStudio);
  };

  return (
    <div className="space-y-6">
      {!showCreateForm ? (
        <>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Seleziona o Crea uno Studio
            </h3>
            <p className="text-gray-600">
              Cerca uno studio esistente o crea un nuovo studio professionale
            </p>
          </div>

          <StudioCombobox
            onSelect={handleStudioSelect}
            onCreateNew={() => setShowCreateForm(true)}
          />

          <div className="flex justify-between gap-4 mt-8">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Indietro
            </button>
          </div>
        </>
      ) : (
        <CreateStudioForm
          onSubmit={handleCreateStudio}
          onCancel={() => setShowCreateForm(false)}
        />
      )}
    </div>
  );
}