import React from 'react';
import { Clock, MoreVertical } from 'lucide-react';

export const MedicineList = () => {
  const medicines = [
    {
      id: 1,
      name: 'Aspirin',
      dosage: '100mg',
      time: '08:00 AM',
      type: 'Tablet',
      status: 'Taken',
    },
    {
      id: 2,
      name: 'Vitamin D3',
      dosage: '1000 IU',
      time: '09:00 AM',
      type: 'Capsule',
      status: 'Upcoming',
    },
    {
      id: 3,
      name: 'Omega-3',
      dosage: '1000mg',
      time: '01:00 PM',
      type: 'Softgel',
      status: 'Missed',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {medicines.map((medicine) => (
          <div
            key={medicine.id}
            className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  medicine.status === 'Taken'
                    ? 'bg-green-100'
                    : medicine.status === 'Upcoming'
                    ? 'bg-blue-100'
                    : 'bg-red-100'
                }`}
              >
                <Clock
                  className={`h-5 w-5 ${
                    medicine.status === 'Taken'
                      ? 'text-green-600'
                      : medicine.status === 'Upcoming'
                      ? 'text-blue-600'
                      : 'text-red-600'
                  }`}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {medicine.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {medicine.dosage} • {medicine.type}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  medicine.status === 'Taken'
                    ? 'bg-green-100 text-green-800'
                    : medicine.status === 'Upcoming'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {medicine.status}
              </span>
              <span className="text-sm text-gray-500">{medicine.time}</span>
              <button className="text-gray-400 hover:text-gray-500">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};