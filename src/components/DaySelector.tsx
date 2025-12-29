import React from 'react';
import { motion } from 'framer-motion';
type Day = 'SU' | 'M' | 'T' | 'W' | 'TH' | 'F' | 'S';
type DaySelectorProps = {
  selectedDays: Day[];
  onDayToggle: (day: Day) => void;
};
const days: Day[] = ['SU', 'M', 'T', 'W', 'TH', 'F', 'S'];
export function DaySelector({
  selectedDays,
  onDayToggle
}: DaySelectorProps) {
  return <div className="flex items-center justify-center gap-2">
      {days.map(day => {
      const isSelected = selectedDays.includes(day);
      return <motion.button key={day} onClick={() => onDayToggle(day)} whileTap={{
        scale: 0.9
      }} className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${isSelected ? 'bg-[#3F414E] text-white' : 'bg-[#F5F5F9] text-[#A1A4B2]'}`}>
            {day}
          </motion.button>;
    })}
    </div>;
}