import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, SmileIcon, HeartIcon, MoonIcon, BabyIcon, SparklesIcon } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';
import type { Course } from './CourseDetailPage';
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
const meditationItems = [{
  id: 1,
  title: '7 Days of Calm',
  duration: 'Day 1 of 7',
  bgColor: '#8B7FE8',
  emoji: '🧘‍♀️'
}, {
  id: 2,
  title: 'Anxiet Release',
  duration: '10 MIN',
  bgColor: '#FFB4A9',
  emoji: '🌸'
}, {
  id: 3,
  title: 'Daily Calm',
  duration: '15 MIN',
  bgColor: '#B8E0D2',
  emoji: '🌿'
}, {
  id: 4,
  title: 'Focus',
  duration: '10 MIN',
  bgColor: '#FFE5B4',
  emoji: '🎯'
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
          Meditate
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
          we can learn how to recognize when our minds are doing their normal
          everyday acrobatics.
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
        title: 'Daily Calm',
        subtitle: 'PAUSE PRACTICE',
        description: "Take a moment to pause and breathe with today's daily calm session.",
        duration: '3-10 MIN',
        favorites: 45234,
        listening: 56234,
        bgColor: '#FFE5B4',
        illustrationType: 'emoji',
        illustrationValue: '🌿'
      })} className="bg-[#FFE5B4] rounded-3xl p-5 flex items-center justify-between cursor-pointer">
          <div>
            <h3 className="text-lg font-bold text-[#3F414E]">Daily Calm</h3>
            <span className="text-xs text-[#3F414E]/60">
              APR 30 • PAUSE PRACTICE
            </span>
          </div>
          <button className="w-16 h-16 bg-[#3F414E] rounded-full flex items-center justify-center">
            <PlayIcon className="w-6 h-6 text-white fill-white ml-1" />
          </button>
        </div>
      </motion.div>

      {/* Meditation Grid */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          {meditationItems.map(item => <motion.div key={item.id} variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigateToCourse({
          title: item.title,
          subtitle: 'MEDITATION',
          description: 'A guided session to help you find your center.',
          duration: item.duration,
          favorites: 1000 + item.id * 50,
          listening: 2000 + item.id * 100,
          bgColor: item.bgColor,
          illustrationType: 'emoji',
          illustrationValue: item.emoji
        })} className="cursor-pointer">
              <div className="h-32 rounded-2xl mb-2 flex items-center justify-center" style={{
            backgroundColor: item.bgColor
          }}>
                <span className="text-4xl">{item.emoji}</span>
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
        <h2 className="text-xl font-bold text-[#3F414E] mb-4">
          Focus Attention
        </h2>
        <div onClick={() => navigateToCourse({
        title: 'Focus Attention',
        subtitle: '7 DAYS OF CALM',
        description: 'A 7-day series designed to improve your focus and concentration.',
        duration: '10 MIN',
        favorites: 12345,
        listening: 67890,
        bgColor: '#F6F1FB',
        illustrationType: 'emoji',
        illustrationValue: '🎯'
      })} className="bg-[#F6F1FB] rounded-3xl p-6 cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#3F414E]">
                Focus Attention
              </h3>
              <span className="text-xs text-[#A1A4B2]">7 DAYS OF CALM</span>
            </div>
            <span className="text-5xl">🎯</span>
          </div>
        </div>
      </motion.div>

      <BottomNav theme="light" />
    </motion.main>;
}