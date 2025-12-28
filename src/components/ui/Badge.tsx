import React from 'react';
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'accent';
  className?: string;
}
export function Badge({
  children,
  variant = 'default',
  className = ''
}: BadgeProps) {
  const variants = {
    default: 'bg-navy-700 text-cyan-400 border border-navy-600',
    outline: 'bg-transparent border border-slate-700 text-slate-300',
    accent: 'bg-cyan-900/20 text-cyan-400 border border-cyan-500/30'
  };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>;
}