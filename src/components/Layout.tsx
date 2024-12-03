import React, { Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
import { Sidebar } from './Sidebar';
import { LoadingSpinner } from './auth/LoadingSpinner';

const Layout = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar and User button for signed-in users */}
      <SignedIn>
        <Sidebar />
        <div className="flex-1">
          <div className="p-4 flex justify-end">
            <UserButton
              afterSignOutUrl="/sign-in"
              appearance={{
                elements: {
                  userButtonBox: "hover:opacity-80 transition-opacity",
                  userButtonTrigger: "rounded-full",
                  userButtonPopoverCard: "shadow-lg rounded-lg border border-gray-200",
                  userButtonPopoverActions: "p-0",
                  userButtonPopoverActionButton: "px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left"
                }
              }}
            />
          </div>
          
          {/* Suspense to show loading spinner while main content loads */}
          <Suspense fallback={<LoadingSpinner />}>
            <main className="px-8 py-6">
              <Outlet />
            </main>
          </Suspense>
        </div>
      </SignedIn>

      {/* Redirect to /sign-in if user is not signed in */}
      <SignedOut>
        <Navigate to="/sign-in" replace />
      </SignedOut>
    </div>
  );
};

export default Layout;
