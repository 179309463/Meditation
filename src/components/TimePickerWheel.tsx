import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
type TimePickerWheelProps = {
  onTimeChange?: (hour: number, minute: number, period: 'AM' | 'PM') => void;
};
export function TimePickerWheel({
  onTimeChange
}: TimePickerWheelProps) {
  const [selectedHour, setSelectedHour] = useState(11);
  const [selectedMinute, setSelectedMinute] = useState(30);
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>('AM');
  // Create refs for scroll containers to enable programmatic scrolling if needed
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const hours = Array.from({
    length: 12
  }, (_, i) => i + 1);
  const minutes = Array.from({
    length: 60
  }, (_, i) => i);
  const handleHourChange = (hour: number) => {
    setSelectedHour(hour);
    onTimeChange?.(hour, selectedMinute, selectedPeriod);
  };
  const handleMinuteChange = (minute: number) => {
    setSelectedMinute(minute);
    onTimeChange?.(selectedHour, minute, selectedPeriod);
  };
  const handlePeriodChange = (period: 'AM' | 'PM') => {
    setSelectedPeriod(period);
    onTimeChange?.(selectedHour, selectedMinute, period);
  };
  return <div className="relative w-full max-w-xs mx-auto bg-[#F5F5F9] rounded-2xl p-6">
      <div className="flex items-center justify-center gap-4 h-48 relative">
        {/* Selection Highlight Bar */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-12 bg-white rounded-xl shadow-sm pointer-events-none z-0" />

        {/* Hours Wheel */}
        <div className="relative h-full w-20 overflow-hidden z-10">
          <div className="h-full overflow-y-auto scrollbar-hide snap-y snap-mandatory py-[calc(50%-1.5rem)]" ref={hourRef}>
            {hours.map(hour => <motion.button key={hour} onClick={() => handleHourChange(hour)} className={`w-full h-12 flex items-center justify-center snap-center text-2xl transition-all duration-200 ${selectedHour === hour ? 'font-bold text-[#3F414E] scale-110' : 'font-medium text-[#A1A4B2] scale-90 opacity-50'}`}>
                {hour.toString().padStart(2, '0')}
              </motion.button>)}
          </div>
        </div>

        <span className="text-2xl font-bold text-[#3F414E] z-10 pb-1">:</span>

        {/* Minutes Wheel */}
        <div className="relative h-full w-20 overflow-hidden z-10">
          <div className="h-full overflow-y-auto scrollbar-hide snap-y snap-mandatory py-[calc(50%-1.5rem)]" ref={minuteRef}>
            {minutes.map(minute => <motion.button key={minute} onClick={() => handleMinuteChange(minute)} className={`w-full h-12 flex items-center justify-center snap-center text-2xl transition-all duration-200 ${selectedMinute === minute ? 'font-bold text-[#3F414E] scale-110' : 'font-medium text-[#A1A4B2] scale-90 opacity-50'}`}>
                {minute.toString().padStart(2, '0')}
              </motion.button>)}
          </div>
        </div>

        {/* AM/PM Selector */}
        <div className="relative h-full w-16 overflow-hidden z-10 flex flex-col justify-center">
          <div className="flex flex-col gap-2">
            <motion.button onClick={() => handlePeriodChange('AM')} className={`h-12 flex items-center justify-center text-lg transition-all duration-200 ${selectedPeriod === 'AM' ? 'font-bold text-[#3F414E]' : 'font-medium text-[#A1A4B2] opacity-50'}`}>
              AM
            </motion.button>
            <motion.button onClick={() => handlePeriodChange('PM')} className={`h-12 flex items-center justify-center text-lg transition-all duration-200 ${selectedPeriod === 'PM' ? 'font-bold text-[#3F414E]' : 'font-medium text-[#A1A4B2] opacity-50'}`}>
              PM
            </motion.button>
          </div>
          {/* Active Indicator for AM/PM */}
          <motion.div className="absolute left-0 w-1 h-12 bg-[#3F414E] rounded-full" initial={false} animate={{
          top: selectedPeriod === 'AM' ? 'calc(50% - 3rem)' : 'calc(50% + 0.5rem)'
        }} transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }} style={{
          display: 'none'
        }} // Hidden for now as per design reference which uses text color
        />
        </div>
      </div>
    </div>;
}