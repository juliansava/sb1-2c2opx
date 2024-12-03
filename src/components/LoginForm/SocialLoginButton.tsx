import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLoginButtonProps {
  icon: LucideIcon;
  provider: string;
  onClick: () => void;
}

export default function SocialLoginButton({ icon: Icon, provider, onClick }: SocialLoginButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
    >
      <Icon className="w-5 h-5 mr-2" />
      {provider}
    </button>
  );
}