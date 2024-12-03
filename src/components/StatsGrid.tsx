import React from 'react';
import { Pill, Clock, Calendar, AlertCircle } from 'lucide-react';

export const StatsGrid = () => {
  const stats = [
    {
      label: 'Active Medicines',
      value: '12',
      icon: <Pill className="h-6 w-6 text-blue-600" />,
      change: '+2 this week',
    },
    {
      label: 'Today\'s Doses',
      value: '4',
      icon: <Clock className="h-6 w-6 text-green-600" />,
      change: '2 remaining',
    },
    {
      label: 'Upcoming Refills',
      value: '3',
      icon: <Calendar className="h-6 w-6 text-purple-600" />,
      change: 'Next in 5 days',
    },
    {
      label: 'Missed Doses',
      value: '1',
      icon: <AlertCircle className="h-6 w-6 text-red-600" />,
      change: 'Last 7 days',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div className="bg-gray-50 p-2 rounded-lg">{stat.icon}</div>
            <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
          </div>
          <h3 className="mt-4 text-sm font-medium text-gray-700">
            {stat.label}
          </h3>
          <p className="mt-1 text-xs text-gray-500">{stat.change}</p>
        </div>
      ))}
    </div>
  );
};