import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { MedicineCard } from '../components/MedicineCard';
import { AddMedicineForm } from '../components/AddMedicineForm';
import { useMedicineStore } from '../store/useMedicineStore';
import { Medicine } from '../types/medicine';

const Dashboard = () => {
  const { user } = useUser();
  const [showAddForm, setShowAddForm] = useState(false);
  const { medicines, addMedicine, removeMedicine, updateMedicine } =
    useMedicineStore();

  const handleAddMedicine = (medicineData: Omit<Medicine, 'id'>) => {
    addMedicine({
      ...medicineData,
      id: crypto.randomUUID(),
    });
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome, {user?.firstName}!
          </h2>
          <p className="text-gray-500">Manage your medicine reminders</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Medicine
        </button>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Add New Medicine</h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                ×
              </button>
            </div>
            <AddMedicineForm onSubmit={handleAddMedicine} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines.map((medicine) => (
          <MedicineCard
            key={medicine.id}
            medicine={medicine}
            onEdit={(medicine) => updateMedicine(medicine.id, medicine)}
            onDelete={removeMedicine}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;