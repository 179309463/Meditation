import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';
type AudioPlayerProps = {
  currentTime?: number;
  duration?: number;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onSeek?: (time: number) => void;
  theme?: 'light' | 'dark';
};
export function AudioPlayer({
  currentTime = 90,
  duration = 2700,
  isPlaying = false,
  onPlayPause,
  onSeek,
  theme = 'dark'
}: AudioPlayerProps) {
  const [localPlaying, setLocalPlaying] = useState(isPlaying);
  const progress = currentTime / duration * 100;
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const handlePlayPause = () => {
    setLocalPlaying(!localPlaying);
    onPlayPause?.();
  };
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#3F414E]';
  const subTextColor = theme === 'dark' ? 'text-white/60' : 'text-[#A1A4B2]';
  const trackBg = theme === 'dark' ? 'bg-white/20' : 'bg-[#E8E8E8]';
  return <div className="w-full">
      {/* Progress bar */}
      <div className="relative mb-2">
        <div className={`h-1 ${trackBg} rounded-full overflow-hidden`}>
          <motion.div className="h-full bg-white rounded-full" initial={{
          width: 0
        }} animate={{
          width: `${progress}%`
        }} transition={{
          duration: 0.3
        }} />
        </div>
      </div>

      {/* Time stamps */}
      <div className="flex justify-between mb-8">
        <span className={`text-xs ${subTextColor}`}>
          {formatTime(currentTime)}
        </span>
        <span className={`text-xs ${subTextColor}`}>
          {formatTime(duration)}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8">
        <motion.button whileTap={{
        scale: 0.9
      }} className={`${subTextColor}`} aria-label="Skip back 15 seconds">
          <SkipBackIcon className="w-8 h-8" />
        </motion.button>

        <motion.button whileTap={{
        scale: 0.9
      }} onClick={handlePlayPause} className={`w-20 h-20 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-[#8B7FE8]'} flex items-center justify-center shadow-lg`} aria-label={localPlaying ? 'Pause' : 'Play'}>
          {localPlaying ? <PauseIcon className={`w-8 h-8 ${theme === 'dark' ? 'text-[#03174C]' : 'text-white'}`} /> : <PlayIcon className={`w-8 h-8 ${theme === 'dark' ? 'text-[#03174C]' : 'text-white'} ml-1`} />}
        </motion.button>

        <motion.button whileTap={{
        scale: 0.9
      }} className={`${subTextColor}`} aria-label="Skip forward 15 seconds">
          <SkipForwardIcon className="w-8 h-8" />
        </motion.button>
      </div>
    </div>;
}