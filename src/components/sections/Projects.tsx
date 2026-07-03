import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  num: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  features: string[];
  tech: string[];
  links: { github: string; demo: string };
};

const projects: Project[] = [
  {
    num: '01',
    title: 'Enterprise AI Operations Copilot',
    subtitle: 'Individual · Amazon Bedrock / GenAI',
    period: '2025',
    description:
      'Production-style GenAI system built end-to-end on Amazon Bedrock. An ops engineer asks one question and the system classifies intent, retrieves runbooks via RAG, queries metrics and past incidents, drafts a Teams message gated behind human approval — all screened through guardrails for prompt-injection and PII.',
    features: [
      'LangGraph multi-tool agent: intent routing, RAG retrieval, metric queries, Teams draft with human-in-the-loop approval',
      'Guardrails layer: prompt-injection detection + PII masking on all inputs and outputs',
      'Automated evaluation suite scoring intent, tool-selection, and retrieval quality — 58 tests on every CI push',
      'Full AWS architecture as Terraform IaC: S3 → EventBridge → Step Functions → Lambda/ECS → OpenSearch → Bedrock',
    ],
    tech: ['Python', 'FastAPI', 'Amazon Bedrock', 'LangGraph', 'ChromaDB', 'Terraform', 'Docker', 'GitHub Actions'],
    links: { github: 'https://github.com/supunabeywickrama/enterprise-ai-ops-copilot', demo: '' },
  },
  {
    num: '02',
    title: 'Smart Electronic Component Identifier',
    subtitle: 'Individual · Full-Stack Mobile AI',
    period: 'Dec 2025 – Present',
    description:
      'Mobile-first AI system that visually analyses circuit boards and classifies 22 electronic component classes from a single capture. Routes cropped detections to a multimodal pipeline: GPT-4o Vision for resistor colour-band decoding and Tesseract OCR for IC part-number extraction.',
    features: [
      '22 electronic component classes detected and localised from a single circuit board capture',
      'YOLOv8 detection → GPT-4o Vision for resistors → Tesseract OCR for IC part numbers',
      'ORB feature matching for multi-angle image deduplication across successive captures',
      'On-device blur/brightness validation in Flutter UI rejects low-quality captures before upload',
    ],
    tech: ['Python', 'FastAPI', 'YOLOv8', 'PyTorch', 'GPT-4o Vision', 'Tesseract OCR', 'Flutter (Dart)', 'Label Studio'],
    links: { github: 'https://github.com/supunabeywickrama/circuit_detector_app', demo: '' },
  },
  {
    num: '03',
    title: 'MindPath — AI Depression Support Platform',
    subtitle: 'Individual · Full-Stack RAG Application',
    period: 'Feb 2026',
    description:
      'AI-powered mental wellness platform with journaling, mood/habit tracking, insights dashboards, and an empathetic AI assistant (Sela). RAG-based personalised memory using pgvector keeps context across sessions while crisis-detection guardrails provide automatic safe-response flows.',
    features: [
      'RAG-based personalised memory with pgvector embeddings persisted across all sessions',
      'Crisis-detection safety guardrails with automatic safe-response escalation flows',
      'AI assistant Sela with mood tracking, journaling, habit building, and analytics dashboards',
      'Scheduled email check-ins and OIDC/OAuth2 authentication via Asgardeo',
    ],
    tech: ['React + Vite', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgvector', 'OpenAI API', 'SQLAlchemy', 'Docker'],
    links: { github: 'https://github.com/supunabeywickrama/mindpath-ai', demo: '' },
  },
  {
    num: '04',
    title: 'AI Customer Support Automation Platform',
    subtitle: 'Individual · Workflow-Orchestrated RAG',
    period: 'Feb 2026',
    description:
      'End-to-end customer-support automation pipeline orchestrated in n8n. Classifies intent, retrieves knowledge from a Qdrant vector store via RAG, and generates context-aware responses with customer-history awareness and sentiment analysis.',
    features: [
      'Intent classification routing queries to appropriate knowledge domains automatically',
      'RAG retrieval from Qdrant vector store with customer-history context awareness',
      'Sentiment analysis integrated into the pipeline for tone-aware response generation',
      'Feedback loop for continuous quality improvement with ticket management integration',
    ],
    tech: ['n8n', 'OpenAI API', 'Qdrant', 'PostgreSQL', 'Docker', 'JavaScript'],
    links: { github: 'https://github.com/supunabeywickrama/AI-Customer-Support-Automation-Platform-n8n', demo: '' },
  },
  {
    num: '05',
    title: 'Advanced Crowd Detection — SAHI + YOLOv12',
    subtitle: 'Individual · Computer Vision',
    period: '2024',
    description:
      'High-accuracy crowd detection and counting system combining YOLOv12 with SAHI sliced inference to dramatically improve small-person detection in high-resolution dense scenes — validated for surveillance and crowd analytics applications.',
    features: [
      'SAHI sliced inference for reliable small-person detection in high-density scenes',
      'YOLOv12 backbone with improved small-object recall over standard single-pass inference',
      'Works on high-resolution video input without memory overflow via adaptive tiling',
      'Applicable to safety monitoring, event management, and smart city crowd analytics',
    ],
    tech: ['Python', 'YOLOv12', 'SAHI', 'PyTorch', 'OpenCV'],
    links: {
      github: 'https://github.com/supunabeywickrama/Advanced-Crowd-Detection-using-SAHI-Enhanced-YOLOv12',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_computervision-yolov12-ultralytics-activity-7408493714505076736-cE83',
    },
  },
  {
    num: '06',
    title: 'AI-Powered Boxing Analytics',
    subtitle: 'Individual · Sports AI',
    period: '2024',
    description:
      'Computer vision system for real-time punch detection, classification, and athlete performance analysis. Integrates YOLOv8 object detection with MediaPipe pose estimation to produce per-round performance reports with cinematic visual overlays.',
    features: [
      'Punch type classification (jab, cross, hook, uppercut) via YOLOv8 detection',
      'MediaPipe pose estimation for athlete biomechanics and reaction-time measurement',
      'Per-round performance reports with speed, accuracy, and combo statistics',
      'Cinematic visual overlays for training review and coach feedback sessions',
    ],
    tech: ['Python', 'YOLOv8', 'MediaPipe', 'OpenCV', 'TensorFlow Lite'],
    links: {
      github: 'https://github.com/supunabeywickrama/Boxing-Analytics',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_artificialintelligence-computervision-yolov8-activity-7385019213758939136-G6Df',
    },
  },
  {
    num: '07',
    title: 'Tiny Thinking Machine — ReAct AI Agent',
    subtitle: 'Individual · Agentic AI',
    period: '2024',
    description:
      'ReAct-based AI agent with tool calling and FAISS vector memory. Ingests PDF documents, builds a semantic index, and answers complex multi-hop queries through a chain-of-thought reasoning loop, served via a Streamlit UI backed by FastAPI.',
    features: [
      'ReAct reasoning loop with FAISS semantic search over ingested PDF knowledge bases',
      'LangChain tool-calling architecture with visible chain-of-thought intermediate steps',
      'Streamlit UI backed by FastAPI for zero-configuration local deployment',
      'Handles multi-hop queries requiring document reasoning across multiple retrieved chunks',
    ],
    tech: ['Python', 'LangChain', 'FAISS', 'FastAPI', 'Streamlit', 'OpenAI API'],
    links: {
      github: 'https://github.com/supunabeywickrama/Tiny-Thinking-Machine',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_ai-machinelearning-react-activity-7383479181239750656-Y3X_',
    },
  },
  {
    num: '08',
    title: 'VoCleanse — AI Audio/Video Censorship',
    subtitle: 'Individual · Audio AI',
    period: '2024',
    description:
      'AI-driven audio/video censorship system using Faster-Whisper Transformer ASR for millisecond-accurate word-level timestamping and NLP-based pattern matching to selectively mute unwanted speech, with a human-in-the-loop review step.',
    features: [
      'Faster-Whisper ASR for millisecond-accurate word-level timestamp extraction',
      'Configurable NLP word-matching for profanity or custom phrase detection',
      'Human-in-the-loop review step before any changes are applied to source media',
      'Lossless output format preservation for both video and audio files',
    ],
    tech: ['Python', 'Faster-Whisper', 'Transformer ASR', 'NLP', 'Audio Processing'],
    links: {
      github: 'https://github.com/supunabeywickrama/smart-mute-pro',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_ai-machinelearning-audioprocessing-activity-7391793286778126336-9dOw',
    },
  },
  {
    num: '09',
    title: 'License Plate Recognition & Vehicle Analytics',
    subtitle: 'Individual · Computer Vision',
    period: '2024',
    description:
      'Real-time computer vision system for vehicle detection, license plate recognition, and traffic flow analysis. Performs privacy-preserving plate blurring, persistent plate tracking per vehicle, and virtual line-based inbound/outbound counting.',
    features: [
      'Real-time vehicle detection with persistent license plate tracking across frames',
      'Privacy-preserving automatic plate blurring with Tesseract OCR extraction',
      'Virtual line-based inbound/outbound vehicle counting for traffic flow analytics',
      'Automated CSV export of all detections with confidence scores and timestamps',
    ],
    tech: ['Python', 'YOLOv8', 'Tesseract OCR', 'OpenCV', 'TensorFlow'],
    links: {
      github: 'https://github.com/supunabeywickrama/OCR_01',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_computervision-yolov8-opencv-activity-7390282255555809281-0zuD',
    },
  },
  {
    num: '10',
    title: 'RehabX — Finger-Controlled Rehabilitation Game',
    subtitle: 'Individual · Rehabilitation Gaming',
    period: '2024',
    description:
      'Webcam-based rehabilitation game converting real-time finger movements detected by MediaPipe into gameplay. Features per-finger calibration, gesture smoothing, adaptive physics, and gamified performance feedback for clinical therapy use.',
    features: [
      'Per-finger 0%–100% calibration range for personalised movement sensitivity',
      'Gesture smoothing algorithm to eliminate jitter in clinical precision use',
      'Adaptive jump physics responding to finger movement speed and strength',
      'Combo scoring and achievement system for gamified patient motivation',
    ],
    tech: ['Python', 'MediaPipe Hands', 'OpenCV', 'Pygame', 'NumPy'],
    links: { github: 'https://github.com/supunabeywickrama/Full-Body-Estimation-using-Media-Pipe-Holistic', demo: '' },
  },
  {
    num: '11',
    title: 'RoomSync — Smart IoT Energy Audit',
    subtitle: 'Academic Group · IoT + Mobile',
    period: 'Mar 2025 – Aug 2025',
    description:
      'Smart IoT energy-audit system providing real-time monitoring of voltage, current, power, energy, temperature, humidity, and light levels. Built around a custom PCB and calibrated ESP32 sensor array with Flutter mobile app and Firebase backend.',
    features: [
      'Custom PCB design with calibrated multi-parameter sensor array around ESP32',
      'Real-time monitoring: voltage, current, power, energy, temperature, humidity, light',
      'Flutter mobile app with Firebase cloud sync and historical data visualisation',
      'Web dashboard for institutional energy audit reporting and anomaly alerts',
    ],
    tech: ['ESP32', 'Flutter/Dart', 'Firebase', 'C++', 'HTML/CSS/JS', 'Custom PCB'],
    links: { github: 'https://github.com/supunabeywickrama/LYCAN_ROOMSYNK', demo: 'https://cjayahansa.github.io/lycanroomsynk/' },
  },
  {
    num: '12',
    title: '3D Facial Landmark Mapping & AR Expressions',
    subtitle: 'Individual · Computer Vision / AR',
    period: '2024',
    description:
      'Real-time AI computer vision system performing 2D-to-3D facial landmark mapping, head pose estimation, and expression recognition with dynamic AR overlays. Exports 3D landmarks for Blender visualisation and avatar animation.',
    features: [
      'Real-time 2D-to-3D facial landmark mapping with head pose estimation',
      'Blink, smile, and mouth-open detection via geometric ratio thresholds',
      'Dynamic AR overlays aligned to facial motion with sub-frame latency',
      '3D landmark export compatible with Blender for avatar animation workflows',
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Blender'],
    links: {
      github: 'https://github.com/supunabeywickrama/Face_mesh_3D_0',
      demo: 'https://www.linkedin.com/posts/supun-tharaka-6bb8b5278_ai-computervision-faciallandmarkdetection-activity-7381924718272143360-ktR8',
    },
  },
];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const p = projects[activeIndex];

  const prev = () => setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setActiveIndex((i) => (i + 1) % projects.length);

  return (
    <Section id="projects" title="Selected Projects">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* Left: Blueprint image frame */}
        <div
          key={`img-${activeIndex}`}
          className="relative border border-navy-700 rounded-2xl overflow-hidden bg-navy-800/30 aspect-[4/3] flex items-center justify-center animate-fade-in group select-none"
        >
          {/* Counter badge */}
          <div className="absolute top-4 left-4 bg-cyan-400 text-navy-900 font-mono text-[10px] px-2.5 py-1 font-bold rounded tracking-wider z-20">
            {p.num} / {String(projects.length).padStart(2, '0')}
          </div>

          {/* Blueprint grid background */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,217,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,1) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          {/* Centre content */}
          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-navy-900/80 border border-navy-700 flex items-center justify-center mb-5 group-hover:border-cyan-500/40 transition-colors">
              <span className="text-3xl font-black font-mono text-cyan-400/40 group-hover:text-cyan-400/70 transition-colors">
                {p.num}
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-600 uppercase tracking-widest leading-relaxed max-w-[200px]">
              {p.subtitle}
            </p>
          </div>

          {/* Corner accents */}
          <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyan-500/20" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-cyan-500/20" />
        </div>

        {/* Right: Project details */}
        <div key={`details-${activeIndex}`} className="flex flex-col justify-center animate-fade-up">
          <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
            {p.subtitle}
          </span>
          <h3 className="text-[1.6rem] sm:text-[2rem] font-black text-white tracking-tight mt-2 leading-tight">
            {p.title}
          </h3>
          <div className="h-px bg-navy-700 my-4 w-10" />
          <p className="text-[14px] text-slate-400 leading-relaxed mb-5">{p.description}</p>

          <ul className="space-y-2 mb-5">
            {p.features.map((f, i) => (
              <li key={i} className="flex gap-2.5 text-[12.5px] text-slate-400 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 mt-2 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[10px] font-mono rounded-full border border-navy-700 bg-navy-800/50 text-slate-500 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              {p.links.demo && (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-400 text-navy-900 hover:bg-cyan-300 text-[11px] font-bold rounded-lg flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View
                </a>
              )}
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-navy-700 bg-navy-800/50 hover:border-navy-600 hover:bg-navy-800 text-slate-400 hover:text-white flex items-center justify-center rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 border border-navy-700 bg-navy-800/50 hover:border-navy-600 hover:bg-navy-800 text-slate-400 hover:text-white flex items-center justify-center rounded-lg transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 border border-navy-700 bg-navy-800/50 hover:border-navy-600 hover:bg-navy-800 text-slate-400 hover:text-white flex items-center justify-center rounded-lg transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
