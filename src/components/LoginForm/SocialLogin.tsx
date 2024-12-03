import React from 'react';
import SocialLoginButton from './SocialLoginButton';
import GoogleIcon from './GoogleIcon';

interface SocialLoginProps {
  onGoogleLogin: () => void;
}

export default function SocialLogin({ onGoogleLogin }: SocialLoginProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">O continua con</span>
        </div>
      </div>

      <div className="flex justify-center">
        <SocialLoginButton
          icon={GoogleIcon}
          provider="Google"
          onClick={onGoogleLogin}
        />
      </div>
    </div>
  );
}