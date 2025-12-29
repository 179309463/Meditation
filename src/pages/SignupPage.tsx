import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
export function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('Afsar');
  const [email, setEmail] = useState('afsar@example.com');
  const [password, setPassword] = useState('password123');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(true);
  const isNameValid = name.length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;
  const handleSignup = () => {
    if (isNameValid && isEmailValid && isPasswordValid && agreedToPrivacy) {
      navigate('/onboarding/purpose');
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
  }} className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="pt-6 px-6">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-[#F5F5F9] flex items-center justify-center" aria-label="Go back">
          <ArrowLeftIcon className="w-5 h-5 text-[#3F414E]" />
        </button>
      </header>

      <div className="flex-1 px-6 pt-8">
        <motion.h1 initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="text-3xl font-bold text-[#3F414E] text-center mb-8">
          创建您的账号
        </motion.h1>

        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="space-y-4 mb-6">
          <Button variant="facebook">通过 FACEBOOK 继续</Button>
          <Button variant="google">通过 GOOGLE 继续</Button>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.3
      }} className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-[#EBEAEC]" />
          <span className="text-xs text-[#A1A4B2] uppercase tracking-wide">
            或使用邮箱登录
          </span>
          <div className="flex-1 h-px bg-[#EBEAEC]" />
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="space-y-4 mb-4">
          <Input type="text" placeholder="姓名" value={name} onChange={setName} isValid={isNameValid} showValidation={name.length > 0} />
          <Input type="email" placeholder="邮箱地址" value={email} onChange={setEmail} isValid={isEmailValid} showValidation={email.length > 0} />
          <Input type="password" placeholder="密码" value={password} onChange={setPassword} isValid={isPasswordValid} showValidation={password.length > 0} />
        </motion.div>

        <motion.label initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} className="flex items-start gap-3 mb-6 cursor-pointer">
          <div className="relative mt-0.5">
            <input type="checkbox" checked={agreedToPrivacy} onChange={e => setAgreedToPrivacy(e.target.checked)} className="sr-only" />
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${agreedToPrivacy ? 'bg-[#8B7FE8] border-[#8B7FE8]' : 'border-[#A1A4B2]'}`}>
              {agreedToPrivacy && <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
            </div>
          </div>
          <span className="text-sm text-[#A1A4B2]">
            我已阅读{' '}
            <button className="text-[#8B7FE8] font-medium">隐私政策</button>
          </span>
        </motion.label>

        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }}>
          <Button variant="primary" onClick={handleSignup}>
            开始使用
          </Button>
        </motion.div>
      </div>

      <motion.p initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.7
    }} className="text-center pb-8 text-sm text-[#A1A4B2]">
        已有账号？{' '}
        <button onClick={() => navigate('/login')} className="text-[#8B7FE8] font-semibold">
          登录
        </button>
      </motion.p>
    </motion.main>;
}