import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeftIcon, HeartIcon, DownloadIcon, HeadphonesIcon, PlayIcon } from 'lucide-react';
// Define the Course type with serializable image data
export type Course = {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  favorites: number;
  listening: number;
  bgColor: string;
  textColor?: string;
  illustrationType: 'sun' | 'circle' | 'emoji';
  illustrationValue?: string; // color for circle, or emoji character
};
const defaultTracks = [{
  id: 1,
  title: '集中注意力',
  duration: '10 分钟'
}, {
  id: 2,
  title: '身体扫描',
  duration: '5 分钟'
}, {
  id: 3,
  title: '创造快乐',
  duration: '3 分钟'
}];
export function CourseDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'MALE' | 'FEMALE'>('MALE');
  // Get course data from location state, fallback to default if accessed directly
  const course = location.state as Course || {
    title: '快乐早晨',
    subtitle: '课程',
    description: '用这些深沉的环境音调让心灵放松，进入安稳的睡眠。',
    duration: '3-10 分钟',
    favorites: 24234,
    listening: 34234,
    bgColor: '#F2C94C',
    illustrationType: 'sun'
  };
  const renderIllustration = () => {
    switch (course.illustrationType) {
      case 'sun':
        return <svg viewBox="0 0 400 300" className="w-full h-full">
            <circle cx="200" cy="150" r="80" fill="#F2C94C" />
            <g stroke="#3F414E" strokeWidth="2" opacity="0.1">
              {[...Array(24)].map((_, i) => <line key={i} x1="200" y1="150" x2={200 + Math.cos(i * 15 * Math.PI / 180) * 300} y2={150 + Math.sin(i * 15 * Math.PI / 180) * 300} />)}
            </g>
            <path d="M170 140 Q180 130 190 140" stroke="#3F414E" strokeWidth="3" fill="none" />
            <path d="M210 140 Q220 130 230 140" stroke="#3F414E" strokeWidth="3" fill="none" />
            <path d="M190 160 Q200 170 210 160" stroke="#3F414E" strokeWidth="3" fill="none" />
            <circle cx="165" cy="155" r="8" fill="#FF9EAE" opacity="0.6" />
            <circle cx="235" cy="155" r="8" fill="#FF9EAE" opacity="0.6" />
          </svg>;
      case 'circle':
        return <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
            <circle cx="50" cy="50" r="40" fill={course.illustrationValue || 'white'} />
          </svg>;
      case 'emoji':
        return <span className="text-9xl">{course.illustrationValue}</span>;
      default:
        return null;
    }
  };
  return <motion.main initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-white flex flex-col pb-8">
      {/* Hero Section */}
      <div className="relative h-72 overflow-hidden rounded-b-[3rem] transition-colors duration-300" style={{
      backgroundColor: course.bgColor
    }}>
        {/* Illustration */}
        <div className="absolute inset-0 flex items-center justify-center mt-12">
          {renderIllustration()}
        </div>

        {/* Header Controls */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <ArrowLeftIcon className="w-5 h-5 text-[#3F414E]" />
          </button>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-[#3F414E]/20 backdrop-blur-sm flex items-center justify-center">
              <HeartIcon className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#3F414E]/20 backdrop-blur-sm flex items-center justify-center">
              <DownloadIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-8">
        <h1 className="text-3xl font-bold text-[#3F414E] mb-2">
          {course.title}
        </h1>
        <p className="text-[#A1A4B2] text-xs font-medium tracking-wider uppercase mb-4">
          {course.subtitle}
        </p>
        <p className="text-[#A1A4B2] text-sm leading-relaxed mb-6">
          {course.description}
        </p>

        {/* Stats */}
        <div className="flex gap-6 mb-8">
          <div className="flex items-center gap-2 text-[#A1A4B2]">
            <HeartIcon className="w-4 h-4 text-[#FF9EAE] fill-[#FF9EAE]" />
            <span className="text-xs font-medium">
              {course.favorites.toLocaleString()} 收藏
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#A1A4B2]">
            <HeadphonesIcon className="w-4 h-4 text-[#7FD4C1]" />
            <span className="text-xs font-medium">
              {course.listening.toLocaleString()} 收听
            </span>
          </div>
        </div>

        {/* Narrator Selection */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#3F414E] mb-4">选择旁白</h2>
          <div className="flex border-b border-[#EBEAEC]">
            <button onClick={() => setActiveTab('MALE')} className={`pb-3 text-sm font-medium mr-8 relative ${activeTab === 'MALE' ? 'text-[#8B7FE8]' : 'text-[#A1A4B2]'}`}>
              男声
              {activeTab === 'MALE' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B7FE8]" />}
            </button>
            <button onClick={() => setActiveTab('FEMALE')} className={`pb-3 text-sm font-medium relative ${activeTab === 'FEMALE' ? 'text-[#8B7FE8]' : 'text-[#A1A4B2]'}`}>
              女声
              {activeTab === 'FEMALE' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B7FE8]" />}
            </button>
          </div>
        </div>

        {/* Track List */}
        <div className="space-y-4">
          {defaultTracks.map(track => <motion.div key={track.id} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} className="flex items-center gap-4 py-2 border-b border-[#EBEAEC] last:border-0 cursor-pointer">
              <button className="w-10 h-10 rounded-full border border-[#A1A4B2]/30 flex items-center justify-center flex-shrink-0 text-[#8B7FE8]">
                <PlayIcon className="w-4 h-4 fill-current ml-0.5" />
              </button>
              <div>
                <h3 className="text-base font-medium text-[#3F414E]">
                  {track.title}
                </h3>
                <span className="text-xs text-[#A1A4B2] uppercase">
                  {track.duration}
                </span>
              </div>
            </motion.div>)}
        </div>
      </div>
    </motion.main>;
}