import React from 'react';
import { Clock, Pill } from 'lucide-react';
import { Medicine } from '../types/medicine';

interface MedicineCardProps {
  medicine: Medicine;
  onEdit: (medicine: Medicine) => void;
  onDelete: (id: string) => void;
}

export const MedicineCard: React.FC<MedicineCardProps> = ({
  medicine,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{medicine.name}</h3>
        <Pill className="text-blue-500" size={20} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Clock size={16} className="mr-2" />
          <span>{medicine.time}</span>
        </div>
        <p className="text-sm text-gray-500">Dosage: {medicine.dosage}</p>
        <p className="text-sm text-gray-500">Frequency: {medicine.frequency}</p>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => onEdit(medicine)}
          className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(medicine.id)}
          className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};