import React from 'react';
import { motion } from 'framer-motion';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}
export function Card({
  children,
  className = '',
  hoverEffect = false
}: CardProps) {
  return <motion.div className={`bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-lg overflow-hidden ${className}`} whileHover={hoverEffect ? {
    y: -5,
    borderColor: 'rgba(0, 217, 255, 0.3)'
  } : undefined} transition={{
    duration: 0.2
  }}>
      {children}
    </motion.div>;
}