import React from 'react';
import { motion } from 'framer-motion';
interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}
export function Section({
  id,
  children,
  className = '',
  title,
  subtitle
}: SectionProps) {
  return <section id={id} className={`py-20 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.5
      }} className="mb-12">
            {title && <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
                <span className="text-cyan-400 font-mono mr-2">#</span>
                {title}
              </h2>}
            {subtitle && <p className="text-slate-400 max-w-2xl">{subtitle}</p>}
            <div className="h-1 w-20 bg-cyan-500/30 mt-4 rounded-full" />
          </motion.div>}

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-50px'
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }}>
          {children}
        </motion.div>
      </div>
    </section>;
}