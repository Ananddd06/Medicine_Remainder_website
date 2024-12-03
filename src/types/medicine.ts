export type Frequency = 'daily' | 'twice_daily' | 'weekly' | 'monthly';

export interface Medicine {
  id: string;
  name: string;
  dosage: string;
  frequency: Frequency;
  time: string;
  startDate: string;
  endDate?: string;
  notes?: string;
  category?: string;
  status: 'pending' | 'taken' | 'missed';
  lastTaken?: string;
}

export interface MedicineFormData {
  name: string;
  dosage: string;
  frequency: Frequency;
  time: string;
  startDate: string;
  notes?: string;
}