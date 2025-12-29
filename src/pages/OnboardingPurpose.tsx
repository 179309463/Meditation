import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
type Purpose = {
  id: string;
  title: string;
  bgColor: string;
  image: string;
};
const purposes: Purpose[] = [{
  id: 'stress',
  title: 'Reduce Stress',
  bgColor: '#8B7FE8',
  image: '🧘‍♀️'
}, {
  id: 'performance',
  title: 'Improve Performance',
  bgColor: '#FFB4A9',
  image: '🎯'
}, {
  id: 'happiness',
  title: 'Increase Happiness',
  bgColor: '#FFE5B4',
  image: '😊'
}, {
  id: 'anxiety',
  title: 'Reduce Anxiety',
  bgColor: '#B8E0D2',
  image: '🌿'
}, {
  id: 'growth',
  title: 'Personal Growth',
  bgColor: '#E8D5F2',
  image: '🌱'
}, {
  id: 'sleep',
  title: 'Better Sleep',
  bgColor: '#A594F9',
  image: '😴'
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
export function OnboardingPurpose() {
  const navigate = useNavigate();
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);
  const handleContinue = () => {
    if (selectedPurpose) {
      navigate('/onboarding/time');
    }
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
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8">
        <h1 className="text-2xl font-bold text-[#3F414E] mb-2">
          What Brings you
          <br />
          to Silent Moon?
        </h1>
        <p className="text-[#A1A4B2] text-sm">choose a topic to focus on:</p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-2 gap-4 flex-1">
        {purposes.map(purpose => <motion.button key={purpose.id} variants={itemVariants} whileHover={{
        y: -4,
        scale: 1.02
      }} whileTap={{
        scale: 0.95
      }} onClick={() => setSelectedPurpose(purpose.id)} className={`relative aspect-[4/5] rounded-2xl overflow-hidden transition-all ${selectedPurpose === purpose.id ? 'ring-4 ring-[#8B7FE8] ring-offset-2' : ''}`} style={{
        backgroundColor: purpose.bgColor
      }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <span className="text-4xl mb-2">{purpose.image}</span>
              <h3 className="text-sm font-bold text-white text-center leading-tight">
                {purpose.title}
              </h3>
            </div>
          </motion.button>)}
      </motion.div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.6
    }} className="mt-8">
        <Button variant="primary" onClick={handleContinue}>
          GET STARTED
        </Button>
      </motion.div>
    </motion.main>;
}