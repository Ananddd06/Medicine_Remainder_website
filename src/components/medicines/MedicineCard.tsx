import React from 'react';
import { Clock, Pill, Edit2, Trash2 } from 'lucide-react';
import { Medicine } from '../../types/medicine';
import { MedicineStatus } from './MedicineStatus';
import { formatTime, formatDate } from '../../utils/date';

interface MedicineCardProps {
  medicine: Medicine;
  onEdit: (medicine: Medicine) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Medicine['status']) => void;
}

export const MedicineCard: React.FC<MedicineCardProps> = ({
  medicine,
  onEdit,
  onDelete,
  onStatusChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Pill className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{medicine.name}</h3>
            <p className="text-sm text-gray-500">{medicine.dosage}</p>
          </div>
        </div>
        <MedicineStatus status={medicine.status} />
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Clock size={16} className="mr-2" />
          <span className="text-sm">{formatTime(medicine.time)}</span>
        </div>
        <p className="text-sm text-gray-600">
          Started: {formatDate(medicine.startDate)}
        </p>
        {medicine.notes && (
          <p className="text-sm text-gray-500">{medicine.notes}</p>
        )}
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <div className="space-x-2">
          <button
            onClick={() => onStatusChange(medicine.id, 'taken')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              medicine.status === 'taken'
                ? 'bg-green-100 text-green-700'
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            Mark as Taken
          </button>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(medicine)}
            className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(medicine.id)}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};