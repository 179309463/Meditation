import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
export function OnboardingWelcome() {
  const navigate = useNavigate();
  return <motion.main initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-[#8B7FE8] flex flex-col">
      {/* Logo */}
      <header className="pt-8 px-6">
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-semibold text-white tracking-wider">
            Silent
          </span>
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
          <span className="text-lg font-semibold text-white tracking-wider">
            Moon
          </span>
        </div>
      </header>

      {/* Illustration */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2
    }} className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="relative w-full max-w-xs">
          <svg viewBox="0 0 300 250" className="w-full h-auto">
            {/* Meditation person */}
            <g transform="translate(100, 50)">
              {/* Body */}
              <ellipse cx="50" cy="120" rx="40" ry="30" fill="#A594F9" />
              {/* Head */}
              <circle cx="50" cy="60" r="30" fill="#FFD5C8" />
              {/* Hair */}
              <path d="M25 45 Q50 20 75 45 Q80 35 70 25 Q50 5 30 25 Q20 35 25 45" fill="#3F414E" />
              {/* Face */}
              <circle cx="40" cy="58" r="3" fill="#3F414E" />
              <circle cx="60" cy="58" r="3" fill="#3F414E" />
              <path d="M42 72 Q50 78 58 72" stroke="#3F414E" strokeWidth="2" fill="none" />
              {/* Arms */}
              <ellipse cx="15" cy="100" rx="15" ry="8" fill="#FFD5C8" />
              <ellipse cx="85" cy="100" rx="15" ry="8" fill="#FFD5C8" />
            </g>
            {/* Decorative elements */}
            <circle cx="50" cy="50" r="8" fill="white" opacity="0.3" />
            <circle cx="250" cy="80" r="6" fill="white" opacity="0.3" />
            <circle cx="40" cy="180" r="5" fill="white" opacity="0.3" />
            <circle cx="260" cy="200" r="7" fill="white" opacity="0.3" />
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="px-6 pb-8">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Hi Afsar, Welcome
        </h1>
        <h2 className="text-2xl font-bold text-white text-center mb-3">
          to Silent Moon
        </h2>
        <p className="text-white/80 text-center text-sm leading-relaxed mb-8">
          Explore the app, Find some peace of mind to prepare for meditation.
        </p>

        <Button variant="secondary" onClick={() => navigate('/onboarding/purpose')} className="bg-white text-[#3F414E]">
          GET STARTED
        </Button>
      </motion.div>
    </motion.main>;
}