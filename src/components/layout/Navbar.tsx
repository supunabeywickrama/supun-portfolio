import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
const navItems = [{
  name: 'About',
  href: '#about'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Education',
  href: '#education'
}, {
  name: 'Leadership',
  href: '#leadership'
}, {
  name: 'Contact',
  href: '#contact'
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/90 backdrop-blur-md border-b border-navy-700 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
              <Terminal className="h-6 w-6 text-cyan-400" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight text-white">
              supun<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors">
                <span className="text-cyan-500/50 mr-1">
                  0{navItems.indexOf(item) + 1}.
                </span>
                {item.name}
              </a>)}
            <a href="https://drive.google.com/uc?export=download&id=6o6HO0bf4qZgIAMCDm9EjjjQI2DEh" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-mono text-cyan-400 border border-cyan-400/30 rounded hover:bg-cyan-400/10 transition-colors">
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-navy-800 border-b border-navy-700 overflow-hidden">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map(item => <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-mono text-slate-300 hover:text-cyan-400 hover:bg-navy-700/50 rounded-md">
                  <span className="text-cyan-500 mr-2">
                    0{navItems.indexOf(item) + 1}.
                  </span>
                  {item.name}
                </a>)}
              <a href="https://drive.google.com/uc?export=download&id=17PjBhrlhAPa94XHuLM53nqHAVGSsZ0w1" target="_blank" rel="noopener noreferrer" className="block mt-4 mx-3 px-4 py-3 text-center text-base font-mono text-navy-900 bg-cyan-400 rounded-md hover:bg-cyan-500">
                Download Resume
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}
