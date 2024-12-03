import React from 'react';
import { Pill, Calendar, Bell, Settings, Home } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

export const Sidebar = () => {
  const { user } = useUser();

  return (
    <div className="w-64 bg-white h-full border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Pill className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">MediRemind</span>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        <NavItem icon={<Home />} label="Overview" active />
        <NavItem icon={<Calendar />} label="Schedule" />
        <NavItem icon={<Bell />} label="Reminders" />
        <NavItem icon={<Settings />} label="Settings" />
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src={user?.imageUrl || user?.profileImageUrl}
            alt={user?.fullName || 'Profile'}
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">{user?.fullName}</p>
            <p className="text-xs text-gray-500">{user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};