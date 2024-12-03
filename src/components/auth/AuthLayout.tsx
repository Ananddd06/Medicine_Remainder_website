import React from 'react';
import { Pill } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-3 rounded-xl shadow-md">
              <Pill className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-xl w-full">
          {children}
        </div>
        
        <div className="text-center text-sm text-gray-500">
          Need help? Contact{' '}
          <a href="mailto:support@mediremind.com" className="text-blue-600 hover:text-blue-700">
            support@mediremind.com
          </a>
        </div>
      </div>
    </div>
  );
};
