import React from 'react';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { Brain, Eye, Cpu, Code, Cloud } from 'lucide-react';
const skillCategories = [{
  title: 'AI & Machine Learning',
  icon: Brain,
  skills: ['YOLOv8', 'YOLOv11', 'DINOv3', 'Autoencoders', 'Whisper', 'MediaPipe', 'TensorFlow Lite', 'PyTorch']
}, {
  title: 'Computer Vision',
  icon: Eye,
  skills: ['Object Detection', 'Object Tracking', 'OCR', 'Video Processing', 'OpenCV', 'Real-ESRGAN']
}, {
  title: 'Embedded & IoT',
  icon: Cpu,
  skills: ['ESP32', 'Raspberry Pi', 'Arduino', 'LoRa', 'Edge Impulse', 'Sensors & Actuators', 'PCB Design']
}, {
  title: 'Programming',
  icon: Code,
  skills: ['Python', 'C/C++', 'MATLAB', 'Java', 'Dart', 'Flutter', 'HTML/CSS', 'SQL']
}, {
  title: 'Cloud & Tools',
  icon: Cloud,
  skills: ['AWS', 'Firebase', 'Linux', 'Git/GitHub', 'FastAPI', 'Streamlit', 'Docker', 'ONNX']
}];
export function Skills() {
  return <Section id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => <div key={index} className="bg-navy-800/30 border border-navy-700 p-6 rounded-lg hover:border-cyan-500/30 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-navy-900 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-200">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => <Badge key={skill} variant="accent">
                  {skill}
                </Badge>)}
            </div>
          </div>)}
      </div>
    </Section>;
}