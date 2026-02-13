import React, { memo, Component, useState, useEffect } from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Github, ExternalLink, Folder, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
   {
    title: 'MindPath – AI Depression Support Platform 🧠💙',
    description: 'MindPath is an AI-powered mental wellness platform that helps users manage mental health through journaling, mood tracking, habit building, insights dashboards, and an empathetic virtual assistant (Sela). It uses RAG-based memory (pgvector) for personalized support, detects crisis/self-harm intent with automatic safe-response flow, and features analytics, reminders, and customizable user settings. Keywords: AI Wellness, Depression Support, LLM Chatbot, Virtual Assistant, RAG, Vector Memory, Semantic Search, pgvector, Embeddings, Personalized Recommendations, Mood Analytics, Habit Tracking, Smart Journaling, Thought Reframing, Safety Guardrails, Crisis Detection, Email Notifications, OIDC/OAuth2, JWT, Prompt Engineering, Multimodal AI, Face Landmarking, TTS/STT, WebSockets.',
    tech: [
      'React (Vite)', 'TypeScript', 'TailwindCSS', 'React Router', 'Recharts', 'Lucide React', 'zod', 'clsx',
      'FastAPI', 'Uvicorn', 'PostgreSQL', 'pgvector', 'SQLAlchemy', 'Alembic', 'Pydantic', 'OpenAI API', 'python-jose', 'httpx/requests',
      'Docker', 'Postman', 'Asgardeo', 'OIDC/OAuth2'
    ],
    links: {
      github: 'https://github.com/supunabeywickrama/mindpath-ai',
      demo: ''
    }
  },
  {
    title: 'RehabX – Finger Runner',
    description: 'Webcam-based rehabilitation game using real-time hand tracking to convert finger movements into gameplay. Features per-finger calibration (0%-100%), gesture smoothing, adaptive jump physics, performance logging, and gamified feedback (combo scoring, achievements). Keywords: Hand Gesture Recognition, Finger Tracking, Rehabilitation Gaming, Computer Vision, HCI, Gamified Therapy, Real-Time Motion Tracking.',
    tech: [
      'Python', 'MediaPipe Hands', 'OpenCV', 'Pygame', 'NumPy', 'JSON', 'CSV'
    ],
    links: {
      github: 'https://github.com/supunabeywickrama/Full-Body-Estimation-using-Media-Pipe-Holistic',
      demo: ''
    }
  },
  {
    title: 'Arm Ability Tracker (MediaPipe Holistic)',
    description: 'Real-time computer vision system for tracking arm range of motion (ROM), finger dexterity, 3D joint angles via webcam. Features interactive calibration (wizard/manual) for joints, live angle measurement, rehab targets, CSV logging, video recording with overlays, and all-local processing for privacy and low-latency in clinical settings. Keywords: Arm ROM Tracking, Joint Angle Estimation, Finger Dexterity Analysis, Computer Vision Rehabilitation, MediaPipe Holistic, Biomechanics, Gesture Tracking, Clinical Calibration.',
    tech: [
      'Python', 'MediaPipe Holistic', 'OpenCV', 'NumPy', 'JSON', 'CSV'
    ],
    links: {
      github: 'https://github.com/supunabeywickrama/Arm-Ability-Tracker-MediaPipe-Holistic-',
      demo: ''
    }
  }, 
  {
  title: 'Advanced Crowd Detection using SAHI-Enhanced YOLOv12',
  description: 'Developed a high-accuracy crowd detection and counting system by integrating YOLOv12 with SAHI slicing to improve small-person detection in dense scenes. Achieved better recall and robustness on high-resolution images and videos for surveillance and crowd analytics applications.',
  tech: ['Python', 'YOLOv12', 'SAHI', 'Computer Vision', 'PyTorch', 'OpenCV'],
  links: {
    github: 'https://github.com/supunabeywickrama/Advanced-Crowd-Detection-using-SAHI-Enhanced-YOLOv12',
    demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_computervision-yolov12-ultralytics-activity-7408493714505076736-cE83?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi98joBQA_8qLK6GmUJUbynIYQWUJGBcn4'
  }
}, 
  {
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(projects.length / cardsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Section id="projects" title="Featured Projects">
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-navy-800/80 hover:bg-navy-700 text-cyan-400 p-2 md:p-3 rounded-full transition-colors shadow-lg"
          aria-label="Previous projects"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-navy-800/80 hover:bg-navy-700 text-cyan-400 p-2 md:p-3 rounded-full transition-colors shadow-lg"
          aria-label="Next projects"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                  {projects
                    .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                    .map((project, index) => (
                      <Card key={index} hoverEffect className="flex flex-col h-full">
                        <div className="p-6 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-navy-900 rounded-lg text-cyan-400">
                              <Folder className="h-6 w-6" />
                            </div>
                            <div className="flex gap-3">
                              <a 
                                href={project.links.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-slate-400 hover:text-cyan-400 transition-colors" 
                                aria-label="GitHub"
                              >
                                <Github className="h-5 w-5" />
                              </a>
                              <a 
                                href={project.links.demo} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-slate-400 hover:text-cyan-400 transition-colors" 
                                aria-label="Live Demo"
                              >
                                <ExternalLink className="h-5 w-5" />
                              </a>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-slate-400 mb-4 flex-grow leading-relaxed text-sm">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map(t => (
                              <span key={t} className="text-xs font-mono text-cyan-400/80 bg-cyan-400/10 px-2 py-1 rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-cyan-400 w-8' 
                  : 'bg-slate-600 hover:bg-slate-500 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
