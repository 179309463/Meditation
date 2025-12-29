import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, HeartIcon, HeadphonesIcon } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';
import type { Course } from './CourseDetailPage';
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
const recommendedItems = [{
  id: 1,
  title: 'Focus',
  duration: 'MEDITATION • 3-10 MIN',
  bgColor: '#8B7FE8'
}, {
  id: 2,
  title: 'Happiness',
  duration: 'MEDITATION • 3-10 MIN',
  bgColor: '#FFB4A9'
}, {
  id: 3,
  title: 'Focus',
  duration: 'MEDITATION • 3-10 MIN',
  bgColor: '#B8E0D2'
}];
export function HomePage() {
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
      {/* Header with decorative elements */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="80" cy="20" r="40" fill="#8B7FE8" />
          </svg>
        </div>

        <header className="pt-8 px-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-lg font-semibold text-[#3F414E] tracking-wider">
                Silent
              </span>
              <span className="mx-1">🌙</span>
              <span className="text-lg font-semibold text-[#3F414E] tracking-wider">
                Moon
              </span>
            </div>
          </div>
        </header>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-6 pt-4">
          <motion.h1 variants={itemVariants} className="text-2xl font-bold text-[#3F414E]">
            Good Morning, Afsar
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[#A1A4B2] text-sm">
            We Wish you have a good day
          </motion.p>
        </motion.div>
      </div>

      {/* Featured Cards */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          <motion.div variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigateToCourse({
          title: 'Basics',
          subtitle: 'COURSE',
          description: 'Learn the fundamentals of meditation in this introductory course.',
          duration: '3-10 MIN',
          favorites: 12543,
          listening: 20123,
          bgColor: '#8B7FE8',
          illustrationType: 'circle',
          illustrationValue: 'white'
        })} className="bg-[#8B7FE8] rounded-3xl p-5 relative overflow-hidden cursor-pointer">
            <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
              COURSE
            </span>
            <h3 className="text-lg font-bold text-white mt-1">Basics</h3>
            <span className="text-xs text-white/70 block mt-1">3-10 MIN</span>
            <button className="mt-3 bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">
              START
            </button>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="white" />
              </svg>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigateToCourse({
          title: 'Relaxation',
          subtitle: 'MUSIC',
          description: 'Calming sounds to help you relax and unwind after a long day.',
          duration: '3-10 MIN',
          favorites: 8543,
          listening: 15123,
          bgColor: '#FFE5B4',
          illustrationType: 'circle',
          illustrationValue: '#3F414E'
        })} className="bg-[#FFE5B4] rounded-3xl p-5 relative overflow-hidden cursor-pointer">
            <span className="text-xs font-medium text-[#3F414E]/70 uppercase tracking-wide">
              MUSIC
            </span>
            <h3 className="text-lg font-bold text-[#3F414E] mt-1">
              Relaxation
            </h3>
            <span className="text-xs text-[#3F414E]/60 block mt-1">
              3-10 MIN
            </span>
            <button className="mt-3 bg-[#3F414E] text-white text-xs font-medium px-4 py-2 rounded-full">
              START
            </button>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="#3F414E" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Daily Thought Card */}
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
        title: 'Daily Thought',
        subtitle: 'MEDITATION',
        description: 'A daily dose of wisdom and mindfulness to start your day right.',
        duration: '3-10 MIN',
        favorites: 24234,
        listening: 34234,
        bgColor: '#333242',
        illustrationType: 'circle',
        illustrationValue: '#8B7FE8'
      })} className="bg-[#333242] rounded-3xl p-5 flex items-center justify-between cursor-pointer">
          <div>
            <h3 className="text-lg font-bold text-white">Daily Thought</h3>
            <span className="text-xs text-white/60">MEDITATION • 3-10 MIN</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/60">
              <HeartIcon className="w-4 h-4" />
              <span className="text-xs">24,234</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <HeadphonesIcon className="w-4 h-4" />
              <span className="text-xs">34,234</span>
            </div>
            <button className="w-12 h-12 bg-[#8B7FE8] rounded-full flex items-center justify-center">
              <PlayIcon className="w-5 h-5 text-white fill-white ml-1" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Recommended Section */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-6 mt-8">
        <motion.h2 variants={itemVariants} className="text-xl font-bold text-[#3F414E] mb-4">
          Recommended for you
        </motion.h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {recommendedItems.map(item => <motion.div key={item.id} variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigateToCourse({
          title: item.title,
          subtitle: 'MEDITATION',
          description: 'Recommended meditation session tailored just for you.',
          duration: '3-10 MIN',
          favorites: 5000 + item.id * 100,
          listening: 10000 + item.id * 200,
          bgColor: item.bgColor,
          illustrationType: 'emoji',
          illustrationValue: '🧘'
        })} className="flex-shrink-0 w-40 cursor-pointer">
              <div className="h-28 rounded-2xl mb-2 flex items-center justify-center" style={{
            backgroundColor: item.bgColor
          }}>
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="text-sm font-semibold text-[#3F414E]">
                {item.title}
              </h3>
              <span className="text-xs text-[#A1A4B2]">{item.duration}</span>
            </motion.div>)}
        </div>
      </motion.div>

      <BottomNav theme="light" />
    </motion.main>;
}