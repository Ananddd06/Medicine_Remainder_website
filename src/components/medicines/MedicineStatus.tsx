import React from 'react';
import { Check, Clock, XCircle } from 'lucide-react';

interface MedicineStatusProps {
  status: 'pending' | 'taken' | 'missed';
}

export const MedicineStatus: React.FC<MedicineStatusProps> = ({ status }) => {
  const statusConfig = {
    pending: {
      icon: Clock,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      label: 'Pending'
    },
    taken: {
      icon: Check,
      color: 'text-green-500',
      bg: 'bg-green-50',
      label: 'Taken'
    },
    missed: {
      icon: XCircle,
      color: 'text-red-500',
      bg: 'bg-red-50',
      label: 'Missed'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`flex items-center space-x-2 ${config.color}`}>
      <div className={`p-1 rounded-full ${config.bg}`}>
        <Icon size={16} />
      </div>
      <span className="text-sm font-medium">{config.label}</span>
    </div>
  );
};