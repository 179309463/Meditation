import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, HeartIcon, HeadphonesIcon } from 'lucide-react';
type CardVariant = 'featured' | 'meditation' | 'audio' | 'sleep';
type CardProps = {
  variant?: CardVariant;
  title: string;
  subtitle?: string;
  duration?: string;
  category?: string;
  image?: string;
  bgColor?: string;
  onClick?: () => void;
  favorites?: number;
  listeners?: number;
  hasPlayButton?: boolean;
  className?: string;
};
export function Card({
  variant = 'meditation',
  title,
  subtitle,
  duration,
  category,
  image,
  bgColor = '#E8D5F2',
  onClick,
  favorites,
  listeners,
  hasPlayButton = false,
  className = ''
}: CardProps) {
  if (variant === 'featured') {
    return <motion.div whileHover={{
      y: -4
    }} whileTap={{
      scale: 0.98
    }} onClick={onClick} className={`relative rounded-3xl overflow-hidden cursor-pointer ${className}`} style={{
      backgroundColor: bgColor
    }}>
        <div className="p-5 pb-0">
          <span className="text-xs font-medium text-[#3F414E] uppercase tracking-wide">
            {category}
          </span>
          <h3 className="text-lg font-bold text-[#3F414E] mt-1">{title}</h3>
          {duration && <span className="text-xs text-[#A1A4B2] mt-1 block">
              {duration}
            </span>}
          {hasPlayButton && <button className="mt-3 bg-[#3F414E] text-white text-xs font-medium px-4 py-2 rounded-full">
              START
            </button>}
        </div>
        {image && <div className="h-24 mt-2">
            <img src={image} alt={title} className="w-full h-full object-contain" />
          </div>}
      </motion.div>;
  }
  if (variant === 'audio') {
    return <motion.div whileHover={{
      y: -4
    }} whileTap={{
      scale: 0.98
    }} onClick={onClick} className={`relative rounded-3xl overflow-hidden cursor-pointer bg-[#333242] p-5 ${className}`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-[#E6E7F2] opacity-70 uppercase tracking-wide">
              {category}
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{title}</h3>
            {duration && <span className="text-xs text-[#E6E7F2] opacity-70 mt-1 block">
                {duration}
              </span>}
          </div>
          <button className="w-12 h-12 bg-[#8B7FE8] rounded-full flex items-center justify-center">
            <PlayIcon className="w-5 h-5 text-white fill-white ml-1" />
          </button>
        </div>
        {(favorites || listeners) && <div className="flex items-center gap-4 mt-3">
            {favorites && <div className="flex items-center gap-1 text-[#E6E7F2] opacity-70">
                <HeartIcon className="w-4 h-4" />
                <span className="text-xs">{favorites.toLocaleString()}</span>
              </div>}
            {listeners && <div className="flex items-center gap-1 text-[#E6E7F2] opacity-70">
                <HeadphonesIcon className="w-4 h-4" />
                <span className="text-xs">{listeners.toLocaleString()}</span>
              </div>}
          </div>}
      </motion.div>;
  }
  if (variant === 'sleep') {
    return <motion.div whileHover={{
      y: -4
    }} whileTap={{
      scale: 0.98
    }} onClick={onClick} className={`relative rounded-2xl overflow-hidden cursor-pointer ${className}`}>
        {image && <div className="h-32 bg-[#03174C]">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>}
        <div className="p-3 bg-[#1F265E]">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          {duration && <span className="text-xs text-[#E6E7F2] opacity-70">
              {duration}
            </span>}
        </div>
      </motion.div>;
  }
  // Default meditation card
  return <motion.div whileHover={{
    y: -4
  }} whileTap={{
    scale: 0.98
  }} onClick={onClick} className={`relative rounded-2xl overflow-hidden cursor-pointer ${className}`} style={{
    backgroundColor: bgColor
  }}>
      {image && <div className="h-28">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-[#3F414E]">{title}</h3>
        {duration && <span className="text-xs text-[#A1A4B2]">{duration}</span>}
      </div>
    </motion.div>;
}