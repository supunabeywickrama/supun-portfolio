import React, { memo, Component, useState } from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Github, ExternalLink, Folder } from 'lucide-react';
const projects = [{
  title: 'Advanced Crowd Detection using SAHI-Enhanced YOLOv12',
  description: 'Developed a high-accuracy crowd detection and counting system by integrating YOLOv12 with SAHI slicing to improve small-person detection in dense scenes. Achieved better recall and robustness on high-resolution images and videos for surveillance and crowd analytics applications.',
  tech: ['Python', 'YOLOv12', 'SAHI', 'Computer Vision', 'PyTorch', 'OpenCV'],
  links: {
    github: 'https://github.com/supunabeywickrama/Advanced-Crowd-Detection-using-SAHI-Enhanced-YOLOv12',
    demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_computervision-yolov12-ultralytics-activity-7408493714505076736-cE83?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi98joBQA_8qLK6GmUJUbynIYQWUJGBcn4'
  }
}, {
  title: 'Multi-Image Component Matching using OpenCV & Python',
  description: 'Developed a computer vision system for detecting and matching electronic components across multiple images using feature-based image matching techniques. The project implements Brute Force, KNN, and FLANN matching with SIFT features to automatically identify unique components and build a registry indicating their presence across images. Designed as a foundation for electronics automation, component analysis, and future machine-learning integration.',
  tech: ['Python', 'OpenCV', 'SIFT', 'FLANN', 'KNN', 'Computer Vision'],
  links: {
    github: 'https://github.com/supunabeywickrama/feature-matching-Image-Processing',
    demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_python-opencv-computervision-activity-7364751397751353346-6E22?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi98joBQA_8qLK6GmUJUbynIYQWUJGBcn4'
  }
}, {
  title: 'RoomSync – Smart Energy Audit',
  description: 'IoT-based real-time energy monitoring system featuring ESP32-based hardware with custom PCB, Flutter app, web dashboard, and Firebase cloud integration.',
  tech: ['ESP32', 'IoT', 'Flutter', 'Firebase', 'C++', 'PCB Design'],
  links: {
    github: 'https://github.com/supunabeywickrama/LYCAN_ROOMSYNK',
    demo: 'https://cjayahansa.github.io/lycanroomsynk/'
  }
}, {
  title: 'AI-Powered Boxing Analytics',
  description: 'Computer vision system for punch detection and athlete performance analysis. Includes punch classification, pose estimation, and cinematic visual overlays.',
  tech: ['OpenCV', 'MediaPipe', 'YOLOv8', 'TensorFlow Lite', 'Python'],
  links: {
    github: 'https://github.com/supunabeywickrama/Boxing-Analytics',
    demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_artificialintelligence-computervision-yolov8-activity-7385019213758939136-G6Df?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPDwK8BxFxgI-AaiXfSG3fcJMiuRQMQ_qo'
  }
}, {
  title: 'Tiny Thinking Machine',
  description: 'ReAct-based AI agent with tool calling and vector memory. Capable of PDF knowledge ingestion and semantic search for intelligent document querying.',
  tech: ['Python', 'FastAPI', 'Streamlit', 'LangChain', 'FAISS', 'LLMs'],
  links: {
    github: 'https://github.com/supunabeywickrama/Tiny-Thinking-Machine',
    demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_ai-machinelearning-react-activity-7383479181239750656-Y3X_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPDwK8BxFxgI-AaiXfSG3fcJMiuRQMQ_qo'
  }
}, {
  title: 'VoCleanse',
  description: 'Designed and deployed an AI-driven audio/video censorship system using Faster-Whisper (Transformer ASR) and NLP-based word matching to selectively mute unwanted speech with millisecond accuracy and interactive human-in-the-loop review.',
  tech: ['Python', 'Faster-Whisper', 'Transformer', 'ASR', 'NLP', 'Audio Processing'],
  links: {
    github: 'https://github.com/supunabeywickrama/smart-mute-pro',
    demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_ai-machinelearning-audioprocessing-activity-7391793286778126336-9dOw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi98joBQA_8qLK6GmUJUbynIYQWUJGBcn4'
  }
}, {
  title: 'AI-Based License Plate Recognition & Vehicle Analytics System',
  description: 'Developed a real-time computer vision system for vehicle detection, license plate recognition, and traffic flow analysis using YOLO and OCR. The system performs privacy-preserving plate blurring, persistent plate tracking per vehicle, and virtual line-based inbound/outbound counting, with automated data export and visual analytics overlays.',
  tech: ['Python', 'YOLO', 'OCR', 'Computer Vision', 'OpenCV', 'TensorFlow'],
  links: {
    github: 'https://github.com/supunabeywickrama/OCR_01',
    demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_computervision-yolov8-opencv-activity-7390282255555809281-0zuD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi98joBQA_8qLK6GmUJUbynIYQWUJGBcn4'
  }
}, {
  title: 'Real-Time 3D Facial Landmark Mapping & AR Expression Recognition',
  description: 'Developed an AI-driven computer vision system that performs real-time facial landmark detection, 2D-to-3D mapping, and expression recognition. The project integrates head pose estimation, blink/smile/mouth-open detection using geometric ratios, and dynamic AR overlays aligned with facial motion. Implemented using Python, OpenCV, and MediaPipe, with 3D landmark export for Blender-based visualization and future avatar animation applications.',
  tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'AR', '3D Mapping'],
  links: {
    github: 'https://github.com/supunabeywickrama/Face_mesh_3D_0',
    demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_ai-computervision-faciallandmarkdetection-activity-7381924718272143360-ktR8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi98joBQA_8qLK6GmUJUbynIYQWUJGBcn4'
  }
}];
export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayedProjects.map((project, index) => <Card key={index} hoverEffect className="flex flex-col h-full">
            <div className="p-4 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-navy-900 rounded-lg text-cyan-400">
                  <Folder className="h-5 w-5" />
                </div>
                <div className="flex gap-2">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Live Demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => <span key={t} className="text-xs font-mono text-cyan-400/80">
                    {t}
                  </span>)}
              </div>
            </div>
          </Card>)}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
          >
            {showAll ? 'Show Less' : `Show More Projects (${projects.length - 3})`}
          </Button>
        </div>
      )}
    </Section>;
}