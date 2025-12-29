import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { TimePickerWheel } from '../components/TimePickerWheel';
import { DaySelector } from '../components/DaySelector';
type Day = 'SU' | 'M' | 'T' | 'W' | 'TH' | 'F' | 'S';
export function OnboardingTime() {
  const navigate = useNavigate();
  const [selectedDays, setSelectedDays] = useState<Day[]>(['M', 'T', 'W', 'TH', 'F']);
  const handleDayToggle = (day: Day) => {
    setSelectedDays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };
  const handleSave = () => {
    navigate('/home');
  };
  const handleSkip = () => {
    navigate('/home');
  };
  return <motion.main initial={{
    opacity: 0,
    x: 20
  }} animate={{
    opacity: 1,
    x: 0
  }} exit={{
    opacity: 0,
    x: -20
  }} className="min-h-screen bg-white flex flex-col px-6 py-8">
      {/* Time Selection Section */}
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8">
        <h1 className="text-2xl font-bold text-[#3F414E] mb-2">
          What time would you
          <br />
          like to meditate?
        </h1>
        <p className="text-[#A1A4B2] text-sm leading-relaxed">
          Any time you can choose but We recommend first thing in the morning.
        </p>
      </motion.div>

      <motion.div initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 0.2
    }} className="mb-10">
        <TimePickerWheel />
      </motion.div>

      {/* Day Selection Section */}
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3
    }} className="mb-8">
        <h2 className="text-2xl font-bold text-[#3F414E] mb-2">
          Which day would you
          <br />
          like to meditate?
        </h2>
        <p className="text-[#A1A4B2] text-sm leading-relaxed mb-6">
          Everyday is best, but we recommend picking at least five.
        </p>

        <div className="flex items-center justify-center">
          <DaySelector selectedDays={selectedDays} onDayToggle={handleDayToggle} />
        </div>
      </motion.div>

      <div className="flex-1" />

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="space-y-4">
        <Button variant="primary" onClick={handleSave}>
          SAVE
        </Button>
        <button onClick={handleSkip} className="w-full py-3 text-sm text-[#3F414E] font-medium">
          NO THANKS
        </button>
      </motion.div>
    </motion.main>;
}