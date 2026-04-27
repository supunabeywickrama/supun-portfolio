import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';

const research = [
  {
    title: 'Industrial Copilot — Agentic Generative AI for Predictive Maintenance',
    affiliation: 'IEEE IES Research',
    period: 'Jan 2026 – Apr 2026',
    status: 'Completed',
    statusColor: 'cyan' as const,
    badge: 'Paper accepted — IEEE Conference, Melbourne',
    contributions: [
      'Designed and built an enterprise-grade predictive-maintenance platform unifying autoencoder anomaly detection with LLM-driven multi-agent reasoning.',
      'Trained per-machine Dense/LSTM autoencoders on healthy sensor data, achieving 90.15% precision and a 3.35% false-positive rate.',
      'Built a 6-node LangGraph multi-agent pipeline (sensor analysis → safety-validated repair guidance) delivering fault-to-procedure resolution in ~6.8 s — 300× faster than manual lookup.',
      'Engineered a multimodal RAG engine using GPT-4o Vision captioning and pgvector for unified text/diagram/table retrieval from technical manuals.',
      'Implemented a human-in-the-loop guided repair wizard with per-step AI verification and an institutional-intelligence subsystem capturing operator know-how for continuous learning without retraining.',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'TensorFlow/Keras', 'OpenAI GPT-4o', 'Next.js', 'TypeScript', 'PostgreSQL', 'pgvector', 'InfluxDB', 'YOLOv8', 'Mobile SAM', 'Docker'],
    metrics: [
      { label: 'Detection Precision', value: '90.15%' },
      { label: 'False Positive Rate', value: '3.35%' },
      { label: 'Fault-to-Procedure Latency', value: '~6.8 s' },
      { label: 'Speed vs Manual', value: '300×' },
    ],
  },
  {
    title: 'AI-Driven Real-Time Packaging Defect Detection & PLC-Integrated Reject System',
    affiliation: 'University of Kelaniya Research',
    period: '2025 – Present',
    status: 'In Progress',
    statusColor: 'purple' as const,
    badge: 'Tea-industry quality-control automation',
    contributions: [
      'Developing a real-time conveyor-line inspection system that detects multiple tea-packaging defects — seal gaps, tears, pinholes, misprints, label misalignment, trapped air, and contamination — at production speed.',
      'Training YOLOv8/CNN detectors for structural defects and applying Golden-Reference comparison with ΔE colour checks and OCR for design-dependent defects (batch codes, labels).',
      'Built a custom dataset across multiple SKUs and lighting setups (coaxial, bar, backlight) with augmentation pipelines (rotation, blur, brightness, synthetic defects) using LabelImg and Roboflow.',
      'Optimising inference for real-time deployment via pruning, quantisation, and TensorRT; targeting >95% defect-detection accuracy with low false-reject rates.',
      'Designed a real-time dashboard and database backend for traceability (timestamp, defect type, confidence, image overlay) with barcode/QR-driven Golden-Reference loading per product variant.',
    ],
    tech: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'Tesseract OCR', 'TensorRT', 'PostgreSQL', 'FastAPI', 'Roboflow', 'LabelImg', 'SQLite'],
    metrics: [
      { label: 'Target Accuracy', value: '>95%' },
      { label: 'Defect Classes', value: '7+' },
      { label: 'Deployment', value: 'Real-time' },
      { label: 'Dataset', value: 'Multi-SKU' },
    ],
  },
];

export function Research() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Section id="research" title="Research">
      <div className="space-y-5">
        {research.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`rounded-lg border overflow-hidden transition-colors ${
              expanded === idx
                ? 'bg-navy-800/50 border-cyan-500/30'
                : 'bg-navy-800/20 border-navy-700 hover:border-navy-600'
            }`}
          >
            <button
              className="w-full text-left p-6"
              onClick={() => setExpanded(expanded === idx ? null : idx)}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                        item.statusColor === 'cyan'
                          ? 'text-cyan-400 border-cyan-400/40 bg-cyan-400/10'
                          : 'text-purple-400 border-purple-400/40 bg-purple-400/10'
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{item.period}</span>
                    {item.statusColor === 'cyan' && (
                      <span className="flex items-center gap-1 text-xs font-mono text-amber-400/80 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                        <FileText className="h-3 w-3" />
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cyan-400/80 font-mono">
                    {item.affiliation}
                    {item.statusColor === 'purple' && (
                      <span className="text-slate-500"> · {item.badge}</span>
                    )}
                  </p>
                </div>
                <div className="text-slate-500 shrink-0 mt-1">
                  {expanded === idx ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {expanded === idx && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-navy-700 pt-5 space-y-6">
                    {/* Key metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {item.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="bg-navy-900/60 border border-navy-700 rounded-lg p-3 text-center"
                        >
                          <p className="text-lg font-bold text-cyan-400 font-mono">{m.value}</p>
                          <p className="text-xs text-slate-500 mt-0.5 leading-tight">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Contributions */}
                    <ul className="space-y-2.5">
                      {item.contributions.map((point, i) => (
                        <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className="text-cyan-400 mt-0.5 shrink-0">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono text-cyan-400/80 bg-cyan-400/10 border border-cyan-400/10 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
