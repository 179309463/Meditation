import React from 'react';
import { motion } from 'framer-motion';
type Day = 'SU' | 'M' | 'T' | 'W' | 'TH' | 'F' | 'S';
type DaySelectorProps = {
  selectedDays: Day[];
  onDayToggle: (day: Day) => void;
};
const days: {
  key: Day;
  label: string;
}[] = [{
  key: 'SU',
  label: '日'
}, {
  key: 'M',
  label: '一'
}, {
  key: 'T',
  label: '二'
}, {
  key: 'W',
  label: '三'
}, {
  key: 'TH',
  label: '四'
}, {
  key: 'F',
  label: '五'
}, {
  key: 'S',
  label: '六'
}];
export function DaySelector({
  selectedDays,
  onDayToggle
}: DaySelectorProps) {
  return <div className="flex items-center justify-center gap-2">
      {days.map(day => {
      const isSelected = selectedDays.includes(day.key);
      return <motion.button key={day.key} onClick={() => onDayToggle(day.key)} whileTap={{
        scale: 0.9
      }} className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${isSelected ? 'bg-[#3F414E] text-white' : 'bg-[#F5F5F9] text-[#A1A4B2]'}`}>
            {day.label}
          </motion.button>;
    })}
    </div>;
}