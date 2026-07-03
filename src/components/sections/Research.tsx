import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { ChevronDown } from 'lucide-react';

type Contribution = {
  label: string;
  subtitle: string;
  metric: { value: string; label: string };
  description: string;
  findings: string[];
};

type ResearchItem = {
  title: string;
  affiliation: string;
  period: string;
  status: string;
  statusColor: 'cyan' | 'purple';
  badge: string;
  contributions: Contribution[];
  tech: string[];
};

const researchData: ResearchItem[] = [
  {
    title:
      'An Agentic Generative AI Framework for Industrial Predictive Maintenance: Physics-Aware Anomaly Detection with Multimodal RAG',
    affiliation: 'IEEE IES Research',
    period: 'Jan 2026 – Apr 2026',
    status: 'Completed',
    statusColor: 'cyan',
    badge: 'IEEE Conference, Melbourne',
    contributions: [
      {
        label: 'Anomaly Detection Engine',
        subtitle: 'Per-asset dual-architecture autoencoders',
        metric: { value: '90.15%', label: 'Detection precision' },
        description:
          'Per-machine Dense and LSTM autoencoders trained exclusively on nominal sensor data. A physics-aware hybrid confidence layer fuses reconstruction error with manufacturer-specified operational constraints, temporal trend reinforcement, and EMI spike suppression — reducing false positives to 3.35% FPR versus 12–15% for SCADA baselines.',
        findings: [
          'Dense Autoencoder (5→32→16→32→5) for point anomaly detection via MSE reconstruction',
          'LSTM Autoencoder (64-unit, 10×5 windows) for temporal drift characterisation',
          '183× MSE separation ratio between nominal and fault states confirms robust latent-space discriminability',
          '3.35% FPR — outperforming SCADA rule-based thresholds by 4× on the same sensor suite',
        ],
      },
      {
        label: '6-Node LangGraph Pipeline',
        subtitle: 'Multi-agent diagnostic reasoning DAG',
        metric: { value: '~6.8 s', label: 'Fault-to-procedure' },
        description:
          'A six-node LangGraph DAG with shared immutable state for full audit traceability. Sensor Analyst, AI Validation Engineer, Diagnostic Classifier, Knowledge Retriever, Execution Strategist, and Safety Critic operate sequentially — with a bounded two-retry refinement loop enforcing LOTO/PPE compliance before any procedure is surfaced to the operator.',
        findings: [
          'Neuro-symbolic validation integrates autoencoder scores, physics constraints, and LLM classification',
          'Safety Critic enforces LOTO/PPE compliance with deterministic fail-safe posture on exhaustion',
          '300× faster fault-to-procedure resolution versus 35-minute manual diagnostic baseline',
          'F1 > 0.71 across four heterogeneous asset types with only per-asset threshold recalibration',
        ],
      },
      {
        label: 'Multimodal RAG Engine',
        subtitle: 'GPT-4o Vision captioning + pgvector',
        metric: { value: '1536-dim', label: 'Unified embed space' },
        description:
          'Document ingestion through four stages: YOLOv8/DocLayNet layout detection → GPT-4o Vision captioning of engineering schematics into domain prose → 500-token sliding-window chunking → indexing into PostgreSQL/pgvector. A unified 1536-dimensional embedding space enables cross-modal retrieval of text, tables, and diagrams without auxiliary visual indices.',
        findings: [
          'V4 pipeline: GPT-4o + Voronoi tessellation + Mobile SAM for agentic figure decomposition',
          'Dual-source retrieval: text/table chunks (top-3), image captions (top-3), historical resolutions (top-2)',
          'Five retrieval modes: SUMMARY, WIZARD, CLARIFICATION, EVALUATION, PROCEDURE',
          'Iterative V1→V4 evolution driven by observed production retrieval failures',
        ],
      },
      {
        label: 'Institutional Intelligence',
        subtitle: '5-gate quality pipeline for org memory',
        metric: { value: 'HITL', label: 'Continuous learning' },
        description:
          'Resolved incidents traverse a five-gate quality pipeline before archival: Safety Critic approval → per-step AI verification → operator resolution confirmation → GPT-4o summarisation → vectorisation into pgvector interaction memory. Operator field expertise is captured into queryable organisational memory without model retraining.',
        findings: [
          'Bidirectional institutional learning validated via centrifugal pump impeller clearance experiment',
          'Operator-validated resolutions surface automatically alongside manufacturer manuals on recurrence',
          'Five quality gates prevent low-confidence or unresolved incidents from contaminating org memory',
          'Continuous improvement without model fine-tuning or retraining cycles',
        ],
      },
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'TensorFlow/Keras', 'OpenAI GPT-4o', 'PostgreSQL', 'pgvector', 'YOLOv8', 'Mobile SAM', 'Docker'],
  },
  {
    title:
      'A Multi-Agent AI Framework for Real-Time Flood Disaster Response Using Satellite Imagery and Geospatial Analysis',
    affiliation: 'ZYNAPTRIX Team Research',
    period: 'Apr 2026 – Present',
    status: 'In Progress',
    statusColor: 'purple',
    badge: 'Abstract accepted — iPURSE 2026',
    contributions: [
      {
        label: 'Multi-Agent Orchestration',
        subtitle: 'CrewAI + Llama 3.2 reasoning backbone',
        metric: { value: '4', label: 'Specialised agents' },
        description:
          'Four specialised agents orchestrated through CrewAI with a Llama 3.2 reasoning backbone, collectively performing 14 integrated response functions. Transforms fragmented GIS workflows into a unified, minutes-long autonomous operation accessible to non-expert first responders through a single natural-language interaction.',
        findings: [
          'Hazard detection agent: satellite damage classification and GeoJSON polygon generation',
          'Live-data agent: Open-Meteo precipitation → flood polygons → OSM road intersection via GeoPandas',
          'Routing agent: optimal hazard-avoidant evacuation paths via NetworkX shortest-path algorithms',
          'Complete flood situational reports produced end-to-end in under 60 seconds',
        ],
      },
      {
        label: 'Vision–Language Model',
        subtitle: 'Qwen2-VL-7B fine-tuned via LoRA',
        metric: { value: '<5 s', label: 'Damage GeoJSON' },
        description:
          'Qwen2-VL-7B vision–language model fine-tuned via Low-Rank Adaptation on AMD Instinct MI300X GPU for satellite image damage classification. Generates damage-zone GeoJSON polygons from satellite captures in under five seconds per image — enabling precise, real-time flood extent mapping integrated directly into the multi-agent pipeline.',
        findings: [
          'LoRA fine-tuning on AMD Instinct MI300X GPU for compute-efficient domain adaptation',
          'Satellite image damage classification with GeoJSON polygon output in under 5 seconds',
          'Damage zones fed directly into GeoPandas for spatial road network impact assessment',
          'Caption-style outputs enable seamless integration with downstream text-based agents',
        ],
      },
      {
        label: 'Geospatial Analytics',
        subtitle: 'GeoPandas + OpenStreetMap + NetworkX',
        metric: { value: '<60 s', label: 'Situational report' },
        description:
          'Live hourly precipitation from Open-Meteo API is converted into flood polygons and spatially intersected with OpenStreetMap road networks via GeoPandas to identify blocked segments. NetworkX computes topologically valid evacuation routes around dynamically computed flood zones, served through FastAPI to a Folium-powered Streamlit interface.',
        findings: [
          'Real-time flood polygon generation from hourly Open-Meteo API precipitation data',
          'Spatial intersection of flood zones with OSM networks to identify blocked road segments',
          'Offline-resilient mapping: road graphs cached, exported as self-contained HTML maps',
          'Multi-layer Folium map visualisation with damage, flood, and evacuation route overlays',
        ],
      },
      {
        label: 'Emergency Response Modules',
        subtitle: '14 integrated response functions',
        metric: { value: '14', label: 'Response functions' },
        description:
          'Beyond core analytics, supplementary modules deliver early warning alerts from precipitation thresholds, seven-day predictive flood forecasting, emergency shelter and supply-point localisation via Overpass API, crowd-sourced geotagged incident reporting, missing-person tracking, emergency SOS dispatching, and offline-resilient HTML map export for connectivity-degraded environments.',
        findings: [
          'Early warning system with configurable precipitation threshold alerting',
          '7-day predictive flood forecasting for proactive emergency resource pre-positioning',
          'Crowd-sourced geotagged incident reporting and missing-person tracking modules',
          'Emergency SOS dispatch and offline HTML map export for degraded connectivity environments',
        ],
      },
    ],
    tech: ['Python', 'CrewAI', 'Llama 3.2', 'Qwen2-VL-7B', 'LoRA', 'FastAPI', 'Streamlit', 'Folium', 'GeoPandas', 'NetworkX', 'Open-Meteo API', 'Docker'],
  },
  {
    title: 'AI-Driven Real-Time Packaging Defect Detection & PLC-Integrated Reject System',
    affiliation: 'University of Kelaniya Research',
    period: '2025 – Present',
    status: 'In Progress',
    statusColor: 'purple',
    badge: 'Tea-industry quality-control automation',
    contributions: [
      {
        label: 'Defect Detection Pipeline',
        subtitle: 'YOLOv8 + Golden-Reference comparison',
        metric: { value: '>95%', label: 'Target accuracy' },
        description:
          'YOLOv8/CNN detectors handle structural defects while a Golden-Reference comparison pipeline with ΔE colour checks and Tesseract OCR handles design-dependent defects including batch codes and label misprints. Custom multi-SKU dataset built across coaxial, bar, and backlight lighting setups with a full augmentation pipeline.',
        findings: [
          '7+ defect classes: seal gaps, tears, pinholes, misprints, label misalignment, trapped air, contamination',
          'Golden-Reference ΔE colour checks for print quality and label alignment verification',
          'Tesseract OCR for batch code and label text extraction and validation at production speed',
          'Roboflow augmentation pipeline: rotation, blur, brightness, and synthetic defect injection',
        ],
      },
      {
        label: 'Real-Time Inference',
        subtitle: 'TensorRT optimisation + pruning',
        metric: { value: 'Real-time', label: 'Production speed' },
        description:
          'Optimising inference for real-time conveyor-line deployment through model pruning, INT8/FP16 quantisation, and TensorRT acceleration. Targeting production-speed throughput with >95% defect-detection accuracy and low false-reject rates. PLC integration triggers automated physical rejection of detected defective packages.',
        findings: [
          'TensorRT acceleration for GPU-optimised inference at production line throughput',
          'INT8/FP16 quantisation and model pruning to reduce latency without accuracy degradation',
          'Barcode/QR-driven Golden-Reference loading for automatic multi-SKU variant switching',
          'PLC integration for automated physical rejection with zero operator intervention',
        ],
      },
      {
        label: 'Quality Traceability',
        subtitle: 'Real-time dashboard + database backend',
        metric: { value: 'Multi-SKU', label: 'Product coverage' },
        description:
          'Real-time traceability dashboard capturing timestamp, defect type, confidence score, and annotated image overlay per detected defect. PostgreSQL/SQLite backend enables historical defect rate analysis and quality assurance reporting. Dynamic product variant switching via barcode/QR scan at line changeover.',
        findings: [
          'Per-defect traceability: timestamp, type, confidence score, and annotated image overlay',
          'Historical defect rate analytics for QA reporting and trend identification',
          'Dynamic variant switching via barcode/QR scan at production changeover — zero reconfiguration',
          'Real-time floor dashboard with alerting for defect rate threshold breaches',
        ],
      },
    ],
    tech: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'Tesseract OCR', 'TensorRT', 'PostgreSQL', 'FastAPI', 'Roboflow', 'LabelImg'],
  },
];

function ResearchPanel({ item, defaultOpen }: { item: ResearchItem; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(!!defaultOpen);
  const [active, setActive] = useState(0);
  const c = item.contributions[active];

  return (
    <div
      className={`border rounded-2xl overflow-hidden mb-3 transition-colors ${
        isOpen ? 'border-navy-600' : 'border-navy-700 hover:border-navy-600'
      }`}
    >
      {/* Header */}
      <button
        className="w-full px-5 py-5 bg-navy-800/40 hover:bg-navy-800/60 transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`px-3 py-1 text-[10px] font-mono border rounded-lg tracking-wide ${
                  item.statusColor === 'cyan'
                    ? 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10'
                    : 'text-purple-400 border-purple-400/30 bg-purple-400/10'
                }`}
              >
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle ${
                    item.statusColor === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400 animate-pulse'
                  }`}
                />
                {item.status}
              </span>
              <span className="px-3 py-1 text-[10px] font-mono text-slate-500 border border-navy-700 rounded-lg bg-navy-900/50 tracking-wide">
                {item.badge}
              </span>
              <span className="text-[11px] font-mono text-slate-600">{item.period}</span>
            </div>
            <p className="text-[15px] font-semibold text-slate-100 leading-snug max-w-3xl">
              {item.title}
            </p>
            <p className="text-[11px] font-mono text-cyan-400/70 mt-1">{item.affiliation}</p>
          </div>
          <div
            className={`w-8 h-8 rounded-lg border border-navy-700 bg-navy-900/60 flex items-center justify-center shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="border-t border-navy-700 p-4 bg-navy-900/40">
          <div className="grid md:grid-cols-[220px_1fr] gap-3">
            {/* Left: contribution tabs */}
            <div className="border border-navy-700 rounded-2xl overflow-hidden">
              {item.contributions.map((cn, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3.5 border-b border-navy-800 last:border-b-0 transition-all ${
                    i === active ? 'bg-navy-800' : 'hover:bg-navy-800/50'
                  }`}
                >
                  {i === active ? (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  ) : (
                    <span className="text-[11px] font-mono text-slate-600 w-4 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  )}
                  <span
                    className={`text-[12.5px] font-medium leading-snug ${
                      i === active ? 'text-slate-100' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {cn.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: detail panel */}
            <div className="border border-navy-700 rounded-2xl overflow-hidden">
              {/* Detail header */}
              <div className="px-5 py-4 border-b border-navy-700 bg-navy-800/50">
                <p className="text-[10px] font-mono text-slate-600 tracking-[0.2em] uppercase mb-2">
                  Contribution {active + 1} of {item.contributions.length}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[17px] font-bold text-white leading-snug">{c.label}</h3>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">{c.subtitle}</p>
                  </div>
                  <div className="shrink-0 border border-navy-700 rounded-xl px-3 py-2.5 bg-navy-900 text-right min-w-[90px]">
                    <p className="text-[18px] font-black text-cyan-400 leading-none font-mono">{c.metric.value}</p>
                    <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest mt-1 leading-snug">{c.metric.label}</p>
                  </div>
                </div>
              </div>

              {/* Detail body */}
              <div className="px-5 py-4 space-y-5 bg-navy-900/60">
                <p className="text-[13px] text-slate-400 leading-[1.85]">{c.description}</p>
                <div>
                  <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em] mb-3">
                    Key Contributions &amp; Findings
                  </p>
                  <ul className="space-y-2">
                    {c.findings.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[12.5px] text-slate-400 leading-relaxed">
                        <svg className="w-3.5 h-3.5 text-cyan-400/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 16 16">
                          <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em] mb-2.5">
                    Technologies &amp; Methods
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono text-slate-500 border border-navy-700 rounded-lg bg-navy-800/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Research() {
  return (
    <Section id="research" title="Research">
      <div>
        {researchData.map((item, i) => (
          <ResearchPanel key={i} item={item} defaultOpen={i === 0} />
        ))}
      </div>
    </Section>
  );
}
