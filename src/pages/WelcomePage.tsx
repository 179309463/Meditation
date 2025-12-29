import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
export function WelcomePage() {
  const navigate = useNavigate();
  return <motion.main initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-[#F6F1FB] flex flex-col">
      {/* Logo */}
      <header className="pt-8 px-6">
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-semibold text-[#3F414E] tracking-wider">
            Silent
          </span>
          <svg className="w-6 h-6 text-[#8B7FE8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
          <span className="text-lg font-semibold text-[#3F414E] tracking-wider">
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
          {/* Sun rays background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-b from-[#FFE5B4] to-transparent rounded-full opacity-50" />
          </div>
          {/* Person meditating illustration */}
          <svg viewBox="0 0 300 250" className="w-full h-auto relative z-10">
            {/* Sun rays */}
            <g fill="#FFD93D" opacity="0.8">
              {[...Array(12)].map((_, i) => <motion.rect key={i} x="145" y="20" width="10" height="30" rx="5" transform={`rotate(${i * 30} 150 100)`} initial={{
              opacity: 0
            }} animate={{
              opacity: [0.5, 1, 0.5]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1
            }} />)}
            </g>
            {/* Chair */}
            <path d="M80 180 L100 180 L100 240 L80 240 Z" fill="#8B7FE8" />
            <path d="M200 180 L220 180 L220 240 L200 240 Z" fill="#8B7FE8" />
            <path d="M70 140 L230 140 L230 180 L70 180 Z" fill="#A594F9" rx="10" />
            <path d="M60 140 L80 140 L80 200 L60 200 Z" fill="#8B7FE8" rx="5" />
            {/* Person */}
            <circle cx="150" cy="80" r="25" fill="#FFD5C8" />
            <path d="M125 100 Q150 130 175 100 L180 140 L120 140 Z" fill="#FFB4A9" />
            <ellipse cx="150" cy="130" rx="35" ry="25" fill="#8B7FE8" />
            {/* Hair */}
            <path d="M130 65 Q150 40 170 65 Q175 55 165 50 Q150 35 135 50 Q125 55 130 65" fill="#3F414E" />
            {/* Face */}
            <circle cx="142" cy="78" r="2" fill="#3F414E" />
            <circle cx="158" cy="78" r="2" fill="#3F414E" />
            <path d="M145 88 Q150 92 155 88" stroke="#3F414E" strokeWidth="2" fill="none" />
            {/* Plants */}
            <g fill="#7EC8A3">
              <ellipse cx="50" cy="220" rx="20" ry="30" />
              <ellipse cx="40" cy="210" rx="15" ry="25" />
              <ellipse cx="60" cy="215" rx="12" ry="20" />
            </g>
            <rect x="40" y="235" width="20" height="15" fill="#D4A574" rx="3" />
            <g fill="#7EC8A3">
              <ellipse cx="250" cy="225" rx="15" ry="20" />
              <ellipse cx="260" cy="220" rx="12" ry="18" />
            </g>
            <rect x="245" y="235" width="15" height="12" fill="#D4A574" rx="2" />
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
        <h1 className="text-3xl font-bold text-[#3F414E] text-center mb-3">
          We are what we do
        </h1>
        <p className="text-[#A1A4B2] text-center text-sm leading-relaxed mb-8">
          Thousand of people are using silent moon for small meditation
        </p>

        <div className="space-y-4">
          <Button variant="primary" onClick={() => navigate('/signup')}>
            SIGN UP
          </Button>
          <p className="text-center text-sm text-[#A1A4B2]">
            ALREADY HAVE AN ACCOUNT?{' '}
            <button onClick={() => navigate('/login')} className="text-[#8B7FE8] font-semibold">
              LOG IN
            </button>
          </p>
        </div>
      </motion.div>
    </motion.main>;
}