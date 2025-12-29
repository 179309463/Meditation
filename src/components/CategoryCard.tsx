import React from 'react';
import { motion } from 'framer-motion';
type CategoryCardProps = {
  title: string;
  image?: string;
  bgColor: string;
  textColor?: string;
  selected?: boolean;
  onClick?: () => void;
};
export function CategoryCard({
  title,
  image,
  bgColor,
  textColor = 'white',
  selected = false,
  onClick
}: CategoryCardProps) {
  return <motion.button whileHover={{
    y: -4,
    scale: 1.02
  }} whileTap={{
    scale: 0.95
  }} onClick={onClick} className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden ${selected ? 'ring-4 ring-[#8B7FE8] ring-offset-2' : ''}`} style={{
    backgroundColor: bgColor
  }}>
      {image && <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>}
      <div className="absolute inset-0 flex items-end p-4">
        <h3 className="text-sm font-bold leading-tight" style={{
        color: textColor
      }}>
          {title}
        </h3>
      </div>
    </motion.button>;
}