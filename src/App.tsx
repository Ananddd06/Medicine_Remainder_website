import React, { Suspense } from 'react';
import { ClerkProvider, RedirectToSignIn, useAuth } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoadingSpinner } from './components/auth/LoadingSpinner';
import Layout from './components/Layout';
import { SignIn } from './pages/SignIn';
import { Dashboard } from './components/Dashboard';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error('Missing Clerk Publishable Key');
}

function App() {
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      afterSignInUrl="/"
      appearance={{
        layout: {
          socialButtonsPlacement: 'top',
          socialButtonsVariant: 'blockButton',
        },
        elements: {
          rootBox: 'w-full',
          card: 'bg-white rounded-xl shadow-lg max-w-md mx-auto',
          socialButtonsBlockButton: `
            w-full flex justify-center items-center px-6 py-3
            border border-gray-300 rounded-lg text-gray-700 
            bg-white hover:bg-gray-50 transition-all duration-200 
            transform hover:scale-[1.02] hover:shadow-md
            mb-3 space-x-3 font-medium
          `,
          socialButtonsProviderIcon: 'w-6 h-6',
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg',
          formFieldInput: 'w-full border border-gray-300 rounded-lg p-2',
          formFieldLabel: 'text-sm text-gray-700 mb-2',
          footerActionLink: 'text-blue-600 hover:text-blue-700',
        },
      }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/sign-in" element={<SignIn />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Layout />
                </RequireAuth>
              }
            >
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ClerkProvider>
  );
}

/**
 * RequireAuth: Wrapper to redirect unauthenticated users to /sign-in
 */
function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth(); // Correctly import useAuth from @clerk/clerk-react

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <>{children}</>;
}

export default App;
