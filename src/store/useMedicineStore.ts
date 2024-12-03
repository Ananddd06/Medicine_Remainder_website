import { create } from 'zustand';
import { Medicine } from '../types/medicine';

interface MedicineStore {
  medicines: Medicine[];
  addMedicine: (medicine: Medicine) => void;
  removeMedicine: (id: string) => void;
  updateMedicine: (id: string, medicine: Partial<Medicine>) => void;
}

export const useMedicineStore = create<MedicineStore>((set) => ({
  medicines: [],
  addMedicine: (medicine) =>
    set((state) => ({ medicines: [...state.medicines, medicine] })),
  removeMedicine: (id) =>
    set((state) => ({
      medicines: state.medicines.filter((m) => m.id !== id),
    })),
  updateMedicine: (id, updatedMedicine) =>
    set((state) => ({
      medicines: state.medicines.map((m) =>
        m.id === id ? { ...m, ...updatedMedicine } : m
      ),
    })),
}));