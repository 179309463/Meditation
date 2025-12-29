import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SmileIcon, HeartIcon, MoonIcon, BabyIcon, SparklesIcon } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';
import maskGroup20 from '../assets/mask-group-20.png';
import maskGroup16 from '../assets/mask-group-16.png';
import maskGroup23 from '../assets/mask-group-23.png';
import maskGroup21 from '../assets/mask-group-21.png';
import maskGroup27 from '../assets/mask-group-27.png';

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

const sleepStories = [{
  id: 1,
  title: '夜之岛',
  duration: '45 分钟 • 助眠音乐',
  image: maskGroup16
}, {
  id: 2,
  title: '甜蜜睡眠',
  duration: '45 分钟 • 助眠音乐',
  image: maskGroup23
}, {
  id: 3,
  title: '晚安',
  duration: '45 分钟 • 助眠音乐',
  image: maskGroup21
}, {
  id: 4,
  title: '月亮云彩',
  duration: '45 分钟 • 助眠音乐',
  image: maskGroup27
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

export function SleepPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();
  return <motion.main initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-[#03174C] pb-24">
      {/* Header with illustration */}
      <div className="relative pt-8 px-6">
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">睡前故事</h1>
          <p className="text-[#E6E7F2]/70 text-sm leading-relaxed">
            舒缓的睡前故事，帮助您进入深度自然的睡眠
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.2
      }} className="flex justify-center mb-6">
          <div className="relative w-48 h-32 rounded-2xl overflow-hidden">
            <img src={maskGroup20} alt="Sleep" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Categories */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.3
    }} className="flex gap-3 px-6 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(category => <motion.button key={category.id} whileTap={{
        scale: 0.95
      }} onClick={() => setActiveCategory(category.id)} className={`flex flex-col items-center gap-1 px-4 py-3 rounded-2xl transition-colors flex-shrink-0 ${activeCategory === category.id ? 'bg-[#8B7FE8] text-white' : 'bg-[#1F265E] text-[#98A1BD]'}`}>
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
      delay: 0.4
    }} className="px-6 mt-6">
        <div className="rounded-3xl relative overflow-hidden h-40">
          <img src={maskGroup20} alt="The Ocean Moon" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03174C]/80 to-transparent" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-2">海洋之月</h3>
            <span className="text-sm text-white/70">
              8小时不间断的最受欢迎助眠音频合集
            </span>
            <button className="mt-4 bg-white text-[#3F414E] text-sm font-medium px-6 py-2 rounded-full w-fit">
              开始
            </button>
          </div>
        </div>
      </motion.div>

      {/* Sleep Stories Grid */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          {sleepStories.map(story => <motion.div key={story.id} variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigate('/music')} className="cursor-pointer">
              <div className="h-32 rounded-2xl mb-2 overflow-hidden">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-semibold text-white">
                {story.title}
              </h3>
              <span className="text-xs text-[#98A1BD]">{story.duration}</span>
            </motion.div>)}
        </div>
      </motion.div>

      <BottomNav theme="dark" />
    </motion.main>;
}
