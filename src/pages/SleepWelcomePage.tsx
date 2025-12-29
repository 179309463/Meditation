import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import frame14Svg from '../assets/frame-14.svg';

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
      }} className="text-center mb-8">
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
      }} className="w-full max-w-sm mb-8">
          <img src={frame14Svg} alt="Sleeping birds" className="w-full h-auto" />
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
