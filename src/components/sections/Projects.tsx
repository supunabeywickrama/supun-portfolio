import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    shortTitle: 'Smart Component Identifier',
    title: 'Smart Electronic Component Identifier',
    period: 'Dec 2025 – Present',
    description:
      'Mobile-first AI system that visually analyses circuit boards and classifies 22 electronic component classes from a single capture. Trained a custom YOLOv8 detector for component localisation, then routed crops to a multimodal pipeline using GPT-4o Vision for resistor colour-band decoding and Tesseract OCR for IC part-number extraction. Improved detection robustness with ORB feature matching for multi-angle image deduplication; added on-device blur/brightness validation in the Flutter UI to reject low-quality captures.',
    tech: ['Python', 'FastAPI', 'YOLOv8', 'PyTorch', 'GPT-4o Vision', 'Tesseract OCR', 'Flutter (Dart)', 'Label Studio'],
    links: { github: 'https://github.com/supunabeywickrama/circuit_detector_app', demo: '' },
  },
  {
    shortTitle: 'MindPath – AI Wellness Platform',
    title: 'MindPath — AI Depression Support Platform',
    period: 'Feb 2026',
    description:
      'AI-powered mental wellness platform with journaling, mood/habit tracking, insights dashboards, and an empathetic virtual assistant (Sela). Implemented RAG-based personalised memory using pgvector embeddings so the assistant recalls past context across sessions. Built crisis-detection safety guardrails with automatic safe-response flows, scheduled email check-ins, and OIDC/OAuth2 authentication.',
    tech: ['React + Vite', 'TypeScript', 'TailwindCSS', 'FastAPI', 'PostgreSQL', 'pgvector', 'SQLAlchemy', 'OpenAI API', 'Docker', 'OIDC/OAuth2'],
    links: { github: 'https://github.com/supunabeywickrama/mindpath-ai', demo: '' },
  },
  {
    shortTitle: 'AI Customer Support (n8n)',
    title: 'AI Customer Support Automation Platform',
    period: 'Feb 2026',
    description:
      'End-to-end customer-support automation pipeline orchestrated in n8n that classifies intent, retrieves knowledge via RAG, and generates context-aware responses. Integrated ticket management, customer-history awareness, sentiment analysis, and a feedback loop for continuous quality improvement.',
    tech: ['n8n', 'OpenAI API', 'Qdrant', 'PostgreSQL', 'Docker', 'JavaScript'],
    links: { github: 'https://github.com/supunabeywickrama/AI-Customer-Support-Automation-Platform-n8n', demo: '' },
  },
  {
    shortTitle: 'Advanced Crowd Detection',
    title: 'Advanced Crowd Detection using SAHI-Enhanced YOLOv12',
    period: '2024',
    description:
      'High-accuracy crowd detection and counting system integrating YOLOv12 with SAHI slicing to improve small-person detection in dense scenes. Achieves better recall and robustness on high-resolution images and videos for surveillance and crowd analytics applications.',
    tech: ['Python', 'YOLOv12', 'SAHI', 'PyTorch', 'OpenCV'],
    links: {
      github: 'https://github.com/supunabeywickrama/Advanced-Crowd-Detection-using-SAHI-Enhanced-YOLOv12',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_computervision-yolov12-ultralytics-activity-7408493714505076736-cE83',
    },
  },
  {
    shortTitle: 'AI-Powered Boxing Analytics',
    title: 'AI-Powered Boxing Analytics',
    period: '2024',
    description:
      'Computer vision system for punch detection and athlete performance analysis. Integrates YOLOv8 object detection with MediaPipe pose estimation to classify punch types, measure reaction time, and generate per-round performance reports with cinematic visual overlays.',
    tech: ['Python', 'YOLOv8', 'MediaPipe', 'OpenCV', 'TensorFlow Lite'],
    links: {
      github: 'https://github.com/supunabeywickrama/Boxing-Analytics',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_artificialintelligence-computervision-yolov8-activity-7385019213758939136-G6Df',
    },
  },
  {
    shortTitle: 'Tiny Thinking Machine',
    title: 'Tiny Thinking Machine — ReAct AI Agent',
    period: '2024',
    description:
      'ReAct-based AI agent with tool calling and FAISS vector memory. Ingests PDF documents, builds a semantic index, and answers complex queries through a chain-of-thought loop. Exposes a Streamlit UI backed by a FastAPI service for easy local deployment.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'LangChain', 'FAISS', 'OpenAI API'],
    links: {
      github: 'https://github.com/supunabeywickrama/Tiny-Thinking-Machine',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_ai-machinelearning-react-activity-7383479181239750656-Y3X_',
    },
  },
  {
    shortTitle: 'VoCleanse – Audio Censorship AI',
    title: 'VoCleanse — AI Audio/Video Censorship',
    period: '2024',
    description:
      'AI-driven censorship system using Faster-Whisper (Transformer ASR) and NLP-based word matching to selectively mute unwanted speech in video/audio files with millisecond accuracy. Features an interactive human-in-the-loop review step before applying changes.',
    tech: ['Python', 'Faster-Whisper', 'Transformer ASR', 'NLP', 'Audio Processing'],
    links: {
      github: 'https://github.com/supunabeywickrama/smart-mute-pro',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_ai-machinelearning-audioprocessing-activity-7391793286778126336-9dOw',
    },
  },
  {
    shortTitle: 'License Plate Recognition',
    title: 'AI-Based License Plate Recognition & Vehicle Analytics',
    period: '2024',
    description:
      'Real-time computer vision system for vehicle detection, license plate recognition, and traffic flow analysis. Performs privacy-preserving plate blurring, persistent plate tracking per vehicle, and virtual line-based inbound/outbound counting, with automated CSV export and visual analytics overlays.',
    tech: ['Python', 'YOLOv8', 'Tesseract OCR', 'OpenCV', 'TensorFlow'],
    links: {
      github: 'https://github.com/supunabeywickrama/OCR_01',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_computervision-yolov8-opencv-activity-7390282255555809281-0zuD',
    },
  },
  {
    shortTitle: 'RehabX – Finger Runner',
    title: 'RehabX — Finger-Controlled Rehabilitation Game',
    period: '2024',
    description:
      'Webcam-based rehabilitation game using real-time hand tracking to convert finger movements into gameplay. Features per-finger calibration (0%–100%), gesture smoothing, adaptive jump physics, performance logging, and gamified feedback (combo scoring, achievements).',
    tech: ['Python', 'MediaPipe Hands', 'OpenCV', 'Pygame', 'NumPy'],
    links: {
      github: 'https://github.com/supunabeywickrama/Full-Body-Estimation-using-Media-Pipe-Holistic',
      demo: '',
    },
  },
  {
    shortTitle: 'Arm Ability Tracker',
    title: 'Arm Ability Tracker (MediaPipe Holistic)',
    period: '2024',
    description:
      'Real-time computer vision system for tracking arm range of motion, finger dexterity, and 3D joint angles via webcam. Features interactive calibration (wizard/manual) for joints, live angle measurement, rehab targets, CSV logging, and video recording with overlays for clinical use.',
    tech: ['Python', 'MediaPipe Holistic', 'OpenCV', 'NumPy'],
    links: {
      github: 'https://github.com/supunabeywickrama/Arm-Ability-Tracker-MediaPipe-Holistic-',
      demo: '',
    },
  },
  {
    shortTitle: 'RoomSync – Energy Audit',
    title: 'RoomSync — Smart IoT Energy Audit System',
    period: 'Mar 2025 – Aug 2025',
    description:
      'IoT-based real-time energy monitoring system providing live readings of voltage, current, power, energy, temperature, humidity, and light levels. Designed a custom PCB and calibrated sensor array around the ESP32, backed by a Flutter mobile app and web dashboard with Firebase cloud integration.',
    tech: ['ESP32', 'Flutter/Dart', 'Firebase', 'C++', 'HTML/CSS/JS', 'Custom PCB'],
    links: {
      github: 'https://github.com/supunabeywickrama/LYCAN_ROOMSYNK',
      demo: 'https://cjayahansa.github.io/lycanroomsynk/',
    },
  },
  {
    shortTitle: '3D Facial Landmark & AR',
    title: 'Real-Time 3D Facial Landmark Mapping & AR Expression Recognition',
    period: '2024',
    description:
      'AI-driven computer vision system that performs real-time facial landmark detection, 2D-to-3D mapping, and expression recognition. Integrates head pose estimation, blink/smile/mouth-open detection using geometric ratios, and dynamic AR overlays aligned with facial motion. Exports 3D landmarks for Blender-based visualisation and future avatar animation.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'AR', '3D Mapping'],
    links: {
      github: 'https://github.com/supunabeywickrama/Face_mesh_3D_0',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_ai-computervision-faciallandmarkdetection-activity-7381924718272143360-ktR8',
    },
  },
];

export function Projects() {
  const [active, setActive] = useState(0);

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid lg:grid-cols-[260px_1fr] gap-4 lg:gap-6 items-start">
        {/* Left: project tab list */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1 pb-2 lg:pb-0 lg:max-h-[520px] lg:overflow-y-auto scrollbar-thin">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left px-4 py-2.5 rounded-md text-sm font-mono transition-all shrink-0 lg:shrink border-l-2 whitespace-nowrap lg:whitespace-normal ${
                i === active
                  ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                  : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-navy-800/60 hover:border-navy-600'
              }`}
            >
              <span className="text-cyan-500/40 mr-1.5 text-xs">
                {String(i + 1).padStart(2, '0')}.
              </span>
              {p.shortTitle}
            </button>
          ))}
        </div>

        {/* Right: project detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="bg-navy-800/30 border border-navy-700 rounded-lg p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-xs font-mono text-slate-500 mb-1">{projects[active].period}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                  {projects[active].title}
                </h3>
              </div>
              <div className="flex gap-3 shrink-0">
                {projects[active].links.github && (
                  <a
                    href={projects[active].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {projects[active].links.demo && (
                  <a
                    href={projects[active].links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    aria-label="Live Demo / Post"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base">
              {projects[active].description}
            </p>

            <div className="flex flex-wrap gap-2">
              {projects[active].tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-cyan-400/80 bg-cyan-400/10 border border-cyan-400/10 px-2.5 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
