import { Section } from '../ui/Section';
import { MapPin, Cpu, Brain, Eye } from 'lucide-react';
import profilePic from '../../assets/pic.png';

export function About() {
  return <Section id="about" title="About Me">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start flex-shrink-0 lg:w-1/3">
          <div className="relative group w-full max-w-sm lg:max-w-none h-full">
            <div className="relative w-full h-64 sm:h-80 lg:h-full rounded-lg overflow-hidden">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover object-top rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-cyan-400/10 mix-blend-multiply rounded-lg transition-opacity group-hover:opacity-0" />
              <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-lg translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 lg:w-2/3 space-y-6">
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              I am a 3rd-year{' '}
              <span className="text-white font-medium">
                BSc (Hons) Electronics and Computer Science
              </span>{' '}
              undergraduate at the University of Kelaniya, passionate about
              bridging the gap between hardware and intelligent software.
            </p>
            <p>
              My primary focus lies in{' '}
              <span className="text-cyan-400">Artificial Intelligence</span>,{' '}
              <span className="text-cyan-400">Machine Learning</span>, and{' '}
              <span className="text-cyan-400">Computer Vision</span>, specifically
              in deploying efficient models on edge devices. I have hands-on
              experience deploying YOLO models, autoencoders, MediaPipe, and
              Real-ESRGAN on resource-constrained hardware like{' '}
              <span className="text-white font-mono text-sm">ESP32</span> and{' '}
              <span className="text-white font-mono text-sm">Raspberry Pi</span>.
            </p>
            <p>
              I enjoy solving complex engineering problems by combining robust
              software architectures with real-world sensor data, creating
              automation systems that are both scalable and practical.
            </p>

            <div className="flex items-center gap-2 text-slate-300 pt-4">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>

          {/* Focus Areas - Below text, horizontally */}
          <div className="p-6 bg-navy-800/50 border border-navy-700 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-400" />
              Focus Areas
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Edge AI & ML Deployment
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Computer Vision Systems
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                IoT & Embedded Systems
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Real-time Automation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>;
}