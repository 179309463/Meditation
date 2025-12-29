import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import logo1Svg from '../assets/logo-1.svg';
import group10Png from '../assets/group-10.png';

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
        <div className="flex items-center justify-center">
          <img src={logo1Svg} alt="Silent Moon" className="h-8" />
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
          <img src={group10Png} alt="Meditation illustration" className="w-full h-auto" />
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
          你好 Afsar，欢迎
        </h1>
        <h2 className="text-2xl font-bold text-white text-center mb-3">
          来到 Silent Moon
        </h2>
        <p className="text-white/80 text-center text-sm leading-relaxed mb-8">
          探索应用，寻找内心的平静，为冥想做好准备。
        </p>

        <Button variant="secondary" onClick={() => navigate('/onboarding/purpose')} className="bg-white text-[#3F414E]">
          开始使用
        </Button>
      </motion.div>
    </motion.main>;
}
