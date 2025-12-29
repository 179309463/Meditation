import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, SmileIcon, HeartIcon, MoonIcon, BabyIcon, SparklesIcon } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';
import type { Course } from './CourseDetailPage';
import maskGroup5 from '../assets/mask-group-5.png';
import maskGroup11 from '../assets/mask-group-11.png';
import maskGroup12 from '../assets/mask-group-12.png';
import maskGroup13 from '../assets/mask-group-13.png';
import maskGroup14 from '../assets/mask-group-14.png';
import maskGroup15 from '../assets/mask-group-15.png';

const categories = [{
  id: 'all',
  label: '全部',
  icon: <SparklesIcon className="w-4 h-4" />
}, {
  id: 'my',
  label: '我的',
  icon: <HeartIcon className="w-4 h-4" />
}, {
  id: 'anxious',
  label: '焦虑',
  icon: <SmileIcon className="w-4 h-4" />
}, {
  id: 'sleep',
  label: '睡眠',
  icon: <MoonIcon className="w-4 h-4" />
}, {
  id: 'kids',
  label: '儿童',
  icon: <BabyIcon className="w-4 h-4" />
}];

const meditationItems = [{
  id: 1,
  title: '7天平静',
  duration: '第1天 / 共7天',
  bgColor: '#8B7FE8',
  image: maskGroup11,
  imageKey: 'mask-group-11'
}, {
  id: 2,
  title: '释放焦虑',
  duration: '10 分钟',
  bgColor: '#FFB4A9',
  image: maskGroup12,
  imageKey: 'mask-group-12'
}, {
  id: 3,
  title: '每日平静',
  duration: '15 分钟',
  bgColor: '#B8E0D2',
  image: maskGroup13,
  imageKey: 'mask-group-13'
}, {
  id: 4,
  title: '专注',
  duration: '10 分钟',
  bgColor: '#FFE5B4',
  image: maskGroup14,
  imageKey: 'mask-group-14'
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

export function MeditatePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();
  const navigateToCourse = (courseData: Course) => {
    navigate('/course-detail', {
      state: courseData
    });
  };
  return <motion.main initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-white pb-24">
      <header className="pt-8 px-6">
        <motion.h1 initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-2xl font-bold text-[#3F414E] mb-2">
          冥想
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="text-[#A1A4B2] text-sm leading-relaxed">
          我们可以学习如何识别大脑何时在进行日常的思维活动。
        </motion.p>
      </header>

      {/* Categories */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.2
    }} className="flex gap-3 px-6 mt-6 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(category => <motion.button key={category.id} whileTap={{
        scale: 0.95
      }} onClick={() => setActiveCategory(category.id)} className={`flex flex-col items-center gap-1 px-4 py-3 rounded-2xl transition-colors flex-shrink-0 ${activeCategory === category.id ? 'bg-[#8B7FE8] text-white' : 'bg-[#F5F5F9] text-[#A1A4B2]'}`}>
            {category.icon}
            <span className="text-xs font-medium">{category.label}</span>
          </motion.button>)}
      </motion.div>

      {/* Featured Card */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3
    }} className="px-6 mt-6">
        <div onClick={() => navigateToCourse({
        title: '每日平静',
        subtitle: '暂停练习',
        description: '花点时间暂停并呼吸，开始今天的每日平静课程。',
        duration: '3-10 分钟',
        favorites: 45234,
        listening: 56234,
        bgColor: '#FFE5B4',
        illustrationType: 'emoji',
        illustrationValue: '🌿',
        imageKey: 'mask-group-5'
      })} className="rounded-3xl relative overflow-hidden cursor-pointer h-32">
          <img src={maskGroup5} alt="Daily Calm" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFE5B4]/90 to-transparent" />
          <div className="relative z-10 p-5 h-full flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#3F414E]">每日平静</h3>
              <span className="text-xs text-[#3F414E]/60">
                4月30日 • 暂停练习
              </span>
            </div>
            <button className="w-16 h-16 bg-[#3F414E] rounded-full flex items-center justify-center">
              <PlayIcon className="w-6 h-6 text-white fill-white ml-1" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Meditation Grid */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          {meditationItems.map(item => <motion.div key={item.id} variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigateToCourse({
          title: item.title,
          subtitle: '冥想',
          description: '引导课程帮助您找到内心的中心。',
          duration: item.duration,
          favorites: 1000 + item.id * 50,
          listening: 2000 + item.id * 100,
          bgColor: item.bgColor,
          illustrationType: 'emoji',
          illustrationValue: '🧘',
          imageKey: item.imageKey
        })} className="cursor-pointer">
              <div className="h-32 rounded-2xl mb-2 overflow-hidden" style={{
            backgroundColor: item.bgColor
          }}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-semibold text-[#3F414E]">
                {item.title}
              </h3>
              <span className="text-xs text-[#A1A4B2]">{item.duration}</span>
            </motion.div>)}
        </div>
      </motion.div>

      {/* Focus Attention Section */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.5
    }} className="px-6 mt-8">
        <h2 className="text-xl font-bold text-[#3F414E] mb-4">专注力</h2>
        <div onClick={() => navigateToCourse({
        title: '专注力',
        subtitle: '7天平静',
        description: '为期7天的系列课程，旨在提高您的专注力和注意力。',
        duration: '10 分钟',
        favorites: 12345,
        listening: 67890,
        bgColor: '#F6F1FB',
        illustrationType: 'emoji',
        illustrationValue: '🎯',
        imageKey: 'mask-group-15'
      })} className="rounded-3xl relative overflow-hidden cursor-pointer h-28">
          <img src={maskGroup15} alt="Focus Attention" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1FB]/90 to-transparent" />
          <div className="relative z-10 p-6 h-full flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#3F414E]">专注力</h3>
              <span className="text-xs text-[#A1A4B2]">7天平静</span>
            </div>
          </div>
        </div>
      </motion.div>

      <BottomNav theme="light" />
    </motion.main>;
}
