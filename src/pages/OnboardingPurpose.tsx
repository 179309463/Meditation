import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
// 使用正确的高清图片
import group24 from '../assets/group-24.png'; // 冥想女孩 - 减轻压力
import frame1 from '../assets/frame-1.svg'; // 男人工作 - 提高表现
import maskGroup3 from '../assets/mask-group-3.png'; // 增加幸福感
import group8 from '../assets/group-8.png'; // 女孩低头 - 缓解焦虑
import frame6 from '../assets/frame-6.svg'; // 登山者 - 个人成长
import group9 from '../assets/group-9.png'; // 女孩睡觉 - 改善睡眠

type Purpose = {
  id: string;
  title: string;
  bgColor: string;
  image: string;
};

const purposes: Purpose[] = [{
  id: 'stress',
  title: '减轻压力',
  bgColor: '#8B7FE8',
  image: group24
}, {
  id: 'performance',
  title: '提高表现',
  bgColor: '#FA6E5A',
  image: frame1
}, {
  id: 'happiness',
  title: '增加幸福感',
  bgColor: '#FFE5B4',
  image: maskGroup3
}, {
  id: 'anxiety',
  title: '缓解焦虑',
  bgColor: '#FEB18F',
  image: group8
}, {
  id: 'growth',
  title: '个人成长',
  bgColor: '#A0E3C4',
  image: frame6
}, {
  id: 'sleep',
  title: '改善睡眠',
  bgColor: '#2C3E50',
  image: group9
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
          是什么让您
          <br />
          来到 Silent Moon？
        </h1>
        <p className="text-[#A1A4B2] text-sm">选择一个关注的主题：</p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-2 gap-4 flex-1">
        {purposes.map(purpose => <motion.button key={purpose.id} variants={itemVariants} whileHover={{
        y: -4,
        scale: 1.02
      }} whileTap={{
        scale: 0.95
      }} onClick={() => setSelectedPurpose(purpose.id)} className={`relative h-40 rounded-2xl overflow-hidden transition-all ${selectedPurpose === purpose.id ? 'ring-4 ring-[#8B7FE8] ring-offset-2' : ''}`} style={{
        backgroundColor: purpose.bgColor
      }}>
            <img 
              src={purpose.image} 
              alt={purpose.title}
              className="absolute inset-0 w-full h-full object-contain p-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-0 right-0 px-3">
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
          开始使用
        </Button>
      </motion.div>
    </motion.main>;
}
