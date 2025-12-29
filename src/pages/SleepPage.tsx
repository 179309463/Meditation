import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { SmileIcon, HeartIcon, MoonIcon, BabyIcon, SparklesIcon } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';
const categories = [{
  id: 'all',
  label: 'All',
  icon: <SparklesIcon className="w-4 h-4" />
}, {
  id: 'my',
  label: 'My',
  icon: <HeartIcon className="w-4 h-4" />
}, {
  id: 'anxious',
  label: 'Anxious',
  icon: <SmileIcon className="w-4 h-4" />
}, {
  id: 'sleep',
  label: 'Sleep',
  icon: <MoonIcon className="w-4 h-4" />
}, {
  id: 'kids',
  label: 'Kids',
  icon: <BabyIcon className="w-4 h-4" />
}];
const sleepStories = [{
  id: 1,
  title: 'Night Island',
  duration: '45 MIN • SLEEP MUSIC'
}, {
  id: 2,
  title: 'Sweet Sleep',
  duration: '45 MIN • SLEEP MUSIC'
}, {
  id: 3,
  title: 'Good Night',
  duration: '45 MIN • SLEEP MUSIC'
}, {
  id: 4,
  title: 'Moon Clouds',
  duration: '45 MIN • SLEEP MUSIC'
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
          <h1 className="text-2xl font-bold text-white mb-2">Sleep Stories</h1>
          <p className="text-[#E6E7F2]/70 text-sm leading-relaxed">
            Soothing bedtime stories to help you fall into a deep and natural
            sleep
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
          <div className="relative w-48 h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-20 bg-[#4A90D9] rounded-full flex items-center justify-center">
                <span className="text-5xl">🌙</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/4 text-3xl">😴</div>
            <div className="absolute bottom-0 right-1/4 text-3xl">💤</div>
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
        <div className="bg-gradient-to-br from-[#4A90D9] to-[#8B7FE8] rounded-3xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              The Ocean Moon
            </h3>
            <span className="text-sm text-white/70">
              Non-stop 8-hour mixes of our most popular sleep audio
            </span>
            <button className="mt-4 bg-white text-[#3F414E] text-sm font-medium px-6 py-2 rounded-full">
              START
            </button>
          </div>
          <div className="absolute top-4 right-4 text-5xl opacity-50">🌊</div>
        </div>
      </motion.div>

      {/* Sleep Stories Grid */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          {sleepStories.map(story => <motion.div key={story.id} variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigate('/music')} className="cursor-pointer">
              <div className="h-32 rounded-2xl mb-2 bg-gradient-to-br from-[#1F265E] to-[#3F4B8C] flex items-center justify-center">
                <span className="text-4xl">🌙</span>
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