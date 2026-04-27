import React from 'react';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { Brain, Eye, Cpu, Code, Cloud, Network } from 'lucide-react';
const skillCategories = [{
  title: 'ML / Deep Learning',
  icon: Brain,
  skills: ['PyTorch', 'TensorFlow/Keras', 'scikit-learn', 'Autoencoders', 'ONNX', 'TensorRT', 'NumPy', 'Pandas']
}, {
  title: 'LLM & Agentic AI',
  icon: Network,
  skills: ['LangChain', 'LangGraph', 'RAG', 'Multi-Agent Orchestration', 'Prompt Engineering', 'OpenAI API', 'Whisper', 'n8n']
}, {
  title: 'Computer Vision',
  icon: Eye,
  skills: ['OpenCV', 'YOLOv8/11/12', 'SAM', 'MediaPipe', 'SAHI', 'Real-ESRGAN', 'Tesseract OCR', 'Roboflow']
}, {
  title: 'Backend & MLOps',
  icon: Cloud,
  skills: ['FastAPI', 'Docker', 'PostgreSQL', 'pgvector', 'AWS', 'GitHub Actions', 'InfluxDB', 'Streamlit']
}, {
  title: 'Frontend & Mobile',
  icon: Code,
  skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Flutter (Dart)', 'Vite', 'HTML/CSS']
}, {
  title: 'Embedded & IoT',
  icon: Cpu,
  skills: ['ESP32', 'Raspberry Pi', 'Arduino', 'LoRa', 'Edge Impulse', 'ROS', 'PCB Design']
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