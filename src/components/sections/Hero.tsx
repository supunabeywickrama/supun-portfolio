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

          {/* Advanced Tech Visual */}
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
              {/* Animated rotating rings */}
              <motion.div 
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-6 border-2 border-purple-500/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-12 border border-cyan-500/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsating energy rings */}
              <motion.div 
                className="absolute inset-16 border-2 border-cyan-400/40 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Central Holographic Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Glowing backdrop */}
                  <motion.div 
                    className="absolute inset-0 w-56 h-56 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Main display */}
                  <div className="relative w-56 h-56 bg-navy-900/90 rounded-full border-2 border-cyan-500/60 flex items-center justify-center shadow-[0_0_60px_rgba(0,217,255,0.4)] backdrop-blur-md overflow-hidden">
                    {/* Animated grid background */}
                    <motion.div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                      animate={{ 
                        backgroundPosition: ['0px 0px', '20px 20px']
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Role title with advanced animation */}
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentRole}
                        className="text-center px-6 relative z-10"
                        initial={{ 
                          opacity: 0, 
                          scale: 0.5,
                          rotateX: -90,
                          filter: "blur(10px)"
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          rotateX: 0,
                          filter: "blur(0px)"
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.5,
                          rotateX: 90,
                          filter: "blur(10px)"
                        }}
                        transition={{ 
                          duration: 0.7,
                          ease: [0.23, 1, 0.32, 1]
                        }}
                      >
                        <motion.div 
                          className="text-xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
                          animate={{ 
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                          style={{
                            backgroundSize: '200% 200%'
                          }}
                        >
                          {roles[currentRole]}
                        </motion.div>
                        
                        {/* Scan line effect */}
                        <motion.div 
                          className="absolute inset-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                          animate={{ 
                            top: ['0%', '100%']
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60" />
                  </div>
                </div>
              </div>

              {/* Static Labels on Circle */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-navy-900/80 backdrop-blur-sm border border-cyan-500/40 px-4 py-2 rounded-lg text-sm text-cyan-400 font-mono shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Computer Vision
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
                AI/ML
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}