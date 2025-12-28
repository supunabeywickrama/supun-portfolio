import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: BoxIcon;
  href?: string;
  external?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  href,
  external,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-mono text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-cyan-400 text-navy-900 hover:bg-cyan-500 focus:ring-cyan-400 shadow-[0_0_15px_rgba(0,217,255,0.3)] hover:shadow-[0_0_25px_rgba(0,217,255,0.5)]',
    outline: 'border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 focus:ring-cyan-400',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/5'
  };
  const content = <>
      {children}
      {Icon && <Icon className="ml-2 h-4 w-4" />}
    </>;
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;
  if (href) {
    return <motion.a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={combinedClassName} whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }}>
        {content}
      </motion.a>;
  }
  return <motion.button className={combinedClassName} whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} {...props}>
      {content}
    </motion.button>;
}