import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
export function SleepWelcomePage() {
  const navigate = useNavigate();
  return <motion.main initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-[#03174C] flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Clouds */}
        <motion.div animate={{
        x: [0, 20, 0]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute top-10 left-0 opacity-10">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="white">
            <path d="M20 80 Q40 40 70 60 Q90 20 130 50 Q160 40 180 80 Z" />
          </svg>
        </motion.div>
        <motion.div animate={{
        x: [0, -30, 0]
      }} transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute top-40 right-[-50px] opacity-5">
          <svg width="300" height="150" viewBox="0 0 300 150" fill="white">
            <path d="M30 120 Q60 60 100 90 Q130 30 190 70 Q240 60 270 120 Z" />
          </svg>
        </motion.div>

        {/* Stars */}
        {[...Array(15)].map((_, i) => <motion.div key={i} className="absolute text-white/40 text-xs" style={{
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 100}%`
      }} animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [0.8, 1.2, 0.8]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }}>
            ✦
          </motion.div>)}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">欢迎来到睡眠</h1>
          <p className="text-[#E6E7F2] text-sm leading-relaxed max-w-xs mx-auto">
            探索睡眠的新境界。它利用声音和视觉效果，为清爽的睡眠创造完美条件。
          </p>
        </motion.div>

        {/* Birds Illustration */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.4
      }} className="w-full max-w-sm aspect-square relative mb-12">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* Branch */}
            <path d="M20 280 C100 290, 200 270, 380 260" stroke="#586894" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M150 280 C180 300, 200 320, 250 310" stroke="#586894" strokeWidth="8" strokeLinecap="round" fill="none" />

            {/* Leaves */}
            <g fill="#7FD4C1">
              <path d="M50 285 Q30 270 40 250 Q60 260 50 285" />
              <path d="M80 290 Q70 310 90 320 Q100 300 80 290" />
              <path d="M180 300 Q160 320 180 340 Q200 320 180 300" />
              <path d="M280 270 Q300 250 320 270 Q300 290 280 270" />
            </g>

            {/* Left Bird (Green) */}
            <g transform="translate(130, 200)">
              {/* Body */}
              <path d="M10 80 Q-10 20 40 10 Q90 0 100 50 Q110 90 80 90 Z" fill="#98E2CE" />
              {/* Wing */}
              <path d="M20 60 Q30 50 50 60 Q60 70 50 80 Q30 90 20 60" fill="#7FD4C1" opacity="0.6" />
              {/* Eye */}
              <path d="M50 40 Q60 45 70 40" stroke="#3F414E" strokeWidth="2" fill="none" />
              {/* Beak */}
              <path d="M80 50 L95 55 L80 60 Z" fill="#F9A825" />
              {/* Hat */}
              <path d="M30 15 Q35 -20 60 10" stroke="#FF6B6B" strokeWidth="12" strokeLinecap="round" fill="none" />
              <circle cx="60" cy="10" r="6" fill="#F9A825" />
              <path d="M30 15 Q35 -20 60 10" stroke="white" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" fill="none" />
            </g>

            {/* Right Bird (Pink) */}
            <g transform="translate(220, 205)">
              {/* Body */}
              <path d="M90 80 Q110 20 60 10 Q10 0 0 50 Q-10 90 20 90 Z" fill="#FFC9D6" />
              {/* Wing */}
              <path d="M70 60 Q60 50 40 60 Q30 70 40 80 Q60 90 70 60" fill="#FF9EAE" opacity="0.6" />
              {/* Eye */}
              <path d="M30 40 Q40 45 50 40" stroke="#3F414E" strokeWidth="2" fill="none" />
              {/* Beak */}
              <path d="M10 50 L-5 55 L10 60 Z" fill="#F9A825" />
              {/* Hat */}
              <path d="M60 15 Q55 -20 30 10" stroke="#FF6B6B" strokeWidth="12" strokeLinecap="round" fill="none" />
              <circle cx="30" cy="10" r="6" fill="#F9A825" />
              <path d="M60 15 Q55 -20 30 10" stroke="white" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" fill="none" />
            </g>

            {/* Zzz */}
            <g transform="translate(200, 150)">
              <motion.text x="0" y="0" fill="#F9A825" fontSize="24" fontFamily="sans-serif" animate={{
              opacity: [0, 1, 0],
              y: -20,
              x: 10
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
                Z
              </motion.text>
              <motion.text x="20" y="-20" fill="#F9A825" fontSize="18" fontFamily="sans-serif" animate={{
              opacity: [0, 1, 0],
              y: -30,
              x: 20
            }} transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5
            }}>
                Z
              </motion.text>
              <motion.text x="40" y="-40" fill="#F9A825" fontSize="14" fontFamily="sans-serif" animate={{
              opacity: [0, 1, 0],
              y: -40,
              x: 30
            }} transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1
            }}>
                Z
              </motion.text>
            </g>
          </svg>
        </motion.div>
      </div>

      {/* Button */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.6
    }} className="px-6 pb-12 relative z-10">
        <Button variant="primary" onClick={() => navigate('/sleep')} className="bg-[#8B7FE8] hover:bg-[#7A6FD7]">
          开始使用
        </Button>
      </motion.div>
    </motion.main>;
}