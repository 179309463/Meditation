import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { XIcon, HeartIcon, DownloadIcon } from 'lucide-react';
import { AudioPlayer } from '../components/AudioPlayer';
const relatedTracks = [{
  id: 1,
  title: '月亮云彩',
  duration: '45 分钟 • 助眠音乐'
}, {
  id: 2,
  title: '甜蜜睡眠',
  duration: '45 分钟 • 助眠音乐'
}];
export function MusicPlayerPage() {
  const navigate = useNavigate();
  return <motion.main initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-[#03174C] flex flex-col">
      {/* Header */}
      <header className="pt-6 px-6 flex items-center justify-between">
        <motion.button whileTap={{
        scale: 0.9
      }} onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center" aria-label="Close">
          <XIcon className="w-5 h-5 text-white" />
        </motion.button>
        <div className="flex items-center gap-3">
          <motion.button whileTap={{
          scale: 0.9
        }} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center" aria-label="Add to favorites">
            <HeartIcon className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button whileTap={{
          scale: 0.9
        }} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center" aria-label="Download">
            <DownloadIcon className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </header>

      {/* Illustration */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 0.2
    }} className="flex-1 flex items-center justify-center px-6">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A90D9] to-[#8B7FE8] rounded-full opacity-30 blur-3xl" />
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-[#1F265E] to-[#3F4B8C] rounded-full flex items-center justify-center">
              <span className="text-7xl">🌙</span>
            </div>
          </div>
          {/* Stars */}
          <motion.div animate={{
          opacity: [0.5, 1, 0.5]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="absolute top-4 right-8 text-2xl">
            ✨
          </motion.div>
          <motion.div animate={{
          opacity: [0.5, 1, 0.5]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5
        }} className="absolute top-12 left-4 text-xl">
            ⭐
          </motion.div>
          <motion.div animate={{
          opacity: [0.5, 1, 0.5]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1
        }} className="absolute bottom-8 right-4 text-lg">
            ✨
          </motion.div>
        </div>
      </motion.div>

      {/* Track Info */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3
    }} className="px-6 text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">夜之岛</h1>
        <p className="text-[#98A1BD] text-sm uppercase tracking-wide">
          助眠音乐
        </p>
      </motion.div>

      {/* Audio Player */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="px-6 mb-8">
        <AudioPlayer theme="dark" />
      </motion.div>

      {/* Related Tracks */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.5
    }} className="px-6 pb-8">
        <h2 className="text-lg font-bold text-white mb-4">相关推荐</h2>
        <div className="space-y-3">
          {relatedTracks.map(track => <motion.div key={track.id} whileHover={{
          x: 4
        }} className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1F265E] to-[#3F4B8C] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🌙</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {track.title}
                </h3>
                <span className="text-xs text-[#98A1BD]">{track.duration}</span>
              </div>
            </motion.div>)}
        </div>
      </motion.div>
    </motion.main>;
}