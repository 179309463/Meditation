import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('afsar@example.com');
  const [password, setPassword] = useState('password123');
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;
  const handleLogin = () => {
    if (isEmailValid && isPasswordValid) {
      navigate('/home');
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
          Welcome Back!
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
          <Button variant="facebook">CONTINUE WITH FACEBOOK</Button>
          <Button variant="google">CONTINUE WITH GOOGLE</Button>
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
            Or log in with email
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
      }} className="space-y-4 mb-6">
          <Input type="email" placeholder="Email address" value={email} onChange={setEmail} isValid={isEmailValid} showValidation={email.length > 0} />
          <Input type="password" placeholder="Password" value={password} onChange={setPassword} isValid={isPasswordValid} showValidation={password.length > 0} />
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }}>
          <Button variant="primary" onClick={handleLogin}>
            LOG IN
          </Button>
        </motion.div>

        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.6
      }} className="text-center mt-4">
          <button className="text-sm text-[#3F414E] font-medium">
            Forgot Password?
          </button>
        </motion.p>
      </div>

      <motion.p initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.7
    }} className="text-center pb-8 text-sm text-[#A1A4B2]">
        ALREADY HAVE AN ACCOUNT?{' '}
        <button onClick={() => navigate('/signup')} className="text-[#8B7FE8] font-semibold">
          SIGN UP
        </button>
      </motion.p>
    </motion.main>;
}