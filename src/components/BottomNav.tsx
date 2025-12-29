import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, MoonIcon, BrainIcon, MusicIcon, UserIcon } from 'lucide-react';
type NavItem = {
  icon: React.ReactNode;
  label: string;
  path: string;
  activePaths?: string[]; // Additional paths that should show this tab as active
};
type BottomNavProps = {
  theme?: 'light' | 'dark';
};
export function BottomNav({
  theme = 'light'
}: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems: NavItem[] = [{
    icon: <HomeIcon className="w-6 h-6" />,
    label: '首页',
    path: '/home'
  }, {
    icon: <MoonIcon className="w-6 h-6" />,
    label: '睡眠',
    path: '/sleep-welcome',
    activePaths: ['/sleep-welcome', '/sleep'] // Both paths should show Sleep as active
  }, {
    icon: <BrainIcon className="w-6 h-6" />,
    label: '冥想',
    path: '/meditate'
  }, {
    icon: <MusicIcon className="w-6 h-6" />,
    label: '音乐',
    path: '/music'
  }, {
    icon: <UserIcon className="w-6 h-6" />,
    label: '我的',
    path: '/profile'
  }];
  const bgColor = theme === 'dark' ? 'bg-[#03174C]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-[#98A1BD]' : 'text-[#A1A4B2]';
  const activeLabelColor = theme === 'dark' ? 'text-white' : 'text-[#8B7FE8]';
  const activeIndicatorBg = '#8B7FE8';
  return <nav className={`fixed bottom-0 left-0 right-0 ${bgColor} px-6 py-4 z-50`}>
      <div className="flex items-center justify-between max-w-md mx-auto">
        {navItems.map(item => {
        // Check if current path matches either the main path or any of the active paths
        const isActive = item.activePaths ? item.activePaths.includes(location.pathname) : location.pathname === item.path;
        return <motion.button key={item.path} onClick={() => navigate(item.path)} whileTap={{
          scale: 0.9
        }} className="flex flex-col items-center gap-2 relative w-16" aria-label={item.label}>
              <div className="relative flex items-center justify-center w-12 h-12">
                {isActive && <motion.div layoutId="nav-indicator" className="absolute inset-0 rounded-[18px]" style={{
              backgroundColor: activeIndicatorBg
            }} transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30
            }} />}
                <span className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-white' : textColor}`}>
                  {item.icon}
                </span>
              </div>

              <span className={`text-xs font-medium transition-colors duration-200 ${isActive ? activeLabelColor : textColor}`}>
                {item.label}
              </span>
            </motion.button>;
      })}
      </div>
    </nav>;
}