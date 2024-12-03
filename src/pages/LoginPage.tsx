import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award } from 'lucide-react';
import LoginForm from '../components/LoginForm/LoginForm';
import SocialLogin from '../components/LoginForm/SocialLogin';
import { useAuth } from '../contexts/AuthContext';
import type { LoginCredentials } from '../types/auth';

export default function LoginPage() {
  const navigate = useNavigate();
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      await signInWithEmail(credentials.email, credentials.password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Award className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Accedi al tuo account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Non hai un account?{' '}
          <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Registrati
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          
          <div className="mt-6">
            <SocialLogin onGoogleLogin={handleGoogleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}