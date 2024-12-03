import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import { Pill } from 'lucide-react';

export const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <Pill className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          MediRemind
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-md mx-auto">
          Your personal medication reminder assistant. Stay on track with your health journey.
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
        <ClerkSignIn
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: {
                boxShadow: 'none',
                border: 'none',
                backgroundColor: 'transparent',
              },
              socialButtonsBlockButton: `
                w-full flex justify-center items-center px-6 py-3 
                border border-gray-300 rounded-xl text-gray-700 
                bg-white hover:bg-gray-50 transition-all duration-200 
                transform hover:scale-[1.02] hover:shadow-md
                mb-3 space-x-3 font-medium
              `,
              socialButtonsProviderIcon: 'w-6 h-6',
              dividerBox: 'true',
              formButtonPrimary: 'true',
              formFieldInput: 'true',
              formFieldLabel: 'true',
              footer: 'hidden',
              headerTitle: 'true',
              headerSubtitle: 'true',
            },
            layout: {
              socialButtonsPlacement: 'top',
              socialButtonsVariant: 'blockButton',
              privacyPageUrl: 'https://clerk.com/privacy',
              termsPageUrl: 'https://clerk.com/terms',
            },
          }}
          path="/sign-in"
          routing="path"
          afterSignInUrl="/dashboard"
          signUpUrl="/sign-in"
        />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By signing in, you agree to our{' '}
            <a href="https://clerk.com/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="https://clerk.com/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600">Secure</p>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Free</h3>
            <p className="text-gray-600">Forever</p>
          </div>
        </div>
      </div>

      {/* Create Account Section */}
      <div className="mt-8 flex justify-center items-center space-x-4">
        <p className="text-sm md:text-base text-gray-600">
          Don't have an account?
        </p>
        <a
          href="/sign-up"
          className="text-sm md:text-base text-blue-600 hover:text-blue-700 font-medium"
        >
          Create an account
        </a>
      </div>
    </div>
  );
};
