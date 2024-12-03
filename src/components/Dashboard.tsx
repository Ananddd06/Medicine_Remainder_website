import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { MedicineList } from './MedicineList';
import { AddMedicineModal } from './AddMedicineModal';
import { StatsGrid } from './StatsGrid';

export const Dashboard = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medicine Dashboard</h1>
          <p className="text-gray-500">Track and manage your medications</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Medicine
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search medicines..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <StatsGrid />
      <MedicineList />

      {showAddModal && (
        <AddMedicineModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
};