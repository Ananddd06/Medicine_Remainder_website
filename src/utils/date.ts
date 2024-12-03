import { format, isToday, parseISO } from 'date-fns';

export const formatTime = (time: string): string => {
  return format(parseISO(`2000-01-01T${time}`), 'h:mm a');
};

export const formatDate = (date: string): string => {
  return format(parseISO(date), 'MMM d, yyyy');
};

export const getMedicineStatus = (medicine: { time: string; lastTaken?: string }): 'pending' | 'taken' | 'missed' => {
  if (!isToday(parseISO(medicine.lastTaken || ''))) {
    const now = new Date();
    const [hours, minutes] = medicine.time.split(':');
    const medicineTime = new Date();
    medicineTime.setHours(parseInt(hours), parseInt(minutes));

    return now > medicineTime ? 'missed' : 'pending';
  }
  return 'taken';
};