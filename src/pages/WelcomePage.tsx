import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import logoSvg from '../assets/logo.svg';
import group11Png from '../assets/group-11.png';

export function WelcomePage() {
  const navigate = useNavigate();
  return <motion.main initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-[#F6F1FB] flex flex-col">
      {/* Logo with Text */}
      <header className="pt-8 px-6">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#3F414E] font-medium text-base tracking-wide">Silent</span>
          <img src={logoSvg} alt="Silent Moon" className="h-7 w-7" />
          <span className="text-[#3F414E] font-medium text-base tracking-wide">Moon</span>
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
        <div className="relative w-full max-w-sm">
          <img src={group11Png} alt="Meditation illustration" className="w-full h-auto" />
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
          我们即我们所做
        </h1>
        <p className="text-[#A1A4B2] text-center text-sm leading-relaxed mb-8">
          成千上万的人正在使用 Silent Moon 进行冥想
        </p>

        <div className="space-y-4">
          <Button variant="primary" onClick={() => navigate('/signup')}>
            注册
          </Button>
          <p className="text-center text-sm text-[#A1A4B2]">
            已有账号？{' '}
            <button onClick={() => navigate('/login')} className="text-[#8B7FE8] font-semibold">
              登录
            </button>
          </p>
        </div>
      </motion.div>
    </motion.main>;
}
