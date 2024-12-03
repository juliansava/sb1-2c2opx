import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Award } from 'lucide-react';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SpecializationPage from './pages/SpecializationPage';
import AccountantDetailPage from './pages/AccountantDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import RegisterAccountantPage from './pages/RegisterAccountantPage';
import StudioPage from './pages/StudioPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                <a href="/" className="flex items-center">
                  <Award className="w-8 h-8 text-blue-600" />
                  <h1 className="ml-2 text-2xl font-bold text-gray-900">Cerca Commercialista</h1>
                </a>
                <div className="flex items-center space-x-8">
                  <Navigation />
                  <div className="flex items-center space-x-4">
                    <a
                      href="/login"
                      className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      Accedi
                    </a>
                    <a
                      href="/register"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Registra Studio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/specialization/:specialization" element={<SpecializationPage />} />
            <Route path="/accountant/:id" element={<AccountantDetailPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/register" element={<RegisterAccountantPage />} />
            <Route path="/studio/:studioId" element={<StudioPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>

          <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">Cerca Commercialista</h4>
                  <p className="text-sm">Connettendo imprese e professionisti dal 2024.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Per le Imprese</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Trova un Commercialista</a></li>
                    <li><a href="#" className="hover:text-white">Recensioni</a></li>
                    <li><a href="#" className="hover:text-white">Risorse</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Per i Professionisti</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/register" className="hover:text-white">Registra Studio</a></li>
                    <li><a href="#" className="hover:text-white">Funzionalità Premium</a></li>
                    <li><a href="#" className="hover:text-white">Storie di Successo</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Contatti</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Supporto</a></li>
                    <li><a href="#" className="hover:text-white">Termini di Servizio</a></li>
                    <li><a href="#" className="hover:text-white">Privacy</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
                © 2024 Cerca Commercialista. Tutti i diritti riservati.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;