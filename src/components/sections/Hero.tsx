import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
export function Hero() {
  const roles = [
    'Embedded Systems Engineer',
    'Robotics Engineer',
    'AI/ML Engineer',
    'Computer Vision Engineer',
    'Automation Engineer',
    'Mechatronics Engineer'
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-navy-900">
        <div className="absolute inset-0 circuit-pattern opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }}>
            <motion.p className="font-mono text-cyan-400 mb-4" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }}>
              Hi, my name is
            </motion.p>

            <motion.h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
              Supun Tharaka.
            </motion.h1>

            <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-400 mb-6" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }}>
              Turning real-world Engineering problems into scalable Innovations.
            </motion.h2>

            <motion.p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }}>
              Electronics & Computer Science Undergraduate specializing in{' '}
              <span className="text-cyan-400">AI</span>,{' '}
              <span className="text-cyan-400">Computer Vision</span>, and{' '}
              <span className="text-cyan-400">IoT</span>. 
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }}>
              <Button href="#projects" icon={ArrowRight}>
                View Projects
              </Button>
              <Button variant="outline" icon={Download} href="https://drive.google.com/uc?export=download&id=17PjBhrlhAPa94XHuLM53nqHAVGSsZ0w1">
                Download CV
              </Button>
            </motion.div>

            <motion.div className="flex items-center gap-6 text-slate-400" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6
          }}>
              <a href="https://github.com/supunabeywickrama" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/supun-tharaka-6bb8b5278/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:supuun2001@gmail.com" className="hover:text-cyan-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Abstract Tech Visual */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.7
        }} className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative circles representing nodes */}
              <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />

              {/* Central Hub with Animated Role */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-navy-800/50 rounded-full border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(0,217,255,0.3)] relative z-10 backdrop-blur-sm">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentRole}
                      className="text-center px-4"
                      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <div className="text-cyan-400 font-mono text-lg font-bold leading-tight">
                        {roles[currentRole]}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Orbiting Tech Keywords */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-navy-900/80 backdrop-blur-sm border border-cyan-500/40 px-4 py-2 rounded-lg text-sm text-cyan-400 font-mono shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                AI/ML
              </motion.div>
              <motion.div 
                className="absolute bottom-1/4 right-0 translate-x-8 bg-navy-900/80 backdrop-blur-sm border border-purple-500/40 px-4 py-2 rounded-lg text-sm text-purple-400 font-mono shadow-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Embedded
              </motion.div>
              <motion.div 
                className="absolute bottom-1/4 left-0 -translate-x-8 bg-navy-900/80 backdrop-blur-sm border border-cyan-500/40 px-4 py-2 rounded-lg text-sm text-cyan-400 font-mono shadow-lg"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                IoT
              </motion.div>
              <motion.div 
                className="absolute top-1/3 right-0 translate-x-6 bg-navy-900/80 backdrop-blur-sm border border-cyan-500/40 px-4 py-2 rounded-lg text-sm text-cyan-400 font-mono shadow-lg"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                Vision
              </motion.div>
              <motion.div 
                className="absolute top-1/3 left-0 -translate-x-6 bg-navy-900/80 backdrop-blur-sm border border-purple-500/40 px-4 py-2 rounded-lg text-sm text-purple-400 font-mono shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              >
                Robotics
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}