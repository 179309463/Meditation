import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, HeartIcon, HeadphonesIcon } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';
import type { Course } from './CourseDetailPage';
import logoSvg from '../assets/logo.svg';
import maskGroup11 from '../assets/mask-group-11.png';
import maskGroup10 from '../assets/mask-group-10.png';
import maskGroup5 from '../assets/mask-group-5.png';
import maskGroup6 from '../assets/mask-group-6.png';
import maskGroup7 from '../assets/mask-group-7.png';

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
  bgColor: '#8B7FE8',
  image: maskGroup5
}, {
  id: 2,
  title: 'Happiness',
  duration: 'MEDITATION • 3-10 MIN',
  bgColor: '#FFB4A9',
  image: maskGroup6
}, {
  id: 3,
  title: 'Relax',
  duration: 'MEDITATION • 3-10 MIN',
  bgColor: '#B8E0D2',
  image: maskGroup7
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
            <img src={logoSvg} alt="Silent Moon" className="h-6" />
          </div>
        </header>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-6 pt-4">
          <motion.h1 variants={itemVariants} className="text-2xl font-bold text-[#3F414E]">
            早上好，Afsar
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[#A1A4B2] text-sm">
            祝您拥有美好的一天
          </motion.p>
        </motion.div>
      </div>

      {/* Featured Cards */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          <motion.div variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigateToCourse({
          title: '基础',
          subtitle: '课程',
          description: '在这个入门课程中学习冥想的基础知识。',
          duration: '3-10 分钟',
          favorites: 12543,
          listening: 20123,
          bgColor: '#8B7FE8',
          illustrationType: 'circle',
          illustrationValue: 'white'
        })} className="bg-[#8B7FE8] rounded-3xl relative overflow-hidden cursor-pointer h-48">
            <img src={maskGroup11} alt="Basics" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B7FE8]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                课程
              </span>
              <h3 className="text-lg font-bold text-white mt-1">基础</h3>
              <span className="text-xs text-white/70 block mt-1">3-10 分钟</span>
              <button className="mt-3 bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">
                开始
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigateToCourse({
          title: '放松',
          subtitle: '音乐',
          description: '舒缓的声音帮助您在漫长的一天后放松身心。',
          duration: '3-10 分钟',
          favorites: 8543,
          listening: 15123,
          bgColor: '#FFE5B4',
          illustrationType: 'circle',
          illustrationValue: '#3F414E'
        })} className="bg-[#FFE5B4] rounded-3xl relative overflow-hidden cursor-pointer h-48">
            <img src={maskGroup10} alt="Relaxation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFE5B4]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-xs font-medium text-[#3F414E]/70 uppercase tracking-wide">
                音乐
              </span>
              <h3 className="text-lg font-bold text-[#3F414E] mt-1">放松</h3>
              <span className="text-xs text-[#3F414E]/60 block mt-1">
                3-10 分钟
              </span>
              <button className="mt-3 bg-[#3F414E] text-white text-xs font-medium px-4 py-2 rounded-full">
                开始
              </button>
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
        title: '每日思考',
        subtitle: '冥想',
        description: '每日的智慧和正念，开启美好的一天。',
        duration: '3-10 分钟',
        favorites: 24234,
        listening: 34234,
        bgColor: '#333242',
        illustrationType: 'circle',
        illustrationValue: '#8B7FE8'
      })} className="bg-[#333242] rounded-3xl p-5 flex items-center justify-between cursor-pointer">
          <div>
            <h3 className="text-lg font-bold text-white">每日思考</h3>
            <span className="text-xs text-white/60">冥想 • 3-10 分钟</span>
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
          为您推荐
        </motion.h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {recommendedItems.map(item => <motion.div key={item.id} variants={itemVariants} whileHover={{
          y: -4
        }} onClick={() => navigateToCourse({
          title: item.title,
          subtitle: '冥想',
          description: '为您量身定制的推荐冥想课程。',
          duration: '3-10 分钟',
          favorites: 5000 + item.id * 100,
          listening: 10000 + item.id * 200,
          bgColor: item.bgColor,
          illustrationType: 'emoji',
          illustrationValue: '🧘'
        })} className="flex-shrink-0 w-40 cursor-pointer">
              <div className="h-28 rounded-2xl mb-2 overflow-hidden" style={{
            backgroundColor: item.bgColor
          }}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-semibold text-[#3F414E]">
                {item.title}
              </h3>
              <span className="text-xs text-[#A1A4B2]">
                {item.duration.replace('MEDITATION', '冥想').replace('MIN', '分钟')}
              </span>
            </motion.div>)}
        </div>
      </motion.div>

      <BottomNav theme="light" />
    </motion.main>;
}
